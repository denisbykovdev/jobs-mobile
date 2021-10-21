import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { getAreasFailure, getAreasStart, getAreasSuccess } from "../actions/categoriesActions";
import { WATCH_GET_AREAS } from "../types/categoriesTypes";
import { getAreas } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetAreasSaga() {
    yield takeEvery(WATCH_GET_AREAS, getAreasSaga)
}

function* getAreasSaga(action) {
    try {
        yield put(getAreasStart())
        const { data } = yield call(() => axios.get(
            `${getAreas}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(getAreasSuccess(
            data.data
        ))
    } catch (error) {
        yield put(getAreasFailure(error))
    }
}