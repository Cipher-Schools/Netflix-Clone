import logo from "../../../assets/logo.svg";
import React from "react";

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
