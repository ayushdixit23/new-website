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
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { encryptaes, decryptaes } from "./safety";

const Third = () => {
  const [id, setId] = useState("");
  const router = useRouter();

  useEffect(() => {
    const id = decryptaes(Cookies.get("ryiligid"));
    const refresh_token = decryptaes(Cookies.get("estkenR"));
    const access_token = decryptaes(Cookies.get("estkenA"));
    if (id && (refresh_token || access_token)) {
      setId(id);
    }
  }, []);

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
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div id="services" className="grid grid-cols-1 my-6">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center md:w-[50%] w-[97%] p-1 sm:w-[80%] leading-relaxed gap-2 sm:gap-4 text-center items-center">
            <div className="md:text-3xl sm:text-2xl text-xl font-extrabold">
              Want to grow yourself with Real followers likes and comments ?
            </div>
            <div>
              Allow Us To introduce Our Strategy that helps you to become famous
            </div>
            <div>We Use Our Community To grow Your Potential Social media</div>
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
                        {d?.offer}% {"off"}
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
                        {/* <div>
                          <AiOutlineRight />
                        </div> */}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <AiOutlineHeart className="text-xl" />
                          </div>
                          <div>{d?.information[0].Likes}</div>
                        </div>
                        {/* <div>
                          <AiOutlineRight />
                        </div> */}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <AiOutlineEye className="text-xl" />
                          </div>
                          <div>{d?.information[0].Views}</div>
                        </div>
                        {/* <div>
                          <AiOutlineRight />
                        </div> */}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <MdOutlineWebStories className="text-xl" />
                          </div>
                          <div>{d?.information[0].Comments}</div>
                        </div>
                        {/* <div>
                          <AiOutlineRight />
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    {id ? (
                      <div
                        // href={{
                        //   pathname: `/user/${d?.name}`,
                        //   query: {
                        //     name: d?.name,
                        //     offer: d?.offer,
                        //     details: d?.information[0].Followers,
                        //     Likes: d?.information[0].Likes,
                        //     Views: d?.information[0].Views,
                        //     Comments: d?.information[0].Comments,
                        //   },
                        // }}
                        onClick={() => {
                          router.push(`/user/${d?.name}`);
                          // dispatch(
                          Cookies.set(
                            "meordi",

                            encryptaes(
                              JSON.stringify({
                                name: d?.name,
                                offer: d?.offer,
                                details: d?.information[0].Followers,
                                Likes: d?.information[0].Likes,
                                Views: d?.information[0].Views,
                                Comments: d?.information[0].Comments,
                              })
                            )
                          );
                          // );
                        }}
                        className="bg-[#3C8AFF] rounded-lg text-white p-3"
                      >
                        Show more
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          router.push("/user/login"),
                            localStorage.setItem("path", `/`);
                        }}
                        className="bg-[#3C8AFF] rounded-lg text-white p-3"
                      >
                        Show more
                      </div>
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
                        {d?.offer}% {"off"}
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
                        {/* <div>
                          <AiOutlineRight />
                        </div> */}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <AiOutlineHeart className="text-xl" />
                          </div>
                          <div>{d?.information[0].Likes}</div>
                        </div>
                        {/* <div>
                          <AiOutlineRight />
                        </div> */}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <AiOutlineEye className="text-xl" />
                          </div>
                          <div>{d?.information[0].Views}</div>
                        </div>
                        {/* <div>
                          <AiOutlineRight />
                        </div> */}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <MdOutlineWebStories className="text-xl" />
                          </div>
                          <div>{d?.information[0].Comments}</div>
                        </div>
                        {/* <div>
                          <AiOutlineRight />
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    {id ? (
                      <div
                        // href={{
                        //   pathname: `/user/${d?.name}`,
                        //   query: {
                        //     name: d?.name,
                        //     offer: d?.offer,
                        //     details: d?.information[0].Subscribers,
                        //     Likes: d?.information[0].Likes,
                        //     Views: d?.information[0].Views,
                        //     Comments: d?.information[0].Comments,
                        //   },
                        // }}
                        onClick={() => {
                          router.push(`/user/${d?.name}`);
                          Cookies.set(
                            "meordi",

                            encryptaes(
                              JSON.stringify({
                                name: d?.name,
                                offer: d?.offer,
                                details: d?.information[0].Subscribers,
                                Likes: d?.information[0].Likes,
                                Views: d?.information[0].Views,
                                Comments: d?.information[0].Comments,
                              })
                            )
                          );
                        }}
                        className="bg-[#3C8AFF] rounded-lg text-white p-3"
                      >
                        Show more
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          router.push("/user/login"),
                            localStorage.setItem("path", `/`);
                        }}
                        className="bg-[#3C8AFF] rounded-lg text-white p-3"
                      >
                        Show more
                      </div>
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
                        {d?.offer}% {"off"}
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
                        {/* <div>
                          <AiOutlineRight />
                        </div> */}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <AiOutlineHeart className="text-xl" />
                          </div>
                          <div>{d?.information[0].Likes}</div>
                        </div>
                        {/* <div>
                          <AiOutlineRight />
                        </div> */}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <AiOutlineEye className="text-xl" />
                          </div>
                          <div>{d?.information[0].Views}</div>
                        </div>
                        {/* <div>
                          <AiOutlineRight />
                        </div> */}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <MdOutlineWebStories className="text-xl" />
                          </div>
                          <div>{d?.information[0].Comments}</div>
                        </div>
                        {/* <div>
                          <AiOutlineRight />
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    {id ? (
                      <div
                        // href={{
                        //   pathname: `/user/${d?.name}`,
                        //   query: {
                        //     name: d?.name,
                        //     offer: d?.offer,
                        //     details: d?.information[0].Followers,
                        //     Likes: d?.information[0].Likes,
                        //     Views: d?.information[0].Views,
                        //     Comments: d?.information[0].Comments,
                        //   },
                        // }}
                        onClick={() => {
                          router.push(`/user/${d?.name}`);
                          Cookies.set(
                            "meordi",

                            encryptaes(
                              JSON.stringify({
                                name: d?.name,
                                offer: d?.offer,
                                details: d?.information[0].Followers,
                                Likes: d?.information[0].Likes,
                                Views: d?.information[0].Views,
                                Comments: d?.information[0].Comments,
                              })
                            )
                          );
                          // );
                        }}
                        className="bg-[#3C8AFF] rounded-lg text-white p-3"
                      >
                        Show more
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          router.push("/user/login"),
                            localStorage.setItem("path", `/`);
                        }}
                        className="bg-[#3C8AFF] rounded-lg text-white p-3"
                      >
                        Show more
                      </div>
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
                  <div className="flex flex-col justify-between items-center w-full flex-grow">
                    <div className="w-full">
                      <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                          <div className="flex justify-center items-center gap-2">
                            <div className="bg-[#F8FAFC] p-1 rounded-md">
                              <MdPersonAddAlt1 className="text-xl" />
                            </div>
                            <div>{d?.information[0]?.Members}</div>
                          </div>
                          {/* <div>
                            <AiOutlineRight />
                          </div> */}
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex justify-center items-center gap-2">
                            <div className="bg-[#F8FAFC] p-1 rounded-md">
                              <AiOutlineHeart className="text-xl" />
                            </div>
                            <div>{d?.information[0].Reactions}</div>
                          </div>
                          {/* <div>
                            <AiOutlineRight />
                          </div> */}
                        </div>
                        {/* <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <AiOutlineEye className="text-xl" />
                          </div>
                          <div>{d?.information[0].Views}</div>
                        </div>
                        // <div>
                        //   <AiOutlineRight />
                        // </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                          <div className="bg-[#F8FAFC] p-1 rounded-md">
                            <MdOutlineWebStories className="text-xl" />
                          </div>
                          <div>{d?.information[0].Comments}</div>
                        </div>
                        // <div>
                        //   <AiOutlineRight />
                        // </div>
                      </div> */}
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      {id ? (
                        <div
                          // href={{
                          //   pathname: `/user/${d?.name}`,
                          //   query: {
                          //     name: d?.name,
                          //     offer: d?.offer,
                          //     details: d?.information[0].Subscribers,
                          //     Likes: d?.information[0].Likes,
                          //     Views: d?.information[0].Views,
                          //     Comments: d?.information[0].Comments,
                          //   },
                          // }}
                          onClick={() => {
                            router.push(`/user/${d?.name}`);
                            Cookies.set(
                              "meordi",

                              encryptaes(
                                JSON.stringify({
                                  name: d?.name,
                                  offer: d?.offer,
                                  details: d?.information[0]?.Members,
                                  Reactions: d?.information[0].Reactions,
                                  // Views: d?.information[0].Views,
                                  // Comments: d?.information[0].Comments,
                                })
                              )
                            );
                          }}
                          className="bg-[#3C8AFF] rounded-lg text-white p-3"
                        >
                          Show more
                        </div>
                      ) : (
                        <div
                          onClick={() => {
                            router.push("/user/login"),
                              localStorage.setItem("path", `/`);
                          }}
                          className="bg-[#3C8AFF] rounded-lg text-white p-3"
                        >
                          Show more
                        </div>
                      )}
                    </div>
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
