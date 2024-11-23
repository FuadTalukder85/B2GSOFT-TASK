import React from "react";
import Container from "../utils/Container";
import Image from "next/image";
import logo from "../../assets/images/we5ive_logo_02.png";
import fbIcon from "../../assets/icons/fb_icon.png";
import xIcon from "../../assets/icons/twitter_icon.png";
import linkeIcon from "../../assets/icons/linkedin_icon.png";
const Footer = () => {
  return (
    <>
      <div className="bg-[#1D1D1D] text-white py-7 md:py-14 pb-10 md:pb-10 mt-24 px-5 md:px-0">
        <Container>
          <div className="md:grid grid-cols-2">
            <div className="md:pr-60">
              {/* logo */}
              <Image className="hidden md:block" src={logo} alt="logo"></Image>
              <Image
                className="md:hidden"
                src={logo}
                alt="logo"
                width={100}
                height={100}
              ></Image>
              <p className="mt-3 md:mt-7 text-xs md:text-base">
                Saepe quo suscipit vitae quia. Repudiandae nobis quis.
                Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo
                est consectetur maxime quos fugit velit assumenda est.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mt-5 md:mt-0">
                Sign Up For Our Newsletter!
              </h3>
              <p className="pr-6 mt-2 text-xs md:text-base">
                Get notified about updates and be the first to get early access
                to new Podcast episodes.
              </p>
              <fieldset className="form-control mt-7">
                <div className="">
                  <input
                    type="text"
                    placeholder="Youe email address"
                    className="p-2 md:p-4 w-56 md:w-[435px] rounded-s-lg"
                  />
                  <button className="p-2 md:p-4 bg-purple-600 w-24 rounded-e-lg">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </div>
          </div>
          {/* middle footer */}
          <div className="md:flex justify-between mt-16">
            <ul>
              <li className="font-bold pb-1 text-sm md:text-base">
                Contact Us
              </li>
              <li className="text-xs md:text-base">Support@we5ive.com</li>
            </ul>
            <ul>
              <li className="font-bold pb-1 text-sm md:text-base mt-4 md:mt-0">
                About Us
              </li>
              <li className="text-xs md:text-base">Contact Us</li>
            </ul>
            <ul>
              <li className="font-bold pb-1 text-sm md:text-base mt-4 md:mt-0">
                Privacy policy
              </li>
              <li className="text-xs md:text-base">Terms & condition</li>
            </ul>
            <ul>
              <li className="font-bold pb-1 text-sm md:text-base mt-4 md:mt-0">
                Social Link
              </li>
              <li className="hidden md:flex gap-5 mt-3">
                <Image src={fbIcon} alt="fbIcon"></Image>
                <Image src={xIcon} alt="fbIcon"></Image>
                <Image src={linkeIcon} alt="fbIcon"></Image>
              </li>
              <li className="md:hidden flex gap-5">
                <Image src={fbIcon} alt="fbIcon" width={20} height={20}></Image>
                <Image src={xIcon} alt="fbIcon" width={20} height={20}></Image>
                <Image
                  src={linkeIcon}
                  alt="fbIcon"
                  width={20}
                  height={20}
                ></Image>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      {/* copy right */}
      <div className="bg-purple-600 text-white text-center py-4">
        <span>© 2024 | We5ive</span>
      </div>
    </>
  );
};

export default Footer;
