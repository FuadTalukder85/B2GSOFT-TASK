import React from "react";
import Container from "../utils/Container";
import Image from "next/image";
import img01 from "../../assets/images/productImg/image01.png";
import img02 from "../../assets/images/productImg/image02.png";
import img03 from "../../assets/images/productImg/image03.png";
import img04 from "../../assets/images/productImg/image04.png";

const BigDeal = () => {
  return (
    <Container>
      <div className="mt-20">
        <p className="uppercase text-purple-600">Summer</p>
        <p className="font-semibold text-2xl">Big Deal</p>
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
              <div className="absolute top-0 right-4 bg-purple-600 text-white font-semibold text-center px-3 pt-1 pb-1 rounded-b-full">
                <p>Up</p>
                <p>to</p>
                <p>40%</p>
              </div>
            </div>
          </div>
          <p className="mt-3">
            <span className="text-[#FFC700] text-xl">★★★★★</span>
            <span className="text-xl">(50)</span>
          </p>
          <div className="flex justify-between mt-1">
            <p>Indian Sharee</p>
            <p className="text-lg font-semibold uppercase">Bdt 2,300</p>
          </div>
          <button className="mt-3 py-2 w-full border border-purple-600 rounded-lg font-semibold text-purple-600">
            Add to cart
          </button>
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
              <div className="absolute top-0 right-4 bg-purple-600 text-white font-semibold text-center px-3 pt-1 pb-1 rounded-b-full">
                <p>Up</p>
                <p>to</p>
                <p>40%</p>
              </div>
            </div>
          </div>
          <p className="mt-3">
            <span className="text-[#FFC700] text-xl">★★★★★</span>
            <span className="text-xl">(50)</span>
          </p>
          <div className="flex justify-between mt-1">
            <p>Indian Sharee</p>
            <p className="text-lg font-semibold uppercase">Bdt 2,300</p>
          </div>
          <button className="mt-3 py-2 w-full border border-purple-600 rounded-lg font-semibold text-purple-600">
            Add to cart
          </button>
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
              <div className="absolute top-0 right-4 bg-purple-600 text-white font-semibold text-center px-3 pt-1 pb-1 rounded-b-full">
                <p>Up</p>
                <p>to</p>
                <p>40%</p>
              </div>
            </div>
          </div>
          <p className="mt-3">
            <span className="text-[#FFC700] text-xl">★★★★★</span>
            <span className="text-xl">(50)</span>
          </p>
          <div className="flex justify-between mt-1">
            <p>Indian Sharee</p>
            <p className="text-lg font-semibold uppercase">Bdt 2,300</p>
          </div>
          <button className="mt-3 py-2 w-full border border-purple-600 rounded-lg font-semibold text-purple-600">
            Add to cart
          </button>
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
              <div className="absolute top-0 right-4 bg-purple-600 text-white font-semibold text-center px-3 pt-1 pb-1 rounded-b-full">
                <p>Up</p>
                <p>to</p>
                <p>40%</p>
              </div>
            </div>
          </div>
          <p className="mt-3">
            <span className="text-[#FFC700] text-xl">★★★★★</span>
            <span className="text-xl">(50)</span>
          </p>
          <div className="flex justify-between mt-1">
            <p>Indian Sharee</p>
            <p className="text-lg font-semibold uppercase">Bdt 2,300</p>
          </div>
          <button className="mt-3 py-2 w-full border border-purple-600 rounded-lg font-semibold text-purple-600">
            Add to cart
          </button>
        </div>
      </div>
    </Container>
  );
};

export default BigDeal;
