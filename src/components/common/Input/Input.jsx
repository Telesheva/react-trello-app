import React from "react";
import "./Input.scss";

const Input = ({
  value,
  onChange,
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

  if (!valid) {
    classes.push("invalid");
  }

  return (
    <div className="input-wrap">
      <input
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        defaultValue={defaultValue}
        errormessage={errorMessage}
        required={required}
        name={name}
        placeholder={placeholder}
        className={`${className} input-wrap__input`}
        valid={valid}
      />
      <span className="input-wrap__error-message">{errorMessage}</span>
    </div>
  );
};

export default Input;
