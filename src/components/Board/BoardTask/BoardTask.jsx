import React from "react";
import "./BoardTask.scss";
import Input from "../../common/Input/Input";
import Task from "./Task/Task";

const BoardTask = props => {
  return (
    <div className="boardtask">
      <p className="boardtask__text">Test</p>
      <hr />
      <Input type="text" />
      <Task value="test task" />
    </div>
  );
};

export default BoardTask;
