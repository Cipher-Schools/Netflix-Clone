import React from "react";
import Header from "../components/Header/Header";
import FeatureForm from "../components/FeatureForm/FeatureForm";
import StoryCards from "../components/Storycard/StoryCards";
import Saperator from "../components/Storycard/Section/Saperator";

function Home() {
  return (
    <>
      <Header>
        <FeatureForm />
      </Header>
      <Saperator />
      <StoryCards />
    </>
  );
}

export default Home;
