import { GET_REVIEWS_DATA_FAILURE, GET_REVIEWS_DATA_START, GET_REVIEWS_DATA_SUCCESS, GET_REVIEWS_FAILURE, GET_REVIEWS_START, GET_REVIEWS_SUCCESS, STORE_REVIEW_FAILURE, STORE_REVIEW_START, STORE_REVIEW_SUCCESS } from "../types/reviewsTypes";

const reviewsInitial = {
    reviews: null,
    reviewsData: null,
    reviewsMessage: null
}

export const reviewsReducer = (
    state = reviewsInitial,
    action
) => {
    switch (action.type) {
        case GET_REVIEWS_START:
            return {
                ...state,
                getting: true
            }
        case GET_REVIEWS_SUCCESS:
            return {
                ...state,
                getting: false,
                reviews: action.payload.reviews
            }
        case GET_REVIEWS_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }
        case GET_REVIEWS_DATA_START:
            return {
                ...state,
                getting: true
            }
        case GET_REVIEWS_DATA_SUCCESS:
            return {
                ...state,
                getting: false,
                reviewsData: action.payload.reviewsData
            }
        case GET_REVIEWS_DATA_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }
        case STORE_REVIEW_START:
            return {
                ...state,
                posting: true
            }
        case STORE_REVIEW_SUCCESS:
            return {
                ...state,
                posting: false,
                reviewsMessage: action.payload.reviewsMessage
            }
        case STORE_REVIEW_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            }

        default:
            return state;
    }
}