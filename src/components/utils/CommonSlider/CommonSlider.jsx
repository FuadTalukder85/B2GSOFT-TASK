"use client";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import NewArrivalCard from "../ReusableCard/NewArrivalCard";
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
    <div className="flex justify-end -mt-10 mr-10 md:mr-10 px-5 md:px-0 z-10">
      <div
        className="custom-arrow next-arrow flex items-center justify-center w-8 h-8 text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-700 cursor-pointer z-10"
        onClick={onClick}
      >
        <GoArrowLeft />
      </div>
    </div>
  );
};

const CommonSlider = () => {
  const { filterFeatured } = useProductContext();
  if (!filterFeatured.length) {
    return <div className="text-center">Loading...</div>;
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
          slidesToShow: 1.05,
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
    <div className="ml-5 md:ml-0">
      <Slider {...settings}>
        {filterFeatured.map((product) => (
          <div key={product._id} className="relative">
            <NewArrivalCard
              cardImg={product.firstImg}
              title={product.title}
              price={`Bdt ${product.price}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CommonSlider;
