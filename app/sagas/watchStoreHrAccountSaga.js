import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { storeHrAccountFailure, storeHrAccountStart, storeHrAccountSuccess } from "../actions/hrActions";
import { WATCH_STORE_HR_ACCOUNT } from "../types/hrTypes";
import { storeHrAccount } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchStoreHrAccountSaga() {
    yield takeEvery(WATCH_STORE_HR_ACCOUNT, storeHrAccountSaga)
}
//GET => POST
function* storeHrAccountSaga(action) {
    try {
        yield put(storeHrAccountStart())
        const { data } = yield call(() => axios.post(
            `${storeHrAccount}`,
            {
                id: action.payload.id,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                phone: action.payload.phone,
                organization_name: action.payload.organization_name,
                areas: action.payload.areas,
                email: action.payload.email,
                about: action.payload.about,
                avatar: action.payload.avatar
            },
            authHeader(
                action.payload.token
            )
        ))
        yield put(storeHrAccountSuccess(
            data
        ))
    } catch (error) {
        yield put(storeHrAccountFailure(
            error
        ))
    }
}