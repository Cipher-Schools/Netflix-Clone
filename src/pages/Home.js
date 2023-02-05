import React from "react";
import Header from "../components/Header/Header";
import FeatureForm from "../components/FeatureForm/FeatureForm";
import StoryCards from "../components/Storycard/StoryCards";
import Saperator from "../components/Storycard/Section/Saperator";
import Accordion from "../components/Accordion/Accordion";

function Home() {
  return (
    <>
      <Header>
        <FeatureForm />
      </Header>
      <Saperator />
      <StoryCards />
      <Accordion />
    </>
  );
}

export default Home;
