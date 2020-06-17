import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import { types } from '../actionTypes';
import {
  addBoardSuccess,
  addBoardError,
  fetchBoardsSuccess,
  fetchBoardsError,
  fetchBoardByIdError,
  fetchBoardByIdSuccess
} from './actions';
import {
  addBoardQuery,
  fetchBoardByIdQuery,
  fetchBoardsQuery
} from '../../api/boardQueries';

function* fetchBoards() {
  try {
    const response = yield call(fetchBoardsQuery);

    yield put(fetchBoardsSuccess(response))
  } catch (error) {
    yield put(fetchBoardsError(error))
  }
}

function* fetchBoardById({payload}) {
  try {
    const response = yield call(fetchBoardByIdQuery, payload);

    yield put(fetchBoardByIdSuccess(response))
  } catch (error) {
    yield put(fetchBoardByIdError(error))
  }
}

function* createBoard({payload}) {
  try {
    const response = yield call(addBoardQuery, payload);

    yield put(addBoardSuccess(response));
  } catch (error) {
    yield put(addBoardError, error);
  }
}

export default function* boardSaga() {
  yield takeLatest(types.FETCH_BOARDS_START, fetchBoards);
  yield takeLatest(types.FETCH_BOARD_BY_ID_START, fetchBoardById);
  yield takeEvery(types.ADD_BOARD_START, createBoard);
}