import React from "react";

function FeatureSubTitle({ children, ...restProps }) {
  return <h2 {...restProps}>{children}</h2>;
}

export default FeatureSubTitle;
