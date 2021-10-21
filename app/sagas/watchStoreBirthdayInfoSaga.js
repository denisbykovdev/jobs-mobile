import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { storeBirthdayInfoFailure, storeBirthdayInfoStart, storeBirthdayInfoSuccess } from "../actions/profileActions";
import { WATCH_STORE_BIRTHDAY_INFO } from "../types/profileTypes";
import { storeBirthdayInfo } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchStoreBirthdayInfoSaga() {
    yield takeEvery(WATCH_STORE_BIRTHDAY_INFO, storeBirthdayInfoSaga)
}

function* storeBirthdayInfoSaga(action) {
    try {
        yield put(storeBirthdayInfoStart())
        const { data } = yield call(() => axios.post(
            `${storeBirthdayInfo}`,
            {
                is_regular: action.payload.is_regular,
                day: action.payload.day,
                month: action.payload.month,
                year: action.payload.year
            },
            authHeader(
                action.payload.token
            )
        ))
        yield put(storeBirthdayInfoSuccess(
            data.data
        ))
    } catch (error) {
        yield put(storeBirthdayInfoFailure(error))
    }
}