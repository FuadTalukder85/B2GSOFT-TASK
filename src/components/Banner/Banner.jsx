import React from "react";
import "./Banner.css";
import ShopBtn from "../utils/CommonBtn/ShopBtn";

const Banner = () => {
  return (
    <div>
      <div className="hidden md:block banner-img py-56 text-center text-white">
        <h3 className="text-5xl">Elevate Your every style</h3>
        <p className="">Discover the Latest Trends in Sustainable Fashion</p>
        <div className="flex justify-center mt-4">
          <ShopBtn></ShopBtn>
        </div>
      </div>
      <div className="md:hidden responsive-banner py-28 text-center text-white">
        <h3 className="text-2xl">Elevate Your every style</h3>
        <p className="mt-3 text-sm">
          Discover the Latest Trends in Sustainable Fashion
        </p>
        <div className="flex justify-center mt-6">
          <ShopBtn></ShopBtn>
        </div>
      </div>
    </div>
  );
};

export default Banner;
