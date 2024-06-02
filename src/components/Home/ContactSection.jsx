import React from "react";
import { useForm } from "react-hook-form";
import { createContactSchema } from "../../validation/contact";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(createContactSchema);

  return (
    <div className="w-full max-w-[1160px] mx-auto mt-[220px]">
      <div className="bg-[#116D48] border rounded-3xl flex justify-between p-[20px]">
        <div className="basis-[50%] shrink-0 text-[#FFFFFF]">
          <div className="flex flex-col justify-between items-start pl-[50px]">
            <div>
              <h2 className="font-bold text-[42px] leading-[50.4px] pt-[40px] pb-[20px]">
                Our Contacts
              </h2>
            </div>
            <div className="mt-8 mb-[46px]">
              <div>
                <h6 className="text-[15px] leading-[26px] font-semibold mb-[12px] opacity-[50%] tracking-[3px]">
                  HEAD OFFICE
                </h6>
                <p className="mb-[27px] text-[21px] leading-[30px] font-semibold">
                  প্রতিভা সুপার মার্কেট গোবিন্দগঞ্জ , গাইবান্ধা
                </p>
              </div>
              <div>
                <h6 className="text-[15px] leading-[26px] font-semibold mb-[12px] opacity-[50%] tracking-[3px]">
                  CONTACT
                </h6>
                <p className="mb-[27px] text-[21px] leading-[30px] font-semibold">
                  +09639-203232
                </p>
              </div>
              <div className="pb-20">
                <h6 className="text-[15px] leading-[26px] font-semibold mb-[12px] opacity-[50%] tracking-[3px]">
                  EMAIL
                </h6>
                <p className="text-[21px] leading-[21px] font-semibold mb-[13px]">
                  info@russelseeds.com
                </p>
                <p className="text-[21px] leading-[21px] font-semibold">
                  raselseed101@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-[50%] shrink-0">
          <div className="rounded-xl mt-[-200px]">
            <div className="bg-[#FFFFFF] p-8 rounded-[20px] mt-[39px] border border-[#116D48]">
              <div className="mb-[42px]">
                <h2 className="text-[#000000] font-semibold text-[32px] leading-[50.4px]">
                  Any Queries?
                </h2>
              </div>

              <div className="">
                <form action="" className="">
                  <div className="mb-[25px]">
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="Name"
                      className="text-[#0A142F] w-full font-medium text-[16px] leading-[20px] p-3 border border-[#116D48] rounded-xl"
                    />
                  </div>

                  <div className="mb-[25px]">
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="Email"
                      className="text-[#0A142F] w-full font-medium text-[16px] leading-[20px] p-3 border border-[#116D48] rounded-xl"
                    />
                  </div>
                  <div className="mb-[25px]">
                    <input
                      type="text"
                      {...register("phone")}
                      placeholder="Phone Number"
                      className="text-[#0A142F] w-full font-medium text-[16px] leading-[20px] p-3 border border-[#116D48] rounded-xl"
                    />
                  </div>
                  <div className="mb-[25px]">
                    <input
                      type="text"
                      {...register("subject")}
                      placeholder="Subject"
                      className="text-[#0A142F] w-full font-medium text-[16px] leading-[20px] p-3 border border-[#116D48] rounded-xl"
                    />
                  </div>
                  <div className="mb-[25px]">
                    <input
                      type="text"
                      {...register("message")}
                      placeholder="Message"
                      className="text-[#0A142F] w-full font-medium text-[16px] leading-[20px] px-3 pt-3 pb-20 border border-[#116D48] rounded-xl"
                    />
                  </div>
                  <div className="mb-[15px]">
                    <button className="bg-[#146A47] text-[#FFFFFF] text-[16px] leading-[20px] border rounded-xl px-12 py-4">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
