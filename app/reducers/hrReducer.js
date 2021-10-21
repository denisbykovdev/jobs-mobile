import { GET_HR_ACCOUNT_FAILURE, GET_HR_ACCOUNT_START, GET_HR_ACCOUNT_SUCCESS, STORE_HR_ACCOUNT_FAILURE, STORE_HR_ACCOUNT_START, STORE_HR_ACCOUNT_SUCCESS } from "../types/hrTypes";

const hrInitial = {
    account: null
}

export const hrReducer = (
    state = hrInitial,
    action
) => {
    switch (action.type) {
        case GET_HR_ACCOUNT_START:
            return {
                ...state,
                getting: true
            };
        case GET_HR_ACCOUNT_SUCCESS:
            return {
                ...state,
                getting: false,
                account: action.payload.account
            };
        case GET_HR_ACCOUNT_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            };

        case STORE_HR_ACCOUNT_START:
            return {
                ...state,
                posting: true
            };
        case STORE_HR_ACCOUNT_SUCCESS:
            return {
                ...state,
                posting: false,
                account: action.payload.account
            };
        case STORE_HR_ACCOUNT_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            };

        default:
            return state;
    }
}