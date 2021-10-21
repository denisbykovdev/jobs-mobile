import { takeEvery } from "redux-saga/effects";
import { WATCH_PROVIDER } from "../types/authTypes";
import providerSaga from "./providerSaga";

export default function* watchProviderSaga() {
    yield takeEvery(WATCH_PROVIDER, providerSaga)
}