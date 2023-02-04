import React from "react";

function StoryTextWrapper({ children, ...restProps }) {
  return (
    <div {...restProps} className="story-text-wrapper">
      {children}
    </div>
  );
}

export default StoryTextWrapper;
