import { Header } from "react-native/Libraries/NewAppScreen";
import { CHATS_CHANNEL_ERROR, CHATS_CHANNEL_LISTENER, CHATS_CHANNEL_ON, CREATE_MESSAGE_FAILURE, CREATE_MESSAGE_START, CREATE_MESSAGE_SUCCESS, GET_CONVERSATIONS_FAILURE, GET_CONVERSATIONS_START, GET_CONVERSATIONS_SUCCESS, GET_MESSAGES_FAILURE, GET_MESSAGES_START, GET_MESSAGES_SUCCESS, OPEN_CONVERSATION_FAILURE, OPEN_CONVERSATION_START, OPEN_CONVERSATION_SUCCESS } from "../types/chatTypes";

const chatInitial = {
    // conversations: null,
    conversations: [
        {
            "id": 1,
            "first_name": "Mush",
            "last_name": "Harutyunyan",
            "organization_name": "אופק",
            "avatar": "",
            "new_message": 2
        },
        {
            "id": 2,
            "first_name": "Mush",
            "last_name": "Harutyunyan",
            "organization_name": "אופק",
            "avatar": "",
            "new_message": 0
        },
    ],
    // messages: null,
    messages: [
        {
            "id": 1,
            "message": 'hi',
            "date": "2020-10-29T09:29:58.000000Z",
            "is_me": true,
            "chat_id": 1
        },
        {
            "id": 2,
            "message": "New message back",
            "date": "2020-10-29T09:29:58.000000Z",
            "is_me": false,
            "chat_id": 1
        }
    ],
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
                // message: action.payload.message
                messages: [ ...state.messages, action.payload.message ]
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
                socketMsg: [...state.socketMsg, action.payload.socketMsg],
                conversations: 
                    state.conversations.filter(
                        conversation.id 
                        === action.payload.socketMsg.chat_id
                        ).length === 0
                            ? [ ...state.socketMsg, action.payload.socketMsg ]
                            : [ ...state.conversations.map(
                        conversation =>
                            Number(conversation.id) === Number(action.payload.socketMsg.chat_id)
                                ? {
                                    ...conversation,
                                    new_message: Number(conversation.new_message) + 1,
                                    date: action.payload.socketMsg.date
                                }
                                :
                                conversation
                )],
                messages: messages[0].chat_id 
                    === action.payload.socketMsg.chat_id
                        ? [ ...state.messages, action.payload.socketMsg ]
                        : [ ...state.messages ]
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