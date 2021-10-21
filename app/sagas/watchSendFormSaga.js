import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { sendFormFailure, sendFormStart, sendFormSuccess } from "../actions/faqActions";
import { WATCH_SEND_FORM } from "../types/faqTypes";
import { sendForm } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchSendFormSaga() {
    yield takeEvery(WATCH_SEND_FORM, sendFormSaga)
}

function* sendFormSaga(action) {
    try {
        yield put(sendFormStart())
        const { data } = yield call(() => axios.post(
            `${sendForm}`,
            {
                title: action.payload.title,
                phone: action.payload.phone,
                email: action.payload.email,
                description: action.payload.description
            },
            authHeader(
                action.payload.token
            )
        ))
        yield put(sendFormSuccess(
            data.message
        ))
    } catch (error) {
        yield put(sendFormFailure(error))
    }
}