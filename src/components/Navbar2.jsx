import React from "react";
import logo from "../assets/logo.png";
import wallet from "../assets/wallet.png";
import { menuData } from "../constants/menu";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartThin } from "react-icons/pi";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className="w-screen h-[120px]">
      <div className=" w-full h-full flex">
        {/* left side */}
        <div className=" w-[50%] h-full flex flex-col">
          <div className="px-[20px] sm:px-[30px] pt-[15px] w-[80%] h-full flex flex-col">
            <Link to="/">
              <div className="w-[200px] h-[10px] sm:w-[279px] sm:h-[50px]">
                <img src={logo} alt="" className="w-[260px] h-[50px]" />
              </div>
            </Link>
            {/* menu items */}
            <div className="hidden w-full h-full sm:flex flex-col justify-end ">
              <div className="flex justify-between">
                {menuData.map((current, index) => (
                  <Link to={current.link}>
                    <div
                      className="hover:text-[#a10e46] cursor-pointer duration-100"
                      key={current.title}
                    >
                      {current.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#a10e46] to-[#214293] h-[25px] rounded-tr-2xl mr-4"></div>
        </div>
        {/* right side */}
        <div className=" w-[50%] h-full flex flex-col">
          {/* [#214293] */}
          <div className="relative right-0 bg-gradient-to-r from-[#214293] to-[#a10e46] h-[25px] rounded-bl-2xl"></div>
          <div className="  w-full h-full flex flex-col">
            <div className="hidden w-full h-full sm:flex items-center justify-evenly">
              <div className="relative flex items-center">
                <IoIosSearch className="text-[#929DA7] absolute ml-3" />
                <input
                  type="text"
                  placeholder="Search"
                  autoComplete={false}
                  className="w-full rounded-lg border border-form-stroke py-1 pl-10 pr-3 text-black placeholder-[#929DA7] outline-none transition focus:border-gray-400 active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
              <div className="flex">
                <div>
                  <select
                    name=""
                    id=""
                    className="border-transparent outline-none"
                  >
                    <option value="">Select Country</option>
                    <option value="">Pakistan</option>
                    <option value="">Germany</option>
                  </select>
                </div>
              </div>
              <div className="flex">
                <div>
                  <select
                    name=""
                    id=""
                    className="border-transparent outline-none"
                  >
                    <option value="">Select Languages</option>
                    <option value="">Urdu</option>
                    <option value="">English</option>
                  </select>
                </div>
              </div>
            </div>
            {/* login signup buttons */}
            <div className="w-full h-full flex items-end sm:items-center justify-around">
              <div className="relative cursor-pointer ">
                <span className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] rounded-full bg-[#DB3434] flex items-center justify-center absolute -top-[2px] right-1 text-sm sm:text-lg text-white font-light">
                  0
                </span>
                <PiShoppingCartThin className="w-[37px] h-[26px] sm:w-[46px] sm:h-[41px] text-[#141515] hover:text-[#9f3535] cursor-pointer" />
              </div>
              <div className="hidden sm:flex w-[46px] h-[41px] cursor-pointer">
                <img src={wallet} alt="" className="w-[46px] h-[41px]" />
              </div>
              <div className="flex gap-2">
                {/* <Button bgColor="bg-[#DB3434]" title="Login" textColor="text-white" hoverColor="hover:bg-red-700"/>
                    <Button bgColor={null} title="Signup" textColor="text-gray-800" hoverColor="hover:bg-[#DB3434]" hoverText="text-white" hoverTextColor="hover:text-white"/> */}
                <div
                  className={`w-[55px] h-[22px] sm:w-[108px] sm:h-[40px] flex justify-center items-center p-4 rounded-md  text-white bg-[#DB3434] tracking-wide hover:bg-red-700 duration-100  cursor-pointer`}
                >
                  Login
                </div>
                <div
                  className={`w-[55px] h-[22px] sm:w-[108px] sm:h-[40px] flex justify-center items-center p-4 rounded-md  text-gray-900 hover:text-white  tracking-wide hover:bg-[#DB3434] duration-100 cursor-pointer`}
                >
                  Signup
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
