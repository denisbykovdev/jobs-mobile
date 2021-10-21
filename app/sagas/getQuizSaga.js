import axios from "axios";
import { call, put } from "redux-saga/effects";
import { getQuizFailure, getQuizStart, getQuizSuccess } from "../actions/quizActions";
import { getQuiz } from "../utils/api";
import requestHeader from "../utils/requestHeader";

export default function* getQuizSaga(action) {
    try {
        yield put(getQuizStart());
        const { data } = yield call(() => axios.get(
            `${getQuiz(action.payload.pageNumber)}`,
            requestHeader
        ))
        yield put(getQuizSuccess(
            data.result.current_page,
            data.result.last_page,
            data.result.data,
        ))
    } catch (error) {
        yield put(getQuizFailure(
            error
        ))
    }
}