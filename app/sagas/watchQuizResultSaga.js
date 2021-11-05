import { takeEvery } from "redux-saga/effects";
import { WATCH_QUIZ_RESULT } from "../types/quizTypes";
import quizResultSaga from "./quizResultSaga";

export default function* watchQuizResultSaga() {
    yield takeEvery(WATCH_QUIZ_RESULT, quizResultSaga)
}