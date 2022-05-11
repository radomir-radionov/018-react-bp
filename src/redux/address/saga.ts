import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import { postAddress } from "requests";
import { addressNormalizer, IAddressNormalized } from "./normalizer";
import { addressActions } from "./slice";

function* getAddressRequestSaga({
  payload: { value },
}: ReturnType<typeof addressActions.getAddressRequest>) {
  try {
    yield delay(250);
    const { data } = yield call(() => postAddress(value));
    const normalizedData: IAddressNormalized[] = addressNormalizer(data);

    yield put(addressActions.setAddresses({ data: normalizedData }));
  } catch (error) {
    console.log(error);
  }
}

function* addressSaga() {
  yield all([
    takeLatest(addressActions.getAddressRequest, getAddressRequestSaga),
  ]);
}

export default addressSaga;
