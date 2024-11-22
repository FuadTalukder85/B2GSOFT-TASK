import Image from "next/image";
import AddToCartBtn from "../AddToCartBtn";

const ProductCard = ({
  productImg,
  review,
  totalReview,
  productTitle,
  productPrice,
}) => {
  return (
    <div>
      <div className="bg-white p-3">
        <div className="bg-[#F6F5FD]">
          <div className="relative flex items-center justify-center h-[260px]">
            <Image
              className="absolute px-3 bottom-0"
              src={productImg}
              alt="img01"
            ></Image>
            <div className="absolute top-0 right-4 bg-purple-600 text-white font-semibold text-center px-3 pt-1 pb-1 rounded-b-full">
              <p>Up</p>
              <p>to</p>
              <p>40%</p>
            </div>
          </div>
        </div>
        <p className="mt-3">
          <span className="text-[#FFC700] text-xl">{review}</span>
          <span className="text-xl ps-2">({totalReview})</span>
        </p>
        <div className="flex justify-between mt-1">
          <p>{productTitle}</p>
          <p className="text-lg font-semibold uppercase">bdt {productPrice}</p>
        </div>
        <AddToCartBtn></AddToCartBtn>
      </div>
    </div>
  );
};

export default ProductCard;
