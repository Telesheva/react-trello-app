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
  required
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
        required={required}
        name={name}
        placeholder={placeholder}
        className={classes.join(" ")}
      />
    </div>
  );
};

export default Input;
