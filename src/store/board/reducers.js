import { types } from "../actionTypes";

const initialState = {
  boards: [],
  board: null,
  lists: [],
  listTasks: null,
  isLoading: false,
  error: ''
};

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_BOARDS_START:
      return {
        ...state,
        isLoading: true
      };
    case types.FETCH_BOARDS_SUCCESS:
      return {
        ...state,
        boards: action.payload,
        isLoading: false
      }
    case types.FETCH_BOARDS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    case types.FETCH_BOARD_BY_ID_START:
      return {
        ...state,
        isLoading: true
      }
    case types.FETCH_BOARD_BY_ID_SUCCESS:
      const boardFromPayload = Object.entries(action.payload);
      const listsArr = [];
      boardFromPayload.forEach(item => item[0].includes('list') && listsArr.push(item[1]));
      return {
        ...state,
        board: action.payload,
        lists: listsArr,
        isLoading: false
      }
    case types.FETCH_BOARD_BY_ID_ERROR:
      return {
        ...state,
        isLoading: false
      }
    case types.ADD_BOARD_START:
      return {
        ...state,
        isLoading: true
      };
    case types.ADD_BOARD_SUCCESS:
      return {
        ...state,
        boards: [...state.boards, action.payload],
        isLoading: false
      };
      case types.ADD_BOARD_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.DELETE_BOARD_START:
      return {
        ...state,
        isLoading: true
      };
    case types.DELETE_BOARD_SUCCESS:
      return {
        ...state,
        boards: action.payload,
        isLoading: false
      };
    case types.DELETE_BOARD_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.ADD_LIST_START:
      return {
        ...state,
        isLoading: true
      };
    case types.ADD_LIST_SUCCESS:
      const data = Object.entries(action.payload);
      const lists = [];
      data.forEach(item => item[0].includes('list') && lists.push(item[1]));
      return {
        ...state,
        lists,
        isLoading: false
      };
    case types.ADD_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.DELETE_LIST_START:
      return {
        ...state,
        isLoading: true
      };
    case types.DELETE_LIST_SUCCESS:
      return {
        ...state,
        lists: action.payload,
        isLoading: false
      };
    case types.DELETE_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.ADD_TASK_START:
      return {
        ...state,
        isLoading: true
      };
    case types.ADD_TASK_SUCCESS:
      return {
        ...state,
        listTasks: action.payload,
        isLoading: false
      };
    case types.ADD_TASK_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.CHANGE_TASK_STATUS:
      const cBoard = state.boards.find(board => board.id === action.boardID);
      const cList = cBoard.lists.find(list => list.id === action.listID);
      let cTask = cList.tasks.find(task => task.id === action.taskID);
      cTask.status = action.status;
      return { ...state };
    case types.ADD_TASK_TO_ANOTHER_LIST:
      const board = state.boards.find(board => board.id === action.boardID);
      const list = board.lists.find(list => list.id === action.listID);
      const initialList = board.lists.find(
        list => list.id === action.initialListID
      );
      if (!list.tasks.includes(action.task)) list.tasks.push(action.task);
      const taskIndex = initialList.tasks.findIndex(
        task => task.id === action.task.id
      );
      initialList.tasks.splice(taskIndex, 1);
      return { ...state };
    default:
      return state;
  }
}
