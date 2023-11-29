"use client";
import { API } from "@/app/Essential";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";

const page = () => {
  const [order, setOrder] = useState([]);
  const [id, setId] = useState("");
  const [balance, setBalance] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API}/dashboard/${id}`);
      setOrder(res.data.users);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(id);
  useEffect(() => {
    const id = JSON.parse(Cookies.get("id"));
    setId(id);
  }, [id]);

  console.log(id);

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
                <div className="my-6 overflow-x-scroll max-w-[900px]">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider col-span-3">
                          Order
                        </th>
                        <th className="px-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider col-span-3">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
                          Quantity
                        </th>
                        <th className="px-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.map((d, i) => (
                        <tr key={i} className="">
                          <td className="px-6 py-4 text-sm leading-5 font-medium text-gray-900 col-span-3">
                            {d?.SocialMedia}
                          </td>
                          <td className="px-6 py-4 text-sm leading-5">
                            {d?.category}
                          </td>
                          <td className="px-6 py-4 text-sm leading-5">
                            {d?.Count}
                          </td>
                          <td className="px-6 py-4 text-sm leading-5">
                            {d?.price}
                          </td>
                          <td className="px-6 py-4 text-sm leading-5">
                            {d?.status}
                          </td>
                        </tr>
                      ))}

                      {/* <tr className="">
                        <td className="px-6 py-4 text-sm leading-5 font-medium text-gray-900 col-span-3">
                          Data 5
                        </td>
                        <td className="px-6 py-4 text-sm leading-5">Data 6</td>
                        <td className="px-6 py-4 text-sm leading-5">Data 7</td>
                        <td className="px-6 py-4 text-sm leading-5">Data 8</td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-center my-4 items-center">
                  <div className="bg-[#fafafa] p-3 px-6 rounded-lg">
                    Show More
                  </div>
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
