import { GET_REVIEWS_DATA_FAILURE, GET_REVIEWS_DATA_START, GET_REVIEWS_DATA_SUCCESS, GET_REVIEWS_FAILURE, GET_REVIEWS_START, GET_REVIEWS_SUCCESS, STORE_REVIEW_FAILURE, STORE_REVIEW_START, STORE_REVIEW_SUCCESS, WATCH_GET_REVIEWS, WATCH_GET_REVIEWS_DATA, WATCH_STORE_REVIEW } from "../types/reviewsTypes";

export const watchGetReviews = (
    token,
    job_id
) => ({
    type: WATCH_GET_REVIEWS,
    payload: {
        token,
        job_id
    }
})

export const getReviewsStart = () => ({
    type: GET_REVIEWS_START
})

export const getReviewsSuccess = (
    reviews
) => ({
    type: GET_REVIEWS_SUCCESS,
    payload: {
        reviews
    }
})

export const getReviewsFailure = (error) => ({
    type: GET_REVIEWS_FAILURE,
    payload: {
        error
    }
})

export const watchGetReviewsData = (
    token,
    job_id
) => ({
    type: WATCH_GET_REVIEWS_DATA,
    payload: {
        token,
        job_id
    }
})

export const getReviewsDataStart = () => ({
    type: GET_REVIEWS_DATA_START
})

export const getReviewsDataSuccess = (
    reviewsData
) => ({
    type: GET_REVIEWS_DATA_SUCCESS,
    payload: {
        reviewsData
    }
})

export const getReviewsDataFailure = (error) => ({
    type: GET_REVIEWS_DATA_FAILURE,
    payload: {
        error
    }
})

export const watchStoreReview = (
    job_id,
    toekn,
    first_name,
    last_name,
    phone,
    show_info,
    description,
    stars,
    date,
    duration,
    avatar
) => ({
    type: WATCH_STORE_REVIEW,
    payload: {
        job_id,
        toekn,
        first_name,
        last_name,
        phone,
        show_info,
        description,
        stars,
        date,
        duration,
        avatar
    }
})

export const storeReviewStart = () => ({
    type: STORE_REVIEW_START
})

export const storeReviewSuccess = (
    reviewMessage
) => ({
    type: STORE_REVIEW_SUCCESS,
    payload: {
        reviewMessage
    }
})

export const storeReviewFailure = (error) => ({
    type: STORE_REVIEW_FAILURE,
    payload: {
        error
    }
})