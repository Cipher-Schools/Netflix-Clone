import React from "react";

function FooterRow({ children, ...restProps }) {
  return (
    <div {...restProps} className="footer-row">
      {children}
    </div>
  );
}

export default FooterRow;
