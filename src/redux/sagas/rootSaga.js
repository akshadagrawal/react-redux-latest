import {takeLatest} from 'redux-saga/effects';
import handleGetUser from './handlers/user';
import {GET_USER} from '../ducks/user';

export default function* watcherSaga() {
    yield takeLatest (GET_USER, handleGetUser);
}; 