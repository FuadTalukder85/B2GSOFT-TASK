import React from "react";
import "./Banner.css";
import CommonBtn from "../utils/CommonBtn";

const Banner = () => {
  return (
    <div className="banner-img py-56 text-center text-white">
      <h3 className="text-5xl">Elevate Your every style</h3>
      <p className="">Discover the Latest Trends in Sustainable Fashion</p>
      <div className="mt-4">
        <CommonBtn>Shop Now</CommonBtn>
      </div>
    </div>
  );
};

export default Banner;
