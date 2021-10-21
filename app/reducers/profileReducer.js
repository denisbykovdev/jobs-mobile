import { CREATE_NEW_CITY_FAILURE, CREATE_NEW_CITY_START, CREATE_NEW_CITY_SUCCESS, CREATE_NEW_SCHOOL_FAILURE, CREATE_NEW_SCHOOL_START, CREATE_NEW_SCHOOL_SUCCESS, GET_FAVORITE_JOBS_FAILURE, GET_FAVORITE_JOBS_START, GET_FAVORITE_JOBS_SUCCESS, GET_INFO_FOR_PROFILE_FAILURE, GET_INFO_FOR_PROFILE_START, GET_INFO_FOR_PROFILE_SUCCESS, GET_LIST_OF_REQUESTS_FAILURE, GET_LIST_OF_REQUESTS_START, GET_LIST_OF_REQUESTS_SUCCESS, STORE_ADDITIONAL_INFO_FAILURE, STORE_ADDITIONAL_INFO_START, STORE_ADDITIONAL_INFO_SUCCESS, STORE_BIRTHDAY_INFO_FAILURE, STORE_BIRTHDAY_INFO_START, STORE_BIRTHDAY_INFO_SUCCESS, STORE_DETAILS_FAILURE, STORE_DETAILS_START, STORE_DETAILS_SUCCESS } from "../types/profileTypes";

const profileInitial = {
    listOfRequests: null,
    favoriteJobs: null,
    profileInfo: null,
    createNewSchoolMessage: null,
    storeAdditionalInfoMessage: null,
    profile: null,
    createNewCityMessage: null,
}

export const profileReducer = (
    state = profileInitial,
    action
) => {
    switch (action.type) {
        case GET_LIST_OF_REQUESTS_START:
            return {
                ...state,
                getting: true
            }
        case GET_LIST_OF_REQUESTS_SUCCESS:
            return {
                ...state,
                getting: false,
                listOfRequests: action.payload.listOfRequests
            }
        case GET_LIST_OF_REQUESTS_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }
        case GET_FAVORITE_JOBS_START:
            return {
                ...state,
                getting: true
            }
        case GET_FAVORITE_JOBS_SUCCESS:
            return {
                ...state,
                getting: false,
                favoriteJobs: action.payload.favoriteJobs
            }
        case GET_FAVORITE_JOBS_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }
        case GET_INFO_FOR_PROFILE_START:
            return {
                ...state,
                getting: true
            }
        case GET_INFO_FOR_PROFILE_SUCCESS:
            return {
                ...state,
                getting: false,
                profileInfo: action.payload.profileInfo
            }
        case GET_INFO_FOR_PROFILE_FAILURE:
            return {
                ...state,
                getting: false,
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
                createNewSchoolMessage: action.payload.createNewSchoolMessage
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
                storeAdditionalInfoMessage: action.payload.storeAdditionalInfoMessage
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
                profile: action.payload.profile
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
                createNewCityMessage: action.payload.createNewCityMessage
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
                profile: action.payload.profile
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