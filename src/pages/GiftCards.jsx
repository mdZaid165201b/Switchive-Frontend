import React, { useState } from "react";
import { sidebarItems } from "../constants/sidebarMenuItems";
import GiftCard from "../components/GiftCard";
import { giftCards } from "../constants/giftCards";
import { BiMenuAltLeft } from "react-icons/bi";

const GiftCards = () => {
  const [ isMenuOpen, setMenu ] = useState(false);
  return (
    <div className="w-screen flex justify-center overflow-hidden border border-red-600 my-10">
      <div className="w-full sm:w-[90%] sm:flex  h-full">
        <div className="hidden sm:flex flex-col sm:w-[320px] relative top-0 bottom-0 py-14 h-full  bg-gradient-to-r from-[#214293] to-[#af2c37] rounded-lg backdrop-blur-md">
          {sidebarItems.map((current, index) => (
            <>
              {current.isActive ? (
                <div className=" h-[60px] ml-5 rounded-tl-3xl py-4 flex justify-center items-center rounded-bl-3xl bg-white  md:after:top-[3.8%] md:after:absolute lg:after:top-[10.2%] lg:after:absolute  sm:after:top-[7.4%] sm:sidebarOption cursor-pointer hover:text-gray-800  duration-100">
                  <h1 className="text-lg font-semibold tracking-wide">
                    {current.title}
                  </h1>
                </div>
              ) : (
                <div className="text-md my-5 text-white flex justify-center cursor-pointer hover:text-gray-300 duration-100">
                  {current.title}
                </div>
              )}
            </>
          ))}
        </div>

        {/* right side */}
        <BiMenuAltLeft
          className="flex sm:hidden mx-4 text-3xl"
          onClick={() => setMenu(!isMenuOpen)}
        />
        {isMenuOpen && (
          <div className=" sm:hidden w-[200px]  flex flex-col items-center h-[540px]  bg-gradient-to-r from-[#214293] to-[#af2c37] z-40 absolute text-gray-200 overflow-y-auto transition-all ease-in-out duration-150 rounded-tr-xl rounded-br-xl">
            {sidebarItems.map((current, index) => (
              <div
                className={`text-[16px] ${
                  current.isActive ? "text-gray-900" : "text-gray-300"
                } p-3 w-full flex justify-center`}
                key={current.title}
              >
                <div
                  className={`w-full ${
                    current.isActive && "bg-white"
                  } mx-[5px] flex justify-center rounded-xl`}
                >
                  {current.title}
                </div>
              </div>
            ))}
          </div>
        )}
        {/* content area */}
        <div className="-z-50 flex flex-wrap w-screen sm:w-full gap-[2px] sm:gap-4  mx-1 sm:mx-10 h-full py-4 sm:py-8 px-16 border ">
          {giftCards.map((current, index) => (
            <GiftCard giftCard={current} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftCards;
