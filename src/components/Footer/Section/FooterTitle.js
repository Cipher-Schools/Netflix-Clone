import React from "react";

function FooterTitle({ children, restProps }) {
  return (
    <h4 {...restProps} className="footer-title">
      {children}
    </h4>
  );
}

export default FooterTitle;
