import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { getSubcategoryByCategoryFailure, getSubcategoryByCategoryStart, getSubcategoryByCategorySuccess } from "../actions/categoriesActions";
import { WATCH_GET_SUBCATEGORY_BY_CATEGORY } from "../types/categoriesTypes";
import { getSubcategoryByCategory } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetSubcategoryByCategorySaga() {
    yield takeEvery(WATCH_GET_SUBCATEGORY_BY_CATEGORY, getSubcategoryByCategorySaga)
}

function* getSubcategoryByCategorySaga(action) {
    try {
        yield put(getSubcategoryByCategoryStart())
        const { data } = yield call(() => axios.get(
            `${getSubcategoryByCategory(
                action.payload.category_id
            )}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(getSubcategoryByCategorySuccess(
            data
        ))
    } catch (error) {
        yield put(getSubcategoryByCategoryFailure(error))
    }
}