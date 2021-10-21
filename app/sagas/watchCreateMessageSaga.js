import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { createMessageFailure, createMessageStart, createMessageSuccess } from "../actions/chatActions";
import { WATCH_CREATE_MESSAGE } from "../types/chatTypes";
import { createMessage } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchCreateMessageSaga() {
    yield takeEvery(WATCH_CREATE_MESSAGE, createMessageSaga)
}

function* createMessageSaga(action) {
    try {
        yield put(createMessageStart())
        const { data } = yield call(() => axios.post(
            `${createMessage(
                action.payload.chat_id
            )}`,
            authHeader(
                action.payload.token
            )
        ))
        yield put(createMessageSuccess(
            data.data
        ))
    } catch (error) {
        yield put(createMessageFailure(error))
    }
}