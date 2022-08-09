import React, { useEffect, useRef, useState } from "react";
import Logo from "../images/logo.svg";
import Button from "./Button";
import NavToggle from "../images/icon-hamburger.svg";
import NavClose from "../images/icon-close.svg";
import useOUtsideClick from "./useOutsideClick";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const navRef = useRef();
  useOUtsideClick(navRef, () => setToggleNav(false));

  return (
    <nav className="fixed top-0 left-0 z-50 w-full shadow-sm bg-white">
      <div className="p-4 flex z-50 justify-between align-middle 2xl:container 2xl:mx-auto">
        {/* brand  */}
        <div className="brand cursor-pointer">
          <img src={Logo} alt="EasyBank" />
        </div>
        {/* Nav links */}
        <div
          ref={navRef}
          className={`absolute left-10 -top-[500px] flex flex-col text-center rounded-md gap-4 p-4 font-semibold  bg-white w-10/12 shadow-lg md:static z-0 md:flex-row space-x-2 md:p-0 md:w-min 
          transition-all duration-200 md:shadow-none md:opacity-100 ${
            toggleNav && "top-[80px]"
          }`}
        >
          <a href="#" className="link">
            Home
          </a>
          <a href="#" className="link">
            About
          </a>
          <a href="#" className="link">
            Contact
          </a>
          <a href="#" className="link">
            Blog
          </a>
          <a href="#" className="link">
            Careers
          </a>
        </div>
        {/* Nav button */}
        <div className="hidden md:block">
          <Button text={"Request Invite"} />
        </div>
        {/* hamburger  */}

        <div
          className={`cursor-pointer opacity-0 ${
            toggleNav && "opacity-100"
          } z-[1000]`}
        >
          <img src={NavClose} alt="X" onClick={() => setToggleNav(false)} />
        </div>
        <div
          className={`cursor-pointer md:hidden z-[1000]  ${
            toggleNav && "hidden"
          }`}
        >
          <img src={NavToggle} alt="=" onClick={() => setToggleNav(true)} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
