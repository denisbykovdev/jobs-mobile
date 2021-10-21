import { WATCH_GET_CHOSEN_CONTENDERS } from "../types/opportunitiesTypes";
import { call, put, takeEvery } from "redux-saga/effects";
import { getChosenContendersFailure, getChosenContendersStart, getChosenContendersSuccess } from "../actions/opportunitiesActions";
import axios from "axios";
import { getOpportunityChosenContenders } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetChosenContendersSaga() {
    yield takeEvery(WATCH_GET_CHOSEN_CONTENDERS, getChosenContendersSaga);
}

function* getChosenContendersSaga(action) {
    try {
        yield put(getChosenContendersStart());
        const { data } = yield call(() => axios.get(
            `${getOpportunityChosenContenders(
                action.payload.jobId
            )}`,
            authHeader(
                action.payload.token
            )
        ));
        yield put(getChosenContendersSuccess(
            data.data
        ));
    } catch (error) {
        yield put(getChosenContendersFailure(
            error
        ));
    }
}