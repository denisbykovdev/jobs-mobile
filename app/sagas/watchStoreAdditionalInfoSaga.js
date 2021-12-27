import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { storeAdditionalInfoFailure, storeAdditionalInfoStart, storeAdditionalInfoSuccess } from "../actions/profileActions";
import { WATCH_STORE_ADDITIONAL_INFO } from "../types/profileTypes";
import { storeAdditionalInfo } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchStoreAdditionalInfoSaga() {
    yield takeEvery(WATCH_STORE_ADDITIONAL_INFO, storeAdditionalInfoSaga)
}

function* storeAdditionalInfoSaga(action) {
    try {
        yield put(storeAdditionalInfoStart())
        const { data } = yield call(() => axios.post(
            `${storeAdditionalInfo}`,
            {
                email: action.payload.email,
                school_id: action.payload.school_id,
                type_id: action.payload.type_id
            },
            authHeader(
                action.payload.token
            )
        ))
        yield put(storeAdditionalInfoSuccess(
            data.data
        ))
    } catch (error) {
        yield put(storeAdditionalInfoFailure(error))
    }
}