import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";
import assets from "../../../assets";

function AccordionHeader({ children, ...restProps }) {
  const [AccordionShow, setAccordionShow] = useContext(AccordionContext);

  function handleClick() {
    setAccordionShow(!AccordionShow);
  }

  return (
    <div className="accordion-header" onClick={handleClick} {...restProps}>
      {children}
      {AccordionShow ? (
        <img className="accordion-image" src={assets.Close} alt="close" />
      ) : (
        <img className="accordion-image" src={assets.Open} alt="open" />
      )}
    </div>
  );
}

export default AccordionHeader;
