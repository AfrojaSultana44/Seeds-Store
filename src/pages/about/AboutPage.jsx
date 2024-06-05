import React, { useState } from "react";

const AboutPage = () => {
  const [chairmanProfile, setChairmanProfile] = useState({
    id: "1",
    image: "/images/Img_1.svg",
    name: "Md. Shajahan Ali",
    title: "Chairman",
  });

  const [ceoProfile, setCeoProfile] = useState({
    id: "1",
    image: "/images/Img_2.svg",
    name: "MD. Atiqur Rahman",
    title: "CEO",
  });

  return (
    <div className="w-full max-w-[1160px] mx-auto">
      <div className="py-20">
        <h2 className="text-[#1D263A] text-center text-[60px] leading-[66px] font-semibold tracking-[-1px]">
          Our Story
        </h2>
      </div>
      <div>
        <img
          className="w-full rounded-lg object-cover object-center mb-[50px]"
          src="/images/banner_image.svg"
          alt=""
        />
      </div>
      <div className="flex justify-between">
        <div className="basis-[50%] shrink-0 border border-blue-500">
          <div className="flex justify-between items-start">
            <div className="w-[80px] h-[80px] shrink-0 flex justify-center items-center rounded-full bg-[#D6EBE4] bg-opacity-[40%]">
              <img
                className="w-[32px] h-[32px]"
                src="/images/Vector.svg"
                alt="heart"
              />
            </div>
            <div className="basis-auto">
              <p className="text-[#1D263A] text-[17px] leading-[30px] font-normal text-opacity-[70%] pl-9 pr-4">
                <span className="text-[#20BFA9]">Our Mission</span> Rasel Seed
                Company is driven by a singular mission: to empower farmers
                globally. We recognize the vital role they play in ensuring food
                security for all. That's why we dedicate ourselves to equipping
                them with the tools they need to achieve optimal harvest yields.
                This goes beyond just providing high-quality seeds. We offer
                innovative solutions – from meticulously bred seeds tailored to
                specific regions to technical support for informed decisions –
                all aimed at maximizing agricultural success.
              </p>
            </div>
          </div>
        </div>
        <div className="basis-[50%] shrink-0 border border-blue-500">
          <div className="flex justify-between">
            <div className="w-[80px] h-[80px] shrink-0 flex justify-center items-center rounded-full bg-[#FAE2DA] bg-opacity-[40%]">
              <img
                className="w-[36px] h-[36px]"
                src="/images/zap_1.svg"
                alt=""
              />
            </div>
            <div>
              <p className="text-[#1D263A] text-[17px] leading-[30px] font-normal text-opacity-[70%] pl-9">
                <span className="text-[#FF794D]">Our Vision</span> At Rasel Seed
                Company, we envision a future where agriculture flourishes in
                harmony with the environment. We aspire to be the world's
                leading provider of high-performance seeds, fostering a world
                where sustainable practices are commonplace. We believe in
                nurturing a future where agriculture not only nourishes
                populations but also sustains our planet. This vision guides our
                research and development efforts, pushing us to create seeds
                with superior yields, disease resistance, and minimal ecological
                impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#66B69A] rounded-[16px] bg-opacity-[10%] mt-[80px]">
        <p className="text-[#1D263A] text-[24px] leading-[39px] text-justify font-normal text-opacity-[80%] p-[103px] mb-[60px]">
          Rasel Seed Company empowers farmers globally with high-quality seeds
          and innovative solutions. Our diverse seed portfolio, bred for yield,
          resilience, and nutrition, caters to various crops. State-of-the-art
          processing ensures seed quality. We partner with farmers, offering
          technical support for informed decisions. Committed to sustainability,
          we promote responsible farming for a greener agricultural future.
          Together, let's cultivate a world nourished by high-performance seeds
          and sustainable practices.
        </p>
      </div>

      <div className="flex justify-between">
        <div className="basis-[30%] relative">
          <img
            className="w-80 rounded-lg object-cover object-center mb-[50px]"
            src={chairmanProfile.image}
            alt={chairmanProfile.name}
          />
          <div className="bg-white absolute bottom-0 right-0 z-[99999] shadow-xl rounded-[20px] px-6 py-4">
            <h4 className="text-[#000000] text-[32px] leading-[40px] tracking-[-1px] font-semibold opacity-[80%] mb-[9px]">
              {chairmanProfile.name}
            </h4>
            <p className="text-[#000000] text-[21px] leading-[32px] font-normal opacity-[64%] text-opacity-[80%]">
              {chairmanProfile.title}
            </p>
          </div>
        </div>

        <div className="basis-[70%] pt-[100px] pl-[100px]">
          <div>
            <div>
              <p className="text-[#1D263A] text-[48px] leading-[57.6px] tracking-[-1px] font-semibold">
                Word From
              </p>
              <p className="text-[#1D263A] text-[48px] leading-[57.6px] tracking-[-1px] font-semibold pb-8">
                the Chairman
              </p>
            </div>
            <p className="text-[#1D263A] text-[20px] leading-[31px] font-normal text-opacity-[80%]">
              For generations, Rasel Seeds has been a steward of agricultural
              progress. Our unwavering commitment to quality seeds and
              sustainable practices fuels our vision for a healthier, more
              productive future. Join us as we cultivate a brighter tomorrow.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between py-[50px]">
        <div className="basis-[65%] pt-[70px] pl-[70px] pr-8  border border-green-500">
          <div>
            <div>
              <p className="text-[#1D263A] text-[48px] leading-[57.6px] tracking-[-1px] font-semibold">
                Word From
              </p>
              <p className="text-[#1D263A] text-[48px] leading-[57.6px] tracking-[-1px] font-semibold">
                the CEO
              </p>
            </div>
            <p className="text-[#1D263A] text-[20px] leading-[31px] font-normal text-opacity-[80%] pt-8">
              At Rasel Seeds, innovation is in our DNA. We push the boundaries
              of seed science, developing high-performance varieties tailored to
              diverse needs. Our commitment to cutting-edge technology ensures
              farmers have the tools to thrive in a changing world.
            </p>
          </div>
        </div>

        <div className="basis-[35%] relative border border-red-500">
          <img
            className="w-80 rounded-lg object-cover object-center mb-[50px]"
            src={ceoProfile.image}
            alt={ceoProfile.name}
          />
          <div className="bg-white absolute bottom-0 right-0 z-[99999] shadow-xl rounded-[20px] px-6 py-4">
            <h4 className="text-[#000000] text-[32px] leading-[40px] tracking-[-1px] font-semibold opacity-[80%] mb-[9px]">
              {ceoProfile.name}
            </h4>
            <p className="text-[#000000] text-[21px] leading-[32px] font-normal opacity-[64%] text-opacity-[80%]">
              {ceoProfile.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
