import { GET_BLOGS_FAILURE, GET_BLOGS_START, GET_BLOGS_SUCCESS, GET_POST_FAILURE, GET_POST_START, GET_POST_SUCCESS, LIKE_UNLIKE_POST_FAILURE, LIKE_UNLIKE_POST_START, LIKE_UNLIKE_POST_SUCCESS, WATCH_GET_BLOGS, WATCH_GET_POST, WATCH_LIKE_UNLIKE_POST } from "../types/blogsTypes";

export const watchGetBlogs = (token, category_id, searchString) => ({
    type: WATCH_GET_BLOGS,
    payload: {
        token,
        category_id,
        searchString
    }
})

export const getBlogsStart = () => ({
    type: GET_BLOGS_START
})

export const getBlogsSuccess = (blogs) => ({
    type: GET_BLOGS_SUCCESS,
    payload: {
        blogs
    }
})

export const getBlogsFailure = (error) => ({
    type: GET_BLOGS_FAILURE,
    payload: {
        error
    }
})

export const watchGetPost = (
    token,
    post_id
) => ({
    type: WATCH_GET_POST,
    payload: {
        token,
        post_id
    }
})

export const getPostStart = () => ({
    type: GET_POST_START
})

export const getPostSuccess = (post) => ({
    type: GET_POST_SUCCESS,
    payload: {
        post
    }
})

export const getPostFailure = (error) => ({
    type: GET_POST_FAILURE,
    payload: {
        error
    }
})

export const watchLikeUnlikePost = (token, post_id) => ({
    type: WATCH_LIKE_UNLIKE_POST,
    payload: {
        token,
        post_id
    }
})

export const likeUnlikePostStart = () => ({
    type: LIKE_UNLIKE_POST_START
})

export const likeUnlikePostSuccess = (postMessage) => ({
    type: LIKE_UNLIKE_POST_SUCCESS,
    payload: {
        postMessage
    }
})

export const likeUnlikePostFailure = (error) => ({
    type: LIKE_UNLIKE_POST_FAILURE,
    payload: {
        error
    }
})