import { takeEvery } from "redux-saga/effects";
import { WATCH_GET_QUIZ } from "../types/quizTypes";
import getQuizSaga from "./getQuizSaga";

export default function* watchGetQuizSaga() {
    yield takeEvery(WATCH_GET_QUIZ, getQuizSaga)
}