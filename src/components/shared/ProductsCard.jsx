import React from "react";

const ProductsCard = ({ productList }) => {
  return (
    <div className="grid grid-cols-4 gap-4 pt-12">
      {productList.map((item, index) => {
        return (
          <div
            key={index}
            className="relative 
           before:w-full before:h-[70%] before:absolute before:left-0 before:bottom-0
            before:bg-[#E7F1ED] before:rounded-t-[150px] before:rounded-b-[20px] before:z-[-10] z-[10]"
          >
            <img
              className="w-[80%] h-[261px] mx-auto"
              src={item.image}
              alt={item.name}
            />
            <p className="text-center text-[#1D263A] text-xl font-bold py-[44px]">
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsCard;
