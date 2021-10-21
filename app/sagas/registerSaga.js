import axios from "axios";
import { call, put } from "redux-saga/effects";
import { registerFailure, registerStart, registerSuccess } from "../actions/authActions";
import { register } from "../utils/api";
import requestHeader from "../utils/requestHeader";

export default function* registerSaga(action) {
    try {
        yield put(registerStart());
        const { data } = yield call(
            () =>
                axios.post(
                    `${register}`,
                    {
                        phone: action.payload.phone,
                        role_id: action.payload.role_id,
                        is_hr: action.payload.is_hr
                    },
                    requestHeader
                )
        )
        yield put(registerSuccess(
            data.hasOwnProperty('code')
                ? data.code :
                data.message
        ))
    } catch (error) {
        console.log(
            `--- * registerSaga/error`, error
        )
        yield put(registerFailure(
            error
        ))
    }
}