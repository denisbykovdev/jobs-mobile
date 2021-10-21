import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { storeReviewFailure, storeReviewStart, storeReviewSuccess } from "../actions/reviewsActions";
import { WATCH_STORE_REVIEW } from "../types/reviewsTypes";
import { storeReview } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchStoreReviewSaga() {
    yield takeEvery(WATCH_STORE_REVIEW, storeReviewSaga)
}

function* storeReviewSaga(action) {
    try {
        yield put(storeReviewStart())
        const { data } = yield call(() => axios.post(
            `${storeReview(
                action.payload.job_id
            )}`,
            {
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                phone: action.payload.phone,
                show_info: action.payload.show_info,
                description: action.payload.description,
                stars: action.payload.stars,
                date: action.payload.date,
                duration: action.payload.duration,
                avatar: action.payload.avatar
            },
            authHeader(
                action.payload.token
            )
        ))
        yield put(storeReviewSuccess(
            data.message
        ))
    } catch (error) {
        yield put(storeReviewFailure(error))
    }
}