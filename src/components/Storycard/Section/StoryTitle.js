import React from "react";

function StoryTitle({ children, ...restProps }) {
  return (
    <h1 {...restProps} className="story-title">
      {children}
    </h1>
  );
}

export default StoryTitle;
