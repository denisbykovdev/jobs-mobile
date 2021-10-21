import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getContendersFailure, getContendersStart, getContendersSuccess } from "../actions/opportunitiesActions";
import { WATCH_GET_CONTENDERS } from "../types/opportunitiesTypes";
import { getContenders } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetContendersSaga() {
    yield takeEvery(WATCH_GET_CONTENDERS, getContendersSaga)
}

function* getContendersSaga(action) {
    try {
        yield put(getContendersStart());
        const { data } = yield call(() => axios.get(
            `${getContenders(
                action.payload.jobId
            )}`,
            authHeader(
                action.payload.token
            )
        ));
        yield put(getContendersSuccess(
            data.data
        ))
    } catch (error) {
        yield put(getContendersFailure(
            error
        ))
    }
}