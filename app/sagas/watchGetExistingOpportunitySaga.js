import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getExistingOpportunityFailure, getExistingOpportunityStart, getExistingOpportunitySuccess } from "../actions/opportunitiesActions";
import { WATCH_GET_EXISTING_OPPORTUNITY } from "../types/opportunitiesTypes";
import { getExistingOpportunity } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetExistingOpportunitySaga() {
    yield takeEvery(WATCH_GET_EXISTING_OPPORTUNITY, getExistingOpportunitySaga)
}

function* getExistingOpportunitySaga(action) {
    try {
        yield put(getExistingOpportunityStart());
        const { data } = yield call(() => axios.get(
            `${getExistingOpportunity(
                action.payload.jobId
            )}`,
            authHeader(
                action.payload.token
            )
        ));
        yield put(getExistingOpportunitySuccess(
            data.data
        ));
    } catch (error) {
        yield put(getExistingOpportunityFailure(
            error
        ));
    }
}