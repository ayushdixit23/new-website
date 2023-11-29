"use client";
import { API } from "@/app/Essential";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiTwotoneLock } from "react-icons/ai";
const page = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    setId(id);
  }, [id]);

  const handleUser = async () => {
    try {
      const user = {
        email: email,
        name: name,
        message: msg,
      };

      const res = await axios.post(`${API}/contact/${id}`, user);
      if (res.data.success) {
        setEmail("");
        setName("");
        setMsg("");
      }
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(email, name, msg);
  return (
    <>
      <div className="min-h-[40vh] select-none sm:min-h-[50vh] md:min-h-[70vh] my-3 pn:max-sm:p-3 flex justify-center items-center">
        <div className="flex items-center shadow-lg rounded-lg p-5 w-full md:w-[35%] sm:max-md:max-w-[600px]">
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-bold">Contact Us 👋 </div>
              <div className="text-sm">E-mail : willowwave9@gmail.com</div>
            </div>
            <div>
              <div className="flex flex-col gap-5 my-5">
                <div className="flex w-full p-2 items-center rounded-lg border gap-1">
                  <div>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="email"
                      placeholder="Enter Your Name"
                      className=" outline-none px-1 w-full"
                    />
                  </div>
                </div>
                <div className="flex w-full p-2 items-center rounded-lg border gap-1">
                  <div>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Your Email"
                      className=" outline-none px-1 w-full"
                    />
                  </div>
                </div>
                <div className="flex w-full p-2 items-center rounded-lg border gap-1">
                  <div className="w-full">
                    <textarea
                      className="w-full outline-none p-2 min-h-[70px] max-h-[150px]"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      placeholder="Your Message"
                      cols="30"
                      rows="5"
                    ></textarea>
                  </div>
                </div>

                <div className="w-full  rounded-lg">
                  <button
                    onClick={handleUser}
                    className="p-3 w-full bg-[#1D9BF0]  rounded-lg text-white"
                  >
                    Submit
                  </button>
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
