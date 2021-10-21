import { eventChannel } from "@redux-saga/core";
import { chatSocketChannel } from "../utils/api"
import socket from "../utils/socket"

// export default function chatsChannel() {
//     const subscribe = emitter => {
//         socket.on(chatSocketChannel, emitter);

//         return () => socket.removeListener(chatSocketChannel, emitter);
//     }

//     return eventChannel(subscribe);
// }

export default function chatsChannel() {
    return eventChannel(emit => {

        const chatsHandler = (event) => {
            emit(event.payload)
        }

        const errorHandler = (errorEvent) => {
            emit(new Error(errorEvent.reason))
        }

        socket.on(chatSocketChannel, chatsHandler)
        socket.on('error', errorHandler)

        const unsubscribe = () => {
            socket.off(chatSocketChannel, chatsHandler)
        }

        return unsubscribe
    })
}

