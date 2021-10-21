import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getListOpportunitiesFailure, getListOpportunitiesStart, getListOpportunitiesSuccess } from "../actions/opportunitiesActions";
import { WATCH_GET_OPPORTUNITIES } from "../types/opportunitiesTypes";
import { getListOpportunities } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetListOpportunitiesSaga() {
    yield takeEvery(WATCH_GET_OPPORTUNITIES, getListOpportunitiesSaga)
}

function* getListOpportunitiesSaga(action) {
    try {
        yield put(getListOpportunitiesStart());
        const { data } = yield call(() => axios.post(
            `${getListOpportunities(action.payload.jobsPage)}`,
            authHeader(
                action.payload.token
            )
        ));
        yield put(getListOpportunitiesSuccess(
            data.data
        ));
    } catch (error) {
        yield put(getListOpportunitiesFailure(
            error
        ))
    }
}