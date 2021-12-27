import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { createNewCityFailure, createNewCityStart, createNewCitySuccess } from "../actions/profileActions";
import { WATCH_CREATE_NEW_CITY } from "../types/profileTypes";
import { createNewCity } from "../utils/api";
import authHeader from "../utils/authHeader";
import * as SecureStore from 'expo-secure-store';

export default function* watchCreateNewCitySaga() {
    yield takeEvery(WATCH_CREATE_NEW_CITY, createNewCitySaga)
}

function* createNewCitySaga(action) {
    try {
        yield put(createNewCityStart())
        const { data } = yield call(() => axios.post(
            `${createNewCity}`,
            {
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                name: action.payload.name
            },
            authHeader(
                action.payload.token
            )
        ))
        yield put(createNewCitySuccess(
            data.data
        ))
        yield call(() => SecureStore.setItemAsync(
            `user`,
            JSON.stringify(data.data)
        ))
    } catch (error) {
        yield put(createNewCityFailure(error))
    }
}