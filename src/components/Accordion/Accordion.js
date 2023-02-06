import React from "react";
import AccordionWrapper from "./Section/AccordionWrapper";
import AccordionTitle from "./Section/AccordionTitle";
import AccordionHeader from "./Section/AccordionHeader";
import AccordionBody from "./Section/AccordionBody";
import AccordionItem from "./Section/AccordionItem";
import FAQData from "../../data/faqs.json";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Section/Accordion.css";

function AccordionComp() {
  return (
    <>
      <AccordionWrapper>
        <AccordionTitle>Frequently Asked Questions</AccordionTitle>
        {FAQData.map((faq) => (
          <AccordionItem key={faq.id}>
            <AccordionHeader>{faq.header}</AccordionHeader>
            <AccordionBody>{faq.body}</AccordionBody>
          </AccordionItem>
        ))}
        {/* {FAQData.map((faq) => (
          <Accordion key={faq.id}>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{faq.header}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.body}</Typography>
            </AccordionDetails>
          </Accordion>
        ))} */}
      </AccordionWrapper>
    </>
  );
}

export default AccordionComp;
