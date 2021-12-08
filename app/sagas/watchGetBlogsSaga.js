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
    // let url = getBlogsAll();
    // if (action.payload.category_id && action.payload.searchString) {
    //     url = `${getBlogs(
    //         action.payload.category_id,
    //         action.payload.searchString
    //     )}`
    // }    
    // console.log(
    //     `--- getBlogsSaga/url:`, action.payload.category_id , action.payload.searchString === undefined
    // )
    try {
        let url = action.payload.searchString !== undefined 
            ? `${getBlogs(action.payload.category_id,  action.payload.searchString)}` 
            : `${getBlogsAll}`

        yield put(getBlogsStart())
        const { data } = yield call(() => axios.get(
            url, 
            action.payload.searchString !== undefined && authHeader(
                action.payload.token
            )
        ))
        yield put(getBlogsSuccess(
            data.data
        ))
    } catch (error) {
        yield put(getBlogsFailure(error))
    }
}