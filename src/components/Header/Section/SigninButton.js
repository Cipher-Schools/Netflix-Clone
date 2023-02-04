import React from "react";

function SigninButton({ children, ...restProps }) {
  return (
    <div>
      <a href="/signin" {...restProps}>
        {children}
      </a>
    </div>
  );
}

export default SigninButton;
