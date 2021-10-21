import { GET_HR_ACCOUNT_FAILURE, GET_HR_ACCOUNT_START, GET_HR_ACCOUNT_SUCCESS, STORE_HR_ACCOUNT_FAILURE, STORE_HR_ACCOUNT_START, STORE_HR_ACCOUNT_SUCCESS, WATCH_GET_HR_ACCOUNT, WATCH_STORE_HR_ACCOUNT } from "../types/hrTypes";

export const watchGetHrAccount = (
    token
) => ({
    type: WATCH_GET_HR_ACCOUNT,
    payload: {
        token
    }
});

export const getHrAccountStart = () => ({
    type: GET_HR_ACCOUNT_START
});

export const getHrAccountSuccess = (
    account
) => ({
    type: GET_HR_ACCOUNT_SUCCESS,
    payload: {
        account
    }
});

export const getHrAccountFailure = (error) => ({
    type: GET_HR_ACCOUNT_FAILURE,
    payload: {
        error
    }
});

export const watchStoreHrAccount = (
    token,
    id,
    first_name,
    last_name,
    phone,
    organization_name,
    areas,
    email,
    about,
    avatar
) => ({
    type: WATCH_STORE_HR_ACCOUNT,
    payload: {
        token,
        id,
        first_name,
        last_name,
        phone,
        organization_name,
        areas,
        email,
        about,
        avatar
    }
});

export const storeHrAccountStart = () => ({
    type: STORE_HR_ACCOUNT_START
});

export const storeHrAccountSuccess = (
    account
) => ({
    type: STORE_HR_ACCOUNT_SUCCESS,
    payload: {
        account
    }
});

export const storeHrAccountFailure = (error) => ({
    type: STORE_HR_ACCOUNT_FAILURE,
    payload: {
        error
    }
});