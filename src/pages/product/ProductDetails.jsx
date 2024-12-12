import React, { useState } from "react";
import Products from "../../components/Home/Products";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({
    id: "1",
    name: "সম্রাট ",
    title: "Samrat Hybrid Maize Features",
    image: "/images/image9.png",
    maturitytTime: "2",
    plantHeight: "Medium",
    stalk: "Strong",
    grainColor: "Deep orange",
    grainSize: "Semi-round",
    plant: "Does not fall over during storms",
    cobs: "Strong and full of grains",
    blightDisease: "Resistant",
  });

  return (
    <div className="">
      <div className="flex justify-between">
        <div className="basis-[50%] shrink-0 bg-[#116D48] flex justify-center items-center">
          <div className="w-full max-w-[580px] ml-auto flex justify-start items-center">
            <img
              className="w-full max-w-[327px] h-[443px]"
              src={productDetails.image}
              alt={productDetails.name}
            />
          </div>
        </div>
        <div className="basis-[50%]  shrink-0">
          <div className="w-full max-w-[580px] mr-auto pl-[100px] py-[100px]">
            <div className="">
              <h1 className="text-[#116D48] text-[64px] leading-[72px] tracking-[-1px] font-bold pb-[18px]">
                {productDetails.name}
              </h1>
              <p className="text-[#262729] text-opacity-[70%] text-[17px] leading-[30px] pb-[18px]">
                {productDetails.title}
              </p>
            </div>
            <ul>
              <li className="text-[#1D263A] text-[17px] leading-[30px] font-semibold pb-4 flex justify-between">
                <p>Maturity time:</p>
                <p className=" text-[#1D263A] text-opacity-[80%] text-[17px] leading-[30px] font-normal">
                  {productDetails.maturitytTime}
                </p>
              </li>
              <li className="text-[#1D263A] text-[17px] leading-[30px] font-semibold pb-4 flex justify-between">
                <p>Plant height:</p>
                <p className=" text-[#1D263A] text-opacity-[80%] text-[17px] leading-[30px] font-normal">
                  {productDetails.plantHeight}
                </p>
              </li>
              <li className="text-[#1D263A] text-[17px] leading-[30px] font-semibold pb-4 flex justify-between">
                <p>Stalk:</p>
                <p className=" text-[#1D263A] text-opacity-[80%] text-[17px] leading-[30px] font-normal">
                  {productDetails.stalk}
                </p>
              </li>
              <li className="text-[#1D263A] text-[17px] leading-[30px] font-semibold pb-4 flex justify-between">
                <p>Grain color:</p>
                <p className=" text-[#1D263A] text-opacity-[80%] text-[17px] leading-[30px] font-normal">
                  {productDetails.grainColor}
                </p>
              </li>
              <li className="text-[#1D263A] text-[17px] leading-[30px] font-semibold pb-4 flex justify-between">
                <p>Grain size:</p>
                <p className=" text-[#1D263A] text-opacity-[80%] text-[17px] leading-[30px] font-normal">
                  {productDetails.grainSize}
                </p>
              </li>
              <li className="text-[#1D263A] text-[17px] leading-[30px] font-semibold pb-4 flex justify-between">
                <p>Plant:</p>
                <p className=" text-[#1D263A] text-opacity-[80%] text-[17px] leading-[30px] font-normal">
                  {productDetails.plant}
                </p>
              </li>
              <li className="text-[#1D263A] text-[17px] leading-[30px] font-semibold pb-4 flex justify-between">
                <p>Cobs:</p>
                <p className=" text-[#1D263A] text-opacity-[80%] text-[17px] leading-[30px] font-normal">
                  {productDetails.cobs}
                </p>
              </li>
              <li className="text-[#1D263A] text-[17px] leading-[30px] font-semibold flex justify-between">
                <p>Blight disease:</p>
                <p className=" text-[#1D263A] text-opacity-[80%] text-[17px] leading-[30px] font-normal">
                  {productDetails.blightDisease}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5]">
        <div className="py-[130px] max-w-[1160px] mx-auto">
          <img
            className="rounded-[20px]"
            src="/images/image _21.svg"
            alt="image"
          />
        </div>
      </div>

      <Products />
    </div>
  );
};

export default ProductDetails;
