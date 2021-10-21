import { call, put, takeEvery } from "@redux-saga/core/effects"
import axios from "axios"
import { getMessagesFailure, getMessagesStart, getMessagesSuccess } from "../actions/chatActions"
import { WATCH_GET_MESSAGES } from "../types/chatTypes"
import { getMessages } from "../utils/api"
import authHeader from "../utils/authHeader"

export default function* watchGetMessagesSaga() {
    yield takeEvery(WATCH_GET_MESSAGES, getMessagesSaga)
}

function* getMessagesSaga(action) {
    try {
        yield put(getMessagesStart())
        const { data } = yield call(() => axios.get(
            `${getMessages(
                action.payload.chat_id
            )}`,
            authHeader(action.payload.token)
        ))
        yield put(getMessagesSuccess(
            data.data
        ))
    } catch (error) {
        yield put(getMessagesFailure(error))
    }
}