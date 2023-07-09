import React from "react";
import Circle from "../assets/atomShape.png"
import ManageFromBG from "../assets/manageFromAnyWhere.png"
const ManageSection = () => {
  return (
    <div className="w-[100%] h-full  py-[10%] sm:py-[0%] sm:my-[5%] ">
      <div className="">
        <div className="flex w-full  justify-center items-center">
          {/* left side */}
          <div className="w-[50%] flex flex-col justify-center items-center">
            <div className=" flex  flex-col justify-center gap-5">
              <div className="flex h-full pl-[55px]">
                <div className="text-3xl sm:text-5xl text-[#214192] font-extrabold tracking-wide flex flex-col gap-2">
                  <h1>Manage from</h1>
                  <h1>anywhere</h1>
                </div>
              </div>
              <div className="w-screen sm:w-[500px] pl-[55px] flex justify-center items-startfont-poppins">
                <h1>
                  Save your gift cards in your Switchive Wallet to access them
                  easily from your computer or smartphone.
                </h1>
              </div>
            <div className="px-12 my-5">
              <div className="bg-[#EC2027] text-white text-[12px] sm:text-lg flex justify-center items-center w-fit h-[35px] sm:w-[150px] shadow-md shadow-black/50 sm:h-[48px]  px-2 rounded-md hover:bg-red-600 cursor-pointer duration-100">
                Read More
              </div>
            </div>
            </div>
          </div>
          {/* right side */}
          <div className="h-full py-12 my-[50px] sm:w-[50%]  flex justify-start">
            <div className="relative">
                <div className="relative flex justify-center items-center">
                    <img draggable={false} src={Circle} alt="circle" className="hidden sm:block"/>
                    <img draggable={false} src={ManageFromBG} alt="icons" className="hidden sm:block absolute top-20 left-10"/>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSection;
