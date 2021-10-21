import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { getSubcategoryFailure, getSubcategoryStart, getSubcategorySuccess } from "../actions/categoriesActions";
import { WATCH_GET_SUBCATEGORY } from "../types/categoriesTypes";
import { getSubcategory } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetSubcategorySaga() {
    yield takeEvery(WATCH_GET_SUBCATEGORY, getSubcategorySaga)
}

function* getSubcategorySaga(action) {
    try {
        yield put(getSubcategoryStart())
        const { data } = yield call(() => axios.get(
            `${getSubcategory(
                action.payload.category_id
            )}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(getSubcategorySuccess(
            data.data
        ))
    } catch (error) {
        yield put(getSubcategoryFailure(error))
    }
}