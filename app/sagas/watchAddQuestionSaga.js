import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { addQuestionFailure, addQuestionStart, addQuestionSuccess } from "../actions/faqActions";
import { WATCH_ADD_QUESTION } from "../types/faqTypes";
import { addQuestion } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchAddQuestionSaga() {
    yield takeEvery(WATCH_ADD_QUESTION, addQuestionSaga)
}

function* addQuestionSaga(action) {
    try {
        yield put(addQuestionStart())
        const { data } = yield call(() => axios.post(
            `${addQuestion(
                action.payload.job_id
            )}`,
            {
                question: action.payload.question
            },
            authHeader(
                action.payload.token
            )
        ))
        yield put(addQuestionSuccess(
            data.message
        ))
    } catch (error) {
        yield put(addQuestionFailure(
            error
        ))
    }
}