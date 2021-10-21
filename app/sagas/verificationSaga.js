import axios from "axios";
import { call, put } from "redux-saga/effects";
import { verificationFailure, verificationStart, verificationSuccess } from "../actions/authActions";
import { verification } from "../utils/api";
import requestHeader from "../utils/requestHeader";
import * as SecureStore from 'expo-secure-store';

export default function* verificationSaga(action) {
    try {
        yield put(verificationStart())
        const { data } = yield call(() => axios.post(
            `${verification}`,
            {
                code: action.payload.code
            }
            ,
            requestHeader
        ))
        yield put(verificationSuccess(
            data.token,
            data.user
        ))
        yield call(() => SecureStore.setItemAsync(
            `token`,
            JSON.stringify(data.token)
        ))
        yield call(() => SecureStore.setItemAsync(
            `user`,
            JSON.stringify(data.user)
        ))
    } catch (error) {
        yield put(verificationFailure(
            error
        ))
    }
}