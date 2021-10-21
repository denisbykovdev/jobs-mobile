import { call, put, take } from "@redux-saga/core/effects";
import { chatsChannelError, chatsChennelListener, chatsChennelOn } from "../actions/chatActions";
import chatsChannel from "../channels/chatsChannel";

export default function* chatsChannelSaga() {
    try {
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