import {
  ADD_BOARD,
  ADD_BOARD_LIST,
  ADD_BOARD_TASK,
  CHANGE_TASK_STATUS
} from "../actions/actionTypes";

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
          title: "In progress",
          tasks: [
            {
              id: 22,
              title: "Refactor"
            },
            {
              id: 221,
              title: "Add Redux to a project"
            }
          ]
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
    case ADD_BOARD_TASK:
      const currentBoard = state.boards.find(
        board => board.id === action.boardID
      );
      const currentList = currentBoard.lists.find(
        list => list.id === action.listID
      );
      if (!currentList.tasks) currentList.tasks = [];
      currentList.tasks.push(action.task);
      return { ...state };
    case CHANGE_TASK_STATUS:
      const cBoard = state.boards.find(board => board.id === action.boardID);
      const cList = cBoard.lists.find(list => list.id === action.listID);
      let cTask = cList.tasks.find(task => task.id === action.taskID);
      cTask.status = action.status;
      console.log(cTask);
      return { ...state };
    default:
      return state;
  }
}
