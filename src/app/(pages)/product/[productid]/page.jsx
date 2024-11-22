import Container from "@/components/utils/Container";
import Image from "next/image";
import React from "react";
import hoodie01 from "../../../../assets/images/productImg/hoodie01.png";
import hoodie02 from "../../../../assets/images/productImg/hoodie02.png";
import hoodie03 from "../../../../assets/images/productImg/hoodie03.png";
import hoodie04 from "../../../../assets/images/productImg/hoodie04.png";
import hoodie05 from "../../../../assets/images/productImg/hoodie05.png";
import AddToCartBtn from "@/components/utils/CommonBtn/AddToCartBtn";
import Review from "@/components/Review/Review";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";
import RelatedProduct from "@/components/RelatedProduct/RelatedProduct";

const ProductDetails = () => {
  return (
    <Container>
      <p className="font-medium mt-10">
        Feature Product / <span className="text-purple-600">New Arrival</span>
      </p>
      <div className="grid grid-cols-2">
        <div>
          <Image src={hoodie01} alt="hoodie01"></Image>
          <div className="flex gap-5 mt-3">
            <div className="bg-purple-100 rounded-2xl">
              <Image src={hoodie02} alt="hoodie02"></Image>
            </div>
            <div className="bg-purple-100 rounded-2xl">
              <Image src={hoodie03} alt="hoodie03"></Image>
            </div>
            <div className="bg-purple-100 rounded-2xl">
              <Image src={hoodie04} alt="hoodie04"></Image>
            </div>
            <div className="bg-purple-100 rounded-2xl">
              <Image src={hoodie05} alt="hoodie05"></Image>
            </div>
          </div>
        </div>
        <div>
          <button className="py-2 px-12 rounded-lg bg-purple-950 text-white">
            New Arrival
          </button>
          <h3 className="text-3xl font-semibold mt-5">White Hoodie</h3>
          <p className="text-[#FFC700] text-xl mt-5">
            ★★★★★ <span className="text-black">(4.0)</span>
            <span className="text-purple-600 ps-3">121 reviews</span>
          </p>
          <p className="text-2xl font-semibold uppercase mt-5">bdt 2500</p>
          <div className="border border-dotted mt-9"></div>
          <div className="flex justify-between mt-7">
            <div>
              <h5 className="text-xl font-semibold">Available Size</h5>
              <div className="flex gap-5 mt-5">
                <button className="block w-10 h-10 border border-purple-600 rounded-lg">
                  S
                </button>
                <button className="block w-10 h-10 border border-purple-600 rounded-lg">
                  M
                </button>
                <button className="block w-10 h-10 border border-purple-600 rounded-lg">
                  L
                </button>
                <button className="block w-10 h-10 border border-purple-600 rounded-lg">
                  XL
                </button>
              </div>
            </div>
            {/*  */}
            <div>
              <h5 className="text-xl font-semibold">Available Color</h5>
              <div className="flex gap-3 mt-5">
                <div className="flex items-center gap-3">
                  <button className="w-7 h-7 border border-purple-600 rounded-full"></button>
                  <span>Off White</span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-7 h-7 border bg-black rounded-full"></button>
                  <span>Black</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-dotted mt-9"></div>
          <div className="mt-7">
            <h5 className="text-xl font-semibold">Quantity</h5>
            <div className="flex items-center justify-between gap-5 text-xl py-2 px-6 w-36 rounded-full bg-purple-100 mt-5">
              <span>-</span>
              <span>0</span>
              <span>+</span>
            </div>
          </div>
          {/* button */}
          <div className="flex gap-3 mt-7">
            <button className="mt-3 py-2 w-full bg-purple-600 rounded-lg font-semibold text-white">
              Buy Now
            </button>
            <AddToCartBtn></AddToCartBtn>
          </div>
        </div>
      </div>
      {/*  */}
      <Review></Review>
      <RelatedProduct></RelatedProduct>
    </Container>
  );
};

export default ProductDetails;
