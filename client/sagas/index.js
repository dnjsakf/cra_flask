import { all, call } from 'redux-saga/effects'
import content from './content'

export default function* rootSaga() {
    yield all([
        call(content)
    ]);
}