import { call, put, take } from "@redux-saga/core/effects";
import { notificationsChannelError, notificationsChennelListener, notificationsChennelOn } from "../actions/notificationsActions";
import notificationsChannel from "../channels/notificationsChannel";

export default function* notificationsChannelSaga() {
    try {
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