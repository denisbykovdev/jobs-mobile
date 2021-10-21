import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import combaineReducers from './app/reducers/combaineReducers';
import rootSaga from './app/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware
];

export const store = createStore(
    combaineReducers,
    {},
    composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);