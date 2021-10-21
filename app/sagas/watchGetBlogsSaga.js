import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { getBlogsFailure, getBlogsStart, getBlogsSuccess } from "../actions/blogsActions";
import { WATCH_GET_BLOGS } from "../types/blogsTypes";
import { getBlogsAll, getBlogs } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetBlogsSaga() {
    yield takeEvery(WATCH_GET_BLOGS, getBlogsSaga)
}

function* getBlogsSaga(action) {
    const url = getBlogsAll();
    if (action.payload.category_id && action.payload.searchString) {
        url = `${getBlogs(
            action.payload.category_id,
            action.payload.searchString
        )}`
    }    
    try {
        yield put(getBlogsStart())
        const { data } = yield call(() => axios.get(url, authHeader(action.payload.token)))
        yield put(getBlogsSuccess(
            data.data
        ))
    } catch (error) {
        yield put(getBlogsFailure(error))
    }
}