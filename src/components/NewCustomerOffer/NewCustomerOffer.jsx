import React from "react";
import Container from "../utils/Container";
import ShopBtn from "../utils/CommonBtn/ShopBtn";
import Image from "next/image";
import offerImg from "../../assets/images/offerImg.png";
import { pacifico } from "../../app/fonts/fonts.jsx";

const NewCustomerOffer = () => {
  return (
    <Container>
      <div className="md:flex items-center justify-between text-center md:text-left bg-[#EFECFB] pt-4 px-10 mt-16">
        <div>
          <p className={`text-purple-600 text-2xl ${pacifico.className}`}>
            Big Deal
          </p>
          <p className="text-purple-600 text-3xl md:text-5xl font-semibold mt-4">
            30% <span className="text-black">Off for New Customers</span>
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <ShopBtn></ShopBtn>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <Image src={offerImg} alt="offerImg"></Image>
        </div>
      </div>
    </Container>
  );
};

export default NewCustomerOffer;
