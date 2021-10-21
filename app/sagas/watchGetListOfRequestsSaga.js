import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { getListOfRequestsFailure, getListOfRequestsStart, getListOfRequestsSuccess } from "../actions/profileActions";
import { WATCH_GET_LIST_OF_REQUESTS } from "../types/profileTypes";
import { getListOfRequests } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetListOfRequestsSaga() {
    yield takeEvery(WATCH_GET_LIST_OF_REQUESTS, getListOfRequestsSaga)
}

function* getListOfRequestsSaga(action) {
    try {
        yield put(getListOfRequestsStart())
        const { data } = yield call(() => axios.get(
            `${getListOfRequests}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(getListOfRequestsSuccess(
            data.data
        ))
    } catch (error) {
        yield put(getListOfRequestsFailure(error))
    }
}