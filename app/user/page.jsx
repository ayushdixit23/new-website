"use client";
import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Footer from "../components/Footer";

const page = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      {/* <div className="grid grid-cols-1 w-full">
        <div className="px-[2%] py-5 bg-[#c8e7e5]/30 pn:max-sm:py-3">
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
        </div>
        <div></div>
        <Footer />
      </div> */}
    </>
  );
};

export default page;
