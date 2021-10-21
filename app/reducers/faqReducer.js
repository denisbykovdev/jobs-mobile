import { ADD_QUESTION_FAILURE, ADD_QUESTION_START, ADD_QUESTION_SUCCESS, ANSWER_BACK_FAILURE, ANSWER_BACK_START, ANSWER_BACK_SUCCESS, FIRST_ANSWER_FAILURE, FIRST_ANSWER_START, FIRST_ANSWER_SUCCESS, GET_ALL_FAQ_FAILURE, GET_ALL_FAQ_START, GET_ALL_FAQ_SUCCESS, SEND_FORM_FAILURE, SEND_FORM_START, SEND_FORM_SUCCESS } from "../types/faqTypes"

const faqInitial = {
    faqs: null,
    addQuestionMessage: null,
    firstAnswerMessage: null,
    answerBackMessage: null
}

export const faqReducer = (
    state = faqInitial,
    action
) => {
    switch (action.type) {
        case GET_ALL_FAQ_START:
            return {
                ...state,
                getting: true
            }
        case GET_ALL_FAQ_SUCCESS:
            return {
                ...state,
                getting: false,
                faqs: action.payload.faqs
            }
        case GET_ALL_FAQ_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }
        case ADD_QUESTION_START:
            return {
                ...state,
                posting: true
            }
        case ADD_QUESTION_SUCCESS:
            return {
                ...state,
                posting: false,
                addQuestionMessage: action.payload.addQuestionMessage
            }
        case ADD_QUESTION_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            }
        case FIRST_ANSWER_START:
            return {
                ...state,
                posting: true
            }
        case FIRST_ANSWER_SUCCESS:
            return {
                ...state,
                posting: false,
                firstAnswerMessage: action.payload.firstAnswerMessage
            }
        case FIRST_ANSWER_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            }
        case ANSWER_BACK_START:
            return {
                ...state,
                posting: true
            }
        case ANSWER_BACK_SUCCESS:
            return {
                ...state,
                posting: false,
                answerBackMessage: action.payload.answerBackMessage
            }
        case ANSWER_BACK_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            }
        case SEND_FORM_START:
            return {
                ...state,
                posting: true
            }
        case SEND_FORM_SUCCESS:
            return {
                ...state,
                posting: false,
                sendFormMessage: action.payload.sendFormMessage
            }
        case SEND_FORM_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            }

        default: return state;
    }
}