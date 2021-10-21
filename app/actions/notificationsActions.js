import { NOTIFICATIONS_CHANNEL_ERROR, NOTIFICATIONS_CHANNEL_LISTENER, NOTIFICATIONS_CHANNEL_ON } from "../types/notificationsTypes"

export const notificationsChennelOn = () => ({
    type: NOTIFICATIONS_CHANNEL_ON
})

export const notificationsChennelListener = (notification) => ({
    type: NOTIFICATIONS_CHANNEL_LISTENER,
    payload: {
        notification
    }
})

export const notificationsChannelError = (notificationsError) => ({
    type: NOTIFICATIONS_CHANNEL_ERROR,
    payload: {
        notificationsError
    }
})
