import React from "react";

function Logo({ children, ...restProps }) {
  return (
    <div>
      <a href="/" {...restProps}>
        {children}
        <img src="./assets/logo.svg" width="200" alt="Netflix-Logo" className="logo" />
      </a>
    </div>
  );
}

export default Logo;
