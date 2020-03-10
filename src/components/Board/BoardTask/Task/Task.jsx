import React from "react";
import "./Task.scss";

const Task = ({ value }) => {
  return (
    <div className="task">
      <p className="task__text">{value}</p>
      <p className="task__done">✓</p>
    </div>
  );
};

export default Task;
