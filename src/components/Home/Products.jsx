import React from "react";

const Products = () => {
  return (
    <div className="w-full max-w-[1160px] mx-auto mt-[142px]">
      <div className="flex justify-between items-start border border-red-700">
        <div className="basis-[50%] mr-[131px]">
          <h4 className="text-[#1D263A] text-6xl font-semibold">
            Our Field Crops Maize
          </h4>
        </div>
        <div className="basis-[50%]">
          <p className="text-[#1D263A] text-[17px] font-normal">
            Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh
            magna. Proin risus erat, fringilla vel purus sit amet, mattis porta
            enim.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8 border border-red-600">
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
            নিউ সুপার
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8 border border-red-600">
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
            নিউ সুপার
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
            className="w-[193px] h-[261px]"
            src="/images/image 9.png"
            alt=""
          />
          <p className="text-center text-[#1D263A] text-xl font-bold mt-[44px]">
            সম্রাট
          </p>
        </div>
      </div>

      <div className="mt-[62px] text-center">
        <button className="text-[#116D48] border border-[#146A47] rounded-md py-[23px] px-[48.5px]">
          View Alll
        </button>
      </div>
    </div>
  );
};

export default Products;
