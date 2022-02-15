import { put, call, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { answerBackFailure, answerBackStart, answerBackSuccess } from "../actions/faqActions";
import { WATCH_ANSWER_BACK } from "../types/faqTypes";
import { answerBack } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchAnswerBackSaga() {
    yield takeEvery(WATCH_ANSWER_BACK, answerBackSaga)
}

function* answerBackSaga(action) {
    try {
        yield put(answerBackStart())
        const { data } = yield call(() => axios.post(
            `${answerBack(
                action.payload.job_id,
                action.payload.question_id
            )}`,
            {
                answer: action.payload.answer
            },
            authHeader(
                action.payload.token
            )
        ))
        yield put(answerBackSuccess(
            data.message
        ))
    } catch (error) {
        console.log(`--- answerBackSaga/catch:`, error)
        yield put(answerBackFailure(error))
    }
}