"use client";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Cookies from "js-cookie";
import { decryptaes } from "@/app/components/safety";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  const [id, setId] = useState("");

  useEffect(() => {
    const id = decryptaes(Cookies.get("ryiligid"));
    const refresh_token = decryptaes(Cookies.get("estkenR"));
    const access_token = decryptaes(Cookies.get("estkenA"));
    if (id && (refresh_token || access_token)) {
      setId(id);
    }
  }, []);
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div
        className={` fixed inset-0  w-full h-screen ${menu ? "z-10" : "-z-10"}`}
      ></div>
      <div className="px-[2%] bg-[#E7FAFE] pn:max-sm:py-3">
        <div className="flex justify-between lg:justify-around sm:p-2 items-center">
          <div className="flex flex-col p-2 justify-center items-center">
            <div className="pt-2">
              <Image src={logo} alt="logo" className="w-[38px] h-[20px]" />
            </div>
            {/* <div className="gap-1 pn:max-sm:hidden flex flex-col py-1">
              <div className="text-sm leading-snug tracking-wide font-bold">
                Willow
              </div>
              <div className="text-xs -mt-2 text-center font-bold">wave</div>
            </div> */}
          </div>

          <div className="sm:hidden z-50">
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
              {/* <li>Blog</li> */}
              <li onClick={() => router.push("/")}>Home</li>
              <li
                onClick={() => {
                  id
                    ? router.push("/user/contact")
                    : (router.push("/user/login"),
                      localStorage.setItem("path", "/user/contact"));
                }}
              >
                Contact Us
              </li>
              <li>
                <Link href="#services">Servics</Link>
              </li>
              {/* <li>About us</li> */}
            </ul>
          </div>
          <div className="flex justify-center pn:max-sm:hidden text-lg gap-6 items-center">
            {/* <div className="font-semibold">Log in</div>
                <div className="p-2 px-6 rounded-xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                  Sign up
                </div> */}
            {/* <div>
              <FaFacebookF />
            </div>
            <div>
              <BsTwitter />
            </div> */}
            <div className="flex justify-center items-center">
              <button
                onClick={() => router.push("/user/login")}
                className="p-2 px-4 text-sm bg-transparent text-black rounded-xl"
              >
                Sign In
              </button>
              <button
                onClick={() => router.push("/user/signup")}
                className="p-2 text-sm px-6 bg-[#2057C2] text-white rounded-xl"
              >
                Signup
              </button>
            </div>
            {/* <a
              target="_blank
            "
              href="https://www.instagram.com/willow_wave_/?igshid=YTQwZjQ0NmI0OA%3D%3D"
            >
              <BsInstagram />
            </a> */}
          </div>
        </div>
      </div>

      {/* mobile */}

      <div
        className={`absolute duration-500 sm:hidden z-10 left-0 w-full bg-white ${
          menu ? "top-0 " : "-top-[500px]"
        }`}
      >
        <div className="w-full justify-center items-center p-3 flex flex-col">
          <div className="flex flex-col items-center w-full gap-3 pt-5">
            {/* <div className="text-xl font-semibold py-2">Blog</div> */}
            <div
              onClick={() => {
                id
                  ? router.push("/user/contact")
                  : (router.push("/user/login"),
                    localStorage.setItem("path", "/user/contact"));
              }}
              className="text-xl font-semibold py-2"
            >
              Contact
            </div>
            {/* <div className="text-xl font-semibold py-2">About Us</div> */}
            <div className="sm:hidden my-3">
              <div className="flex items-center flex-wrap gap-3">
                {/* <div className="bg-[#F0F5FF] p-3 rounded-lg">
                  {" "}
                  <FaFacebookF className="text-xl text-[#1877F2]" />
                </div>
                <div className="bg-[#0E76A8] p-3 rounded-lg">
                  {" "}
                  <FaLinkedinIn className="text-xl text-[#fff]" />
                </div> */}

                <a
                  target="_blank"
                  href="https://www.instagram.com/willow_wave_/?igshid=YTQwZjQ0NmI0OA%3D%3D"
                  className="bg-[#edeaeaf1] p-3 rounded-lg"
                >
                  <FaInstagram className="text-xl  text-[#ec6455]" />
                </a>
              </div>
            </div>
            <div className="w-full px-3 pb-7">
              <div className="flex flex-col text-sm justify-center items-center gap-3 w-full">
                <button
                  onClick={() => router.push("/user/login")}
                  className="p-2 px-4 bg-transparent text-black w-full rounded-full"
                >
                  Sign In
                </button>
                <button
                  onClick={() => router.push("/user/signup")}
                  className="p-2 px-4 bg-[#2057C2] text-white w-full rounded-full"
                >
                  Signup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
