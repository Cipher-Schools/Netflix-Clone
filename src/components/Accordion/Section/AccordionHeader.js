import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";

function AccordionHeader({ children, ...restProps }) {
  const [AccordionShow, setAccordionShow] = useContext(AccordionContext);

  function handleClick() {
    setAccordionShow(!AccordionShow);
  }

  return (
    <div className="accordion-header" onClick={handleClick} {...restProps}>
      {children}
      {AccordionShow ? (
        <img className="accordion-image" scr="../../../assets/icons/close-slim.png" alt="close" />
      ) : (
        <img className="accordion-image" scr="../../../assets/icons/add.png" alt="open" />
      )}
    </div>
  );
}

export default AccordionHeader;
