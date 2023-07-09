import React from "react";
import BackgroundImage from "../assets/bg.png";
import Circle from "../assets/circleShape.png"
import RoattedIcons from "../assets/rotateIcons.png"
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="w-screen ">
      <img
        src={BackgroundImage}
        alt=""
        className="absolute -z-30 h-[500px] sm:h-[800px] w-screen sm:w-full"
      />
      <div className="z-40  flex flex-col sm:flex sm:flex-row w-screen">
        {/* left side */}
        <div className="sm:h-[700px] my-[50px] sm:w-[50%]  flex justify-center">
          <div className="w-[75%]">
            <div className="h-full w-full flex  justify-start sm:justify-center text-white">
              <div className="flex flex-col my-10">
                <h1 className="text-2xl sm:text-4xl font-extralight mb-2">
                  Spend{" "}
                  <span className="text-[#FFD976] font-semibold">Crypto</span>
                </h1>
                <h1 className="text-2xl sm:text-4xl font-bold mb-2">
                  the fast and easy way while{" "}
                </h1>
                <h1 className="text-2xl sm:text-4xl font-extrabold">
                  Earning Points{" "}
                </h1>
                <h1 className="text-sm sm:text-md text-gray-300 font-thin my-7 sm:my-10">
                  Make mobile top-ups, buy gift cards and pay bills with crypto
                  for more than 14,000 products worldwide in over 170 countries
                  and earn points.
                </h1>
                <div className="flex items-center gap-1 sm:gap-2 ">
                    <h1 className="hover:text-gray-200 transition-all duration-100 cursor-pointer">Explore more</h1>
                    <BsArrowRight className="text-white"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="sm:h-[700px] my-[50px] sm:w-[50%]  flex justify-center">
            <div className="relative">
                <div className="relative flex">
                    <img draggable={false} src={Circle} alt="circle" className="hidden sm:block"/>
                    <img draggable={false} src={RoattedIcons} alt="icons" className="hidden sm:block absolute top-5 left-6"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
