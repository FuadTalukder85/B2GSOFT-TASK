"use client";
import Container from "@/components/utils/Container";
import React, { useState } from "react";
import hoodie01 from "../../../../assets/images/productImg/hoodie01.png";
import hoodie02 from "../../../../assets/images/productImg/hoodie02.png";
import hoodie03 from "../../../../assets/images/productImg/hoodie03.png";
import hoodie05 from "../../../../assets/images/productImg/hoodie05.png";
import AddToCartBtn from "@/components/utils/CommonBtn/AddToCartBtn";
import Review from "@/components/Review/Review";
import RelatedProduct from "@/components/RelatedProduct/RelatedProduct";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "./productid.css";
import { useProductContext } from "@/Provider/Provider";

const ProductDetails = ({ params }) => {
  const { productid } = React.use(params);
  const [quantity, setQuantity] = useState(1);
  const { products } = useProductContext();
  const product = products.find((item) => item._id === productid);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const images = [
    {
      original: product?.firstImg,
      thumbnail: product?.firstImg,
    },
    {
      original: product?.firstImg,
      thumbnail: product?.firstImg,
    },
    {
      original: product?.firstImg,
      thumbnail: product?.firstImg,
    },
    {
      original: product?.firstImg,
      thumbnail: product?.firstImg,
    },
  ];

  const customLeftNav = (onClick, disabled) => (
    <button
      className={`custom-slider-nav left-nav ${disabled ? "disabled" : ""}`}
      onClick={onClick}
    >
      <GoArrowLeft />
    </button>
  );

  const customRightNav = (onClick, disabled) => (
    <button
      className={`custom-slider-nav right-nav ${disabled ? "disabled" : ""}`}
      onClick={onClick}
    >
      <GoArrowRight />
    </button>
  );

  return (
    <Container>
      <p className="font-medium mt-10">
        Feature Product / <span className="text-purple-600">New Arrival</span>
      </p>
      <div className="grid grid-cols-2 gap-10 mt-10">
        <div>
          <ImageGallery
            items={images}
            renderLeftNav={customLeftNav}
            renderRightNav={customRightNav}
            showPlayButton={false}
            showFullscreenButton={false}
            thumbnailPosition="bottom"
          />
        </div>

        <div>
          <button className="py-2 px-12 rounded-lg bg-purple-950 text-white">
            New Arrival
          </button>
          <h3 className="text-3xl font-semibold mt-5">{product?.title}</h3>
          <p className="text-[#FFC700] text-xl mt-5">
            ★★★★★ <span className="text-black">(4.0)</span>
            <span className="text-purple-600 ps-3">121 reviews</span>
          </p>
          <p className="text-2xl font-semibold uppercase mt-5">BDT 2500</p>
          <div className="border border-dotted mt-9"></div>
          <div className="flex justify-between mt-7">
            <div>
              <h5 className="text-xl font-semibold">Available Size</h5>
              <div className="flex gap-5 mt-5">
                <button className="block w-10 h-10 bg-purple-50 border border-purple-600 rounded-lg">
                  S
                </button>
                <button className="block w-10 h-10 bg-purple-50 rounded-lg">
                  M
                </button>
                <button className="block w-10 h-10 bg-purple-50 rounded-lg">
                  L
                </button>
                <button className="block w-10 h-10 bg-purple-50 rounded-lg">
                  XL
                </button>
              </div>
            </div>
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
              <span className="cursor-pointer" onClick={handleDecrement}>
                -
              </span>
              <span>{quantity}</span>
              <span className="cursor-pointer" onClick={handleIncrement}>
                +
              </span>
            </div>
          </div>
          <div className="flex gap-3 mt-7">
            <button className="mt-3 py-2 w-full bg-purple-600 rounded-lg font-semibold text-white hover:bg-purple-700 transition-all duration-700">
              Buy Now
            </button>
            <AddToCartBtn />
          </div>
        </div>
      </div>
      <div className="mt-16">
        <Review />
      </div>
      <RelatedProduct />
    </Container>
  );
};

export default ProductDetails;
