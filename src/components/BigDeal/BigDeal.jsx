import React from "react";
import Container from "../utils/Container";
import img01 from "../../assets/images/productImg/image01.png";
import img02 from "../../assets/images/productImg/image02.png";
import img03 from "../../assets/images/productImg/image03.png";
import img04 from "../../assets/images/productImg/image04.png";
import SeeMoreBtn from "../utils/CommonBtn/SeeMoreBtn";
import ProductCard from "../utils/ReusableCard/ProductCard";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const BigDeal = () => {
  return (
    <Container>
      <div className="mt-20">
        <p className="uppercase text-purple-600">Summer</p>
        <div className="flex justify-between">
          <p className="font-semibold text-2xl">Big Deal</p>
          <div className="flex gap-2 text-purple-600">
            <button className="flex items-center justify-center w-8 h-8 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-700">
              <GoArrowLeft />
            </button>
            <button className="flex items-center justify-center w-8 h-8 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-700">
              <GoArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-7 mt-5">
        {/* card 01 */}
        <ProductCard
          productImg={img01}
          review="★★★★★"
          totalReview="50"
          productTitle="Indian Sharee"
          productPrice="2,300"
        ></ProductCard>
        {/* card 2 */}
        <ProductCard
          productImg={img02}
          review="★★★★★"
          totalReview="50"
          productTitle="Half Sleeve Shirt"
          productPrice="2,300"
        ></ProductCard>
        {/* card 03 */}
        <ProductCard
          productImg={img03}
          review="★★★★★"
          totalReview="50"
          productTitle="Woman wearing sari"
          productPrice="2,300"
        ></ProductCard>
        {/* card 04 */}
        <ProductCard
          productImg={img04}
          review="★★★★★"
          totalReview="50"
          productTitle="Checkered shirt"
          productPrice="2,300"
        ></ProductCard>
        {/* duplicate card */}
        <ProductCard
          productImg={img01}
          review="★★★★★"
          totalReview="50"
          productTitle="Indian Sharee"
          productPrice="2,300"
        ></ProductCard>
        {/* card 2 */}
        <ProductCard
          productImg={img02}
          review="★★★★★"
          totalReview="50"
          productTitle="Half Sleeve Shirt"
          productPrice="2,300"
        ></ProductCard>
        {/* card 03 */}
        <ProductCard
          productImg={img03}
          review="★★★★★"
          totalReview="50"
          productTitle="Woman wearing sari"
          productPrice="2,300"
        ></ProductCard>
        {/* card 04 */}
        <ProductCard
          productImg={img04}
          review="★★★★★"
          totalReview="50"
          productTitle="Checkered shirt"
          productPrice="2,300"
        ></ProductCard>
      </div>
      <SeeMoreBtn></SeeMoreBtn>
    </Container>
  );
};

export default BigDeal;
