import Container from "@/components/utils/Container";
import Image from "next/image";
import React from "react";
import logo from "../../assets/images/we5ive_logo.png";
import { CiSearch } from "react-icons/ci";
import { BsBasket3 } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

const Header = () => {
  return (
    <div className="bg-purple-50 py-5">
      <Container>
        <div className="flex justify-between items-center">
          <Image src={logo} alt="logo"></Image>
          <div>
            <ul className="flex gap-5 font-normal text-gray-500">
              <li>Home</li>
              <li>Shop</li>
              <li>Deals</li>
              <li>What's New</li>
            </ul>
          </div>
          <div className="flex items-center gap-5">
            {/* Search */}
            <div className="flex items-center border rounded-full px-3 py-1 bg-white">
              <CiSearch className="" />
              <input
                type="text"
                placeholder="Search"
                className="ml-1 focus:outline-none"
              />
            </div>

            <div className="flex gap-3">
              {/* Cart Icon */}
              <div className="relative">
                <BsBasket3 className="text-xl" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  0
                </span>
              </div>
              {/* User Icon */}
              <BiUser className="text-xl" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
