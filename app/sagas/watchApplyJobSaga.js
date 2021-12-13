import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { applyJobFailure, applyJobStart, applyJobSuccess } from "../actions/jobsActions";
import { WATCH_APPLY_JOB } from "../types/jobsTypes";
import { applyJob } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchApplyJobSaga() {
    yield takeEvery(WATCH_APPLY_JOB, applyJobSaga)
}

function* applyJobSaga(action) {
    try {
        yield put(applyJobStart())
        const { data } = yield call(() => axios.post(
            `${applyJob(
                action.payload.jobId
            )}`,
            {},
            authHeader(
                action.payload.token
            )
        ))
        yield put(applyJobSuccess(
            data.message
        ))
    } catch (error) {
        yield put(applyJobFailure(
            error
        ))
    }
}