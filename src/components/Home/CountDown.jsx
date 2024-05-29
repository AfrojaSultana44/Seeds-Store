import React from "react";

const CountDown = () => {
  return (
    <div className="w-full max-w-[1160px] mx-auto bg-[#116D48] py-8 border rounded-2xl text-[#FFFFFF] mt-[142px]">
      <div className="mx-auto flex justify-between items-center px-[90px]">
        <div className="flex justify-between items-center">
          <h2 className="text-6xl font-semibold">01</h2>
          <div className="ml-2">
            <p className="text-xl">Years</p>
            <p className="text-xl">of Experience</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <h2 className="text-6xl font-semibold">01</h2>
          <p className="text-xl ml-2">Zone</p>
        </div>

        <div className="flex justify-between items-center">
          <h2 className="text-6xl font-semibold">27</h2>
          <div className="ml-2">
            <p className="text-xl">Active</p>
            <p className="text-xl">Employees</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <h2 className="text-6xl font-semibold">27</h2>
          <div className="ml-2">
            <p className="text-xl">Clients</p>
            <p className="text-xl">Served</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
