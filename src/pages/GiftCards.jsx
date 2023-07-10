import React, { useEffect, useState } from "react";
import { sidebarItems } from "../constants/sidebarMenuItems";
import GiftCard from "../components/GiftCard";
import { giftCards } from "../constants/giftCards";
import { BiMenuAltLeft } from "react-icons/bi";
import Pagination from "../components/Pagination";

const GiftCards = () => {
  const [isMenuOpen, setMenu] = useState(false);
  const [giftData, setGiftData] = useState([]);
  const [sidebarData, setSidebarData] = useState(sidebarItems);
  console.log({ giftData });

  return (
    <div className="w-screen flex justify-center overflow-hidden my-10">
      <div className="w-full sm:w-[90%] sm:flex flex-col relative h-full">
        <div className="flex w-full h-full relative">
          <div className="hidden sm:flex flex-col sm:w-[320px] relative   pt-14 pb-6 h-full  bg-gradient-to-r from-[#214293] to-[#af2c37] rounded-lg backdrop-blur-md">
            {sidebarData.map((current, index) => (
              <>
                {current.isActive ? (
                  <div className=" w-full">
                    <div
                      className=" absolute left-0 right-0 h-[60px] ml-5 rounded-tl-3xl py-4 flex justify-center items-center rounded-bl-3xl bg-white  sidebarOption cursor-pointer hover:text-gray-800  duration-100"
                      key={current.title}
                    >
                      <h1 className="text-lg font-semibold tracking-wide">
                        {current.title}
                      </h1>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`${
                      current.isActive
                        ? ""
                        : "text-md my-5 text-white flex justify-center cursor-pointer hover:text-gray-300 duration-100"
                    }`}
                    onClick={() => {
                      console.log("cliked!!!");
                      const currenData = sidebarData.findIndex(
                        (element) => element.title === current.title
                      );
                      console.log(currenData);
                      setSidebarData([
                        ...sidebarData,
                        {
                          title: sidebarData[currenData].title,
                          isActive: (sidebarData[currenData].isActive = true),
                        },
                      ]);
                    }}
                  >
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
          <div className="flex flex-col gap-0 w-screen h-full sm:w-full">
            <div className="-z-50 flex flex-wrap w-screen sm:w-full gap-[2px] sm:gap-4  mx-1 sm:mx-20 h-full py-4 sm:py-8  items-start  ">
              {giftData.map((current, index) => (
                <GiftCard giftCard={current} />
              ))}
            </div>
            <div className="flex justify-center w-full">
              <Pagination
                data={giftCards}
                setData={setGiftData}
                itemPerPage={10}
              />
            </div>
          </div>
        </div>
        <div className="border-2 border-teal-700 w-full h-[400px] my-10">
          Testing
        </div>
      </div>
    </div>
  );
};

export default GiftCards;
