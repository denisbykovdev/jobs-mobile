import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { createNewSchoolFailure, createNewSchoolStart, createNewSchoolSuccess } from "../actions/profileActions";
import { WATCH_CREATE_NEW_SCHOOL } from "../types/profileTypes";
import { createNewSchool } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchCreateNewSchoolSaga() {
    yield takeEvery(WATCH_CREATE_NEW_SCHOOL, createNewSchoolSaga)
}

function* createNewSchoolSaga(action) {
    try {
        yield put(createNewSchoolStart())
        const { data } = yield call(() => axios.post(
            `${createNewSchool}`,
            {
                name: action.payload.name,
                email: action.payload.email,
                type_id: action.payload.type_id
            },
            authHeader(
                action.payload.token
            )
        ))
        yield put(createNewSchoolSuccess(
            data.message
        ))
    } catch (error) {
        yield put(createNewSchoolFailure(error))
    }
}