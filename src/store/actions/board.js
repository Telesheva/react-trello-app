import { ADD_BOARD, ADD_BOARD_LIST } from "./actionTypes";
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
