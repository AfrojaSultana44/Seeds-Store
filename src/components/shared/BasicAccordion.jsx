import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";

const BasicAccordion = () => {
  const [open, setOpen] = useState(1);

  const [accordionState, setAccordionState] = useState([
    {
      id: 1,
      title: "Home",
      content: "Home Content",
    },
    {
      id: 2,
      title: "About",
      content: "About Content",
    },
    {
      id: 3,
      title: "Activity",
      content: "Activity Content",
    },
  ]);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      {accordionState.map((item, index) => {
        return (
          <Accordion key={index} open={open === item.id}>
            <AccordionHeader className="">
              <div className="w-full flex justify-between items-center">
                <h2>{item.title}</h2>
                <div
                  className="pl-2 cursor-pointer"
                  onClick={() => handleOpen(item.id)}
                >
                  <img
                    src="/images/Vector.png"
                    alt="icon"
                    className="w-[10.68px] h-[6.02px]"
                  />
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="">{item.content}</div>
            </AccordionBody>
          </Accordion>
        );
      })}
    </>
  );
};

export default BasicAccordion;
