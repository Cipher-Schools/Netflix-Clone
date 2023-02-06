import React from "react";

function FooterColumn({ children, ...restProps }) {
  return (
    <div {...restProps} className="footer-column">
      {children}
    </div>
  );
}

export default FooterColumn;
