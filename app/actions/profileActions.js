import { CREATE_NEW_CITY_FAILURE, CREATE_NEW_CITY_START, CREATE_NEW_CITY_SUCCESS, CREATE_NEW_SCHOOL_FAILURE, CREATE_NEW_SCHOOL_START, CREATE_NEW_SCHOOL_SUCCESS, GET_FAVORITE_JOBS_FAILURE, GET_FAVORITE_JOBS_START, GET_FAVORITE_JOBS_SUCCESS, GET_INFO_FOR_PROFILE_FAILURE, GET_INFO_FOR_PROFILE_START, GET_INFO_FOR_PROFILE_SUCCESS, GET_LIST_OF_REQUESTS_FAILURE, GET_LIST_OF_REQUESTS_START, GET_LIST_OF_REQUESTS_SUCCESS, STORE_ADDITIONAL_INFO_FAILURE, STORE_ADDITIONAL_INFO_START, STORE_ADDITIONAL_INFO_SUCCESS, STORE_BIRTHDAY_INFO_FAILURE, STORE_BIRTHDAY_INFO_START, STORE_BIRTHDAY_INFO_SUCCESS, STORE_DETAILS_FAILURE, STORE_DETAILS_START, STORE_DETAILS_SUCCESS, WATCH_CREATE_NEW_CITY, WATCH_CREATE_NEW_SCHOOL, WATCH_GET_FAVORITE_JOBS, WATCH_GET_INFO_FOR_PROFILE, WATCH_GET_LIST_OF_REQUESTS, WATCH_STORE_ADDITIONAL_INFO, WATCH_STORE_BIRTHDAY_INFO, WATCH_STORE_DETAILS } from "../types/profileTypes";

export const watchGetListOfRequests = (token) => ({
    type: WATCH_GET_LIST_OF_REQUESTS,
    payload: {
        token
    }
})

export const getListOfRequestsStart = () => ({
    type: GET_LIST_OF_REQUESTS_START
})

export const getListOfRequestsSuccess = (listOfRequests) => ({
    type: GET_LIST_OF_REQUESTS_SUCCESS,
    payload: {
        listOfRequests
    }
})

export const getListOfRequestsFailure = (error) => ({
    type: GET_LIST_OF_REQUESTS_FAILURE,
    payload: {
        error
    }
})

export const watchGetFavoriteJobs = (token) => ({
    type: WATCH_GET_FAVORITE_JOBS,
    payload: {
        token
    }
})

export const getFavoriteJobsStart = () => ({
    type: GET_FAVORITE_JOBS_START
})

export const getFavoriteJobsSuccess = (favoriteJobs) => ({
    type: GET_FAVORITE_JOBS_SUCCESS,
    payload: {
        favoriteJobs
    }
})

export const getFavoriteJobsFailure = (error) => ({
    type: GET_FAVORITE_JOBS_FAILURE,
    payload: {
        error
    }
})

export const watchGetInfoForProfile = (token) => ({
    type: WATCH_GET_INFO_FOR_PROFILE,
    payload: {
        token
    }
})

export const getInfoForProfileStart = () => ({
    type: GET_INFO_FOR_PROFILE_START
})

export const getInfoForProfileSuccess = (profileInfo) => ({
    type: GET_INFO_FOR_PROFILE_SUCCESS,
    payload: {
        profileInfo
    }
})

export const getInfoForProfileFailure = (error) => ({
    type: GET_INFO_FOR_PROFILE_FAILURE,
    payload: {
        error
    }
})

export const watchCreateNewSchool = (
    token,
    name,
    email,
    type_id
) => ({
    type: WATCH_CREATE_NEW_SCHOOL,
    payload: {
        token,
        name,
        email,
        type_id
    }
})

export const createNewSchoolStart = () => ({
    type: CREATE_NEW_SCHOOL_START
})

export const createNewSchoolSuccess = (createNewSchoolMessage) => ({
    type: CREATE_NEW_SCHOOL_SUCCESS,
    payload: {
        createNewSchoolMessage
    }
})

export const createNewSchoolFailure = (error) => ({
    type: CREATE_NEW_SCHOOL_FAILURE,
    payload: {
        error
    }
})

export const watchStoreAdditionalInfo = (
    token,
    email,
    school_id,
    type_id
) => ({
    type: WATCH_STORE_ADDITIONAL_INFO,
    payload: {
        token,
        email,
        school_id,
        type_id
    }
})

export const storeAdditionalInfoStart = () => ({
    type: STORE_ADDITIONAL_INFO_START
})

export const storeAdditionalInfoSuccess = (storeAdditionalInfoMessage) => ({
    type: STORE_ADDITIONAL_INFO_SUCCESS,
    payload: {
        storeAdditionalInfoMessage
    }
})

export const storeAdditionalInfoFailure = (error) => ({
    type: STORE_ADDITIONAL_INFO_FAILURE,
    payload: {
        error
    }
})

export const watchStoreBirthdayInfo = (
    token,
    is_regular,
    day,
    month,
    year
) => ({
    type: WATCH_STORE_BIRTHDAY_INFO,
    payload: {
        token,
        is_regular,
        day,
        month,
        year
    }
})

export const storeBirthdayInfoStart = () => ({
    type: STORE_BIRTHDAY_INFO_START
})

export const storeBirthdayInfoSuccess = (
    profile
) => ({
    type: STORE_BIRTHDAY_INFO_SUCCESS,
    payload: {
        profile
    }
})

export const storeBirthdayInfoFailure = (error) => ({
    type: STORE_BIRTHDAY_INFO_FAILURE,
    payload: {
        error
    }
})

export const watchCreateNewCity = (
    token,
    first_name,
    last_name,
    name
) => ({
    type: WATCH_CREATE_NEW_CITY,
    payload: {
        token,
        first_name,
        last_name,
        name
    }
})

export const createNewCityStart = () => ({
    type: CREATE_NEW_CITY_START
})

export const createNewCitySuccess = (
    createNewCityMessage
) => ({
    type: CREATE_NEW_CITY_SUCCESS,
    payload: {
        createNewCityMessage
    }
})

export const createNewCityFailure = (error) => ({
    type: CREATE_NEW_CITY_FAILURE,
    payload: {
        error
    }
})

export const watchStoreDetails = (
    token,
    first_name,
    last_name,
    city_id
) => ({
    type: WATCH_STORE_DETAILS,
    payload: {
        token,
        first_name,
        last_name,
        city_id
    }
})

export const storeDetailsStart = () => ({
    type: STORE_DETAILS_START
})

export const storeDetailsSuccess = (profile) => ({
    type: STORE_DETAILS_SUCCESS,
    payload: {
        profile
    }
})

export const storeDetailsFaulure = (error) => ({
    type: STORE_DETAILS_FAILURE,
    payload: {
        error
    }
})
