import { ADD_QUESTION_FAILURE, ADD_QUESTION_START, ADD_QUESTION_SUCCESS, ANSWER_BACK_FAILURE, ANSWER_BACK_START, ANSWER_BACK_SUCCESS, FIRST_ANSWER_FAILURE, FIRST_ANSWER_START, FIRST_ANSWER_SUCCESS, GET_ALL_FAQ_FAILURE, GET_ALL_FAQ_START, GET_ALL_FAQ_SUCCESS, SEND_FORM_FAILURE, SEND_FORM_START, SEND_FORM_SUCCESS, WATCH_ADD_QUESTION, WATCH_ANSWER_BACK, WATCH_FIRST_ANSWER, WATCH_GET_ALL_FAQ, WATCH_SEND_FORM } from "../types/faqTypes";

export const watchGetAllFaq = (
    token,
    job_id,
    item
) => ({
    type: WATCH_GET_ALL_FAQ,
    payload: {
        token,
        job_id,
        item
    }
})

export const getAllFaqStart = () => ({
    type: GET_ALL_FAQ_START
})

export const getAllFaqSuccess = (
    faqs
) => ({
    type: GET_ALL_FAQ_SUCCESS,
    payload: {
        faqs
    }
})

export const getAllFaqFailure = (error) => ({
    type: GET_ALL_FAQ_FAILURE,
    payload: {
        error
    }
})

export const watchAddQuestion = (
    token,
    job_id,
    question
) => ({
    type: WATCH_ADD_QUESTION,
    payload: {
        token,
        job_id,
        question
    }
})

export const addQuestionStart = () => ({
    type: ADD_QUESTION_START
})

export const addQuestionSuccess = (
    addQuestionMessage
) => ({
    type: ADD_QUESTION_SUCCESS,
    payload: {
        addQuestionMessage
    }
})

export const addQuestionFailure = (error) => ({
    type: ADD_QUESTION_FAILURE,
    payload: {
        error
    }
})

export const watchFirstAnswer = (
    token,
    job_id,
    question_id,
    answer
) => ({
    type: WATCH_FIRST_ANSWER,
    payload: {
        token,
        job_id,
        question_id,
        answer
    }
})

export const firstAnswerStart = () => ({
    type: FIRST_ANSWER_START
})

export const firstAnswerSuccess = (
    firstAnswerMessage
) => ({
    type: FIRST_ANSWER_SUCCESS,
    payload: {
        firstAnswerMessage
    }
})

export const firstAnswerFailure = (error) => ({
    type: FIRST_ANSWER_FAILURE,
    payload: {
        error
    }
})

export const watchAnswerBack = (
    token,
    job_id,
    question_id,
    answer
) => ({
    type: WATCH_ANSWER_BACK,
    payload: {
        token,
        job_id,
        question_id,
        answer
    }
})

export const answerBackStart = () => ({
    type: ANSWER_BACK_START
})

export const answerBackSuccess = (
    answerBackMessage
) => ({
    type: ANSWER_BACK_SUCCESS,
    payload: {
        answerBackMessage
    }
})

export const answerBackFailure = (error) => ({
    type: ANSWER_BACK_FAILURE,
    payload: {
        error
    }
})

export const watchSendForm = (
    token,
    title,
    phone,
    email,
    description
) => ({
    type: WATCH_SEND_FORM,
    payload: {
        token,
        title,
        phone,
        email,
        description
    }
})

export const sendFormStart = () => ({
    type: SEND_FORM_START
})

export const sendFormSuccess = (
    sendFormMessage
) => ({
    type: SEND_FORM_SUCCESS,
    payload: {
        sendFormMessage
    }
})

export const sendFormFailure = (error) => ({
    type: SEND_FORM_FAILURE,
    payload: {
        error
    }
})