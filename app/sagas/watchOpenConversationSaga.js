import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { openConversationFailure, openConversationStart, openConversationSuccess } from "../actions/chatActions";
import { WATCH_OPEN_CONVERSATION } from "../types/chatTypes";
import { openConversation } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchOpenConversationSaga() {
    yield takeEvery(WATCH_OPEN_CONVERSATION, openConversationSaga)
}

function* openConversationSaga(action) {
    try {
        yield put(openConversationStart())
        const { data } = yield call(() => axios.get(
            `${openConversation(
                action.payload.chat_id
            )}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(openConversationSuccess(
            data.data
        ))
    } catch (error) {
        yield put(openConversationFailure(error))
    }
}