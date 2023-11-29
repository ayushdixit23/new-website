"use client";
import Image from "next/image";
import React from "react";
import hero from "../assets/Frame.png";
import { BsFillPlayCircleFill, BsStopwatchFill } from "react-icons/bs";
import Header from "./Header";
import Link from "next/link";
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
            <div className="grid grid-cols-1 w-full">
              <div className="flex flex-col justify-around xxl:justify-evenly xxl:min-h-[520px] w-full sm:flex-row">
                <div className="my-3 pn:max-sm:order-2 flex xxl:w-[35%] flex-col gap-6 justify-center">
                  <div className="flex p-4 xxl:items-center flex-col md:gap-8 gap-6 justify-center pn:max-sm:px-3">
                    <div className="flex flex-col p-2 sm:p-4 gap-2 sm:gap-4">
                      <div className="xxl:text-[40px] text-[35px] pn:max-sm:hidden sm:max-md:text-[26px] tracking-wide leading-snug font-bold">
                        <div>Elevate Your Social</div>
                        <div>Media Presence with</div>
                        <div>Willow Wave</div>
                      </div>
                      <div className="text-2xl sm:hidden tracking-wide pn:max-sm:text-center leading-snug font-bold">
                        <div>
                          Elevate Your Social{" "}
                          <br className="vs:max-sm:block hidden" /> Media
                          Presence with Willow Wave
                        </div>
                      </div>

                      <div className="pn:max-sm:text-center w-full text-sm">
                        WIllow Wave is a leading social media agency that
                        <br className="pn:max-new:hidden" />
                        provides tailored solutions for businesses and
                        <br className="pn:max-new:hidden" />
                        individuals looking to enhance their social media
                        <br className="pn:max-new:hidden" />
                        presence. Our expert team offers a wide range of
                        <br className="pn:max-new:hidden" />
                        services, from strategy development to content creation
                        <br className="pn:max-new:hidden" />
                        and advertising management, to help you grow your
                        <br className="pn:max-new:hidden" /> online audience.
                      </div>
                      <div
                        onClick={() => router.push("/user/contact")}
                        className="flex flex-col items-center pt-2 sm:items-start gap-3"
                      >
                        <div className="bg-black flex items-center justify-center text-white p-2 px-6 rounded-xl">
                          Contact Us
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex pn:max-sm:order-1 md:max-lg:w-[450px] justify-center lg:max-w-[500px] max-w-[650px] xxl:w-[35%] items-center pn:max-sm:p-4">
                  <Image
                    src={hero}
                    alt="image"
                    className="sm:max-w-[350px] lg:max-w-[500px]"
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