"use client";
import React, { useEffect } from "react";
import icon from "../assets/Icons.svg";
import icon1 from "../assets/Icons1.svg";
import icon2 from "../assets/Icons2.svg";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const Second = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div>
        <div
          className="grid grid-cols-1 select-none my-[3%] w-full
		"
        >
          <div
            className="flex justify-center items-center w-full
		  "
          >
            <div className="bg-[#E7FAFE] rounded-2xl w-[90%] max-w-[1300px]">
              <div className="flex flex-col justify-center items-center gap-5 p-3 sm:p-[2%]">
                <div className="md:text-[26px] text-xl pt-2 text-center font-semibold">
                  Take the lead in smartly{" "}
                  <span className="text-red-600 underline">social media</span>{" "}
                  marketing
                </div>
                <div className="flex justify-center my-3 items-center">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                    <div
                      data-aos-delay="50"
                      data-aos-duration="500"
                      data-aos-once="true"
                      data-aos-easing="ease-in-out"
                      data-aos="fade-right"
                      className="bg-white p-5 shadow-md rounded-xl sm:max-w-[400px] flex flex-col gap-4"
                    >
                      <div>
                        <Image src={icon} alt="icons" />
                      </div>
                      <div className="flex justify-center flex-col gap-2">
                        <div className="text-xl sm:text-lg lg:text-xl font-semibold">
                          Creative Content Orchestration
                        </div>
                        <div className="md:w-[85%] leading-snug pn:max-sm:max-w-[75%] w-full font-medium text-[#333]">
                          Content orchestration: Shaping narratives for business
                          excellence.
                        </div>
                      </div>
                      <div className="flex items-center gap-1 font-medium text-[#0B63E5]">
                        <div>Learn More</div>
                        <div>
                          <BsArrowRight className="text-xl" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-aos-delay="50"
                      data-aos-duration="500"
                      data-aos-once="true"
                      data-aos-easing="ease-in-out"
                      data-aos="fade-left"
                      className="bg-white p-5 shadow-md rounded-xl sm:max-w-[400px] flex flex-col gap-4"
                    >
                      <div>
                        <Image src={icon1} alt="icons" />
                      </div>
                      <div className="flex justify-center flex-col gap-2">
                        <div className="text-xl sm:text-lg lg:text-xl font-semibold">
                          Community Cultivation
                        </div>
                        <div className="md:w-[85%] leading-snug pn:max-sm:max-w-[75%]  w-full font-medium text-[#333]">
                          We prioritize community cultivation as an integral
                          aspect of our growth model.
                        </div>
                      </div>
                      <div className="flex items-center gap-1 font-medium text-[#0B63E5]">
                        <div>Learn More</div>
                        <div>
                          <BsArrowRight className="text-xl" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-aos-delay="50"
                      data-aos-duration="500"
                      data-aos-once="true"
                      data-aos-easing="ease-in-out"
                      data-aos="fade-right"
                      className="bg-white p-5 shadow-md rounded-xl sm:max-w-[400px] flex flex-col gap-4"
                    >
                      <div>
                        <Image src={icon2} alt="icons" />
                      </div>
                      <div className="flex justify-center flex-col gap-2">
                        <div className="text-xl sm:text-lg lg:text-xl font-semibold">
                          Collaborative Alchemy
                        </div>
                        <div className="md:w-[85%] leading-snug pn:max-sm:max-w-[75%]  w-full font-medium text-[#333]">
                          Elevate Your Business with the Power of Collaborative
                          Alchemy.
                        </div>
                      </div>
                      <div className="flex items-center gap-1 font-medium text-[#0B63E5]">
                        <div>Learn More</div>
                        <div>
                          <BsArrowRight className="text-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
