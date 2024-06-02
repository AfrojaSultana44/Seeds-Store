import React from "react";

const Products = () => {
  return (
    <div className="w-full max-w-[1160px] mx-auto mt-[142px]">
      <div className="flex justify-between items-center border border-red-700 ">
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

      {/* <div className="flex justify-between items-center pt-8 border border-red-600">
        
        <div>
          <img
            className="w-[219px] h-[297px]"
            src="/images/image 9.png"
            alt=""
          />
          <p className="text-center text-[#1D263A] text-xl font-bold mt-[26px]">
            সম্রাট
          </p>
        </div>
        <div>
          <img
            className="w-[199px] h-[260px]"
            src="/images/samrat 1.png"
            alt=""
          />
          <p className="text-center text-[#1D263A] text-xl font-bold mt-[44px]">
            বারি - ৩৩
          </p>
        </div>
        <div>
          <img
            className="w-[188.21px] h-[260px]"
            src="/images/ASol 1.png"
            alt=""
          />
          <p className="text-center text-[#1D263A] text-xl font-bold mt-[45px]">
            আসল - ৩৫২৬
          </p>
        </div>
        <div>
          <img
            className="w-[191.08.21px] h-[260px]"
            src="/images/image 12.png"
            alt=""
          />
          <p className="text-center text-[#1D263A] text-xl font-bold mt-[45px]">
          আর এস যাদু - ৫৫
          </p>
        </div>
      </div> */}

      <div className="flex justify-between items-center pt-8 border border-red-600">
        <div>
          <img
            className="w-[220px] h-[261px]"
            src="/images/image9.png"
            alt=""
          />
          <p className="text-center text-[#1D263A] text-xl font-bold mt-[44px]">
            সম্রাট
          </p>
        </div>
        <div>
          <img
            className="w-[199px] h-[260px]"
            src="/images/samrat1.png"
            alt=""
          />
          <p className="text-center text-[#1D263A] text-xl font-bold mt-[44px]">
            বারি - ৩৩
          </p>
        </div>
        <div>
          <img
            className="w-[188.21px] h-[260px]"
            src="/images/ASol1.png"
            alt=""
          />
          <p className="text-center text-[#1D263A] text-xl font-bold mt-[45px]">
            আসল - ৩৫২৬
          </p>
        </div>
        <div>
          <img
            className="w-[191.08.21px] h-[260px]"
            src="/images/image12.png"
            alt=""
          />
          <p className="text-center text-[#1D263A] text-xl font-bold mt-[45px]">
            আর এস যাদু - ৫৫
          </p>
        </div>
      </div>

      <div className="mt-[62px] pb-[117px] text-center">
        <button className="text-[#116D48] font-semibold text-lg border border-[#146A47] rounded-xl py-[20px] px-[80px]">
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default Products;
