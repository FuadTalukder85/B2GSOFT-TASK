"use client";
import Container from "@/components/utils/Container";
import React, { useEffect, useState } from "react";
import AddToCartBtn from "@/components/utils/CommonBtn/AddToCartBtn";
import Review from "@/components/Review/Review";
import RelatedProduct from "@/components/RelatedProduct/RelatedProduct";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "./productid.css";
import { useProductContext } from "@/Provider/Provider";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import bagIcon from "../../../../assets/icons/shopping02.png";
import "@smastrom/react-rating/style.css";
import Image from "next/image";

const ProductDetails = ({ params }) => {
  const { productid } = React.use(params);
  const [quantity, setQuantity] = useState(1);
  const [showThumbnails, setShowThumbnails] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { products } = useProductContext();
  const product = products.find((item) => item._id === productid);
  // rating
  const [rating, setRating] = useState(4);
  const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: "#FFCF11",
    inactiveFillColor: "#DFDFDF",
  };
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowThumbnails(false);
      } else {
        setShowThumbnails(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Container>
      <p className="font-medium mt-10 px-5 md:px-0">
        Feature Product / <span className="text-purple-600">New Arrival</span>
      </p>
      <div className="md:grid grid-cols-2 gap-10 mt-10 px-5 md:px-0">
        <div className="relative">
          <ImageGallery
            items={images}
            renderLeftNav={customLeftNav}
            renderRightNav={customRightNav}
            showPlayButton={false}
            showFullscreenButton={false}
            thumbnailPosition="bottom"
            showThumbnails={showThumbnails}
            onSlide={handleSlide}
          />
          <div className="md:hidden absolute bottom-4 right-4 bg-purple-200 px-5 py-2 rounded-full text-sm">
            {currentIndex + 1}/{images.length}
          </div>
        </div>

        <div>
          <button className="py-2 px-12 rounded-lg bg-purple-950 text-white mt-3 md:mt-0">
            New Arrival
          </button>
          <h3 className="text-3xl font-semibold mt-5">{product?.title}</h3>
          <div className="text-[#FFC700] text-xl mt-5 flex items-center">
            <Rating
              style={{ maxWidth: 120 }}
              value={rating}
              onChange={setRating}
              itemStyles={myStyles}
            />{" "}
            <span className="text-black text-base">(4.0)</span>
            <span className="text-purple-600 ps-3">121 reviews</span>
          </div>
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
            <div className="hidden md:block">
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
            <div className="hidden md:block absolute right-0 w-24 h-24 rounded-l-xl bg-[#581FC1] text-white text-center text-sm font-semibold py-4">
              <div className="flex justify-center">
                <Image src={bagIcon} alt="bagIcon"></Image>
              </div>
              <p className="mt-1">Your bag</p>
              <p>0</p>
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
