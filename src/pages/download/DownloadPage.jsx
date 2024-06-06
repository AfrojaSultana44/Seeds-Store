import React, { useState } from "react";
import { FcDocument } from "react-icons/fc";

const DownloadPage = () => {
  const [downloadFile, setDownloadFile] = useState([
    {
      id: "1",
      name: "Dealer Appoint Form",
    },
    {
      id: "2",
      name: "Dealer Agreement Deed",
    },
    {
      id: "3",
      name: "Salary Increment Letter",
    },
    {
      id: "4",
      name: "Employee Resign Notice",
    },
    {
      id: "5",
      name: "Dealer Notice",
    },
    {
      id: "6",
      name: "Storing Maize Seed",
    },
    {
      id: "7",
      name: "Bike Transfer Agreement",
    },
    {
      id: "8",
      name: "Seed List for Approval",
    },
    {
      id: "9",
      name: "Check Delivery Form",
    },
  ]);

  return (
    <div className="bg-[#F9FAFB]">
      <div className="w-full max-w-[1160px] mx-auto">
        <div>
          <h2 className="text-[#1D263A] text-[60px] leading-[66px] tracking-[-1px] font-semibold text-center py-20">
            Download Files
          </h2>
        </div>

        <div className="w-[60%] mx-auto border border-[#116D48] rounded-[15px] flex justify-center items-center p-3">
          <div className="basis-[50%]">
            <p className="text-[#1D263A] text-[17px] leading-[30px] text-opacity-[50%] font-normal">
              Search Files
            </p>
          </div>
          <div className="basis-[50%] text-right">
            <button className="bg-[#146A47] text-[#FFFFFF] text-[17px] leading-[30px] font-semibold rounded-[10px] px-6 py-4">
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[22px] my-[100px]">
          {downloadFile.map((item, index) => {
            return (
              <div
                key={index}
                className="border border-[#DFDFDF] border-opacity-[70%] rounded-[15px] p-[16px] bg-[#FFFFFF]"
              >
                <div className="flex">
                  <div className="basis-[50%] flex items-center space-x-3">
                    <p>
                      <FcDocument size={20} />
                    </p>
                    <span className="text-[#1D263A] text-[15px] leading-[28px] font-normal text-opacity-[70%]">
                      docx
                    </span>
                  </div>
                  <div className="basis-[50%] flex items-center space-x-3">
                    <img src="/images/time_icon.svg" alt="time_icon" />
                    <span className="text-[#1D263A] text-[15px] leading-[28px] font-normal">
                      2 Weeks ago
                    </span>
                  </div>
                </div>
                <h4 className="text-[#1D263A] text-[18px] leading-[32px] font-semibold tracking-[-0.3px] pb-[17px] pt-[10px]">
                  {item.name}
                </h4>
                <button className="bg-[#146A47] rounded-[9px] text-[#FFFFFF] text-center text-[16px] leading-[20px] font-normal px-[18px] py-[10px]">
                  Download
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
