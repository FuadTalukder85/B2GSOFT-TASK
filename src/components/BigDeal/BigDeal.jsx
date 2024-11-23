"use client";
import Container from "../utils/Container";
import img01 from "../../assets/images/productImg/image01.png";
import img02 from "../../assets/images/productImg/image02.png";
import img03 from "../../assets/images/productImg/image03.png";
import img04 from "../../assets/images/productImg/image04.png";
import SeeMoreBtn from "../utils/CommonBtn/SeeMoreBtn";
import ProductCard from "../utils/ReusableCard/ProductCard";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Slider from "react-slick";
const NextArrow = ({ onClick }) => {
  return (
    <div className="flex justify-end absolute top-0 right-0 px-12 md:px-0">
      <div
        className="custom-arrow prev-arrow flex items-center justify-center w-8 h-8 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-700 cursor-pointer"
        onClick={onClick}
      >
        <GoArrowRight />
      </div>
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div className="flex justify-end -mt-10 mr-16 md:mr-10 px-5 md:px-0">
      <div
        className="custom-arrow next-arrow flex items-center justify-center w-8 h-8 border border-purple-900 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-700 cursor-pointer"
        onClick={onClick}
      >
        <GoArrowLeft />
      </div>
    </div>
  );
};
const BigDeal = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    rows: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };
  return (
    <Container>
      <div className="mt-28">
        <p className="uppercase text-purple-600">Summer</p>
        <div className="flex justify-between">
          <p className="font-semibold text-2xl">Big Deal</p>
        </div>
      </div>
      <div className="w-[390px] md:w-full">
        <Slider {...settings}>
          {/* <div className="grid grid-cols-4 gap-7 mt-5"> */}
          {/* card 01 */}
          <div className="relative">
            <ProductCard
              productImg={img01}
              review="★★★★★"
              totalReview="50"
              productTitle="Indian Sharee"
              productPrice="2,300"
            />
          </div>
          {/* card 2 */}
          <div className="relative">
            {" "}
            <ProductCard
              productImg={img02}
              review="★★★★★"
              totalReview="50"
              productTitle="Half Sleeve Shirt"
              productPrice="2,300"
            />
          </div>
          {/* card 03 */}
          <div className="relative">
            {" "}
            <ProductCard
              productImg={img03}
              review="★★★★★"
              totalReview="50"
              productTitle="Woman wearing sari"
              productPrice="2,300"
            />
          </div>
          {/* card 04 */}
          <div className="relative">
            <ProductCard
              productImg={img04}
              review="★★★★★"
              totalReview="50"
              productTitle="Checkered shirt"
              productPrice="2,300"
            />
          </div>
          {/* more card for slider */}
          <div className="relative">
            <ProductCard
              productImg={img01}
              review="★★★★★"
              totalReview="50"
              productTitle="Indian Sharee"
              productPrice="2,300"
            />
          </div>
          {/* card 2 */}
          <div className="relative">
            {" "}
            <ProductCard
              productImg={img02}
              review="★★★★★"
              totalReview="50"
              productTitle="Half Sleeve Shirt"
              productPrice="2,300"
            />
          </div>
          {/* card 03 */}
          <div className="relative">
            {" "}
            <ProductCard
              productImg={img03}
              review="★★★★★"
              totalReview="50"
              productTitle="Woman wearing sari"
              productPrice="2,300"
            />
          </div>
          {/* card 04 */}
          <div className="relative">
            <ProductCard
              productImg={img04}
              review="★★★★★"
              totalReview="50"
              productTitle="Checkered shirt"
              productPrice="2,300"
            />
          </div>
          <div className="relative">
            <ProductCard
              productImg={img01}
              review="★★★★★"
              totalReview="50"
              productTitle="Indian Sharee"
              productPrice="2,300"
            />
          </div>
          {/* card 2 */}
          <div className="relative">
            {" "}
            <ProductCard
              productImg={img02}
              review="★★★★★"
              totalReview="50"
              productTitle="Half Sleeve Shirt"
              productPrice="2,300"
            />
          </div>
          {/* card 03 */}
          <div className="relative">
            {" "}
            <ProductCard
              productImg={img03}
              review="★★★★★"
              totalReview="50"
              productTitle="Woman wearing sari"
              productPrice="2,300"
            />
          </div>
          {/* card 04 */}
          <div className="relative">
            <ProductCard
              productImg={img04}
              review="★★★★★"
              totalReview="50"
              productTitle="Checkered shirt"
              productPrice="2,300"
            />
          </div>
          {/* </div> */}
        </Slider>
      </div>
      <SeeMoreBtn></SeeMoreBtn>
    </Container>
  );
};

export default BigDeal;
