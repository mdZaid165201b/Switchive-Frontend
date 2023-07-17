import React from "react";
import { currencies } from "../constants/supportedCurrencies";

const SupportedPayementSection = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="w-screen flex flex-col justify-center items-center my-10">
        <h1 className="my-10 text-2xl sm:text-4xl font-extrabold">
          Supported payment methods
        </h1>
        <div className="flex flex-wrap w-screen sm:w-[70%]  gap-2">
          {currencies.map((current, index) => (
            <div className="w-[80px] h-[80px] sm:w-[205px] sm:h-[205px] flex justify-center items-center bg-[#E8EEFF] rounded-lg">
              <img src={current} alt="" className="w-fit h-fit" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportedPayementSection;
