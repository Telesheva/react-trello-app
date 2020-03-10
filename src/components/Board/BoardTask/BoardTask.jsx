import React, { useState } from "react";
import "./BoardTask.scss";
import Input from "../../common/Input/Input";
import Task from "./Task/Task";
import { useDispatch } from "react-redux";
import { addBoardTask } from "../../../store/actions/board";

const BoardTask = ({ list, tasks, boardID }) => {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState("");

  const checkIfEnterKeyPressed = event => {
    if (event.key === "Enter") {
      dispatch(addBoardTask(boardID, list.id, taskTitle));
      event.target.value = "";
    }
  };

  return (
    <div className="boardtask">
      <p className="boardtask__text">{list.title}</p>
      <hr />
      <Input
        type="text"
        placeholder="Enter your task"
        onKeyPress={checkIfEnterKeyPressed}
        onChange={event => setTaskTitle(event.target.value)}
      />
      {tasks ? (
        tasks.map(task => {
          return (
            <Task
              id={task.id}
              value={task.title}
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
