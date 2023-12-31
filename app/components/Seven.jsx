import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const Seven = () => {
  // const [id, setId] = useState("");
  // useEffect(() => {
  //   const id = sessionStorage.getItem("id");
  //   setId(id);
  // }, []);
  
  return (
    <>
      <div>
        <div className="flex flex-col py-12 sm:py-24 gap-5 justify-center items-center">
          <div className="sm:text-3xl text-2xl pn:max-sm:text-center font-bold">
            Want to talk to a marketing expert?
          </div>

          {id ? (
            <Link
              href={"/user/contact"}
              className="flex items-center p-2.5 px-4 gap-2 rounded-lg bg-[#0B63E5] text-white"
            >
              <div>Contact with Us</div>
              <div>
                <BsArrowRight />
              </div>
            </Link>
          ) : (
            <Link
              href={"/user/login"}
              className="flex items-center p-2.5 px-4 gap-2 rounded-lg bg-[#0B63E5] text-white"
            >
              <div>Contact with Us</div>
              <div>
                <BsArrowRight />
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Seven;
