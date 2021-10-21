import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getOpportunityPageFailure, getOpportunityPageStart, getOpportunityPageSuccess } from "../actions/opportunitiesActions";
import { WATCH_GET_OPPORTUNITY_PAGE } from "../types/opportunitiesTypes";
import { getOpportunityPage } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetOpportunityPageSaga() {
    yield takeEvery(WATCH_GET_OPPORTUNITY_PAGE, getOpportunityPageSaga);
}

function* getOpportunityPageSaga(action) {
    try {
        yield put(getOpportunityPageStart());
        const { data } = yield call(() => axios.get(
            `${getOpportunityPage(
                action.payload.jobId
            )}`,
            authHeader(
                action.payload.token
            )
        ));
        yield put(getOpportunityPageSuccess(
            data.data
        ))
    } catch (error) {
        yield put(getOpportunityPageFailure(
            error
        ));
    }
}