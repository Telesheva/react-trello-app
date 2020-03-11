import {
  ADD_BOARD,
  ADD_BOARD_LIST,
  ADD_BOARD_TASK,
  CHANGE_TASK_STATUS,
  ADD_TASK_TO_ANOTHER_LIST
} from "./actionTypes";
import { v4 as uuidv4 } from "uuid";

export function createBoard(title) {
  return {
    type: ADD_BOARD,
    board: {
      id: uuidv4(),
      title,
      lists: []
    }
  };
}

export function addBoardList(boardID, title) {
  return {
    type: ADD_BOARD_LIST,
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
    type: ADD_BOARD_TASK,
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
    type: CHANGE_TASK_STATUS,
    status,
    boardID,
    listID,
    taskID
  };
}

export function addTaskToAnotherList(task, listID, initialListID, boardID) {
  return {
    type: ADD_TASK_TO_ANOTHER_LIST,
    task,
    listID,
    initialListID,
    boardID
  };
}
