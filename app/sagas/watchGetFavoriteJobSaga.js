import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getFavoriteJobFailure, getFavoriteJobStart, getFavoriteJobSuccess } from "../actions/jobsActions";
import { WATCH_GET_FOVORITE_JOB } from "../types/jobsTypes";
import { getFavoriteJob } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetFavoriteJobSaga() {
    yield takeEvery(WATCH_GET_FOVORITE_JOB, getFavoriteJobSaga)
}

function* getFavoriteJobSaga(action) {
    try {
        yield put(getFavoriteJobStart())
        const { data } = yield call(() => axios.get(
            `${getFavoriteJob(
                action.payload.jobId
            )}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(getFavoriteJobSuccess(
            data.message
        ))
    } catch (error) {
        yield put(getFavoriteJobFailure(error))
    }
}