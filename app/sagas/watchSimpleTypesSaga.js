import { takeEvery } from "redux-saga/effects";
import { WATCH_SIMPLE_TYPES } from "../types/authTypes";
import simpleTypesSaga from "./simpleTypesSaga";

export default function* watchSimpleTypesSaga() {
    yield takeEvery(WATCH_SIMPLE_TYPES, simpleTypesSaga)
}