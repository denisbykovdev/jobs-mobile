import axios from "axios";
import { getReviewsFailure, getReviewsStart, getReviewsSuccess } from "../actions/reviewsActions";
import { WATCH_GET_REVIEWS } from "../types/reviewsTypes";
import { getReviews } from "../utils/api";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import authHeader from "../utils/authHeader";

export default function* watchGetReviewsSaga() {
    yield takeEvery(WATCH_GET_REVIEWS, getReviewsSaga)
}

function* getReviewsSaga(action) {
    try {
        yield put(getReviewsStart())
        const { data } = yield call(() => axios.get(
            `${getReviews(
                action.payload.job_id
            )}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(getReviewsSuccess(
            data
        ))
    } catch (error) {
        yield put(getReviewsFailure(error))
    }
}