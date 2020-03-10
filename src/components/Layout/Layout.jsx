import React from "react";
import "./Layout.scss";
import ideaPic from "../../assets/images/idea.png";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <img src={ideaPic} alt="idea" className="layout__icon" />
      {children}
    </div>
  );
};

export default Layout;
