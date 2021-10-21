import { WATCH_UPDATE_CONTENDER_STATUS } from "../types/opportunitiesTypes";
import { call, put, takeEvery } from "redux-saga/effects";
import { updateContenderStatusFailure, updateContenderStatusStart, updateContenderStatusSuccess } from "../actions/opportunitiesActions";
import axios from "axios";
import { updateOpportunityContenderStatus } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchUpdateContenderStatusSaga() {
    yield takeEvery(WATCH_UPDATE_CONTENDER_STATUS, updateContenderStatusSaga);
}

function* updateContenderStatusSaga(action) {
    try {
        yield put(updateContenderStatusStart());
        const { data } = yield call(() => axios.post(
            `${updateOpportunityContenderStatus(
                action.payload.jobId,
                action.payload.contenderId,
                action.payload.contenderStatus
            )}`,
            authHeader(
                action.payload.token
            )
        ));
        yield put(updateContenderStatusSuccess(
            data.data.status
        ))
    } catch (error) {
        yield put(updateContenderStatusFailure(
            error
        ));
    }
}