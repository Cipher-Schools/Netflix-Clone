import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";

function AccordionBody({ children, ...restProps }) {
  const [AccordionShow] = useContext(AccordionContext);
  return AccordionShow ? (
    <p className="accordion-body" {...restProps}>
      {children}
    </p>
  ) : null;
}

export default AccordionBody;
