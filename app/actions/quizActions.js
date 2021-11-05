import {
    GET_QUIZ_FAILURE,
    GET_QUIZ_START,
    GET_QUIZ_SUCCES,
    QUIZ_RESULT_FAILURE,
    QUIZ_RESULT_START,
    QUIZ_RESULT_SUCCES,
    SET_QUIZ_FAILURE,
    SET_QUIZ_START,
    SET_QUIZ_SUCCES,
    WATCH_GET_QUIZ,
    WATCH_QUIZ_RESULT,
    WATCH_SET_QUIZ
} from "../types/quizTypes";

export const watchGetQuiz = (
    pageNumber
) => ({
    type: WATCH_GET_QUIZ,
    payload: {
        pageNumber
    }
})

export const getQuizStart = () => ({
    type: GET_QUIZ_START
})

export const getQuizSuccess = (
    current_page,
    last_page,
    data
) => ({
    type: GET_QUIZ_SUCCES,
    payload: {
        current_page,
        last_page,
        data
    }
})

export const getQuizFailure = (
    error
) => ({
    type: GET_QUIZ_FAILURE,
    payload: {
        error
    }
})

export const watchSetQuiz = (
    user,
    quiz,
    answer
) => ({
    type: WATCH_SET_QUIZ,
    payload: {
        user,
        quiz,
        answer
    }
})

export const setQuizStart = () => ({
    type: SET_QUIZ_START
})

export const setQuizSuccess = (
    status
) => ({
    type: SET_QUIZ_SUCCES,
    payload: {
        status
    }
})

export const setQuizFailure = (
    error
) => ({
    type: SET_QUIZ_FAILURE,
    payload: {
        error
    }
})

export const watchQuizResult = (
    userId
) => ({
    type: WATCH_QUIZ_RESULT,
    payload: {
        userId
    }
})

export const quizResultStart = () => ({
    type: QUIZ_RESULT_START
})

export const quizResultSuccess = (
    sub_categories
) => ({
    type: QUIZ_RESULT_SUCCES,
    payload: sub_categories
})

export const quizResultFailure = (
    error
) => ({
    type: QUIZ_RESULT_FAILURE,
    payload: {
        error
    }
})