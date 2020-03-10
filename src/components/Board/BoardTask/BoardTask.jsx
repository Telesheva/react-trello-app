import React from "react";
import "./BoardTask.scss";
import Input from "../../common/Input/Input";
import Task from "./Task/Task";

const BoardTask = ({ listTitle }) => {
  return (
    <div className="boardtask">
      <p className="boardtask__text">{listTitle}</p>
      <hr />
      <Input type="text" placeholder="Enter your task" />
      <Task value="test task" />
    </div>
  );
};

export default BoardTask;
