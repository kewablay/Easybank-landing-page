import React from "react";
import Button from "./Button";
import heroBgDesktop from "../images/bg-intro-desktop.svg";
import heroBgMobile from "../images/bg-intro-mobile.svg";
import heroImage from "../images/image-mockups.png";

function Header() {
  return (
    <header className="flex flex-col-reverse sm:grid sm:grid-cols-2 relative">
      {/* introText */}
      <div className="p-8 space-y-8 text-center sm:text-left sm:pt-[7rem] md:pt-48">
        <h1 className="text-[40px] leading-[1.1] font-[400] md:text-[50px] md:font-[500] lg:text-[60px] lg:max-w-[30rem]">
          Next generation digital banking
        </h1>
        <p className="md:text-lg md:w-10/12">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div>
          <Button text={"Request Invite"} />
        </div>
      </div>
      {/* Hero Image */}
      <div>
        {/* <img
          src={heroBgMobile}
          alt=""
          className="absolute right-0 top-0 w-full -z-20"
        /> */}
        <picture className="absolute right-0 top-0 w-full -z-20 sm:-top-80 sm:-right-[30%]">
          <source srcset={heroBgDesktop} media="(min-width: 640px)" />
          <img
            srcset={heroBgMobile}
            alt="…"
            className=" right-0 top-0 w-full -z-20 md:-top-80 md:-right-[30rem]"
          />
        </picture>

        <img src={heroImage} alt="-z-10 absolute -top-[40rem]" />
      </div>
    </header>
  );
}

export default Header;
