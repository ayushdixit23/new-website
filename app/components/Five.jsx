"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import picture from "../assets/picture.svg";
// import check from "../assets/CheckCircle.png";
import sm from "../assets/sm.svg";
import sm1 from "../assets/sm1.svg";
import sm2 from "../assets/sm2.svg";
import sm3 from "../assets/sm3.svg";
// import { BsArrowRight } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const Five = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div>
        <div
          className="grid grid-cols-1 select-none my-7 sm:my-[4%] w-full
		"
        >
          <div
            className="flex justify-center items-center w-full
		  "
          >
            <div className="w-[90%] sm:max-md:w-full flex gap-5 md:gap-8 justify-center items-center sm:max-md:p-2 md:p-1  max-w-[1100px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex justify-center items-center w-full h-full ">
                  <div className="md:w-[80%] md:h-[80%] p-2">
                    <div
                      data-aos-delay="50"
                      data-aos-duration="500"
                      data-aos-once="true"
                      data-aos-easing="ease-in-out"
                      data-aos="fade-left"
                      className="flex flex-col gap-3"
                    >
                      <div>
                        <h1 className="md:text-3xl text-2xl font-bold">
                          Just a Few Steps to Popularity!
                        </h1>
                      </div>
                      <div className="text-[#434D56] text-sm">
                        People want to follow social media accounts with quality
                        content. But they often don't have the time or patience
                        to judge an profile or page.
                      </div>
                    </div>
                    <div className="flex flex-col gap-8 my-6 sm:my-10">
                      <div
                        data-aos-delay="50"
                        data-aos-duration="500"
                        data-aos-once="true"
                        data-aos-easing="ease-in-out"
                        data-aos="fade-right"
                        className="flex justify-center rounded-lg p-3 px-2 bg-[#F2F3FE] gap-2"
                      >
                        <div>
                          <Image
                            src={sm3}
                            alt="check"
                            className="min-w-[25px] max-w-[30px]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="font-medium">Pick a package</div>
                          <div className="text-sm text-[#6A778B]">
                            Choose the Instagram likes, followers, or views
                            package that you're interested in. Feel free to get
                            in touch if you have an inquiry about a bulk order.
                          </div>
                        </div>
                      </div>
                      <div
                        data-aos-delay="50"
                        data-aos-duration="500"
                        data-aos-once="true"
                        data-aos-easing="ease-in-out"
                        data-aos="fade-left"
                        className="flex bg-[#F2FBFE] rounded-lg p-3 px-2 justify-center gap-2"
                      >
                        <div>
                          <Image
                            src={sm2}
                            alt="check"
                            className="min-w-[25px] max-w-[30px]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="font-medium">Fill the info</div>
                          <div className="text-sm  text-[#6A778B]">
                            We will never ask you for sensitive details such as
                            your password. All you have to do is provide us with
                            your username and leave the rest to us!
                          </div>
                        </div>
                      </div>
                      <div
                        data-aos-delay="50"
                        data-aos-duration="500"
                        data-aos-once="true"
                        data-aos-easing="ease-in-out"
                        data-aos="fade-right"
                        className="flex bg-[#FDF6F3] rounded-lg p-3 px-2 justify-center gap-2"
                      >
                        <div>
                          <Image
                            src={sm1}
                            alt="check"
                            className="min-w-[25px] max-w-[30px]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="font-medium">See the growth</div>
                          <div className="text-sm text-[#6A778B]">
                            All orders start within a few minutes, so you'll see
                            growth in your account very quickly. We've made the
                            process super easy.
                          </div>
                        </div>
                      </div>
                      {/* <div className="flex gap-4 items-center">
                        <div className="flex items-center p-2.5 px-4 gap-2 rounded-lg bg-[#0B63E5] text-white">
                          <div>Promote now</div>
                          <div>
                            <BsArrowRight />
                          </div>
                        </div>
                        <div className="bg-[#F0F5FF]  p-2.5 px-5 rounded-lg text-[#0B63E5]">
                          Our Services
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                  data-aos-easing="ease-in-out"
                  data-aos="fade-left"
                  className="flex justify-center items-center"
                >
                  <Image src={sm} alt="image" className="sm:min-w-[400px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Five;
