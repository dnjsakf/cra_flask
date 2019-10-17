import axios from 'axios'

import { all, call, put, fork, takeLatest } from 'redux-saga/effects'
import { SELECT, SELECT_SUCCESS, SELECT_FAILURE } from '../reducers/content'

function contentAPI( action ){
    console.log('call contentAPI', action );
    return axios( action.payload );
}

function* content( action ){
    try {
        const res = yield call( contentAPI, action );
        yield put({
            type: SELECT_SUCCESS
            , payload: res
        });
    } catch ( err ){
        console.error( err );
        yield put({
            type: SELECT_FAILURE
        });
    }
}

function* watchContent(){
    yield takeLatest( SELECT, content );
}

export default function* contentSaga(){
    yield all([
        fork(watchContent)
    ]);
}