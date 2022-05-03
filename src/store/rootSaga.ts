import { all, fork } from "redux-saga/effects";
import { modalSaga } from "redux/modal";

export default function* rootSaga() {
  yield all([fork(modalSaga)]);
}
