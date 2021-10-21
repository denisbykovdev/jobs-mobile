import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getFilteredJobsFailure, getFilteredJobsStart, getFilteredJobsSuccess } from "../actions/jobsActions";
import { WATCH_GET_FILTERED_JOBS } from "../types/jobsTypes";
import { jobFilter } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetFilteredJobsSaga() {
    yield takeEvery(WATCH_GET_FILTERED_JOBS, getFilteredJobsSaga)
}

function* getFilteredJobsSaga(action) {
    try {
        yield put(getFilteredJobsStart())
        const { data } = yield call(() => axios.get(
            `${jobFilter}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(getFilteredJobsSuccess(
            data
        ))
    } catch (error) {
        yield put(getFilteredJobsFailure(error))
    }
}