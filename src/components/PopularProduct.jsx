import React from "react";
import Slider from "../components/Slider";
import { slidesData } from "../constants/slides";

const PopularProduct = () => {
  return (
    <div className="my-16 w-[80%]">
      <div className="flex flex-col">
        <div>
          <div className="w-[400px] flex  h-[25px]  relative left-[8%] my-2">
            <div className="flex justify-center text-xl sm:text-2xl text-[#214192] font-medium">
              <h1 className="sm:mb-0">
                Popular Products in{" "}
                <span className="text-[#EC2027] font-semibold">USA</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[90vw]  relative top-0 left-[5%] ">
          <div className=" w-full">
            <Slider slidesData={slidesData} perPage={5} width={"w-[300px]"} height={25}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
