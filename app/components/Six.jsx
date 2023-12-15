"use client";
import React, { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import photo from "../assets/Invisible.svg";
import Image from "next/image";
import a1 from "../assets/ai1.png";
import a2 from "../assets/ai2.png";
import a3 from "../assets/ai3.png";
import a4 from "../assets/ai4.png";
import a5 from "../assets/ai5.png";
import { BiSolidStar } from "react-icons/bi";
const Six = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([
    {
      id: 0,
      msg: "Willow Wave's social media mastery drives consistent online growth, firmly establishing them as trusted and reliable digital partners.",
      name: "Benjamin Mitchell",
      subname: "Social Media Manager",
      img: a1,
      star: 4,
    },
    {
      id: 1,
      msg: "Kudos to Willow Wave for elevating our social media presence. Their brilliant strategies drive remarkable growth, making them a top-notch digital partner",
      name: "Daniel Walker",
      subname: "Content Creator",
      img: a2,
      star: 4,
    },
    {
      id: 2,
      msg: "Willow Wave's social media services are truly exceptional, consistently delivering impressive results. Their profound understanding of our brand is unmatched.",
      name: "Oliver Scott",
      subname: "Influencer",
      img: a3,
      star: 5,
    },
    {
      id: 3,
      msg: "Willow Wave's social media services are exceptional, blending a deep brand understanding with consistently impressive results, elevating our online presence.",
      name: "William Evans",
      subname: "Digital Marketing",
      img: a4,
      star: 5,
    },
    {
      id: 4,
      msg: "Highly satisfied with Willow Wave. Their excellence and innovative strategies have delivered exceptional results.",
      name: "Henry Davis",
      subname: "Blogger",
      img: a5,
      star: 4,
    },
  ]);

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const lastindex = data.length - 1;
    if (index < 0) {
      setIndex(lastindex);
    } else if (index > lastindex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => {
      clearInterval(slider); // Clear the interval when the component unmounts
    };
  }, [index]);

  return (
    <>
      <div>
        <div
          className="grid grid-cols-1 select-none my-5 sm:my-[4%] w-full
		"
        >
          <div
            className="flex justify-center items-center w-full
		  "
          >
            <div className="sm:w-[90%] w-[95%] flex gap-8 justify-center items-center p-1 max-w-[1100px]">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className=" flex justify-center ">
                  <div
                    className="
				   flex md:w-[60%] sm:w-[80%] justify-center gap-6 flex-col"
                  >
                    <div className="md:text-4xl sm:text-3xl text-2xl pn:max-sm:px-2 font-semibold md:leading-snug">
                      What our client says about our services.
                    </div>
                    <div className="flex gap-2 my-2 justify-center pn:max-sm:hidden">
                      <div
                        onClick={prevSlide}
                        className="bg-[#F0F5FF] w-16 h-w-16 p-2 flex justify-center items-center"
                      >
                        <BsArrowLeft className="text-3xl" />
                      </div>
                      <div
                        onClick={nextSlide}
                        className="bg-[#F0F5FF] w-16 h-w-16 p-2 flex justify-center items-center"
                      >
                        <BsArrowRight className="text-3xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <div className="bg-[#FFF3E6] p-2 border-2 sm:max-w-[500px] overflow-hidden rounded-xl">
                    {/* <div className="w-full h-full bg-white">
                      <div className="flex gap-3 sm:gap-5 p-2 flex-col">
                        <div className="flex gap-1 mt-2 text-[#FF8800] text-xl items-center">
                          <BiSolidStar />
                          <BiSolidStar />
                          <BiSolidStar />
                          <BiSolidStar />
                          <BiSolidStar />
                        </div>
                        <div className="text-sm sm:text-base">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Illum ad culpa asperiores, aliquid officia
                          voluptate molestiae, quas quisquam numquam eveniet
                          officiis quaerat minus ratione delectus.
                        </div>
                        <div className="flex gap-2  items-center">
                          <div>
                            <Image src={photo} alt="photo" />
                          </div>
                          <div className="flex flex-col">
                            <div className="text-sm font-semibold">
                              Ayush Dixit
                            </div>
                            <div className="text-xs">Developer</div>
                          </div>
                        </div>
                        <div className="flex justify-end text-5xl text-[#FFE7CC]">
                          &#x275E;
                        </div>
                      </div>
                    </div> */}

                    <div className="w-full  relative">
                      <div className="relative p-3 w-full pn:max-vs:h-64 sm:max-md:h-64 h-56">
                        {data.map((slide, slideIndex) => (
                          <div
                            key={slide.id}
                            className={`absolute top-0 left-0 w-full h-full transform transition-transform duration-500 ease-in-out ${
                              slideIndex === index
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-full"
                            }`}
                          >
                            <div className="w-full h-full bg-white p-2 flex  flex-col">
                              <div className="flex flex-col gap-3 sm:gap-5">
                                <div className="flex gap-1 mt-2 text-[#FF8800] text-xl items-center">
                                  {[...Array(slide.star)].map((_, i) => (
                                    <BiSolidStar key={i} />
                                  ))}
                                </div>
                                <div className="text-sm md:text-base">
                                  {slide.msg}
                                </div>
                                <div className="flex gap-2 items-center">
                                  <div>
                                    <Image
                                      src={slide.img}
                                      alt="photo"
                                      className="w-12 h-12 rounded-full"
                                    />
                                  </div>
                                  <div className="flex flex-col">
                                    <div className="text-sm font-semibold">
                                      {slide.name}
                                    </div>
                                    <div className="text-xs">
                                      {slide.subname}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-between h-10 w-full items-center">
                                <div className="text-center">
                                  {data.map((_, dotIndex) => (
                                    <span
                                      key={dotIndex}
                                      className={`inline-block w-2 h-2 mx-2 rounded-full cursor-pointer ${
                                        dotIndex === index
                                          ? "bg-blue-500"
                                          : "bg-gray-300"
                                      }`}
                                      onClick={() => setIndex(dotIndex)}
                                    ></span>
                                  ))}
                                </div>
                                <div className="flex justify-end items-center -p-2 mx-2 text-5xl text-[#191539]">
                                  &#x275E;
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
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

export default Six;
