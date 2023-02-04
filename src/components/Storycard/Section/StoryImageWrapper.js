import React from "react";

function StoryImageWrapper({ children, ...restProps }) {
  return (
    <div {...restProps} className="story-image-wrapper">
      {children}
    </div>
  );
}

export default StoryImageWrapper;
