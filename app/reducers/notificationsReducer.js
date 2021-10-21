import { NOTIFICATIONS_CHANNEL_ERROR, NOTIFICATIONS_CHANNEL_LISTENER, NOTIFICATIONS_CHANNEL_ON } from "../types/notificationsTypes";

const notificationsInitial = {
    notifications: [],
    notificationsError: null,
    notificationsListening: false
}

export const notificationsReducer = (
    state = notificationsInitial,
    action
) => {
    switch (action.type) {
        case NOTIFICATIONS_CHANNEL_ON:
            return {
                ...state,
                notificationsListening: true
            }
        case NOTIFICATIONS_CHANNEL_LISTENER:
            return {
                ...state,
                notifications: [state.notifications, action.payload.notification]
            }
        case NOTIFICATIONS_CHANNEL_ERROR:
            return {
                ...state,
                notificationsListening: false,
                notificationsError: action.payload.notificationsError
            }

        default:
            return state;
    }
}
