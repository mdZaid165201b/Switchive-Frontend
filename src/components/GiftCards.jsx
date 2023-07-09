import React from "react";
import Slider from "../components/Slider";
import { giftCardSlides } from "../constants/slides";

const GiftCards = () => {
  return (
    <div className="my-16 w-[85%]">
      <div className="flex flex-col relative top-0 left-0">
        <div className="w-full flex flex-col h-[25px] sm:absolute sm:left-[9%]  justify-between mx-10 sm:mx-0">
          <div className="text-xl sm:text-2xl text-[#214192] font-bold">
            <h1>Switchive</h1>
          </div>
          <div className="text-3xl sm:text-4xl text-[#EC2027] font-bold">
            <h1>Gift Card</h1>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-between w-full ">
            <div className="flex justify-around text-sm sm:text-md text-gray-950 font-light w-screen  pr- sm:w-[800px]">
              
              <h1 className="w-screen pr-10">
                Purchase the Switchive gift card for instant checkout while
                shopping, balance top up or gift your loved ones to shop for
                their desired products on the switchive website.
              </h1>
            </div>
            <div className="bg-[#EC2027] shadow-md shadow-black/50 text-white text-[12px] sm:text-lg flex justify-center items-center w-[75px] h-[35px] sm:w-[100px] sm:h-[48px]  px-2 rounded-md hover:bg-red-600 cursor-pointer duration-100">
              View All
            </div>
          </div>
        </div>
        <div className="w-[90vw]  relative top-36  sm:top-24 left-[3%] sm:left-[5%]">
          <div className="py-11">
            <Slider
              slidesData={giftCardSlides}
              perPage={3}
              width={"sm:w-[400px]"}
              height={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCards;
