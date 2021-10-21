import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { viewJobFailure, viewJobStart, viewJobSuccess } from "../actions/jobsActions";
import { WATCH_VIEW_JOB } from "../types/jobsTypes";
import { viewJob } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchViewJobSaga() {
    yield takeEvery(WATCH_VIEW_JOB, viewJobSaga)
}

function* viewJobSaga(action) {
    try {
        yield put(viewJobStart())
        const { data } = yield call(() => axios.get(
            `${viewJob(
                action.payload.jobId
            )}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(viewJobSuccess(
            data
        ))
    } catch (error) {
        yield put(viewJobFailure(error))
    }
}