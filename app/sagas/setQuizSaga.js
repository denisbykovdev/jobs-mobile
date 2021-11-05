import axios from "axios";
import { call, put } from "redux-saga/effects";
import { setQuizFailure, setQuizStart, setQuizSuccess } from "../actions/quizActions";
import { setQuiz } from "../utils/api";
import requestHeader from "../utils/requestHeader";

export default function* setQuizSaga(action) {
    try {
        yield put(setQuizStart());
        const { data } = yield call(() => axios.post(
            `${setQuiz}`,
            {
                user: action.payload.user,
                quiz: action.payload.quiz,
                answer: action.payload.answer
            },
            requestHeader
        ))
        yield put(setQuizSuccess(
            data.status
        ))
    } catch (error) {
        yield put(setQuizFailure(
            error
        ))
    }
}