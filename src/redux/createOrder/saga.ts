import { all, call, select, takeLatest } from "redux-saga/effects";
import { addressStateSelector } from "redux/address/selectors";
import { getAddressInfo } from "requests";
import {
  createOrderDataNormalizer,
  ICreateOrderDataNormalized,
} from "./normalizer";
import { createOrderStateSelector } from "./selectors";
// import { postAddress } from "requests";
// import { addressNormalizer, IAddressNormalized } from "./normalizer";
import { createOrderActions, ICreateOrderStateType } from "./slice";
// import history from "store/history";
// import pageRoutes from "constants/pageRoutes";

function* createOrderRequestSaga() {
  // const isAuth: boolean = true;
  // history.push(pageRoutes.SIGNIN);

  try {
    const { lat, lon, address } = yield select(addressStateSelector);
    const createOrderState: ICreateOrderStateType = yield select(
      createOrderStateSelector
    );
    const { addressInfo } = yield call(() => getAddressInfo(lat, lon));
    const city: string = addressInfo.city || addressInfo.town;
    const createOrderData: ICreateOrderDataNormalized =
      createOrderDataNormalizer(createOrderState, address, city, lat, lon);

    console.log(createOrderData);
  } catch (error) {
    console.log(error);
  }
}

function* createOrderSaga() {
  yield all([
    takeLatest(createOrderActions.createOrderRequest, createOrderRequestSaga),
  ]);
}

export default createOrderSaga;
