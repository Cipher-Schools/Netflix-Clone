import React from "react";

function StoryWrapper({ children, ...restProps }) {
  return (
    <section {...restProps} className="story-wrapper">
      {children}
    </section>
  );
}

export default StoryWrapper;
