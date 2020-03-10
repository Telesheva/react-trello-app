import React from "react";
import "./Board.scss";
import Layout from "../Layout/Layout";
import BoardTask from "./BoardTask/BoardTask";

const Board = props => {
  const id = 2;
  const title = "Education program";
  return (
    <Layout>
      <div className="board">
        <p className="board__title">{title}</p>
        <ul className="board__tasks">
          <BoardTask />
        </ul>
      </div>
    </Layout>
  );
};

export default Board;
