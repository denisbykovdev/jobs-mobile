import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getOpportunityViewFailure, getOpportunityViewStart, getOpportunityViewSuccess } from "../actions/opportunitiesActions";
import { WATCH_GET_OPPORTUNITY_VIEW } from "../types/opportunitiesTypes";
import { getOpportunityView } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetOpportunityViewSaga() {
    yield takeEvery(WATCH_GET_OPPORTUNITY_VIEW, getOpportunityViewSaga);
}

function* getOpportunityViewSaga(action) {
    try {
        yield put(getOpportunityViewStart());
        const { data } = yield call(() => axios.get(
            `${getOpportunityView(
                action.payload.jobId
            )}`,
            authHeader(
                action.payload.token
            )
        ));
        yield put(getOpportunityViewSuccess(
            data.data
        ));
    } catch (error) {
        yield put(getOpportunityViewFailure(
            error
        ));
    }
}