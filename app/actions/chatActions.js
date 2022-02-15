import { CHATS_CHANNEL_ERROR, CHATS_CHANNEL_LISTENER, CHATS_CHANNEL_ON, CREATE_MESSAGE_FAILURE, CREATE_MESSAGE_START, CREATE_MESSAGE_SUCCESS, GET_CONVERSATIONS_FAILURE, GET_CONVERSATIONS_START, GET_CONVERSATIONS_SUCCESS, GET_MESSAGES_FAILURE, GET_MESSAGES_START, GET_MESSAGES_SUCCESS, OPEN_CONVERSATION_FAILURE, OPEN_CONVERSATION_START, OPEN_CONVERSATION_SUCCESS, WATCH_CREATE_MESSAGE, WATCH_GET_CONVERSATIONS, WATCH_GET_MESSAGES, WATCH_OPEN_CONVERSATION } from "../types/chatTypes";

export const watchGetConversations = (token) => ({
    type: WATCH_GET_CONVERSATIONS,
    payload: {
        token
    }
})

export const getConversationsStart = () => ({
    type: GET_CONVERSATIONS_START
})

export const getConversationsSuccess = (conversations) => ({
    type: GET_CONVERSATIONS_SUCCESS,
    payload: {
        conversations
    }
})

export const getConversationsFailure = (error) => ({
    type: GET_CONVERSATIONS_FAILURE,
    payload: {
        error
    }
})

export const watchGetMessages = (
    token,
    chat_id
) => ({
    type: WATCH_GET_MESSAGES,
    payload: {
        token,
        chat_id
    }
})

export const getMessagesStart = () => ({
    type: GET_MESSAGES_START
})

export const getMessagesSuccess = (
    messages
) => ({
    type: GET_MESSAGES_SUCCESS,
    payload: {
        messages
    }
})

export const getMessagesFailure = (error) => ({
    type: GET_MESSAGES_FAILURE,
    payload: {
        error
    }
})

export const watchOpenConversation = (
    token,
    chat_id
) => ({
    type: WATCH_OPEN_CONVERSATION,
    payload: {
        token,
        chat_id
    }
})

export const openConversationStart = () => ({
    type: OPEN_CONVERSATION_START
})

export const openConversationSuccess = (
    openConversationMessages
) => ({
    type: OPEN_CONVERSATION_SUCCESS,
    payload: {
        openConversationMessages
    }
})

export const openConversationFailure = (error) => ({
    type: OPEN_CONVERSATION_FAILURE,
    payload: {
        error
    }
})

export const watchCreateMessage = (
    token,
    chat_id,
    message,
    date,
    is_me,
    // chat_id
) => ({
    type: WATCH_CREATE_MESSAGE,
    payload: {
        token,
        chat_id,
        message,
        date,
        is_me,
        // chat_id
    }
})

export const createMessageStart = () => ({
    type: CREATE_MESSAGE_START
})

export const createMessageSuccess = (
    message
) => ({
    type: CREATE_MESSAGE_SUCCESS,
    payload: {
        message
    }
})

export const createMessageFailure = (error) => ({
    type: CREATE_MESSAGE_FAILURE,
    payload: {
        error
    }
})

export const chatsChennelOn = () => ({
    type: CHATS_CHANNEL_ON
})

export const chatsChennelListener = (socketMsg) => ({
    type: CHATS_CHANNEL_LISTENER,
    payload: {
        socketMsg
    }
})

export const chatsChannelError = (error) => ({
    type: CHATS_CHANNEL_ERROR,
    payload: {
        error
    }
})

