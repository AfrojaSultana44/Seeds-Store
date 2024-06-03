import React from "react";

const ProductsCard = ({productList}) => {
  return (
    <div className="grid grid-cols-4 gap-4 pt-8 border border-green-500 py-5">
      {productList.map((item, index) => {
        return (
          <div
            key={index}
            className="relative border border-red-500
           before:w-full before:h-[70%] before:absolute before:left-0 before:bottom-0
            before:bg-green-200 before:rounded-t-[100px] before:z-[-10] z-[10]"
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
