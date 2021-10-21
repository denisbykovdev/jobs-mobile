import { takeEvery } from "redux-saga/effects";
import { WATCH_SET_QUIZ } from "../types/quizTypes";
import setQuizSaga from "./setQuizSaga";

export default function* watchSetQuizSaga() {
    yield takeEvery(WATCH_SET_QUIZ, setQuizSaga)
}