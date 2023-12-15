"use client";
import { API } from "@/app/Essential";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import Cookies from "js-cookie";
import { decryptaes } from "@/app/components/safety";
import Pagination from "@/app/components/Pagination";
import Fetch from "@/app/components/Fetch";
const page = () => {
  const [order, setOrder] = useState([]);
  const [balance, setBalance] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const lastindex = currentPage * postPerPage;
  const firstIndex = lastindex - postPerPage;
  const postperData = order.slice(firstIndex, lastindex);
  const fetchData = async () => {
    try {
      const res = await axios.get(`${API}/dashboard/${id}`);
      setOrder(res.data.users);
    } catch (err) {
      console.log(err);
    }
  };
  
  const [id, setId] = useState("");
  useEffect(() => {
    const id = decryptaes(Cookies.get("ryiligid"));
    const refresh_token = decryptaes(Cookies.get("estkenR"));
    const access_token = decryptaes(Cookies.get("estkenA"));
    if (id && (refresh_token || access_token)) {
      setId(id);
    }
  }, []);

  useEffect(() => {
    let a = 0;
    const add = order.map((d, i) => {
      a += d.price;
    });
    setBalance(a);
  }, [order]);

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);
  return (
    <>
      <div className="select-none">
        <div className="grid grid-cols-1 w-full">
          <div className="flex justify-center items-center">
            <div className="md:w-[60%] sm:w-[85%] w-full my-8">
              <div className="grid grid-cols-1 w-full p-2">
                <div className="grid grid-cols-2 gap-3 sm:gap-9 w-full">
                  <div className="flex flex-col gap-3 p-5 rounded-xl bg-white shadow-md">
                    <div className="flex justify-between items-center">
                      <div className="font-medium pn:max-sm:text-xs">
                        Balance History
                      </div>
                      <div className="text-blue-800">
                        <FaWallet />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-semibold pn:max-sm:text-sm text-lg">
                        ₹ {balance}
                      </div>
                      <div className="font-semibold underline pn:max-sm:text-sm text-lg">
                        Add Funds+
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 p-5 rounded-xl bg-white shadow-md">
                    <div className="flex justify-between items-center">
                      <div className="font-medium pn:max-sm:text-sm">
                        Your orders
                      </div>
                      {/* <div>
                        <BiMenu />
                      </div> */}
                    </div>
                    <div className="font-bold text-xl">{order?.length}</div>
                  </div>
                </div>
                <Fetch
                  // postPerPage={postPerPage}
                  // setCurrentPage={setCurrentPage}
                  order={postperData}
                />

                {/* <div className="flex justify-center my-4 items-center">
                  <div className="bg-[#fafafa] p-3 px-6 rounded-lg">
                    Show More
                  </div>
                </div> */}
                <Pagination
                  postPerPage={postPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  length={order.length}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
