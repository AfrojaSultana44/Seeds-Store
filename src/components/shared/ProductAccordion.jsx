import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState } from "react";

const ProductAccordion = () => {
  const [open, setOpen] = useState(1);

  const [accordionState, setAccordionState] = useState({
    id: 1,
    title: "Products",
  });

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === accordionState.id}>
        <AccordionHeader className="">
          <div className="w-full flex justify-between items-center">
            <h2>{accordionState.title}</h2>
            <div
              className="pl-2 cursor-pointer"
              onClick={() => handleOpen(accordionState.id)}
            >
              <img
                src="/images/menu_1.svg"
                alt="icon"
                className="w-[20px] h-[20px]"
              />
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="bg-[#F9FAFB] rounded-[16px]">
            <div>
              <ul className="pl-[24px] py-[26px]">
                <li className="pb-[40px]">
                  <h4 className="text-[#116D48] text-[12px] leading-[18px] tracking-[0.5px] font-medium uppercase pb-[16px]">
                    Seeds
                  </h4>
                  <div className="flex justify-start items-center pb-6">
                    <img src="/images/Group_img_1.svg" alt="Maize" />
                    <span className="text-[#000000] text-opacity-[80%] text-[16px] leading-[24px] font-semibold pl-4">
                      Maize
                    </span>
                  </div>
                  <div className="flex justify-start items-center">
                    <img src="/images/Group_img_2.svg" alt="Vegetables" />
                    <span className="text-[#000000] text-opacity-[80%] text-[16px] leading-[24px] font-semibold pl-4">
                      Vegetables
                    </span>
                  </div>
                </li>
                <li className="pb-[40px]">
                  <h4 className="text-[#116D48] text-[12px] leading-[18px] tracking-[0.5px] font-medium uppercase pb-4">
                    Fertilizer
                  </h4>
                  <div className="flex justify-start items-center pb-6">
                    <img src="/images/Group_img_3.svg" alt="Maize" />
                    <span className="text-[#000000] text-opacity-[80%] text-[16px] leading-[24px] font-semibold pl-4">
                      Horn and Hoof Meal
                    </span>
                  </div>
                  <div className="flex justify-start items-center">
                    <img src="/images/Group_img_3.svg" alt="Vegetables" />
                    <span className="text-[#000000] text-opacity-[80%] text-[16px] leading-[24px] font-semibold pl-4">
                      Neem Cake Powder
                    </span>
                  </div>
                </li>
                <li className="">
                  <h4 className="text-[#116D48] text-[12px] leading-[18px] tracking-[0.5px] font-medium uppercase pb-4">
                    Pesticides
                  </h4>
                  <div className="flex justify-start items-center pb-6">
                    <img src="/images/Group_img_4.svg" alt="Maize" />
                    <span className="text-[#000000] text-opacity-[80%] text-[16px] leading-[24px] font-semibold pl-4">
                      Rugby 10G
                    </span>
                  </div>
                  <div className="flex justify-start items-center">
                    <img src="/images/Group_img_4.svg" alt="Vegetables" />
                    <span className="text-[#000000] text-opacity-[80%] text-[16px] leading-[24px] font-semibold pl-4">
                      Fighter 2.5 EC – Lambda
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default ProductAccordion;
