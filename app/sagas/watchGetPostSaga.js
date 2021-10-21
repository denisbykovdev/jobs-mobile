import { call, put, takeEvery } from "@redux-saga/core/effects"
import axios from "axios"
import { getPostFailure, getPostStart, getPostSuccess } from "../actions/blogsActions"
import { WATCH_GET_POST } from "../types/blogsTypes"
import { getPost } from "../utils/api"
import authHeader from "../utils/authHeader"

export default function* watchGetPostSaga() {
    yield takeEvery(WATCH_GET_POST, getPostSaga)
}

function* getPostSaga(action) {
    try {
        yield put(getPostStart())
        const { data } = yield call(() => axios.get(
            `${getPost(
                action.payload.post_id
            )}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(getPostSuccess(
            data.data
        ))
    } catch (error) {
        yield put(getPostFailure(error))
    }
}