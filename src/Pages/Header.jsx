import { useState } from "react";
import { useEffect } from "react";
import logoHeader from "../assets/logo-classic-header.png";
import Button from "../components/Button";
import heroBg from "../assets/hero-section.png";
const Header = () => {
  return (
    <>
      <div
        id="top"
        className="relative min-h-screen overflow-hidden bg-[#151926] bg-cover bg-center bg-no-repeat pt-28"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="w-full h-full gap-10   flex flex-col items-center pt-40 sm:pt-50 ">
          <img
            src={logoHeader}
            alt="Logo"
            className=" sm:w-[57.063rem] sm:h-[29.625rem] object-contain animate-fluid-scale"
          />
        </div>
      </div>
    </>
  );
};
export default Header;
