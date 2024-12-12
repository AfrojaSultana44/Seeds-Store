import React, { useState } from "react";
import ProductsCard from "../../components/shared/ProductsCard";

const ProductPage = () => {
  const [productList, setProductList] = useState([
    {
      id: "1",
      name: "সম্রাট",
      image: "/images/image9.png",
    },
    {
      id: "2",
      name: "বারি - ৩৩ ",
      image: "/images/samrat1.png",
    },
    {
      id: "3",
      name: "আসল - ৩৫২৬ ",
      image: "/images/ASol1.png",
    },

    {
      id: "4",
      name: "আর এস যাদু-৫৫",
      image: "/images/image12.png",
    },
    {
      id: "5",
      name: "সম্রাট",
      image: "/images/image9.png",
    },
    {
      id: "6",
      name: "বারি - ৩৩ ",
      image: "/images/samrat1.png",
    },
    {
      id: "7",
      name: "আসল - ৩৫২৬ ",
      image: "/images/ASol1.png",
    },
    {
      id: "8",
      name: "আর এস যাদু-৫৫",
      image: "/images/image12.png",
    },
  ]);

  return (
    <div className="w-full max-w-[1160px] mx-auto">
      <h2 className="text-[#1D263A] text-[60px] leading-[66px] tracking-[-1px] font-semibold text-center py-20">
        Our Products
      </h2>

      <ul className="flex space-x-4 pb-[49px]">
        <li className="basis-1/3 flex justify-between items-center border border-green-500 rounded-[4px] p-[23px] cursor-pointer gap-20 hover:bg-[#116D48] hover:bg-opacity-[10%]">
          <div className="flex gap-[15px] items-center">
            <img src="images/fertilizer.svg" alt="fertilizer" />
            <span className="text-[#116D48] text-[25px] leading-[37.5px] tracking-[0.5px] font-bold uppercase">
              Fertilizer
            </span>
          </div>
          <img src="/images/arrow-right.svg" alt="" />
        </li>
        <li className="basis-1/3 flex justify-between items-center border border-green-500 rounded-[4px] p-[23px] cursor-pointer gap-20 hover:bg-[#116D48] hover:bg-opacity-[10%]">
          <div className="flex gap-[15px] items-center">
            <img src="images/pesticide.svg" alt="fertilizer" />
            <span className="text-[#116D48] text-[25px] leading-[37.5px] tracking-[0.5px] font-bold uppercase">
              Pesticides
            </span>
          </div>
          <img src="/images/arrow-right.svg" alt="" />
        </li>
        <li className="basis-1/3 flex justify-between items-center border border-green-500 rounded-[4px] p-[23px] cursor-pointer gap-20 hover:bg-[#116D48] hover:bg-opacity-[10%]">
          <div className="flex gap-[15px] items-center">
            <img src="images/seed.svg" alt="fertilizer" />
            <span className="text-[#116D48] text-[25px] leading-[37.5px] tracking-[0.5px] font-bold uppercase">
              Seeds
            </span>
          </div>
          <img src="/images/arrow-right.svg" alt="" />
        </li>
      </ul>

      <div className="w-full mx-auto text-center">
        <ul className="flex justify-center items-center">
          <li className=" p-5 text-[22px] leading-[33px] tracking-[0.5px] font-bold text-[#404040] hover:text-[#1F7653] cursor-pointer uppercase">
            Maize
          </li>
          <li className="p-5 text-[22px] leading-[33px] tracking-[0.5px] font-bold text-[#404040] hover:text-[#1F7653] cursor-pointer uppercase">
            Paddy
          </li>
          <li className="p-5 text-[22px] leading-[33px] tracking-[0.5px] font-bold text-[#404040] hover:text-[#1F7653] cursor-pointer uppercase">
            Cotton
          </li>
          <li className="p-5 text-[22px] leading-[33px] tracking-[0.5px] font-bold text-[#404040] hover:text-[#1F7653] cursor-pointer uppercase">
            Bajra
          </li>
          <li className="p-5 text-[22px] leading-[33px] tracking-[0.5px] font-bold text-[#404040] hover:text-[#1F7653] cursor-pointer uppercase">
            Wheat
          </li>
        </ul>
      </div>

      <ProductsCard productList={productList} />
    </div>
  );
};

export default ProductPage;
