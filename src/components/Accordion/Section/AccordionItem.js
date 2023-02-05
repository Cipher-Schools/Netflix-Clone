import React, { useState } from "react";
import AccordionContext from "./AccordionContext";

function AccordionItem({ children, ...restProps }) {
  const [AccordionState, setAccordionState] = useState(false);
  return (
    <AccordionContext.Provider value={[AccordionState, setAccordionState]} {...restProps}>
      <div className="accordion-item">{children}</div>
    </AccordionContext.Provider>
  );
}

export default AccordionItem;
