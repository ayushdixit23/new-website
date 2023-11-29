"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiTwotoneLock } from "react-icons/ai";

import { useRouter } from "next/navigation";
import { API } from "@/app/Essential";
import Cookies from "js-cookie";
const page = () => {
  const [email, setEmail] = useState("a@d.com");
  const [password, setPassword] = useState("12");
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
        Cookies.set("tokens", JSON.stringify(tokensData));
        Cookies.set("id", JSON.stringify(res.data.user._id));
        setTokens(tokensData);
      }
    } catch (e) {
      console.log(e, "E");
    }
  };

  useEffect(() => {
    const tokensFromCookie = Cookies.get("tokens");
    if (tokensFromCookie) {
      try {
        const storedTokens = JSON.parse(tokensFromCookie);
        setTokens(storedTokens);
        console.log(tokensFromCookie);
      } catch (error) {
        console.error("Error parsing tokens from cookie:", error);
      }
    }
  }, []);

  const axiosInstance = axios.create();

  useEffect(() => {
    axiosInstance.interceptors.request.use(
      async (config) => {
        if (tokens.access_token) {
          const decodedToken = parseJwt(tokens.access_token);
          const currentTime = Math.floor(Date.now() / 1000);
          if (decodedToken.exp - currentTime < 300) {
            const refreshedTokens = await refreshAccessToken();
            setTokens(refreshedTokens);
            Cookies.set("tokens", refreshedTokens);
          }
          config.headers.Authorization = `Bearer ${tokens.access_token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }, [tokens]);

  const parseJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64));
  };

  const refreshAccessToken = async () => {
    try {
      const res = await axios.post(`${API}/refresh`, {
        refresh_token: tokens.refresh_token,
      });
      const { access_token, success } = res.data;

      if (success) {
        return { access_token, refresh_token: tokens.refresh_token };
      } else {
        console.log("Failed to refresh token");
        return Promise.reject("Failed to refresh token");
      }
    } catch (err) {
      console.log(err);
      return Promise.reject("Failed to refresh token");
    }
  };

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
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <div>
                      <input type="checkbox" />
                    </div>
                    <div className="text-sm">Save Password</div>
                  </div>
                  <div className="underline text-sm">Forgot password</div>
                </div>
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
