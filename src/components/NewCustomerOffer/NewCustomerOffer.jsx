import React from "react";
import Container from "../utils/Container";
import ShopBtn from "../utils/CommonBtn/ShopBtn";
import Image from "next/image";
import offerImg from "../../assets/images/offerImg.png";
import { pacifico } from "../../app/fonts/fonts.jsx";

const NewCustomerOffer = () => {
  return (
    <Container>
      <div className="flex items-center justify-between bg-[#F4F8FF] px-10 mt-5">
        <div>
          <p className={`text-purple-600 text-2xl ${pacifico.className}`}>
            Big Deal
          </p>
          <p className="text-purple-600 text-5xl font-semibold mt-2">
            30% <span className="text-black">Off for New Customers</span>
          </p>
          <div className="mt-4">
            <ShopBtn></ShopBtn>
          </div>
        </div>
        <div>
          <Image src={offerImg} alt="offerImg"></Image>
        </div>
      </div>
    </Container>
  );
};

export default NewCustomerOffer;
