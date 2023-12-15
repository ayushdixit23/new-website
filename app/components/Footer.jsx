import Image from "next/image";
import React from "react";
import logo from "../assets/logo.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 bg-[rgb(252,252,252)] ">
          <div className="grid grid-cols-1 p-4">
            <div className=" flex my-2 items-center sm:p-3">
              <div className="flex flex-col gap-3">
                <div className="flex items-center">
                  {/* <div>
                    <Image src={logo} className="min-w-[50px]" alt="logo" />
                  </div> */}
                  <div className="sm:text-2xl text-xl font-semibold">
                    Willow Wave
                  </div>
                </div>
                <div className="text-[#838E9E]">
                  "Journeying together, creating moments that matter. Connecting
                  hearts, one click at a time."
                </div>
              </div>
            </div>
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
                  {" "}
                  <FaInstagram className="text-xl text-[#ec6455]" />
                </a>
              </div>
            </div>
            {/* <div className="flex flex-col col-span-1 my-2 text-[#838E9E] sm:items-center">
              <div className="flex flex-col gap-2">
                <div className="text-lg text-black font-semibold">
                  Quick Links
                </div>
                <div className="flex flex-col gap-2">
                  <div>About</div>
                  <div>Services</div>
                  <div>Pricing Plans</div>
                  <div>Contact</div>
                </div>
              </div>
            </div> */}
            {/* <div className="flex flex-col col-span-1 my-2  text-[#838E9E] sm:items-center">
              <div className="flex flex-col gap-2">
                <div className="text-lg text-black font-semibold">Services</div>
                <div className="flex flex-col gap-3">
                  <div>Incident responder</div>
                  <div>Secure managed it</div>
                  <div>Check website url</div>
                </div>
              </div>
            </div> */}
            <div className="flex gap-3 my-2 pn:max-sm:hidden items-center">
              {/* <div className="flex justify-center bg-[#F0F5FF] p-2 rounded-lg font-medium items-center gap-2">
                <div>
                  <FaFacebookF />
                </div>
                <div>Facebook</div>
              </div> */}
              {/* <div className="flex justify-center bg-[#0E76A8] text-white p-2 px-4  font-medium rounded-lg items-center gap-1">
                <div>
                  <FaLinkedinIn />
                </div>
                <div>Linkedin</div>
              </div> */}
              <a href="https://www.instagram.com/willow_wave_/">
                <div className="flex justify-center bg-[#edeaeaf1] p-2 px-4 font-medium rounded-lg items-center gap-1">
                  <div>
                    <FaInstagram />
                  </div>
                  <div>Instagram</div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center p-4 mb-3 font-medium items-center">
            <div>© 2023 - Willow Wave</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
