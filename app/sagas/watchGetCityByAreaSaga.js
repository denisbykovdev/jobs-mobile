import { call, put, takeEvery } from "@redux-saga/core/effects"
import axios from "axios"
import { getCityByAreaFailure, getCityByAreaStart, getCityByAreaSuccess } from "../actions/categoriesActions"
import { WATCH_GET_CITY_BY_AREA } from "../types/categoriesTypes"
import { getCityByArea } from "../utils/api"
import authHeader from "../utils/authHeader"

export default function* watchGetCityByAreaSaga() {
    yield takeEvery(WATCH_GET_CITY_BY_AREA, getCityByAreaSaga)
}

function* getCityByAreaSaga(action) {
    try {
        yield put(getCityByAreaStart())
        const { data } = yield call(() => axios.get(
            `${getCityByArea(
                action.payload.area_id
            )}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(getCityByAreaSuccess(
            data
        ))
    } catch (error) {
        yield put(getCityByAreaFailure(error))
    }
}