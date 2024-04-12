"use client";
import { API } from "@/app/Essential";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
// import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { GrStatusWarning } from "react-icons/gr";
import { BsChevronDown, BsInstagram } from "react-icons/bs";
import { FaRegComments, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import Cookies from "js-cookie";
import { decryptaes } from "@/app/components/safety";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axiosInstance from "@/app/components/axiosCode";
import { RxCross1 } from "react-icons/rx";
import { encryptaes } from "@/app/components/safety";
import { ref, set, get, remove, child, onValue } from "firebase/database";
import { database } from "../../../firebase.config";

import Image from "next/image";
import logo from "../../assets/logo.png";
import { data } from "autoprefixer";
// import { FaPeopleGroup } from "react-icons/fa6";
// import { PiClockCounterClockwise } from "react-icons/pi";
const page = () => {
  const [states, setStates] = useState({
    type: "",
    count: "",
    link: "",
  });
  const [o, setO] = useState(false);
  const [id, setId] = useState("");
  const router = useRouter();
  const [endata, setEndata] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [pop, setPop] = useState(false);
  const [cookiedata, setCookieData] = useState(null)


  useEffect(() => {
    const c = Cookies.get("meordi")
    const a = c ? decryptaes(c) : null
    const coos = JSON.parse(a)
    setCookieData(coos)
  }, [Cookies.get("meordi")])
  const { name, offer, details, Likes, Reactions, Views, Comments } =
    cookiedata || {}; // Providing an empty object as default value
  // const params = useSearchParams();

  useEffect(() => {
    const id = decryptaes(Cookies.get("ryiligid"));
    const refresh_token = decryptaes(Cookies.get("estkenR"));
    const access_token = decryptaes(Cookies.get("estkenA"));
    if (id && (refresh_token || access_token)) {
      setId(id);
    }
  }, []);

  // const name = params.get("name");
  // const details = params.get("details");
  // const Likes = params.get("Likes");
  // const Shares = params.get("Shares");
  // const Comments = params.get("Comments");
  // const offer = params.get("offer");

  const arr = [details, Likes || Reactions, Views, Comments];

  const closeDropdown = () => {
    setIsOpen(false);
  };

  // const handleminus = () => {
  //   if (states.count < 150) return;
  //   setStates({ ...states, count: Number(states.count - 150) });
  // };

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (type) => {
    setStates({ ...states, type: type });
    closeDropdown();
  };

  // const handleplus = () => {
  //   const countValue = parseFloat(states.count) || 0;
  //   setStates({ ...states, count: countValue + 150 });
  // };

  // const sendData = async () => {
  //   try {
  //     const data = {
  //       SocialMedia: name,
  //       price: Number(discount.toFixed(2)),
  //       category: states.type,
  //       link: states.link,
  //       Count: states.count,
  //       id: id,
  //     };
  //     if (!states.link || !states.count || !states.type) {
  //       setPop(true);
  //       const inters = setInterval(() => {
  //         setPop(false);
  //       }, 2000);
  //       return () => {
  //         clearInterval(inters);
  //       };
  //     } else {
  //       const response = await axiosInstance.post(`${API}/socialmedia`, data);
  //       console.log(response.data.message);
  //       if (response.data.message == "Unauthorized: Invalid access token") {
  //         toast.error("Something Went Wrong!, Please Login Again");
  //         setTimeout(() => {
  //           router.push("/user/login");
  //         }, 4000);
  //       }
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // api request with data= userid,amount,time
  // success=> iframe true or false
  // request payement api frontend load

  // user name
  // paymg
  // amount
  //ABSOLUTE
  // CLOSE
  // TRIM N>0 NUMBER

  const perPrice = () => {
    if (name == "Instagram") {
      if (states.type == "Likes") {
        return 0.055;
      } else if (states.type == "Views") {
        return 0.088;
      } else if (states.type == "Comments") {
        return 0.15;
      } else {
        return 0.11;
      }
    } else if (name == "Facebook") {
      if (states.type == "Likes") {
        return 0.13;
      } else if (states.type == "Views") {
        return 0.25;
      } else if (states.type == "Comments") {
        return 0.15;
      } else {
        return 0.189;
      }
    } else if (name == "Youtube") {
      if (states.type == "Likes") {
        return 0.118;
      } else if (states.type == "Views") {
        return 0.135;
      } else if (states.type == "Comments") {
        return 0.9999;
      } else {
        return 0.152;
      }
    } else {
      if (states.type == "Reactions") {
        return 0.15;
      } else {
        return 0.2;
      }
    }
  };

  // const perPrice = 0.1;
  const price = perPrice() * Number(states.count);

  const offerPercentage = parseFloat(offer) || 0;
  const caldis = (price * offerPercentage) / 100;
  const discount = Math.ceil(price) - Math.ceil(caldis);

  const formattedPrice = Math.ceil(price);
  const formattedCaldis = Math.ceil(caldis);
  const formattedDiscount = Math.ceil(discount);

  const sendServerDetails = async () => {
    try {
      const data = {
        time: Date.now(),
        userid: id,
        amount: formattedDiscount,
        from: "Willow Wave",
        email: "contact@willowwave.com",
        upi: "fsayush100-1@okaxis",
        socialMedia: name,
        category: states.type,
        link: states.link,
        count: states.count,
      };
      if (!states.link || !states.count || !states.type) {
        toast.warn("Enter All Details");
      } else {
        let encdata = encryptaes(JSON.stringify(data));
        const res = await axios.post(
          `https://payments.grovyo.xyz/api/pendingpay`,
          {
            data: encdata,
          }
        );

        if (res.data.success) {
          let da = {
            time: Date.now(),
            userid: id,
            amount: formattedDiscount,
            pid: res.data.p,
            from: "Willow Wave",
            email: "contact@willowwave.com",
            upi: "fsayush100-1@okaxis",
            socialMedia: name,
            category: states.type,
            link: states.link,
            count: states.count,
          };
          const a = encryptaes(JSON.stringify(da));

          setEndata(a);
          setO(true);
          writeUserData();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const writeUserData = useCallback(async () => {
    set(ref(database, `${id}/`), {
      newvpa: "",
    });
  }, [id]);

  useEffect(() => {
    const starCountRef = ref(database, `${id}/`);
    const unsub = onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      if (data?.newvpa) {
        const combref = ref(database, `${data?.newvpa}/`);
        onValue(combref, (snapshot) => {
          const dat = snapshot.val();
          console.log(dat);
          if (dat?.status === "success") {
            remove(starCountRef)
              .then(() => {
                console.log("Data deleted successfully");
              })
              .catch((error) => {
                console.error("Error deleting data:", error.message);
              });
            setTimeout(() => {
              router.push("/user/dashboard");
            }, 3000);
          }
        });
      }
    });

    return () => {
      unsub();
    };
  }, [database, id]);

  // const handleMessage = (event) => {
  //   // Check if the message is from the correct iframe and has the expected content
  //   if (
  //     event.source === iframeA.contentWindow &&
  //     event.data === "closeIframeA"
  //   ) {
  //     // Close iframe A
  //     iframeA.style.display = "none";
  //   }
  // };

  // Attach the message event listener
  // window.addEventListener("message", handleMessage);

  return (
    <>
      {/* {pop && (
        <div
          className={`absolute flex duration-1000 justify-center items-center w-full left-0 ${
            pop ? "top-9" : "-top-[300px]"
          }  `}
        >
          <div className="bg-white flex text-sm text-red-700 font-semibold p-2 justify-center rounded-lg items-center shadow-md w-[300px]">
            <span className="mx-2 text-red-700">
              <GrStatusWarning />
            </span>{" "}
            Please Enter Full Details !
          </div>
        </div>
      )} */}
      <div className="select-none">
        <ToastContainer />
        <div className="grid grid-cols-1 w-full">
          <div className="flex justify-center my-8 items-center">
            <div className="sm:w-[80%] w-[95%] flex flex-col">
              {/* <div className="sm:flex sm:flex-wrap grid bg-[#E7FAFE] p-3 grid-cols-2 items-center gap-5 rounded-lg md:max-w-[80%]">
                <div
                  onClick={() => setStates({ ...states, type: "Followers" })}
                  className={`flex justify-center items-center gap-2 p-3 px-5 ${
                    states.type === "Followers"
                      ? "bg-white rounded-xl font-medium"
                      : null
                  }`}
                >
                  <div>
                    <FaPeopleGroup />
                  </div>
                  <div>Followers</div>
                </div>
                <div
                  onClick={() => setStates({ ...states, type: "Likes" })}
                  className={`flex justify-center items-center gap-2 p-3 px-5 ${
                    states.type === "Likes"
                      ? "bg-white rounded-xl font-medium"
                      : null
                  }`}
                >
                  <div>
                    <AiOutlineHeart />
                  </div>
                  <div>Likes</div>
                </div>
                <div
                  onClick={() => setStates({ ...states, type: "Stories" })}
                  className={`flex justify-center items-center gap-2 p-3 px-5 ${
                    states.type === "Stories"
                      ? "bg-white rounded-xl font-medium"
                      : null
                  }`}
                >
                  <div>
                    <PiClockCounterClockwise className="text-xl" />
                  </div>
                  <div>Stories</div>
                </div>
                <div
                  onClick={() => setStates({ ...states, type: "Views" })}
                  className={`flex justify-center items-center gap-2 p-3 px-5 ${
                    states.type === "Views"
                      ? "bg-white rounded-xl font-medium"
                      : null
                  }`}
                >
                  <div>
                    <AiOutlineEye />
                  </div>
                  <div>Views</div>
                </div>
                <div
                  onClick={() => setStates({ ...states, type: "Comments" })}
                  className={`flex justify-center items-center gap-2 p-3 px-5 ${
                    states.type === "Comments"
                      ? "bg-white rounded-xl font-medium"
                      : null
                  }`}
                >
                  <div>
                    <FaRegComments />
                  </div>
                  <div>Comments</div>
                </div>
                <div
                  onClick={() => setStates({ ...states, type: "Saves" })}
                  className={`flex justify-center items-center gap-2 p-3 px-5 ${
                    states.type === "Saves"
                      ? "bg-white rounded-xl font-medium"
                      : null
                  }`}
                >
                  <div>
                    <FaPeopleGroup />
                  </div>
                  <div>Saves</div>
                </div>
              </div> */}
              <div className="grid sm:grid-cols-5 my-3  gap-5 max-h-[100px] w-full">
                <div className="sm:col-span-3 sm:max-h-[330px] shadow-lg rounded-xl">
                  <div className="bg-[#FBFCFE] rounded-t-xl p-4 font-bold text-xl">
                    {name}
                  </div>
                  <div className="flex flex-col flex-grow rounded-b-xl  bg-white gap-7 p-4">
                    <div className="flex border-2 rounded-lg w-full p-2 items-center gap-2">
                      {name === "Instagram" && <BsInstagram />}
                      {name === "Facebook" && <BiLogoFacebook />}
                      {name === "Youtube" && <FaYoutube />}
                      {name === "Telegram" && <FaTelegramPlane />}
                      <input
                        type="text"
                        className="outline-none w-full"
                        onChange={(e) =>
                          setStates({ ...states, link: e.target.value })
                        }
                        value={states.link}
                        placeholder={
                          name
                            ? (name === "Instagram" &&
                              "https://www.instagram.com/username") ||
                            (name === "Facebook" &&
                              "https://www.facebook.com/username") ||
                            (name === "Youtube" &&
                              "https://www.youtube.com/username") ||
                            (name === "Telegram" &&
                              "https://www.telegram.com/username")
                            : "Enter Your Social Media Details"
                        }
                      />
                    </div>
                    <div
                      className={`flex border-2 rounded-lg relative group justify-between items-center p-2 px-3 ${isOpen ? "border-blue-500" : ""
                        }`}
                      onClick={handleDropdownClick}
                    >
                      <div>{states.type || "Choose a package"}</div>
                      <div>
                        <BsChevronDown />
                      </div>
                      {isOpen && (
                        <div className="absolute w-full top-11 shadow-md rounded-xl bg-white left-0">
                          <div className="flex flex-col font-semibold w-full gap-4 p-3 px-5">
                            {arr.map((type) => (
                              <div
                                key={type}
                                onClick={() => handleOptionClick(type)}
                              >
                                {type}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-5 bg-[#EFF4FC] rounded-xl text-[#92A1BC] ">
                      <div className="col-span-3 border-2 rounded-l-xl border-r-0 p-2 flex justify-between items-center">
                        <div className="flex justify-center items-center">
                          <input
                            type="number"
                            name="number"
                            placeholder={`Enter Your ${states.type ? states.type : ""
                              } Count`}
                            onChange={(e) => {
                              const newValue = e.target.value;

                              if (
                                !isNaN(newValue) &&
                                parseFloat(newValue) >= 0
                              ) {
                                setStates({ ...states, count: newValue });
                              } else if (newValue === "" || newValue === "-") {
                                setStates({ ...states, count: newValue });
                              }
                            }}
                            value={states.count}
                            id="number"
                            className="p-2 bg-transparent border-b-2 w-full border-black  outline-none"
                          />
                        </div>
                        {/* <div className="flex justify-center items-center gap-3">
                          <div onClick={handleminus} className="text-4xl">
                            -
                          </div>
                          
                          <div onClick={handleplus} className="text-4xl">
                            +
                          </div>
                        </div> */}
                        <div className="flex justify-center items-center text-lg">
                          of
                        </div>
                      </div>
                      <div className="col-span-2 rounded-r-xl flex justify-center items-center border-2 border-l-0">
                        {name == ("Instagram" || "Facebook")
                          ? states.type
                            ? states.type
                            : "Followers"
                          : states.type
                            ? states.type
                            : "Subscribers"}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2 flex flex-col w-full sm:max-w-[300px] gap-4">
                  <div className="p-2 flex fle-col gap-2 shadow-md 	rounded-lg flex-col bg-white">
                    <div className="flex justify-between items-center">
                      <div>{states.type ? states.type : "Followers"}:</div>
                      <div>{states.count ? states.count : 0}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>Price</div>
                      <div>₹ {formattedPrice} </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div> Discounted Price</div>
                      <div>
                        <span className="text-xl">-</span> ₹ {formattedCaldis}
                      </div>
                    </div>
                    <div>({offer}%) off</div>
                    <div className="w-full h-1 border-dashed mt-3 border-t border-black"></div>
                    <div className="flex justify-between items-center">
                      <div>To pay:</div>
                      <div>₹ {formattedDiscount} </div>
                    </div>
                    <div className="bg-[#1D9BF0] text-white p-2 rounded-lg font-medium flex justify-center items-center w-full">
                      <button
                        onClick={sendServerDetails}
                        // onClick={sendData}
                        // disabled={states.count < 150}
                        className="w-full"
                      >
                        Confirm the order
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 rounded-xl bg-[#EFF4FC] p-4">
                    <div className="text-sm font-semibold">Note</div>
                    <div className="text-sm text-[#515C6B]">
                      By confirming your order, you agree to the provisions
                      specified in the agreement. Your Order will be acknowledge
                      within 24 hours.
                    </div>
                    {/* <div className="flex items-center text-sm text-[#515C6B] gap-2">
                      <div>More Details</div>
                      <div>
                        <BsChevronDown />
                      </div>
                    </div> */}
                  </div>

                  {o && endata && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter h-screen backdrop-blur-md z-10">
                      <div className="flex justify-center p-2 h-screen items-center">
                        <div className="relative ">
                          <iframe
                            id="childframe"
                            // ref={(iframe) => (iframeA = iframe)}
                            src={`https://payments-f.grovyo.xyz/?zu=${endata}`}
                            className=" bg-white shadow-xl rounded-2xl min-h-[500px] min-w-[300px] w-full sm:h-[600px] sm:w-[600px]"
                          ></iframe>
                          <button
                            onClick={() => setO(false)}
                            className="absolute top-4 right-4 text-xl font-medium text-white cursor-pointer"
                          >
                            <RxCross1 />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
