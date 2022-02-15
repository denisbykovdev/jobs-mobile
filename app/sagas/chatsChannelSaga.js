import { call, put, take } from "@redux-saga/core/effects";
import { chatsChannelError, chatsChennelListener, chatsChennelOn } from "../actions/chatActions";
import chatsChannel from "../channels/chatsChannel";
import { io } from 'socket.io-client'

function connect() {
    const socket = io();
    return new Promise(resolve => {
      socket.on('connect', () => {
        resolve(socket);
      });
    });
  }

export default function* chatsChannelSaga() {
    try {
        const socket = yield call(connect)

        yield put(chatsChennelOn())

        const channel = yield call(chatsChannel)

        while (true) {
            const socketMsg = yield take(channel)

            yield put(chatsChennelListener(
                socketMsg
            ))
        }
    } catch (error) {
        console.log(
            `--- chatsChannelSaga/catch:`, error
        )
        channel.close()
        yield put(chatsChannelError(error))
    }
}