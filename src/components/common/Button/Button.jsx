import React from "react";
import "./Button.scss";

const Button = ({ type, disabled, onClick, onSubmit, className, children }) => {
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      onClick={onClick}
      onSubmit={onSubmit}
      className={`${className} btn`}
    >
      {children}
    </button>
  );
};

export default Button;
