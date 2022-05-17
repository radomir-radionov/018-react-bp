import { all, takeLatest } from "redux-saga/effects";
// import { postAddress } from "requests";
// import { addressNormalizer, IAddressNormalized } from "./normalizer";
import { createOrderActions } from "./slice";
import history from "store/history";
import pageRoutes from "constants/pageRoutes";

function* createOrderRequestSaga() {
  try {
    history.push(pageRoutes.SIGNIN);
    // const { data } = yield call(() => postAddress(value));
    // const normalizedData: IAddressNormalized[] = addressNormalizer(data);
    // yield put(addressActions.setAddresses({ data: normalizedData }));
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
