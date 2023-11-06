"use client";
import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div
        className={` fixed inset-0  w-full h-screen ${menu ? "z-10" : "-z-10"}`}
      ></div>
      <div className="px-[2%] py-5 bg-[#E7FAFE] pn:max-sm:py-3">
        <div className="flex justify-between lg:justify-around p-2 items-center">
          <div className="flex justify-center items-center">
            <div>
              <Image src={logo} alt="logo" />
            </div>
            <div className="text-lg font-bold">Willow Wave</div>
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
              <li>Contact</li>
              <li>About us</li>
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
            <a
              target="_blank
            "
              href="https://www.instagram.com/willow_wave_/?igshid=YTQwZjQ0NmI0OA%3D%3D"
            >
              <BsInstagram />
            </a>
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
            <div className="text-xl font-semibold py-2">Contact</div>
            <div className="text-xl font-semibold py-2">About Us</div>
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
              <button className="bg-black w-full p-3 rounded-full text-white">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
