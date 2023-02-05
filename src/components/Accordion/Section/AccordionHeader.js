import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";
import Open from "../../../assets/icons/add.png";
import Close from "../../../assets/icons/close-slim.png";

function AccordionHeader({ children, ...restProps }) {
  const [AccordionShow, setAccordionShow] = useContext(AccordionContext);

  function handleClick() {
    setAccordionShow(!AccordionShow);
  }

  return (
    <div className="accordion-header" onClick={handleClick} {...restProps}>
      {children}
      {AccordionShow ? (
        <img className="accordion-image" src={Close} alt="close" />
      ) : (
        <img className="accordion-image" scr={Open} alt="open" />
      )}
    </div>
  );
}

export default AccordionHeader;
