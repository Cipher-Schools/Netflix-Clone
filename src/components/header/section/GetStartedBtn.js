import React from "react";

function GetStartedBtn({ children, ...restProps }) {
  return (
    <span>
      <a href="" {...restProps}>
        {children}
      </a>
    </span>
  );
}

export default GetStartedBtn;
