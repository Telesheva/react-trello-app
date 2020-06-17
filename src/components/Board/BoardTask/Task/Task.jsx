import React from "react";
import "./Task.scss";
import { useDispatch } from "react-redux";
import { changeTaskStatus } from "../../../../store/board/actions";

const Task = ({ id, title, status, listID, boardID }) => {
  const dispatch = useDispatch();

  const onTaskDragStart = event => {
    event.dataTransfer.setData("task_id", id);
    event.dataTransfer.setData("task_title", title);
    event.dataTransfer.setData("task_status", status);
    event.dataTransfer.setData("initial_listid", listID);
  };

  return (
    <div
      className={status === "done" ? "task task__done" : "task"}
      draggable
      onDragStart={onTaskDragStart}
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
