import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { getInfoForProfileFailure, getInfoForProfileStart, getInfoForProfileSuccess } from "../actions/profileActions";
import { WATCH_GET_INFO_FOR_PROFILE } from "../types/profileTypes";
import { getInfoForProfile } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetInfoForProfileSaga() {
    yield takeEvery(WATCH_GET_INFO_FOR_PROFILE, getInfoForProfileSaga)
}

function* getInfoForProfileSaga(action) {
    try {
        yield put(getInfoForProfileStart())
        const { data } = yield call(() => axios.get(
            `${getInfoForProfile}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(getInfoForProfileSuccess(
            data
        ))
    } catch (error) {
        yield put(getInfoForProfileFailure(error))
    }
}