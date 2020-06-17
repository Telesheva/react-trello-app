import { fork } from 'redux-saga/effects';
import boardSaga from './board/saga';

export default function* rootSaga() {
  yield fork(boardSaga)
}