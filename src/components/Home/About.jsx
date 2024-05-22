import React from "react";

const About = () => {
  return (
    <div className="w-full max-w-[1160px] mx-auto mt-[142px]">
      <div className="flex justify-between items-start">
        <div className="basis-[40%] pr-[32px]">
          <img className="w-[460px] h-[574px]" src="/images/Img.png" alt="" />
        </div>
        <div className="basis-[60%] pl-[32px]">
          <h1 className="text-[#1D263A] text-5xl font-semibold mb-[17px] mt-4">
            About Us
          </h1>
          <p className="text-[#1D263A] text-xs font-normal">
            Rasel Seed Company(pvt) Ltd. is one of the premier seed companies in
            Bangladesh. It is one of the largest seed company in Bangladesh,
            with a strong Employee base for developing Market quality hybrids in
            key Bd crops. The company saga began in 2013.
          </p>
          <div className="pl-[25px] pt-2 mt-[34px]">
            <div className="flex justify-between items-start">
              <div className="relative w-[72px] h-[70.06px]">
                <img
                  className="w-[48px] h-[48px]"
                  src="/images/Leaf.png"
                  alt=""
                />
                <img
                  className="absolute top-[-10px] right-5 w-[50.83px] h-[51.91px]"
                  src="/images/BG.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-[#1D263A] text-2xl font-medium mb-[10px]">
                  100% Hybride
                </h3>
                <ul className="text-[#1D263A] text-xs font-normal">
                  <li>
                    Hybrid maize (corn) seeds are produced by cross-pollinating
                    two genetically distinct parent varieties to obtain
                    desirable traits in the offspring.
                  </li>
                  <li>
                    Seed sorting is an important step in hybrid maize production
                    to ensure uniformity and quality.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-start mt-4">
              <div className="mr-[20px] w-[72px] h-[70.06px]">
                <img src="/images/Icon.png" alt="" />
              </div>
              <div>
                <h3 className="text-[#1D263A] text-2xl font-medium mb-[10px]">
                  Award Winning
                </h3>
                <p className="text-[#1D263A] text-xs font-normal">
                  Rasel’s emphasis is also on strong financial and operating
                  metrics and creating value for all its stakeholders. It has
                  consistently delivered profits and superior return and is
                  supported by a strong balance sheet every year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
