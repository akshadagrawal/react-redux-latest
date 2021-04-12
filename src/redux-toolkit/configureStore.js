import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import createSagaMiddleware from 'redux-saga';
import watcherSaga from '../redux/sagas/rootSaga';
import userSlice from './userSlice';

const sagaMiddleware = createSagaMiddleware();

const reducer= combineReducers({
    counter: counterSlice,
    user: userSlice
});
const store= configureStore({
    reducer,
    middleware:[...getDefaultMiddleware({thunk: false}), sagaMiddleware]
});

sagaMiddleware.run(watcherSaga);

export default store;