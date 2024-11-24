"use client";
import Container from "../utils/Container";
import SeeMoreBtn from "../utils/CommonBtn/SeeMoreBtn";
import ProductCard from "../utils/ReusableCard/ProductCard";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Slider from "react-slick";
import { useProductContext } from "@/Provider/Provider";
const NextArrow = ({ onClick }) => {
  return (
    <div className="flex justify-end absolute top-0 right-0 px-6 md:px-0">
      <div
        className="custom-arrow prev-arrow flex items-center justify-center w-8 h-8 text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-700 cursor-pointer"
        onClick={onClick}
      >
        <GoArrowRight />
      </div>
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div className="flex justify-end -mt-10 mr-11 md:mr-10 px-5 md:px-0">
      <div
        className="custom-arrow next-arrow flex items-center justify-center w-8 h-8 text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-700 cursor-pointer z-10"
        onClick={onClick}
      >
        <GoArrowLeft />
      </div>
    </div>
  );
};
const BigDeal = () => {
  const { products } = useProductContext();
  const filterproduct = products.filter(
    (product) => product.tag !== "featured"
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
          slidesToShow: 1.04,
          slidesToScroll: 1,
          rows: 1,
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
      <div className="mt-28 ml-5 md:ml-0">
        <p className="uppercase text-purple-600">Summer</p>
        <div className="flex justify-between">
          <p className="font-semibold text-2xl">Big Deal</p>
        </div>
      </div>
      <div className="ml-5 md:ml-0">
        <Slider {...settings}>
          {/* <div className="grid grid-cols-4 gap-7 mt-5"> */}
          {filterproduct.map((product) => (
            <div key={product._id} className="relative">
              <ProductCard
                productImg={product.firstImg}
                review="★★★★★"
                totalReview="50"
                productTitle={product.title}
                productPrice={`Bdt ${product.price}`}
              />
            </div>
          ))}
          {/* </div> */}
        </Slider>
      </div>
      <SeeMoreBtn></SeeMoreBtn>
    </Container>
  );
};

export default BigDeal;
