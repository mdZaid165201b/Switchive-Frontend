import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import { slidesData } from "../constants/slides";
import "@splidejs/react-splide/css";

const Slider = ({slidesData, perPage, width, height}) => {
    console.log(slidesData)
    console.log(perPage)
  return (
    <div className="my-10 sm:mx-[50px]">
      <Splide
        //   options={{
        //     perPage: 5,
        //     height: "9rem",
        //     rewind: true,
        //     gap: "0rem",
        //   }}
        options={{
          type: "loop",
          perPage: perPage,
          rewind: true,
          gap: "1rem",
          // pagination: true,
          fixedWidth: 350,
          fixedHeight: 180,
            // cover       : true,
            // focus       : 'center',
            slideFocus: false,
          isNavigation: true,
        }}
        aria-labelledby="basic-example-heading"
        onMoved={(splide, newIndex) => {
          console.log("moved", newIndex);
          console.log("length", splide.length);
        }}
      >
        {slidesData.map((slide, index) => (
          <SplideSlide key={index} s className="outline-none border-none">
            <img src={slide} alt="image" className={`${width} w-[500px] h-full`} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Slider;
