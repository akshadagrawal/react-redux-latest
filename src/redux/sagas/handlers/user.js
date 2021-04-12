import {call, put} from 'redux-saga/effects';
import { requestGetUser } from '../requests/user';
//import {setUser} from '../../ducks/user';
import {setUser} from '../../../redux-toolkit/userSlice'

export default function* handleGetUser(action){
    try{
     const response = yield call(requestGetUser);
     const {data} = response;
    yield  put(setUser(data));  

    }catch(error){
        console.log(error);
    }
}