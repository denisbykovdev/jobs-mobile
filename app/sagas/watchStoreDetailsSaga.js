import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { storeDetailsFaulure, storeDetailsStart, storeDetailsSuccess } from "../actions/profileActions";
import { WATCH_STORE_DETAILS } from "../types/profileTypes";
import { storeDetails } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchStoreDetailsSaga() {
    yield takeEvery(WATCH_STORE_DETAILS, storeDetailsSaga)
}

function* storeDetailsSaga(action) {
    try {
        yield put(storeDetailsStart())
        const { data } = yield call(() => axios.post(
            `${storeDetails}`,
            {
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                city_id: action.payload.city_id
            },
            authHeader(
                action.payload.token
            )
        ))
        yield put(storeDetailsSuccess(
            data.data
        ))
    } catch (error) {
        yield put(storeDetailsFaulure(error))
    }
}