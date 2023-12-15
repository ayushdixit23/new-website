"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiTwotoneLock } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { API } from "@/app/Essential";
import Cookies from "js-cookie";
import { decryptaes, encryptaes } from "@/app/components/safety";
const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [tokens, setTokens] = useState({
    access_token: "",
    refresh_token: "",
  });

  const handleUser = async () => {
    try {
      const user = {
        email: email,
        password: password,
      };
      const res = await axios.post(`${API}/users/login`, user);
      console.log(res.data);
      if (res.data?.success) {
        const tokensData = {
          access_token: res.data.access_token,
          refresh_token: res.data.refresh_token,
        };
        Cookies.set("estkenA", encryptaes(tokensData.access_token));
        Cookies.set("estkenR", encryptaes(tokensData.refresh_token));
        Cookies.set("ryiligid", encryptaes(res.data.userid));
        setTokens(tokensData);
        router.push(localStorage.getItem("path"));
        localStorage.removeItem("path");
      }
    } catch (e) {
      console.log(e, "E");
    }
  };
  useEffect(() => {
    const access_token = decryptaes(Cookies.get("estkenA"));
    const refresh_token = decryptaes(Cookies.get("estkenR"));
    if (access_token && refresh_token) {
      try {
        setTokens({ access_token, refresh_token });
      } catch (error) {
        console.error("Error parsing tokens from cookie:", error);
      }
    }
  }, []);

  return (
    <>
      <div className="min-h-[40vh] select-none md:min-h-[70vh] sm:min-h-[50vh] my-3 pn:max-sm:p-3 flex justify-center items-center">
        <div className="flex items-center shadow-lg rounded-lg p-5 w-full md:w-[35%] sm:max-md:max-w-[600px]">
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-1">
              <div className="text-2xl font-bold">Welcome 👋 </div>
              <div>Please enter your details.</div>
            </div>
            <div>
              <div className="flex flex-col gap-5 my-5">
                <div className="flex w-full p-2 items-center rounded-lg border gap-1">
                  <div className="text-lg">@</div>
                  <div>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                      className=" outline-none px-1 w-full"
                    />
                  </div>
                </div>
                <div className="flex w-full p-2 items-center rounded-lg border gap-1">
                  <div>
                    <AiTwotoneLock className="text-xl" />
                  </div>
                  <div>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                      className="outline-none px-1 w-full"
                    />
                  </div>
                </div>
                {/* <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <div>
                      <input type="checkbox" />
                    </div>
                    <div className="text-sm">Save Password</div>
                  </div>
                  <div className="underline text-sm">Forgot password</div>
                </div> */}
                <div className="w-full  rounded-lg">
                  <button
                    onClick={handleUser}
                    className="p-3 w-full bg-[#1D9BF0]  rounded-lg text-white"
                  >
                    Log in
                  </button>
                </div>
                <div className="flex justify-center gap-1 text-sm items-center">
                  Don’t have in account?{" "}
                  <span className="font-semibold underline cursor-pointer">
                    <Link href="/user/signup">Sign up for free</Link>
                  </span>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
