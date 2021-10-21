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
    VERIFICATION_SUCCESS,
    WATCH_PROVIDER,
    WATCH_REGISTER,
    WATCH_SIMPLE_TYPES,
    WATCH_VERIFICATION
} from "../types/authTypes";

export const watchSimpleTypes = () => ({
    type: WATCH_SIMPLE_TYPES
})

export const simpleTypesStart = () => ({
    type: SIMPLE_TYPES_START
})

export const simpleTypesSuccess = (
    simpleTypes
) => ({
    type: SIMPLE_TYPES_SUCCESS,
    payload: {
        simpleTypes
    }
})

export const simpleTypesFailure = (error) => ({
    type: SIMPLE_TYPES_FAILURE,
    payload: error
})

export const watchRegister = (
    phone,
    role_id,
    is_hr
) => ({
    type: WATCH_REGISTER,
    payload: {
        phone,
        role_id,
        is_hr
    }
})

export const registerStart = () => ({
    type: REGISTER_START
})

export const registerSuccess = (
    code
) => ({
    type: REGISTER_SUCCESS,
    payload: {
        code
    }
})

export const registerFailure = (
    error
) => ({
    type: REGISTER_FAILURE,
    payload: {
        error
    }
})

export const watchVerification = (
    code
) => ({
    type: WATCH_VERIFICATION,
    payload: {
        code
    }
})

export const verificationStart = () => ({
    type: VERIFICATION_START
})

export const verificationSuccess = (
    token,
    user
) => ({
    type: VERIFICATION_SUCCESS,
    payload: {
        token,
        user
    }
})

export const verificationFailure = (
    error
) => ({
    type: VERIFICATION_FAILURE,
    payload: {
        error
    }
})

export const watchProvider = (
    providerName,
    user,
    accessToken,
    refreshToken,
    idToken,
    role_id,
    is_hr
) => ({
    type: WATCH_PROVIDER,
    payload: {
        providerName,
        user,
        accessToken,
        refreshToken,
        idToken,
        role_id,
        is_hr
    }
})

export const providerStart = () => ({
    type: PROVIDER_START
})

export const providerSuccess = (
    token,
    user
) => ({
    type: PROVIDER_SUCCESS,
    payload: {
        token,
        user
    }
})

export const providerFailure = (
    error
) => ({
    type: PROVIDER_FAILURE,
    payload: {
        error
    }
})
