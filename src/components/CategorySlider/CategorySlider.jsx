import Image from "next/image";
import React from "react";
import man from "../../assets/images/sliderImg/man.png";
import ShopBtn from "../utils/CommonBtn/ShopBtn";
import Container from "../utils/Container";

const CategorySlider = () => {
  return (
    <Container>
      <div className="flex items-center gap-10 mt-10">
        <Image src={man} alt="man"></Image>
        <div>
          <p className="text-5xl uppercase">MEN COLLECTION</p>
          <div className="mt-3 flex justify-start">
            <ShopBtn></ShopBtn>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CategorySlider;
