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
      <div className="bg-[#1D1D1D] text-white py-14 mt-24">
        <Container>
          <div className="grid grid-cols-2">
            <div className="pr-60">
              {/* logo */}
              <Image src={logo} alt="logo"></Image>
              <p className="mt-7">
                Saepe quo suscipit vitae quia. Repudiandae nobis quis.
                Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo
                est consectetur maxime quos fugit velit assumenda est.
              </p>
            </div>
            <div>
              <h3 className="text-2xl">Sign Up For Our Newsletter!</h3>
              <p className="pr-6 mt-2">
                Get notified about updates and be the first to get early access
                to new Podcast episodes.
              </p>
              <fieldset className="form-control mt-7">
                <div className="">
                  <input
                    type="text"
                    placeholder="Youe email address"
                    className="p-4 w-48 md:w-[435px] rounded-s-lg"
                  />
                  <button className="p-4 bg-[#7E53D4] w-48 rounded-e-lg">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </div>
          </div>
          {/* middle footer */}
          <div className="flex justify-between mt-16">
            <ul>
              <li className="font-bold pb-1">Contact Us</li>
              <li>Support@we5ive.com</li>
            </ul>
            <ul>
              <li className="font-bold pb-1">About Us</li>
              <li>Contact Us</li>
            </ul>
            <ul>
              <li className="font-bold pb-1">Privacy policy</li>
              <li>Terms & condition</li>
            </ul>
            <ul>
              <li className="font-bold pb-1">Social Link</li>
              <li className="flex gap-5 mt-3">
                <Image src={fbIcon} alt="fbIcon"></Image>
                <Image src={xIcon} alt="fbIcon"></Image>
                <Image src={linkeIcon} alt="fbIcon"></Image>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      {/* copy right */}
      <div className="bg-[#7E53D4] text-white text-center py-4">
        <span>© 2024 | We5ive</span>
      </div>
    </>
  );
};

export default Footer;
