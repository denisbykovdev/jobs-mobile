import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { getAllFaqFailure, getAllFaqStart, getAllFaqSuccess } from "../actions/faqActions";
import { WATCH_GET_ALL_FAQ } from "../types/faqTypes";
import { getAllFaq } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetAllFaqSaga() {
    yield takeEvery(WATCH_GET_ALL_FAQ, getAllFaqSaga)
}

function* getAllFaqSaga(action) {
    try {
        yield put(getAllFaqStart())
        const { data } = yield call(() => axios.get(
            `${getAllFaq(
                action.payload.job_id,
                action.payload.item
            )}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(getAllFaqSuccess(
            data.data
        ))
    } catch (error) {
        yield put(getAllFaqFailure(
            error
        ))
    }
}