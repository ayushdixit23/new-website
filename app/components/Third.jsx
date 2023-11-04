"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import insta from "../assets/instagram.png";
import youtube from "../assets/instagram1.png";
import facebook from "../assets/instagram2.png";
import telegram from "../assets/instagram3.png";
import { MdOutlineWebStories, MdPersonAddAlt1 } from "react-icons/md";
import { AiOutlineEye, AiOutlineHeart, AiOutlineRight } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { API } from "../Essential";
import Link from "next/link";

const Third = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState({
    insta: [],
    face: [],
    tele: [],
    you: [],
  });

  useEffect(() => {
    Aos.init();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API}/social`);

      setData({
        insta: [response.data[0].insta],
        face: [response.data[0].face],
        tele: [response.data[0].tele],
        you: [response.data[0].you],
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    setId(id);
  }, [id]);

  console.log(data);
  // console.log(data?.face[0]?.uniqueid[data.face[0]?.uniqueid.length - 1]);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(id);

  return (
    <>
      <div className="grid grid-cols-1 my-6">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center md:w-[50%] w-[97%] p-1 sm:w-[80%] leading-relaxed gap-2 sm:gap-4 text-center items-center">
            <div className="md:text-3xl sm:text-2xl text-xl font-extrabold">
              Tailor Your Growth Strategy: Genuine Views, Followers, and Likes
              for True Impact.
            </div>
            <div>
              Our array of options acknowledges the distinctiveness of each
              social media marketing campaign.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="lg:flex lg:justify-center w-full lg:items-center lg:px-16">
            <div className="grid sm:grid-cols-2 w-full xxl:w-[80%] lg:grid-cols-4 p-3 gap-4">
              {data.insta.map((d, i) => (
                <div
                  key={i}
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                  data-aos-easing="ease-in-out"
                  data-aos="fade-right"
                  className="p-6 flex flex-col gap-5 sm:max-w-[500px] bg-white shadow-lg rounded-lg"
                >
                  <div className="bg-[#EFF4FC] p-2 rounded-lg">
                    <div className="flex justify-end items-center">
                      <div className=" bg-white text-red-600 p-1 px-3 rounded-lg">
                        - {d?.offer}%
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 justify-center items-center">
                      <div>
                        <Image src={insta} alt="insta" />
                      </div>
                      <div className="text-lg font-semibold text-[#ff5656]">
                        {d?.name}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <MdPersonAddAlt1 className="text-xl" />
                          </div>
                          <div>{d?.information[0].Followers}</div>
                        </div>
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <AiOutlineHeart className="text-xl" />
                          </div>
                          <div>{d?.information[0].Likes}</div>
                        </div>
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <AiOutlineEye className="text-xl" />
                          </div>
                          <div>{d?.information[0].Shares}</div>
                        </div>
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <MdOutlineWebStories className="text-xl" />
                          </div>
                          <div>{d?.information[0].Comments}</div>
                        </div>
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    {id ? (
                      <Link
                        href={{
                          pathname: `/user/${d?.name}`,
                          query: {
                            name: d?.name,
                            offer: d?.offer,
                            details: d?.information[0].Followers,
                            Likes: d?.information[0].Likes,
                            Shares: d?.information[0].Shares,
                            Comments: d?.information[0].Comments,
                          },
                        }}
                        className="bg-[#3C8AFF] rounded-lg text-white p-3"
                      >
                        Show more
                      </Link>
                    ) : (
                      <Link
                        href="/user/login"
                        className="bg-[#3C8AFF] rounded-lg text-white p-3"
                      >
                        Show more
                      </Link>
                    )}
                  </div>
                </div>
              ))}

              {data.you.map((d, i) => (
                <div
                  key={i}
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                  data-aos-easing="ease-in-out"
                  data-aos="fade-left"
                  className="p-6 flex flex-col gap-5 sm:max-w-[500px] bg-white shadow-lg rounded-lg"
                >
                  <div className="bg-[#EFF4FC] p-2 rounded-lg">
                    <div className="flex justify-end items-center">
                      <div className=" bg-white text-red-600 p-1 px-3 rounded-lg">
                        - {d.offer}%
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 justify-center items-center">
                      <div>
                        <Image src={youtube} alt="insta" />
                      </div>
                      <div className="font-semibold text-lg text-[#FF6056]">
                        {d?.name}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <MdPersonAddAlt1 className="text-xl" />
                          </div>
                          <div>{d?.information[0].Subscribers}</div>
                        </div>
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <AiOutlineHeart className="text-xl" />
                          </div>
                          <div>{d?.information[0].Likes}</div>
                        </div>
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <AiOutlineEye className="text-xl" />
                          </div>
                          <div>{d?.information[0].Shares}</div>
                        </div>
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <MdOutlineWebStories className="text-xl" />
                          </div>
                          <div>{d?.information[0].Comments}</div>
                        </div>
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    {id ? (
                      <Link
                        href={{
                          pathname: `/user/${d?.name}`,
                          query: {
                            name: d?.name,
                            offer: d?.offer,
                            details: d?.information[0].Subscribers,
                            Likes: d?.information[0].Likes,
                            Shares: d?.information[0].Shares,
                            Comments: d?.information[0].Comments,
                          },
                        }}
                        className="bg-[#3C8AFF] rounded-lg text-white p-3"
                      >
                        Show more
                      </Link>
                    ) : (
                      <Link
                        href="/user/login"
                        className="bg-[#3C8AFF] rounded-lg text-white p-3"
                      >
                        Show more
                      </Link>
                    )}
                  </div>
                </div>
              ))}

              {data.face.map((d, i) => (
                <div
                  key={i}
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                  data-aos-easing="ease-in-out"
                  data-aos="fade-right"
                  className="p-6 flex flex-col gap-5 sm:max-w-[500px] bg-white shadow-lg rounded-lg"
                >
                  <div className="bg-[#EFF4FC] p-2 rounded-lg">
                    <div className="flex justify-end items-center">
                      <div className=" bg-white text-red-600 p-1 px-3 rounded-lg">
                        - {d?.offer}%
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 justify-center items-center">
                      <div>
                        <Image src={facebook} alt="insta" />
                      </div>
                      <div className="text-lg font-semibold text-[#4D30FF]">
                        {d?.name}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <MdPersonAddAlt1 className="text-xl" />
                          </div>
                          <div>{d?.information[0].Followers}</div>
                        </div>
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <AiOutlineHeart className="text-xl" />
                          </div>
                          <div>{d?.information[0].Likes}</div>
                        </div>
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <AiOutlineEye className="text-xl" />
                          </div>
                          <div>{d?.information[0].Shares}</div>
                        </div>
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <MdOutlineWebStories className="text-xl" />
                          </div>
                          <div>{d?.information[0].Comments}</div>
                        </div>
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    {id ? (
                      <Link
                        href={{
                          pathname: `/user/${d?.name}`,
                          query: {
                            name: d?.name,
                            offer: d?.offer,
                            details: d?.information[0].Followers,
                            Likes: d?.information[0].Likes,
                            Shares: d?.information[0].Shares,
                            Comments: d?.information[0].Comments,
                          },
                        }}
                        className="bg-[#3C8AFF] rounded-lg text-white p-3"
                      >
                        Show more
                      </Link>
                    ) : (
                      <Link
                        href="/user/login"
                        className="bg-[#3C8AFF] rounded-lg text-white p-3"
                      >
                        Show more
                      </Link>
                    )}
                  </div>
                </div>
              ))}

              {data.tele.map((d, i) => (
                <div
                  key={i}
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                  data-aos-easing="ease-in-out"
                  data-aos="fade-left"
                  className="p-6 flex flex-col gap-5 sm:max-w-[500px] bg-white shadow-lg rounded-lg"
                >
                  <div className="bg-[#EFF4FC] p-2 rounded-lg">
                    <div className="flex justify-end items-center">
                      <div className=" bg-white text-red-600 p-1 px-3 rounded-lg">
                        -{d?.offer}%
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 justify-center items-center">
                      <div>
                        <Image src={telegram} alt="insta" />
                      </div>
                      <div className="text-lg font-semibold text-[#3C8AFF]">
                        {d?.name}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <MdPersonAddAlt1 className="text-xl" />
                          </div>
                          <div>{d?.information[0].Subscribers}</div>
                        </div>
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <AiOutlineHeart className="text-xl" />
                          </div>
                          <div>{d?.information[0].Likes}</div>
                        </div>
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <AiOutlineEye className="text-xl" />
                          </div>
                          <div>{d?.information[0].Shares}</div>
                        </div>
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <MdOutlineWebStories className="text-xl" />
                          </div>
                          <div>{d?.information[0].Comments}</div>
                        </div>
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    {id ? (
                      <Link
                        href={{
                          pathname: `/user/${d?.name}`,
                          query: {
                            name: d?.name,
                            offer: d?.offer,
                            details: d?.information[0].Subscribers,
                            Likes: d?.information[0].Likes,
                            Shares: d?.information[0].Shares,
                            Comments: d?.information[0].Comments,
                          },
                        }}
                        className="bg-[#3C8AFF] rounded-lg text-white p-3"
                      >
                        Show more
                      </Link>
                    ) : (
                      <Link
                        href="/user/login"
                        className="bg-[#3C8AFF] rounded-lg text-white p-3"
                      >
                        Show more
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Third;
