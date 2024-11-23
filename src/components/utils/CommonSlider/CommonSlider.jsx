"use client";
import React from "react";
import img01 from "../../../assets/images/newArrival/newArrival01.png";
import img02 from "../../../assets/images/newArrival/newArrival02.png";
import img03 from "../../../assets/images/newArrival/newArrival03.png";
import img04 from "../../../assets/images/newArrival/newArrival04.png";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import NewArrivalCard from "../ReusableCard/NewArrivalCard";
import Slider from "react-slick";
const NextArrow = ({ onClick }) => {
  return (
    <div className="flex justify-end absolute top-0 right-0 px-12 md:px-0">
      <div
        className="custom-arrow prev-arrow flex items-center justify-center w-8 h-8 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-700 cursor-pointer"
        onClick={onClick}
      >
        <GoArrowRight />
      </div>
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div className="flex justify-end -mt-10 mr-16 md:mr-10 px-5 md:px-0">
      <div
        className="custom-arrow next-arrow flex items-center justify-center w-8 h-8 border border-purple-900 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-700 cursor-pointer"
        onClick={onClick}
      >
        <GoArrowLeft />
      </div>
    </div>
  );
};

const CommonSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };

  return (
    <div className="w-[360px] md:w-full ms-5">
      <Slider {...settings}>
        <div className="relative ps-5">
          <NewArrivalCard
            cardImg={img01}
            title="Indian Sharee"
            price="Bdt 2,300"
          />
        </div>
        <div className="relative ps-5">
          <NewArrivalCard cardImg={img02} title="Hoodie" price="Bdt 2,300" />
        </div>
        <div className="relative ps-5">
          <NewArrivalCard cardImg={img03} title="Plazu" price="Bdt 2,300" />
        </div>
        <div className="relative ps-5">
          <NewArrivalCard cardImg={img04} title="Jacket" price="Bdt 2,300" />
        </div>
        <div className="relative ps-5">
          <NewArrivalCard cardImg={img02} title="Hoodie" price="Bdt 2,300" />
        </div>
      </Slider>
    </div>
  );
};

export default CommonSlider;
