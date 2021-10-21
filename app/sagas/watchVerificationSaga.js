import { takeEvery } from "redux-saga/effects";
import { WATCH_VERIFICATION } from "../types/authTypes";
import verificationSaga from "./verificationSaga";

export default function* watchVerificationSaga() {
    yield takeEvery(WATCH_VERIFICATION, verificationSaga)
}