"use client";
import Image from "next/image";
import React from "react";

import hero from "../assets/hero.svg";
import { BsFillPlayCircleFill, BsStopwatchFill } from "react-icons/bs";
import Header from "./Header";

const First = () => {
  return (
    <>
      <div>
        <div
          //    className="bg-bg bg-cover w-full h-screen"
          className=""
        >
          <div className="grid grid-cols-1 select-none h-[100%] w-full bg-[#E7FAFE]">
            {/* header */}
            {/* <div className="px-[2%] pn:max-sm:py-3 sm:h-[10%]">
              <div className="flex justify-between lg:justify-around p-2 items-center">
                <div className="flex justify-center items-center">
                  <div>
                    <Image src={logo} alt="logo" />
                  </div>
                  <div className="text-lg font-bold">Willow Wave</div>
                </div>

                <div className="sm:hidden">
                  {menu ? (
                    <RxCross2
                      onClick={() => setMenu(!menu)}
                      className="text-2xl font-bold"
                    />
                  ) : (
                    <RiMenu3Line
                      onClick={() => setMenu(!menu)}
                      className="text-2xl font-bold"
                    />
                  )}
                </div>

                <div className="pn:max-sm:hidden">
                  <ul className="flex justify-center gap-7 text-sm items-center">
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>About us</li>
                  </ul>
                </div>
                <div className="flex justify-center pn:max-sm:hidden text-lg gap-6 items-center">
                
                  <div>
                    <FaFacebookF />
                  </div>
                  <div>
                    <BsTwitter />
                  </div>
                  <div>
                    <BsInstagram />
                  </div>
                </div>
              </div>
            </div> */}
            <Header />

            {/* body */}
            <div className="grid grid-cols-1 pn:max-lg:max-w-[1280px] w-full sm:h-[90%]">
              <div className="flex flex-col justify-around xxl:justify-center w-full sm:flex-row min-h-[400px] ">
                <div className=" my-3 flex flex-col gap-6 justify-center items-center">
                  <div className="flex flex-col md:gap-8 gap-6 justify-center pn:max-sm:px-3 sm:w-[75%] md:w-[53%]">
                    <div className="flex flex-col gap-4">
                      <div className="text-[40px] sm:max-md:text-3xl tracking-wide pn:max-sm:text-center leading-snug font-bold">
                        <br className="hidden md:block" />{" "}
                        <span className="text-red-600 underline">Branding</span>{" "}
                        <br className="hidden md:block" />
                        at its peak
                      </div>

                      <div className="pn:max-sm:text-center">
                        Strategically deploy social media for genuine audience
                        bonds
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex gap-4">
                      <button className="flex justify-center items-center py-3 px-3 gap-1 bg-[#edeaeaf1] text-black rounded-full">
                        <BsStopwatchFill />
                        <div className="text-xs">Start 14 days Free Trial</div>
                      </button>
                      <button className="flex justify-center items-center py-3 px-3 gap-1  bg-black text-white rounded-xl">
                        <BsFillPlayCircleFill />
                        <div className="text-xs">Watch a Demo</div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center pn:max-sm:p-4">
                  <Image
                    src={hero}
                    alt="image"
                    className="sm:max-w-[400px] lg:max-w-[500px]"
                  />
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
