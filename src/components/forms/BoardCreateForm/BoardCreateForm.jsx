import React, { useState } from "react";
import "./BoardCreateForm.scss";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import close from "../../../assets/images/close.png";
import { useDispatch } from "react-redux";
import { createBoard } from "../../../store/actions/board";

const BoardCreateForm = ({ onSubmit, onInput, isShowed, setIsShowed }) => {
  const [boardTitle, setBoardTitle] = useState();
  const dispatch = useDispatch();

  const submitHandler = event => {
    event.preventDefault();
    dispatch(createBoard(boardTitle));
  };

  return (
    <>
      {isShowed && (
        <div className="createboard">
          <div className="createboard__header">
            <h3>Creating a board</h3>
            <img src={close} alt="close" onClick={() => setIsShowed(false)} />
          </div>
          <hr />
          <form
            onSubmit={submitHandler}
            onInput={event => setBoardTitle(event.target.value)}
            className="createboard__form"
          >
            <p>What shall we call the board?</p>
            <Input type="text" required="required" />
            <div className="createboard__form__btns">
              <Button
                type="button"
                className="btn__transparent"
                onClick={() => setIsShowed(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="btn__light">
                Create
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default BoardCreateForm;
