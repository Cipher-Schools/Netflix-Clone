import React from "react";
import Header from "../components/Header/Header";
import FeatureForm from "../components/FeatureForm/FeatureForm";
import StoryCards from "../components/Storycard/StoryCards";

function Home() {
  return (
    <>
      <Header>
        <FeatureForm />
      </Header>
      <StoryCards />
    </>
  );
}

export default Home;
