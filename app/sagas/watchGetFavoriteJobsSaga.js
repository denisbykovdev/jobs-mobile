import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { getFavoriteJobsFailure, getFavoriteJobsStart, getFavoriteJobsSuccess } from "../actions/profileActions";
import { WATCH_GET_FAVORITE_JOBS } from "../types/profileTypes";
import { getFavoriteJobs } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetFavoriteJobsSaga() {
    yield takeEvery(WATCH_GET_FAVORITE_JOBS, getFavoriteJobsSaga)
}

function* getFavoriteJobsSaga(action) {
    try {
        yield put(getFavoriteJobsStart())
        const { data } = yield call(() => axios.get(
            `${getFavoriteJobs}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(getFavoriteJobsSuccess(
            data.data
        ))
    } catch (error) {
        yield put(getFavoriteJobsFailure(error))
    }
}