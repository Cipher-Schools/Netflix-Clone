import React from "react";
import Header from "../components/Header/Header";
import FeatureForm from "../components/FeatureForm/FeatureForm";
import StoryCards from "../components/Storycard/StoryCards";
import Saperator from "../components/Storycard/Section/Saperator";
import Footer from "../components/Footer/Footer";
import AccordionComp from "../components/Accordion/Accordion";

function Home() {
  return (
    <>
      <Header>
        <FeatureForm />
      </Header>
      <Saperator />
      <StoryCards />
      <AccordionComp />
      <FeatureForm />
      <Saperator />
      <Footer />
    </>
  );
}

export default Home;
