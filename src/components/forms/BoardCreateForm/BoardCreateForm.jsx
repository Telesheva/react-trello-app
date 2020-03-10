import React, { useState } from "react";
import "./BoardCreateForm.scss";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import close from "../../../assets/images/close.png";

const BoardCreateForm = ({ onSubmit, onInput, isShowed }) => {
  const [isFormShowed, setIsFormShowed] = useState(true);
  return (
    <>
      {(isShowed || !isFormShowed) && (
        <div className="createboard">
          <div className="createboard__header">
            <h3>Creating a board</h3>
            <img
              src={close}
              alt="close"
              onClick={() => {
                setIsFormShowed(false);
                console.log(isFormShowed, isShowed);
              }}
            />
          </div>
          <hr />
          <form
            onSubmit={onSubmit}
            onInput={onInput}
            className="createboard__form"
          >
            <p>What shall we call the board?</p>
            <Input type="text" required="required" />
            <div className="createboard__form__btns">
              <Button type="button" className="btn__transparent">
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
