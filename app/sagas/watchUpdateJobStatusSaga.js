import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { updateJobStatusFailure, updateJobStatusStart, updateJobStatusSuccess } from "../actions/opportunitiesActions";
import { WATCH_UPDATE_JOB_STATUS } from "../types/opportunitiesTypes";
import { updateJobStatus } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchUpdateJobStatusSaga() {
    yield takeEvery(WATCH_UPDATE_JOB_STATUS, updateJobStatusSaga);
}

function* updateJobStatusSaga(action) {
    try {
        yield put(updateJobStatusStart());
        const { data } = yield call(() => axios.post(
            `${updateJobStatus(
                action.payload.jobId,
                action.payload.statusId
            )}`,
            {},
            authHeader(
                action.payload.token
            )
        ));
        yield put(updateJobStatusSuccess(
            data.data.status
        ))
    } catch (error) {
        yield put(updateJobStatusFailure(
            error
        ))
    }
}