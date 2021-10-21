import axios from "axios";
import { call, put } from "redux-saga/effects";
import { simpleTypesFailure, simpleTypesStart, simpleTypesSuccess } from "../actions/authActions";
import { simpleTypes } from "../utils/api";
import requestHeader from "../utils/requestHeader";

export default function* simpleTypesSaga() {
    try {
        yield put(simpleTypesStart());
        const { data } = yield call(
            () => axios.get(
                `${simpleTypes}`,
                requestHeader
            )
        );
        yield put(simpleTypesSuccess(data.data))
    }
    catch (error) {
        yield put(simpleTypesFailure(error))
    }
}
