import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { getConversationsFailure, getConversationsStart, getConversationsSuccess } from "../actions/chatActions";
import { WATCH_GET_CONVERSATIONS } from "../types/chatTypes";
import { getConversations } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetConversationsSaga() {
    yield takeEvery(WATCH_GET_CONVERSATIONS, getConversationsSaga)
}

function* getConversationsSaga(action) {
    try {
        yield put(getConversationsStart())
        const { data } = yield call(() => axios.get(
            `${getConversations}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(getConversationsSuccess(
            data.data
        ))
    } catch (error) {
        yield put(getConversationsFailure(error))
    }
}