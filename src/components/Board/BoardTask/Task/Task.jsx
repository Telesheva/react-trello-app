import React from "react";
import "./Task.scss";
import { useDispatch } from "react-redux";
import { changeTaskStatus } from "../../../../store/actions/board";

const Task = ({ id, title, status, listID, boardID }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={status === "done" ? "task task__done" : "task"}
      draggable
      onDragStart={(event, id, title, status) => {
        console.log(title);
        event.dataTransfer.setData("id", id);
        event.dataTransfer.setData("title", title);
        event.dataTransfer.setData("id", status);
        console.log(event.dataTransfer);
      }}
    >
      <p className="task__text">{title}</p>
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
