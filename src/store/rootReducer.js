import { combineReducers } from "redux";
import boardReducer from "./board/reducers";

export default combineReducers({
  board: boardReducer
});
