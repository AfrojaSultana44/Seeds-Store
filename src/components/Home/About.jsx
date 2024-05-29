import React from "react";

const About = () => {
  return (
    <div className="w-full max-w-[1160px] mx-auto mt-20">
      <div className="flex justify-between items-start">
        <div className="basis-[40%] pr-[32px]">
          <img className="w-[460px] h-[574px]" src="/images/Img.png" alt="" />
        </div>
        <div className="basis-[60%] pl-[32px]">
          <h1 className="text-[#1D263A] text-5xl font-bold leading-[57.6px] mb-[17px]">
            About Us
          </h1>
          <p className="text-[#1D263A] text-base font-normal leading-[26px] opacity-[80%]">
            Rasel Seed Company(pvt) Ltd. is one of the premier seed companies in
            Bangladesh. It is one of the largest seed company in Bangladesh,
            with a strong Employee base for developing Market quality hybrids in
            key Bd crops. The company saga began in 2013.
          </p>
          <div className="w-full mt-[34px]">
            <div className="w-full flex pl-[35px]">
              <div className="basis-[80px] shrink-0 relative">
                <img
                  className="w-[40px] h-[40px]"
                  src="/images/BG.png"
                  alt=""
                />
                <img
                  className="w-[40px] h-[40px] absolute top-0 left-[20%]"
                  src="/images/Leaf.png"
                  alt=""
                />
              </div>
              <div className="basis-auto flex-grow">
                <h3 className="text-[#1D263A] text-2xl font-medium mb-[18px]">
                  100% Hybride
                </h3>
                <ul className="text-[#1D263A] text-[16px] leading-[26px] list-disc font-normal pl-5 opacity-[80%]">
                  <li>
                    <p>
                      Rasel Seed Company(pvt) Ltd. is one of the premier seed
                      companies in Bangladesh. It is one of the largest seed
                      company in Bangladesh, with a strong Employee base for
                      developing Market quality hybrids in key Bd crops. The
                      company saga began in 2013.
                    </p>
                  </li>
                  <li>
                    <p>
                      Seed sorting is an important step in hybrid maize
                      production to ensure uniformity and quality.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between pt-[50px] pl-[35px]">
              <div className="basis-[80px] shrink-0 relative">
                <img
                  className="w-[40px] h-[40px]"
                  src="/images/BG.svg"
                  alt=""
                />
                <img
                  className="w-[40px] h-[40px] absolute top-0 left-[20%]"
                  src="/images/Crown.svg"
                  alt=""
                />
              </div>
              <div className="basis-auto flex-grow">
                <h3 className="text-[#1D263A] text-2xl font-medium mb-[18.28px]">
                  Award Winning
                </h3>
                <ul className="list-disc pl-5">
                  <li>
                    <p className="text-[#1D263A] text-[16px] leading-[26px] font-normal opacity-[80%]">
                      Rasel’s emphasis is also on strong financial and operating
                      metrics and creating value for all its stakeholders. It
                      has consistently delivered profits and superior return and
                      is supported by a strong balance sheet every year
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
