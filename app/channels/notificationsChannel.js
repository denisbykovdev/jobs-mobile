import { eventChannel } from "@redux-saga/core";
import { notificationsSocketChannel } from "../utils/api"
import socket from "../utils/socket"

export default function notificationsChannel() {
    const subscribe = emitter => {
        socket.on(notificationsSocketChannel, emitter);

        return () => socket.removeListener(notificationsSocketChannel, emitter);
    }

    return eventChannel(subscribe);
}

