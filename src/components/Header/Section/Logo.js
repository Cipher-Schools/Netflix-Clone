import React from "react";
import assets from "../../../assets";

function Logo({ children, ...restProps }) {
  return (
    <div>
      <a href="/" {...restProps}>
        {children}
        <img src={assets.Logo} width="200" alt="Netflix-Logo" className="logo" />
      </a>
    </div>
  );
}

export default Logo;
