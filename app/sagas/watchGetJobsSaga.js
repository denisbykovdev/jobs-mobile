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
        console.log(`${getJobs(
            action.payload.jobsPage,
            action.payload.jobsByDateOrStars
        )}`)
        yield put(getJobsStart())
        // const { data } = yield call(() => axios.post(
        //     `${getJobs(
        //         action.payload.jobsPage,
        //         action.payload.jobsByDateOrStars
        //     )}`, {token : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnNoZXJ1dGJla2FsdXQuY28uaWxcL2FwaVwvdXNlclwvdmVyaWZpY2F0aW9uIiwiaWF0IjoxNjMxNzQ3MTMyLCJleHAiOjE2MzE5MTk5MzIsIm5iZiI6MTYzMTc0NzEzMiwianRpIjoiM05DNWxsMmxKclNIZENucyIsInN1YiI6ODYyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.MoUIWGEbC9GiH_kJzTfPJL7mYZWrSDG7Z4SEHMPk5H8"},
        //     //  {headers:      {   "Content-Type": "application/json", "Accept": "application/json"}}
        //     authHeader(
        //         action.payload.token
        //     )
        // ))

//         const config = {
//     method: 'post',
//     url: `${getJobs(action.payload.jobsPage, action.payload.jobsByDateOrStars )}`,
//     Token: { "" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnNoZXJ1dGJla2FsdXQuY28uaWxcL2FwaVwvdXNlclwvdmVyaWZpY2F0aW9uIiwiaWF0IjoxNjMxNzQ3MTMyLCJleHAiOjE2MzE5MTk5MzIsIm5iZiI6MTYzMTc0NzEzMiwianRpIjoiM05DNWxsMmxKclNIZENucyIsInN1YiI6ODYyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.MoUIWGEbC9GiH_kJzTfPJL7mYZWrSDG7Z4SEHMPk5H8",
//      "Content-Type": "application/json" }
// }
        // const { data } = yield call(() => axios(config))
//         const config = {
//     method: 'post',
//     url: `${getJobs(action.payload.jobsPage, action.payload.jobsByDateOrStars )}`,
//     Token: { "" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnNoZXJ1dGJla2FsdXQuY28uaWxcL2FwaVwvdXNlclwvdmVyaWZpY2F0aW9uIiwiaWF0IjoxNjMxNzQ3MTMyLCJleHAiOjE2MzE5MTk5MzIsIm5iZiI6MTYzMTc0NzEzMiwianRpIjoiM05DNWxsMmxKclNIZENucyIsInN1YiI6ODYyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.MoUIWGEbC9GiH_kJzTfPJL7mYZWrSDG7Z4SEHMPk5H8",
//      "Content-Type": "application/json" }
// }
const token =  action.payload.token

const { data } = yield call(() => axios.post(
    `${getJobs(action.payload.jobsPage, action.payload.jobsByDateOrStars )}`, {},   authHeader(action.payload.token)
    //  {headers: {
    //     "Content": "application/json",
    //     "Authorization": `Bearer ${token}`,
    //     token,
    //      }}
    ))

        yield put(getJobsSuccess(
            data.data
        ))
    } catch (error) {
        yield put(getJobsFailure(error)) 
    }
}