import { all, fork } from "redux-saga/effects";
import { modalSaga } from "redux/modal";
import { addressSaga } from "redux/address";
import { createOrderSaga } from "redux/createOrder";

export default function* rootSaga() {
  yield all([fork(modalSaga), fork(addressSaga), fork(createOrderSaga)]);
}
