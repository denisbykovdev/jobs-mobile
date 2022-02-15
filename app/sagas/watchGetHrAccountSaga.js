import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getHrAccountFailure, getHrAccountStart, getHrAccountSuccess } from "../actions/hrActions";
import { WATCH_GET_HR_ACCOUNT } from "../types/hrTypes";
import { getHrAccount } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetHrAccountSaga() {
    yield takeEvery(WATCH_GET_HR_ACCOUNT, getHrAccountSaga)
}

function* getHrAccountSaga(action) {
    try {
        yield put(getHrAccountStart())
        const { data } = yield call(() => axios.get(
            `${getHrAccount}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(getHrAccountSuccess(
            data.data
        ))
    } catch (error) {
        yield put(getHrAccountFailure(
            error
        ))
    }
}