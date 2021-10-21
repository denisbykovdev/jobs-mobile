import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getOpportunityTypeDataFailure, getOpportunityTypeDataStart, getOpportunityTypeDataSuccess } from "../actions/opportunitiesActions";
import { WATCH_GET_OPPORTUNITY_TYPE_DATA } from "../types/opportunitiesTypes";
import { getOpportunityTypeData } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetOpportunityTypeDataSaga() {
    yield takeEvery(WATCH_GET_OPPORTUNITY_TYPE_DATA, getOpportunityTypeDataSaga);
}

function* getOpportunityTypeDataSaga(action) {
    try {
        yield put(getOpportunityTypeDataStart());
        const { data } = yield call(() => axios.get(
            `${getOpportunityTypeData}`,
            authHeader(
                action.payload.token
            )
        ));
        yield put(getOpportunityTypeDataSuccess(
            data.data
        ))
    } catch (error) {
        yield put(getOpportunityTypeDataFailure(
            error
        ));
    }
}