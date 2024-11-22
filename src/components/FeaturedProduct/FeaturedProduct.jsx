import Image from "next/image";
import img01 from "../../assets/images/newArrival/newArrival01.png";
import img02 from "../../assets/images/newArrival/newArrival02.png";
import img03 from "../../assets/images/newArrival/newArrival03.png";
import img04 from "../../assets/images/newArrival/newArrival04.png";
import leftArrow from "../../assets/icons/leftArrow.png";
import rightArrow from "../../assets/icons/rightArrow.png";
import Container from "../utils/Container";
import SeeMoreBtn from "../utils/CommonBtn/SeeMoreBtn";
import AddToCartBtn from "../utils/CommonBtn/AddToCartBtn";

const FeaturedProduct = () => {
  return (
    <Container>
      <div className="mt-7">
        <p className="uppercase text-purple-600">FEATURED PRODUCT</p>
        <div className="flex justify-between">
          <p className="font-semibold text-2xl">New Arrivals</p>
          <div className="flex gap-2">
            <Image src={leftArrow} alt="leftArrow"></Image>
            <Image src={rightArrow} alt="rightArrow"></Image>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-7 mt-5">
        <div className="bg-white p-3">
          <div className="bg-[#F6F5FD]">
            <div className="relative flex items-center justify-center h-[260px]">
              <Image
                className="absolute px-3 bottom-0"
                src={img01}
                alt="img01"
              ></Image>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <p>Indian Sharee</p>
            <p className="text-lg font-semibold uppercase">Bdt 2,300</p>
          </div>
          <AddToCartBtn></AddToCartBtn>
        </div>
        {/* cart 02 */}
        <div className="bg-white p-3">
          <div className="bg-[#F6F5FD]">
            <div className="relative flex items-center justify-center h-[260px]">
              <Image
                className="absolute px-3 bottom-0"
                src={img02}
                alt="img02"
              ></Image>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <p>Indian Sharee</p>
            <p className="text-lg font-semibold uppercase">Bdt 2,300</p>
          </div>
          <AddToCartBtn></AddToCartBtn>
        </div>
        {/* cart 03 */}
        <div className="bg-white p-3">
          <div className="bg-[#F6F5FD]">
            <div className="relative flex items-center justify-center h-[260px]">
              <Image
                className="absolute px-3 bottom-0"
                src={img03}
                alt="img03"
              ></Image>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <p>Indian Sharee</p>
            <p className="text-lg font-semibold uppercase">Bdt 2,300</p>
          </div>
          <AddToCartBtn></AddToCartBtn>
        </div>
        {/* cart 04 */}
        <div className="bg-white p-3">
          <div className="bg-[#F6F5FD]">
            <div className="relative flex items-center justify-center h-[260px]">
              <Image
                className="absolute px-3 bottom-0"
                src={img04}
                alt="img04"
              ></Image>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <p>Indian Sharee</p>
            <p className="text-lg font-semibold uppercase">Bdt 2,300</p>
          </div>
          <AddToCartBtn></AddToCartBtn>
        </div>
      </div>
      <SeeMoreBtn>See more</SeeMoreBtn>
    </Container>
  );
};

export default FeaturedProduct;
