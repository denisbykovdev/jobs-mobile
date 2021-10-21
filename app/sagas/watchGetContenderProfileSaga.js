import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getContenderProfileFailure, getContenderProfileStart, getContenderProfileSuccess } from "../actions/opportunitiesActions";
import { WATCH_GET_CONTENDER_PROFILE } from "../types/opportunitiesTypes";
import { showOpportunityContenderProfile } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetContenderProfileSaga() {
    yield takeEvery(WATCH_GET_CONTENDER_PROFILE, getContenderProfileSaga);
}

function* getContenderProfileSaga(action) {
    try {
        yield put(getContenderProfileStart());
        const { data } = yield call(() => axios.get(
            `${showOpportunityContenderProfile(
                action.payload.jobId,
                action.payload.contenderId
            )}`,
            authHeader(
                action.payload.token
            )
        ));
        yield put(getContenderProfileSuccess(
            data.data
        ));
    } catch (error) {
        yield put(getContenderProfileFailure(
            error
        ));
    }
}