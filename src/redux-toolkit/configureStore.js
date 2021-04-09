import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

const reducer= combineReducers({
    counter: counterSlice
});
const store= configureStore({
    reducer,
    middleware:[...getDefaultMiddleware({thunk: false})]
});

export default store;