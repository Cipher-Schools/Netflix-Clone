import React from "react";

function FooterWrapper({ children, ...restProps }) {
  return (
    <section {...restProps} className="footer-wrapper">
      {children}
    </section>
  );
}

export default FooterWrapper;
