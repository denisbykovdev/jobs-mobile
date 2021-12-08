import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getJobsFailure, getJobsStart, getJobsSuccess } from "../actions/jobsActions";
import { WATCH_GET_JOBS } from "../types/jobsTypes";
import { getJobs } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchGetJobsSaga() {
    yield takeEvery(WATCH_GET_JOBS, getJobsSaga)
}

function* getJobsSaga(action) {
    try {
        console.log(
            `--- watchGetJobsSaga/action`,
            action
        )

        yield put(getJobsStart())

        const { data } = yield call(() => axios.get(
            `${getJobs(
                action.payload.jobsPage, 
                action.payload.jobsByDateOrStars
            )}`,
            authHeader(
                action.payload.token
            )
        ))

        console.log(
            `--- getJobsSaga/data:`, data
        )

        yield put(getJobsSuccess(
            data.data
        ))
    } catch (error) {
        yield put(getJobsFailure(error)) 
    }
}