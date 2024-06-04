import React, { useState } from "react";
import ProductsCard from "../shared/ProductsCard";

const Products = () => {
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
    <div className="w-full max-w-[1160px] mx-auto mt-[142px]">
      <div className="flex justify-between items-center pb-4">
        <div className="basis-[45%]">
          <h4 className="text-[#1D263A] text-6xl font-semibold">
            Our Field Crops
          </h4>
        </div>
        <div className="basis-[55%] pl-[10px]">
          <p className="text-[#1D263A] text-left text-[17px] leading-[30px] font-normal text-opacity-[80%]">
            Choose our high-quality seeds for exceptional yield, strong disease
            resistance, and adaptability to various growing conditions. Rely on
            us for dependable growth and a prosperous farming future.
          </p>
        </div>
      </div>

      <ProductsCard productList={productList} />

      <div className="mt-[62px] pb-[117px] text-center">
        <button className="text-[#116D48] font-semibold text-lg border border-[#146A47] rounded-xl py-[20px] px-[80px]">
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default Products;
