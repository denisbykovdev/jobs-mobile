import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { getCategoryFailure, getCategoryStart, getCategorySuccess } from "../actions/categoriesActions";
import { WATCH_GET_CATEGORY } from "../types/categoriesTypes";
import { getCategory } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetCategorySaga() {
    yield takeEvery(WATCH_GET_CATEGORY, getCategorySaga)
}

function* getCategorySaga(action) {
    try {
        yield put(getCategoryStart())
        const { data } = yield call(() => axios.get(
            `${getCategory(
                action.payload.category_id
            )}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(getCategorySuccess(
            data.data
        ))
    } catch (error) {
        yield put(getCategoryFailure(error))
    }
}