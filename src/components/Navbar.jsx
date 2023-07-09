import React from "react";
import logo from "../assets/logo.png";
import { menuData } from "../constants/menu";

const Navbar = () => {
  return (
    <div className="relative w-screen h-[130px] border border-red-500">
      {/* left side */}
      <div className="absolute top-[10px] left-[38px] w-[50%] border border-yellow-600  h-full flex flex-col justify-end">
        {/* logo */}
        <div className="w-[279px] h-[63px] relative bottom-4">
          <img src={logo} alt="logo" className="w-[279px] h-[63px]" />
        </div>
        {/* menu items */}
        <div className="relative bottom-2">
          <div className=" flex flex-col justify-end h-full w-[70%]">
            <div className="flex justify-between ">
              {menuData.map((current, index) => (
                <div className="" key={index}>
                  {current.title}
                </div>
              ))}
            </div>
          </div>
        </div>
          <div className="bg-red-500 h-[10px] relative left-0"></div>
      </div>

      {/* right side */}
    </div>
  );
};

export default Navbar;
