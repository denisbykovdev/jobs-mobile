import { GET_BLOGS_FAILURE, GET_BLOGS_START, GET_BLOGS_SUCCESS, GET_POST_FAILURE, GET_POST_START, GET_POST_SUCCESS, LIKE_UNLIKE_POST_FAILURE, LIKE_UNLIKE_POST_START, LIKE_UNLIKE_POST_SUCCESS } from "../types/blogsTypes";

const blogsInitial = {
    blogs: null,
    post: null,
    postMessage: null
}

export const blogsReducer = (
    state = blogsInitial,
    action
) => {
    switch (action.type) {
        case GET_BLOGS_START:
            return {
                ...state,
                getting: true
            }
        case GET_BLOGS_SUCCESS:
            return {
                ...state,
                getting: false,
                blogs: action.payload.blogs
            }
        case GET_BLOGS_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }
        case GET_POST_START:
            return {
                ...state,
                getting: true
            }
        case GET_POST_SUCCESS:
            return {
                ...state,
                getting: false,
                post: action.payload.post
            }
        case GET_POST_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }
        case LIKE_UNLIKE_POST_START:
            return {
                ...state,
                getting: true
            }
        case LIKE_UNLIKE_POST_SUCCESS:
            return {
                ...state,
                getting: false,
                postMessage: action.payload.postMessage
            }
        case LIKE_UNLIKE_POST_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}