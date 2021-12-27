import {
    PROVIDER_FAILURE,
    PROVIDER_START,
    PROVIDER_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    SIMPLE_TYPES_FAILURE,
    SIMPLE_TYPES_START,
    SIMPLE_TYPES_SUCCESS,
    VERIFICATION_FAILURE,
    VERIFICATION_START,
    VERIFICATION_SUCCESS
} from "../types/authTypes"
import { CREATE_NEW_CITY_FAILURE, CREATE_NEW_CITY_START, CREATE_NEW_CITY_SUCCESS, CREATE_NEW_SCHOOL_FAILURE, CREATE_NEW_SCHOOL_START, CREATE_NEW_SCHOOL_SUCCESS, STORE_ADDITIONAL_INFO_FAILURE, STORE_ADDITIONAL_INFO_START, STORE_ADDITIONAL_INFO_SUCCESS, STORE_BIRTHDAY_INFO_FAILURE, STORE_BIRTHDAY_INFO_START, STORE_BIRTHDAY_INFO_SUCCESS, STORE_DETAILS_FAILURE, STORE_DETAILS_START, STORE_DETAILS_SUCCESS } from "../types/profileTypes"

const authInitial = {
    code: null,
    simpleTypes: null,
    user: null,
    token: null,
}

export const authReducer = (state = authInitial,
    action
) => {
    switch (action.type) {
        case SIMPLE_TYPES_START:
            return {
                ...state,
                getting: true
            }
        case SIMPLE_TYPES_SUCCESS:
            return {
                ...state,
                getting: false,
                simpleTypes: action.payload.simpleTypes
            }
        case SIMPLE_TYPES_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }

        case REGISTER_START:
            return {
                ...state,
                posting: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                posting: false,
                code: action.payload.code
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            }

        case VERIFICATION_START:
            return {
                ...state,
                posting: true
            }
        case VERIFICATION_SUCCESS:
            return {
                ...state,
                posting: false,
                token: action.payload.token,
                user: action.payload.user
            }
        case VERIFICATION_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            }

        case PROVIDER_START:
            return {
                ...state,
                posting: true
            }
        case PROVIDER_SUCCESS:
            return {
                ...state,
                posting: false,
                token: action.payload.token,
                user: action.payload.user
            }
        case PROVIDER_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            }
        case CREATE_NEW_SCHOOL_START:
            return {
                ...state,
                posting: true
            }
        case CREATE_NEW_SCHOOL_SUCCESS:
            return {
                ...state,
                posting: false,
                user: action.payload.user
            }
        case CREATE_NEW_SCHOOL_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            }
        case STORE_ADDITIONAL_INFO_START:
            return {
                ...state,
                posting: true
            }
        case STORE_ADDITIONAL_INFO_SUCCESS:
            return {
                ...state,
                posting: false,
                user: action.payload.user
            }
        case STORE_ADDITIONAL_INFO_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            }
        case STORE_BIRTHDAY_INFO_START:
            return {
                ...state,
                posting: true
            }
        case STORE_BIRTHDAY_INFO_SUCCESS:
            return {
                ...state,
                posting: false,
                user: action.payload.user
            }
        case STORE_BIRTHDAY_INFO_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            }
        case CREATE_NEW_CITY_START:
            return {
                ...state,
                posting: true
            }
        case CREATE_NEW_CITY_SUCCESS:
            return {
                ...state,
                posting: false,
                user: action.payload.user
            }
        case CREATE_NEW_CITY_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            }
        case STORE_DETAILS_START:
            return {
                ...state,
                posting: true
            }
        case STORE_DETAILS_SUCCESS:
            return {
                ...state,
                posting: false,
                user: action.payload.user
            }
        case STORE_DETAILS_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            }

        default:
            return state;
    }
}