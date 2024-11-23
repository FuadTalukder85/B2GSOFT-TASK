"use client";
import React from "react";
import Container from "../utils/Container";
import SeeMoreBtn from "../utils/CommonBtn/SeeMoreBtn";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommonSlider from "../utils/CommonSlider/CommonSlider";

const FeaturedProduct = () => {
  return (
    <Container>
      <div className="mt-7">
        <p className="uppercase text-purple-600">FEATURED PRODUCT</p>
        <div className="flex justify-between">
          <p className="font-semibold text-2xl">New Arrivals</p>
        </div>
      </div>
      {/* <div className="grid grid-cols-4 gap-7 mt-5"> */}
      {/* Slider */}
      <CommonSlider></CommonSlider>
      {/* </div> */}
      <SeeMoreBtn></SeeMoreBtn>
    </Container>
  );
};

export default FeaturedProduct;
