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
    <nav className="p-4 w-full bg-white flex justify-between align-middle fixed top-0 left-0 shadow-sm z-50">
      {/* brand  */}
      <div className="brand cursor-pointer">
        <img src={Logo} alt="EasyBank" />
      </div>
      {/* Nav links */}
      <div
        ref={navRef}
        className={`absolute left-10 top-20 flex flex-col text-center rounded-md gap-4 p-4 font-semibold z-50 bg-white w-10/12 shadow-lg opacity-0 md:static md:flex-row space-x-2 md:p-0 md:w-min md:shadow-none md:opacity-100 ${
          toggleNav && "opacity-100"
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
      {toggleNav ? (
        <div className="cursor-pointer md:hidden z-50">
          <img src={NavClose} alt="X" onClick={() => setToggleNav(false)} />
        </div>
      ) : (
        <div className="cursor-pointer md:hidden z-50">
          {" "}
          <img src={NavToggle} alt="=" onClick={() => setToggleNav(true)} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
