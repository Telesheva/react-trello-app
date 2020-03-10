import React, { useState } from "react";
import "./Board.scss";
import Layout from "../Layout/Layout";
import BoardTask from "./BoardTask/BoardTask";
import { useSelector, useDispatch } from "react-redux";
import Input from "../common/Input/Input";
import closeImg from "../../assets/images/close-pic.png";
import { addBoardList } from "../../store/actions/board";

const Board = props => {
  const { boards } = useSelector(state => state.board);
  const [isAddedList, setIsAddedList] = useState(false);
  const [listTitle, setIsListTitle] = useState("");
  const dispatch = useDispatch();

  const id = props.match.params.id;
  const curBoard = boards.find(board => board.id === Number(id));

  const checkEnterKeyPressed = event => {
    if (event.key === "Enter") {
      dispatch(addBoardList(id, listTitle));
      event.target.value = "";
    }
  };

  return (
    <Layout>
      <div className="board">
        <p className="board__title">{curBoard.title}</p>
        <ul className="board__tasks">
          {curBoard.lists &&
            curBoard.lists.map(list => {
              return (
                <li key={list.id}>
                  <BoardTask listTitle={list.title} />
                </li>
              );
            })}
          {!isAddedList ? (
            <li
              className="board__tasks_add"
              onClick={() => setIsAddedList(true)}
            >
              <p>Add a list...</p>
            </li>
          ) : (
            <div className="board__tasks_input">
              <img
                src={closeImg}
                alt="close-pic"
                onClick={() => setIsAddedList(false)}
              />
              <Input
                type="text"
                placeholder="Enter list name"
                onKeyPress={checkEnterKeyPressed}
                onChange={event => setIsListTitle(event.target.value)}
              />
            </div>
          )}
        </ul>
      </div>
    </Layout>
  );
};

export default Board;