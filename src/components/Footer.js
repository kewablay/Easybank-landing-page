import React from "react";
import Logo from "../images/logo-white.svg";
import { Facebook, Twitter, Youtube, Pinterest, Instagram } from "./Icons";
import Button from "./Button";

function Footer() {
  return (
    <footer className="bg-primary_900 text-white p-10 text-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_2fr]">
      {/* first section */}
      <div className="sm:flex flex-col justify-around">
        <div>
          <img className="mx-auto" src={Logo} alt="" />
        </div>
        {/* social icons */}
        <div className="icons flex space-x-4 justify-center mt-7">
          <Facebook fill={"#fff"} />
          <Youtube fill={"#fff"} />
          <Twitter fill={"#fff"} />
          <Pinterest fill={"#fff"} />
          <Instagram fill={"#fff"} />
        </div>
      </div>
      {/* Second section */}
      <div className="links flex flex-col font-[500] mt-7 space-y-4 sm:mt-2">
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
      </div>
      {/* Third Section */}
      <div className="links flex flex-col font-[500] mt-4 space-y-4">
        <a href="#">Careers</a>
        <a href="#">Support</a>
        <a href="#">Privacy Policiy</a>
      </div>
      <div>
        <div className="my-8 pt-2">
          <Button text={"Request Invite"} />
        </div>
        <p className="text-primary_500">© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
