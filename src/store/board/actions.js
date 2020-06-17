import {types} from "../actionTypes";
import { v4 as uuidv4 } from "uuid";

export function fetchBoardsStart() {
  return {
    type: types.FETCH_BOARDS_START
  }
}

export function fetchBoardsSuccess(payload) {
  return {
    type: types.FETCH_BOARDS_SUCCESS,
    payload
  }
}

export function fetchBoardsError(payload) {
  return {
    type: types.FETCH_BOARDS_START,
    payload
  }
}

export function fetchBoardByIdStart(payload) {
  return {
    type: types.FETCH_BOARD_BY_ID_START,
    payload
  }
}

export function fetchBoardByIdSuccess(payload) {
  return {
    type: types.FETCH_BOARD_BY_ID_SUCCESS,
    payload
  }
}

export function fetchBoardByIdError(payload) {
  return {
    type: types.FETCH_BOARD_BY_ID_ERROR,
    payload
  }
}

export function addBoardStart(payload) {
  return {
    type: types.ADD_BOARD_START,
    payload
  }
}

export function addBoardSuccess(payload) {
  return {
    type: types.ADD_BOARD_SUCCESS,
    payload
  };
}

export function addBoardError(payload) {
  return {
    type: types.ADD_BOARD_ERROR,
    payload
  };
}

export function addBoardList(boardID, title) {
  return {
    type: types.ADD_BOARD_LIST,
    list: {
      id: uuidv4(),
      title,
      tasks: []
    },
    id: boardID
  };
}

export function addBoardTask(boardID, listID, title) {
  return {
    type: types.ADD_BOARD_TASK,
    task: {
      id: uuidv4(),
      title,
      status: "in progress"
    },
    boardID,
    listID
  };
}

export function changeTaskStatus(boardID, listID, taskID, status) {
  return {
    type: types.CHANGE_TASK_STATUS,
    status,
    boardID,
    listID,
    taskID
  };
}

export function addTaskToAnotherList(task, listID, initialListID, boardID) {
  return {
    type: types.ADD_TASK_TO_ANOTHER_LIST,
    task,
    listID,
    initialListID,
    boardID
  };
}
