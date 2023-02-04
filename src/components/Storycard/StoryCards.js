import React from "react";
import StoryWrapper from "./Section/StoryWrapper";
import StoryItem from "./Section/StoryItem";
import StoryTextWrapper from "./Section/StoryTextWrapper";
import StoryTitle from "./Section/StoryTitle";
import StorySubTitle from "./Section/StorySubtitle";
import StoryImageWrapper from "./Section/StoryImageWrapper";
import StoryImage from "./Section/StoryImage";
import StoryData from "../../data/stories.json";
import "./Section/StoryStyles.css";
import Saperator from "./Section/Saperator";

function StoryCards() {
  return (
    <StoryWrapper>
      {StoryData.map((story) => (
        <>
          <StoryItem key={story.id} direction={story.direction}>
            <StoryTextWrapper>
              <StoryTitle>{story.title}</StoryTitle>
              <StorySubTitle>{story.subTitle}</StorySubTitle>
            </StoryTextWrapper>
            <StoryImageWrapper>
              <StoryImage src={story.image} alt={story.alt} />
            </StoryImageWrapper>
          </StoryItem>
          <Saperator />
        </>
      ))}
    </StoryWrapper>
  );
}

export default StoryCards;
