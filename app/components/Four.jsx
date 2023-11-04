import Image from "next/image";
import React from "react";
import p1 from "../assets/Trophy.png";
import p2 from "../assets/Smiley.svg";
import p3 from "../assets/Users.svg";
import p4 from "../assets/Briefcase.svg";

const Four = () => {
  return (
    <>
      <div>
        <div
          className="grid grid-cols-1  select-none my-3 sm:my-[4%] w-full
		"
        >
          <div
            className="flex justify-center items-center w-full
		  "
          >
            <div className="w-[90%] flex gap-8 justify-center items-center p-1 max-w-[1100px]">
              <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-2 gap-4">
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      src={p1}
                      alt="image"
                      className="max-w-[40px] max-h-[40px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-lg">2+</div>
                    <div className="sm:text-sm text-xs text-[#42526B]">
                      years of experience
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      src={p3}
                      alt="image"
                      className="max-w-[40px] max-h-[40px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold">30k+</div>
                    <div className="sm:text-sm text-xs text-[#42526B]">
                      Social Followers
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      src={p2}
                      alt="image"
                      className="max-w-[40px] max-h-[40px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold">500+</div>
                    <div className="sm:text-sm text-xs text-[#42526B]">
                      Happy Clients
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      src={p4}
                      alt="image"
                      className="max-w-[40px] max-h-[40px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold">317+</div>
                    <div className="sm:text-sm text-xs text-[#42526B]">
                      COMPLETED PROJECT
                    </div>
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

export default Four;
