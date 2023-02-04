import React from "react";

function StorySubTitle({ children, ...restProps }) {
  return (
    <h2 {...restProps} className="story-subtitle">
      {children}
    </h2>
  );
}

export default StorySubTitle;
