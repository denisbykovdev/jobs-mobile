import { call, put, take } from "@redux-saga/core/effects";
import { notificationsChannelError, notificationsChennelListener, notificationsChennelOn } from "../actions/notificationsActions";
import notificationsChannel from "../channels/notificationsChannel";
import { io } from 'socket.io-client'

function connect() {
    const socket = io();
    return new Promise(resolve => {
      socket.on('connect', () => {
        resolve(socket);
      });
    });
  }


export default function* notificationsChannelSaga() {
    try {
        const socket = yield call(connect)

        yield put(notificationsChennelOn())

        const channel = yield call(notificationsChannel)
        
        while (true) {
            const notification = yield take(channel)

            yield put(notificationsChennelListener(
                notification
            ))
        }
    } catch (error) {
        console.log(
            `--- notificationsChannelSaga/catch:`, error
        )
        yield put(notificationsChannelError(error))
    }
}