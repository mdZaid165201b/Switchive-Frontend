import React from "react";
import Logo from "../assets/logo.png";
import {
  companyColumnData,
  businessesColumnData,
  exchangeColumnData,
  resourceColumnData,
} from "../constants/footerData";

const Footer = () => {
  return (
    <div className="w-screen flex justify-center backdrop-blur-sm h-[200px] sm:h-[400px] bg-gradient-to-b from-gray-50/20 via-[#D24A5A]/50 to-[#D04C5E] mt-24">
      <footer className="w-screen sm:w-[65%] flex flex-col sm:flex-row justify-between p-5">
        <div className="flex flex-col justify-between">
          <div>
            <div className="w-[150px] h-[20px] sm:w-[280px] sm:h-[60px]">
              <img src={Logo} alt="" className="w-fit h-fit" />
            </div>
            <div className="w-screen sm:w-[400px] my-6 text-xs sm:text-md">
              <h1>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h1>
            </div>
          </div>
          <div className="w-full flex justify-center text-sm sm:text-md text-white">
            <h1 className="tracking-normal sm:tracking-wide">
              Copyright 2022, Switchive
            </h1>
          </div>
        </div>
        {/* company column */}
        <div className="hidden sm:flex flex-col  gap-1 sm:gap-3 h-full">
          <h1 className="text-md sm:text-lg font-semibold tracking-wide mb-7">
            Company
          </h1>
          {companyColumnData.map((current, index) => (
            <div className="cursor-pointer hover:text-gray-800 duration-100">
              <a>{current.title}</a>
            </div>
          ))}
        </div>
        {/* Businesses column */}
        <div className="hidden sm:flex flex-col gap-3 h-full">
          <h1 className="text-lg font-semibold tracking-wide mb-7">
            Businesses
          </h1>
          {businessesColumnData.map((current, index) => (
            <div className="cursor-pointer hover:text-gray-800 duration-100">
              <a href="#">{current.title}</a>
            </div>
          ))}
        </div>
        {/* Exchange column */}
        <div className="hidden sm:flex flex-col gap-3 h-full">
          <h1 className="text-lg font-semibold tracking-wide mb-7">Exhange</h1>
          {exchangeColumnData.map((current, index) => (
            <div className="cursor-pointer hover:text-gray-800 duration-100">
              <a>{current.title}</a>
            </div>
          ))}
        </div>
        {/* Resources column */}
        <div className="hidden sm:flex flex-col gap-3 h-full">
          <h1 className="text-lg font-semibold tracking-wide mb-7">
            Resources
          </h1>
          {resourceColumnData.map((current, index) => (
            <div className="cursor-pointer hover:text-gray-800 duration-100">
              <a>{current.title}</a>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
