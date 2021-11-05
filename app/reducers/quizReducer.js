import { GET_QUIZ_FAILURE, GET_QUIZ_START, GET_QUIZ_SUCCES, QUIZ_RESULT_FAILURE, QUIZ_RESULT_START, QUIZ_RESULT_SUCCES, SET_QUIZ_FAILURE, SET_QUIZ_START, SET_QUIZ_SUCCES } from "../types/quizTypes"

const quizInitial = {
    current_page: null,
    last_page: null,
    data: null,
    sub_categories: null,
    status: null
}

export const quizReducer = (
    state = quizInitial,
    action
) => {
    switch (action.type) {
        case GET_QUIZ_START:
            return {
                ...state,
                getting: true
            }
        case GET_QUIZ_SUCCES:
            return {
                ...state,
                getting: false,
                current_page: action.payload.current_page,
                last_page: action.payload.last_page,
                data: action.payload.data
            }
        case GET_QUIZ_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }

        case SET_QUIZ_START:
            return {
                ...state,
                posting: true,
                status: null
            }
        case SET_QUIZ_SUCCES:
            return {
                ...state,
                posting: false,
                status: action.payload.status
            }
        case SET_QUIZ_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            }

        case QUIZ_RESULT_START:
            return {
                ...state,
                getting: true
            }
        case QUIZ_RESULT_SUCCES:
            return {
                ...state,
                getting: false,
                sub_categories: action.payload.sub_categories
            }
        case QUIZ_RESULT_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }


        default:
            return state;
    }
}