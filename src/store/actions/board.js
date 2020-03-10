import {
  ADD_BOARD,
  ADD_BOARD_LIST,
  ADD_BOARD_TASK,
  CHANGE_TASK_STATUS
} from "./actionTypes";
import { v4 as uuidv4 } from "uuid";

export function createBoard(title) {
  return {
    type: ADD_BOARD,
    board: {
      id: uuidv4(),
      title
    }
  };
}

export function addBoardList(boardID, title) {
  return {
    type: ADD_BOARD_LIST,
    list: {
      id: uuidv4(),
      title
    },
    id: Number(boardID)
  };
}

export function addBoardTask(boardID, listID, title) {
  return {
    type: ADD_BOARD_TASK,
    task: {
      id: uuidv4(),
      title,
      status: "in progress"
    },
    boardID: Number(boardID),
    listID
  };
}

export function changeTaskStatus(boardID, listID, taskID, status) {
  return {
    type: CHANGE_TASK_STATUS,
    status,
    boardID: Number(boardID),
    listID,
    taskID
  };
}
