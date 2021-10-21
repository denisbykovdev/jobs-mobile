import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { likeUnlikePostFailure, likeUnlikePostStart, likeUnlikePostSuccess } from "../actions/blogsActions";
import { WATCH_LIKE_UNLIKE_POST } from "../types/blogsTypes";
import { getPost, likeUnlikePost } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchLikeUnlikePostSaga() {
    yield takeEvery(WATCH_LIKE_UNLIKE_POST, likeUnlikePostSaga)
}

function* likeUnlikePostSaga(action) {
    try {
        yield put(likeUnlikePostStart())
        const { data } = yield call(() => axios.get(
            `${likeUnlikePost(
                action.payload.post_id
            )}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(likeUnlikePostSuccess(
            data.message
        ))
    } catch (error) {
        yield put(likeUnlikePostFailure(error))
    }
}