"use client";
import Image from "next/image";
import React from "react";
import hero from "../assets/mainphoto.png";
import Header from "./Header";
import { useRouter } from "next/navigation";

const First = () => {
  const router = useRouter();
  return (
    <>
      <div>
        <div
          //    className="bg-bg bg-cover w-full h-screen"
          className=""
        >
          <div className="grid grid-cols-1 select-none h-[100%] w-full bg-[#E7FAFE]">
            {/* header */}
            <Header />

            {/* body */}
            <div className="grid grid-cols-1 w-full">
              <div className="flex flex-col justify-around xxl:justify-evenly xxl:min-h-[520px] w-full sm:flex-row">
                <div className="my-3 pn:max-sm:order-2 flex xxl:w-[35%] flex-col gap-6 justify-center">
                  <div className="flex p-4 xxl:items-center flex-col md:gap-8 gap-6 justify-center pn:max-sm:px-3">
                    <div className="flex sm:max-w-[500px] flex-col p-2 sm:p-4 gap-2 sm:gap-4">
                      <div className="text-[#F461A6] pn:max-sm:text-center font-semibold text-lg">
                        Social MEDIA GROWTH
                      </div>
                      <div
                        className="xxl:text-[40px] md:text-[35px] text-xl th:text-[25px] sm:max-new:text-2xl pn:max-sm:text-center
                        tracking-wide leading-snug font-bold"
                      >
                        The easiest way to Increase your Real Followers
                      </div>

                      <div className="flex justify-center items-center pn:max-sm:text-center">
                        Unleash your potential and become an unstoppable force.
                        Transform from zero to hero in your journey. Elevate
                        your growth and emerge as a popular creator.
                      </div>

                      {/* <div
                        onClick={() => router.push("/user/contact")}
                        className="flex flex-col items-center pt-2 sm:items-start gap-3"
                      >
                        <div className="bg-black flex items-center sm:max-new:text-sm justify-center text-white p-2 px-6 rounded-xl">
                          Visit Our Managing Site
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center sm:max-h-[500px] sm:max-w-[700px]">
                  <Image src={hero} alt="image" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;
