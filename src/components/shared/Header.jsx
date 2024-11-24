"use client";
import Container from "@/components/utils/Container";
import Image from "next/image";
import React, { useEffect } from "react";
import logo from "../../assets/images/we5ive_logo.png";
import { CiSearch } from "react-icons/ci";
import { BsBasket3 } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import Link from "next/link";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import gsap from "gsap";
const Header = () => {
  // gsap
  useEffect(() => {
    const menuBtn = document.querySelector("#menu");
    const menuStyle = document.querySelector("#menuStyle");
    const closeMenuBtn = document.querySelector("#menuStyle #closeBtn");

    if (menuBtn && menuStyle) {
      const tl = gsap.timeline({ paused: true });
      tl.to("#menuStyle", {
        left: 0,
        duration: 0.5,
        opacity: 1,
        visibility: "visible",
      });
      tl.from("#menuStyle li", {
        x: 100,
        duration: 0.6,
        opacity: 0,
        stagger: 0.2,
      });
      // open menu
      menuBtn.addEventListener("click", () => {
        tl.play();
      });
      // close menu
      if (closeMenuBtn) {
        closeMenuBtn.addEventListener("click", () => {
          tl.reverse();
        });
      }
    }
  }, []);
  return (
    <div className="bg-purple-50 py-5">
      <Container>
        <div className="flex justify-between items-center px-5 md:px-0">
          <div className="md:hidden flex items-center gap-2">
            <div>
              <div id="menu">
                <HiOutlineMenuAlt2 className="text-3xl" />
              </div>
              <div
                id="menuStyle"
                className="absolute h-full w-[320px] left-[-320px] p-5 top-0 bg-purple-100 z-50"
                style={{ opacity: 0, visibility: "hidden" }}
              >
                <div className="flex items-center justify-between">
                  <Image className="w-28" src={logo} alt="logo"></Image>
                  <button
                    id="closeBtn"
                    className="bg-purple-200 p-1 rounded-lg hover:bg-purple-700 transition-all duration-700 hover:text-white"
                  >
                    <IoMdClose />
                  </button>
                </div>
                <ul className="mt-3 text-gray-500">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/product">Shop</Link>
                  </li>
                  <li>Deals</li>
                  <li>What's New</li>
                </ul>
              </div>
            </div>
            <Image className="w-28" src={logo} alt="logo"></Image>
          </div>
          <Image className="hidden md:block" src={logo} alt="logo"></Image>
          <div className="hidden md:block">
            <ul className="flex gap-5 font-normal text-gray-500">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/product">Shop</Link>
              </li>
              <li>Deals</li>
              <li>What's New</li>
            </ul>
          </div>
          <div className="flex items-center gap-5">
            {/* Search */}
            {/* responsive search bar */}
            <div className="md:hidden">
              <CiSearch className="text-xl" />
            </div>
            <div className="hidden md:flex items-center border rounded-full px-3 py-2 bg-white">
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
