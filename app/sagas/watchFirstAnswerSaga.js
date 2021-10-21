import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { firstAnswerFailure, firstAnswerStart, firstAnswerSuccess } from "../actions/faqActions";
import { WATCH_FIRST_ANSWER } from "../types/faqTypes";
import { firstAnswer } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchFirstAnswerSaga() {
    yield takeEvery(WATCH_FIRST_ANSWER, firstAnswerSaga)
}

function* firstAnswerSaga(action) {
    try {
        yield put(firstAnswerStart())
        const { data } = yield call(() => axios.post(
            `${firstAnswer(
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
        yield put(firstAnswerSuccess(
            data.message
        ))
    } catch (error) {
        yield put(firstAnswerFailure(error))
    }
}