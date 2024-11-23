"use client";
import Image from "next/image";
import React from "react";
import man from "../../assets/images/sliderImg/man.png";
import women from "../../assets/images/sliderImg/women.png";
import kids from "../../assets/images/sliderImg/kids.png";
import ShopBtn from "../utils/CommonBtn/ShopBtn";
import Container from "../utils/Container";
import Slider from "react-slick";
import "./CategorySlider.css";

const CategorySlider = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        {dots}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        <div className="relative cursor-pointer">
          <div className="flex items-center gap-10 mt-10">
            <Image src={man} alt="man"></Image>
            <div>
              <p className="text-5xl uppercase">MEN COLLECTION</p>
              <div className="mt-5 flex justify-start">
                <ShopBtn></ShopBtn>
              </div>
            </div>
          </div>
        </div>
        <div className="relative cursor-pointer">
          <div className="flex items-center gap-10 mt-10">
            <div>
              <p className="text-5xl uppercase">women COLLECTION</p>
              <div className="mt-5 flex justify-start">
                <ShopBtn></ShopBtn>
              </div>
            </div>
            <Image src={women} alt="women"></Image>
          </div>
        </div>
        <div className="relative cursor-pointer">
          <div className="flex items-center gap-10 mt-10">
            <Image src={kids} alt="kids"></Image>
            <div>
              <p className="text-5xl uppercase">kid COLLECTION</p>
              <div className="mt-5 flex justify-start">
                <ShopBtn></ShopBtn>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </Container>
  );
};

export default CategorySlider;
