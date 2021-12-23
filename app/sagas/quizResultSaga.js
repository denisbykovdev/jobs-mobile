import axios from "axios";
import { call, put } from "redux-saga/effects";
import { quizResultFailure, quizResultStart, quizResultSuccess } from "../actions/quizActions";
import { quizResult } from "../utils/api";
import requestHeader from "../utils/requestHeader";

export default function* quizResultSaga(action) {
    try {
        yield put(quizResultStart());
        const { data } = yield call(() => axios.get(
            `${quizResult(action.payload.userId)}`,
            requestHeader
        ))
        console.log(
            `--- quizResultSaga/data:`, data
        )
        yield put(quizResultSuccess(
            data
        ))
    } catch (error) {
        yield put(quizResultFailure(
            error
        ))
    }
}