import React, { useState } from "react";
import "./BoardList.scss";
import BoardCreateForm from "../forms/BoardCreateForm/BoardCreateForm";
import Layout from "../Layout/Layout";

const BoardList = props => {
  const [isCreateFormOpen, setIsCreateFormOpen] = useState();

  const boards = [
    {
      id: 1,
      title: "Meetings"
    },
    {
      id: 2,
      title: "Project 1"
    },
    {
      id: 3,
      title: "Project 2"
    },
    {
      id: 4,
      title: "Project 3"
    },
    {
      id: 4,
      title: "Project 3"
    }
  ];
  return (
    <Layout>
      <ul className="boardlist">
        <div
          className="boardlist__create"
          onClick={() => {
            setIsCreateFormOpen(true);
            console.log(isCreateFormOpen);
          }}
        >
          {isCreateFormOpen ? (
            <BoardCreateForm isShowed={isCreateFormOpen} />
          ) : (
            <h3 className="boardlist__item_text">Create a new board...</h3>
          )}
        </div>
        {boards.map(board => {
          return (
            <li className="boardlist__item" key={board.id}>
              <p className="boardlist__item_text">{board.title}</p>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default BoardList;
