import React from "react";

function StoryItem({ children, direction, ...restProps }) {
  return (
    <div {...restProps} className="story-item" style={{ flexDirection: direction }}>
      {children}
    </div>
  );
}

export default StoryItem;
