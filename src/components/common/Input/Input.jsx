import React from "react";
import "./Input.scss";

const Input = ({
  value,
  onChange,
  onKeyPress,
  onBlur,
  type,
  className,
  placeholder,
  name,
  defaultValue,
  errorMessage,
  required,
  valid
}) => {
  const classes = [className, "input-wrap__input"];

  return (
    <div className="input-wrap">
      <input
        type={type}
        onChange={onChange}
        onKeyPress={onKeyPress}
        onBlur={onBlur}
        value={value}
        defaultValue={defaultValue}
        errormessage={errorMessage}
        required={required}
        name={name}
        placeholder={placeholder}
        className={classes.join(" ")}
      />
      <span className="input-wrap__error-message">{errorMessage}</span>
    </div>
  );
};

export default Input;
