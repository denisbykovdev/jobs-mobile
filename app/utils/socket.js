import io from 'socket.io-client';
import { socketHost } from './api';

const socket = io(
    `${socketHost}`,
    {
        transports: ['websocket']
    }
)

socket.connect(
    // {
    //     path: '/chats.1/',
    //     // reconnectionDelay: 1000,
    //     // reconnection: true,
    //     // reconnectionAttempts: 10,
    //     transports: ['websocket'],
    //     agent: false,
    //     upgrade: false,
    //     rejectUnauthorized: false,
    //     withCredentials: true
    // }
)

export default socket