import { takeEvery } from "redux-saga/effects";
import { WATCH_REGISTER } from "../types/authTypes";
import registerSaga from "./registerSaga";

export default function* watchRegisterSaga() {
    yield takeEvery(WATCH_REGISTER, registerSaga)
}