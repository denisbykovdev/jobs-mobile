import { NOTIFICATIONS_CHANNEL_ERROR, NOTIFICATIONS_CHANNEL_LISTENER, NOTIFICATIONS_CHANNEL_ON } from "../types/notificationsTypes";

const notificationsInitial = {
    notifications: [
        {
            id: 1,
            title: 'notification title',
            text: 'notification text',
            created_at: "2020-10-29T09:29:58.000000Z",
            read: false
        },
        {
            id: 2,
            title: 'notification title 2',
            text: 'notification text 2 notification text 2 notification text 2 notification text 2 https://test.link.com',
            created_at: "2020-10-29T09:29:58.000000Z",
            read: true
        },
    ],
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
                notifications: [...state.notifications, action.payload.notification]
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
