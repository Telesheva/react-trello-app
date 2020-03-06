import React, { useState } from "react";
import "./BoardList.scss";
import ideaPic from "../../assets/images/idea.png";
import BoardCreateForm from "../forms/BoardCreateForm.jsx/BoardCreateForm";

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
    }
  ];
  return (
    <div className="boardlist">
      <img src={ideaPic} alt="idea" className="boardlist__icon" />
      <ul className="boardlist__list">
        <div
          className="boardlist__list__create"
          onClick={() => {
            setIsCreateFormOpen(true);
            console.log(isCreateFormOpen);
          }}
        >
          {isCreateFormOpen ? (
            <BoardCreateForm isShowed={isCreateFormOpen} />
          ) : (
            <h3 className="boardlist__list__item_text">
              Create a new board...
            </h3>
          )}
        </div>
        {boards.map(board => {
          return (
            <li className="boardlist__list__item" key={board.id}>
              <p className="boardlist__list__item_text">{board.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BoardList;
