import { all, takeLatest } from "redux-saga/effects";
// import { postAddress } from "requests";
// import { addressNormalizer, IAddressNormalized } from "./normalizer";
import { createOrderActions } from "./slice";

function* createOrderRequestSaga() {
  try {
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
