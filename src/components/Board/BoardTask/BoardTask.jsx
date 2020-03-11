import React, { useState } from "react";
import "./BoardTask.scss";
import Input from "../../common/Input/Input";
import Task from "./Task/Task";
import { useDispatch } from "react-redux";
import {
  addBoardTask,
  addTaskToAnotherList
} from "../../../store/actions/board";

const BoardTask = ({ list, tasks, boardID }) => {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState("");

  const checkIfEnterKeyPressed = event => {
    if (event.key === "Enter") {
      if (taskTitle) dispatch(addBoardTask(boardID, list.id, taskTitle));
      event.target.value = "";
      setTaskTitle("");
    }
  };

  const onDragOverHandler = e => {
    e.preventDefault();
  };

  const onTaskDrop = (e, listID) => {
    const task = {
      id: e.dataTransfer.getData("task_id"),
      title: e.dataTransfer.getData("task_title"),
      status: e.dataTransfer.getData("task_status")
    };
    const initialListID = e.dataTransfer.getData("initial_listid");
    dispatch(addTaskToAnotherList(task, listID, initialListID, boardID));
  };

  return (
    <div
      className="boardtask"
      onDragOver={e => onDragOverHandler(e)}
      onDrop={e => onTaskDrop(e, list.id)}
    >
      <p className="boardtask__text">{list.title}</p>
      <hr />
      <Input
        type="text"
        placeholder="Enter your task"
        onKeyPress={checkIfEnterKeyPressed}
        onChange={event => setTaskTitle(event.target.value)}
      />
      {tasks.length > 0 ? (
        tasks.map(task => {
          return (
            <Task
              id={task.id}
              title={task.title}
              status={task.status}
              listID={list.id}
              boardID={boardID}
              key={task.id}
            />
          );
        })
      ) : (
        <p className="boardtask__no-tasks">No tasks yet...</p>
      )}
    </div>
  );
};

export default BoardTask;
