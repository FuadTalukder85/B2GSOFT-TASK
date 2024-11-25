import Image from "next/image";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";

const ProductCard = ({
  productImg,
  totalReview,
  productTitle,
  productPrice,
}) => {
  const [rating, setRating] = useState(3);
  const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: "#FFCF11",
    inactiveFillColor: "#DFDFDF",
  };

  return (
    <div>
      <div className="bg-white p-2 rounded-2xl m-3 mt-10">
        <div className="bg-[#F6F5FD] rounded-lg">
          <div className="relative flex items-center justify-center h-[260px] overflow-hidden">
            <Image
              className="absolute px-3 bottom-0 rounded-lg hover:scale-110 transition-all duration-700"
              src={productImg}
              alt="productImg"
              width={400}
              height={400}
            ></Image>
            <div className="absolute top-0 right-4 bg-purple-600 text-white font-semibold text-center px-3 pt-1 pb-1 rounded-b-full">
              <p>Up</p>
              <p>to</p>
              <p>40%</p>
            </div>
          </div>
        </div>
        <div className="mt-3 flex">
          <Rating
            style={{ maxWidth: 100 }}
            value={rating}
            onChange={setRating}
            itemStyles={myStyles}
          />
          <span className="ps-2">({totalReview})</span>
        </div>
        <div className="flex justify-between mt-1">
          <p>{productTitle}</p>
          <p className="text-lg font-semibold uppercase">bdt {productPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
