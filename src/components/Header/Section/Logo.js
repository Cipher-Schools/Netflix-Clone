import React from "react";
import logo from "../../../assets/logo.svg";

function Logo({ children, ...restProps }) {
  return (
    <div>
      <a href="/" {...restProps}>
        {children}
        <img src={logo} width="200" alt="Netflix-Logo" className="logo" />
      </a>
    </div>
  );
}

export default Logo;
