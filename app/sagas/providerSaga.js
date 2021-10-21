import axios from "axios";
import { call, put } from "redux-saga/effects";
import { providerFailure, providerStart, providerSuccess } from "../actions/authActions";
import { provider } from "../utils/api";
import requestHeader from "../utils/requestHeader";
import * as SecureStore from 'expo-secure-store';

export default function* providerSaga(action) {
    try {
        yield put(providerStart());
        const { data } = yield call(() => axios.post(
            `${provider(action.payload.providerName)}`,
            {
                user: action.payload.user,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                idToken: action.payload.idToken,
                role_id: action.payload.role_id,
                is_hr: action.payload.is_hr
            },
            requestHeader
        ))
        yield put(providerSuccess(
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
        yield put(providerFailure(
            error
        ))
    }
}