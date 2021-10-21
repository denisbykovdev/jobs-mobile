import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { getDurationByYearFailure, getDurationByYearStart, getDurationByYearSuccess } from "../actions/categoriesActions";
import { WATCH_GET_DURATION_BY_YEAR } from "../types/categoriesTypes";
import { getDurationByYear } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetDurationByYearSaga() {
    yield takeEvery(WATCH_GET_DURATION_BY_YEAR, getDurationByYearSaga)
}

function* getDurationByYearSaga(action) {
    try {
        yield put(getDurationByYearStart())
        const { data } = yield call(() => axios.get(
            `${getDurationByYear(
                action.payload.year
            )}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(getDurationByYearSuccess(
            data
        ))
    } catch (error) {
        yield put(getDurationByYearFailure(error))
    }
}