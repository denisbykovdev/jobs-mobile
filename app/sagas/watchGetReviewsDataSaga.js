import axios from "axios";
import { getReviewsDataFailure, getReviewsDataStart, getReviewsDataSuccess } from "../actions/reviewsActions";
import { WATCH_GET_REVIEWS_DATA } from "../types/reviewsTypes";
import { getReviewsData } from "../utils/api";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import authHeader from "../utils/authHeader";

export default function* watchGetReviewsDataSaga() {
    yield takeEvery(WATCH_GET_REVIEWS_DATA, getReviewsDataSaga)
}

function* getReviewsDataSaga(action) {
    try {
        yield put(getReviewsDataStart())
        const { data } = yield call(() => axios.get(
            `${getReviewsData(
                action.payload.job_id
            )}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(getReviewsDataSuccess(
            data
        ))
    } catch (error) {
        yield put(getReviewsDataFailure(error))
    }
}