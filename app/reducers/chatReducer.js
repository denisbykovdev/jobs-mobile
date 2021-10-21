import { CHATS_CHANNEL_ERROR, CHATS_CHANNEL_LISTENER, CHATS_CHANNEL_ON, CREATE_MESSAGE_FAILURE, CREATE_MESSAGE_START, CREATE_MESSAGE_SUCCESS, GET_CONVERSATIONS_FAILURE, GET_CONVERSATIONS_START, GET_CONVERSATIONS_SUCCESS, GET_MESSAGES_FAILURE, GET_MESSAGES_START, GET_MESSAGES_SUCCESS, OPEN_CONVERSATION_FAILURE, OPEN_CONVERSATION_START, OPEN_CONVERSATION_SUCCESS } from "../types/chatTypes";

const chatInitial = {
    conversations: null,
    messages: null,
    openConversationMessages: null,
    message: null,
    socketMsg: null,
    socketError: null,
    socketListening: false
}

export const chatsReducer = (
    state = chatInitial,
    action
) => {
    switch (action.type) {
        case GET_CONVERSATIONS_START:
            return {
                ...state,
                getting: true
            }
        case GET_CONVERSATIONS_SUCCESS:
            return {
                ...state,
                getting: false,
                conversations: action.payload.conversations
            }
        case GET_CONVERSATIONS_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }
        case GET_MESSAGES_START:
            return {
                ...state,
                getting: true
            }
        case GET_MESSAGES_SUCCESS:
            return {
                ...state,
                getting: false,
                messages: action.payload.messages
            }
        case GET_MESSAGES_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }
        case OPEN_CONVERSATION_START:
            return {
                ...state,
                getting: true
            }
        case OPEN_CONVERSATION_SUCCESS:
            return {
                ...state,
                getting: false,
                openConversationMessages: action.payload.openConversationMessages
            }
        case OPEN_CONVERSATION_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }
        case CREATE_MESSAGE_START:
            return {
                ...state,
                posting: true
            }
        case CREATE_MESSAGE_SUCCESS:
            return {
                ...state,
                posting: false,
                message: action.payload.message
            }
        case CREATE_MESSAGE_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            }
        case CHATS_CHANNEL_ON:
            return {
                ...state,
                socketListening: true
            }
        case CHATS_CHANNEL_LISTENER:
            return {
                ...state,
                socketMsg: action.payload.socketMsg
            }
        case CHATS_CHANNEL_ERROR:
            console.log(
                `--- chatReducer/CHATS_CHANNEL_ERROR`, action.payload.error
            )
            return {
                ...state,
                socketListening: false,
                socketError: action.payload.error
            }

        default:
            return state;
    }
}