import { ADD_BOARD, ADD_BOARD_LIST } from "../actions/actionTypes";

const initialState = {
  boards: [
    {
      id: 1,
      title: "Education Program",
      lists: [
        {
          id: 100,
          title: "Weekly tasks"
        }
      ]
    },
    {
      id: 2,
      title: "Coffee Project",
      lists: [
        {
          id: 100,
          title: "In progress"
        }
      ]
    },
    {
      id: 3,
      title: "Tasks Project",
      lists: []
    }
  ]
};

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOARD:
      return { ...state, boards: [...state.boards, action.board] };
    case ADD_BOARD_LIST:
      const curBoard = state.boards.find(board => board.id === action.id);
      curBoard.lists.push(action.list);
      return { ...state };
    default:
      return state;
  }
}
