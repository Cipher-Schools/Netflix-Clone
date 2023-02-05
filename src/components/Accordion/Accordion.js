import React from "react";
import AccordionWrapper from "./Section/AccordionWrapper";
import AccordionTitle from "./Section/AccordionTitle";
import AccordionHeader from "./Section/AccordionHeader";
import AccordionBody from "./Section/AccordionBody";
import AccordionItem from "./Section/AccordionItem";
import FAQData from "../../data/faqs.json";
import "./Section/Accordion.css";

function Accordion() {
  return (
    <AccordionWrapper>
      <AccordionTitle>Frequently Asked Questions</AccordionTitle>
      {FAQData.map((faq) => (
        <AccordionItem key={faq.id}>
          <AccordionHeader>{faq.header}</AccordionHeader>
          <AccordionBody>{faq.body}</AccordionBody>
        </AccordionItem>
      ))}
    </AccordionWrapper>
  );
}

export default Accordion;
