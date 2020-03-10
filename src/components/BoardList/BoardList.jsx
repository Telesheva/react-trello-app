import React, { useState } from "react";
import "./BoardList.scss";
import BoardCreateForm from "../forms/BoardCreateForm/BoardCreateForm";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const BoardList = props => {
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
  const { boards } = useSelector(state => state.board);
  const history = useHistory();

  return (
    <Layout>
      <ul className="boardlist">
        {!isCreateFormOpen ? (
          <div
            className="boardlist__create"
            onClick={() => {
              setIsCreateFormOpen(true);
            }}
          >
            <h3 className="boardlist__item_text">Create a new board...</h3>
          </div>
        ) : (
          <div className="boardlist__create">
            <BoardCreateForm
              isShowed={isCreateFormOpen}
              setIsShowed={setIsCreateFormOpen}
            />
          </div>
        )}
        {boards.map(board => {
          return (
            <li
              className="boardlist__item"
              key={board.id}
              onClick={() => history.push(`/board/${board.id}`)}
            >
              <p className="boardlist__item_text">{board.title}</p>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default BoardList;
