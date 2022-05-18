import { all, call, takeLatest } from "redux-saga/effects";

import { modalActionTypes } from "./slice";

function* exampleRequestSaga(): any {
  const result = yield call(() => {});

  console.log(result);
}

function* modalSaga() {
  yield all([takeLatest(modalActionTypes.exampleRequest, exampleRequestSaga)]);
}

export default modalSaga;
