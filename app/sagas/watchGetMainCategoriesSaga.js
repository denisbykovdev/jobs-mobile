import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { getMainCategoriesFailure, getMainCategoriesStart, getMainCategoriesSuccess } from "../actions/categoriesActions";
import { WATCH_GET_MAIN_CATEGORIES } from "../types/categoriesTypes";
import { getMainCategories } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetMainCategoriesSaga() {
    yield takeEvery(WATCH_GET_MAIN_CATEGORIES, getMainCategoriesSaga)
}

function* getMainCategoriesSaga(action) {
    try {
        yield put(getMainCategoriesStart())
        const { data } = yield call(() => axios.get(
            `${getMainCategories}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(getMainCategoriesSuccess(
            data.data
        ))
    } catch (error) {
        yield put(getMainCategoriesFailure(error))
    }
}