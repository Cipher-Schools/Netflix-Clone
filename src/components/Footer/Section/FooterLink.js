import React from "react";

function FooterLink({ children, ...restProps }) {
  return (
    <a className="footer-link" {...restProps}>
      {children}
    </a>
  );
}

export default FooterLink;
