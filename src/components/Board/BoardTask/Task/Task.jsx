import React from "react";
import "./Task.scss";
import { useDispatch } from "react-redux";
import { changeTaskStatus } from "../../../../store/actions/board";

const Task = ({ id, value, status, listID, boardID }) => {
  const dispatch = useDispatch();

  return (
    <div className={status === "done" ? "task task__done" : "task"}>
      <p className="task__text">{value}</p>
      <p
        className="task__tick"
        onClick={() => dispatch(changeTaskStatus(boardID, listID, id, "done"))}
      >
        ✓
      </p>
    </div>
  );
};

export default Task;
