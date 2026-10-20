import { useState } from "react";
import { useEffect } from "react";
import logoHeader from "../assets/logo-classic-header.png";
import Button from "../components/Button";
import "../App";
const Header = () => {
  return (
    <>
      <div className="bg-[url(./assets/hero-section.png)] bg-cover  bg-no-repeat bg-center sm:h-[120vh]  mb-12">
        <div className="w-full h-full gap-10   flex flex-col items-center pt-40 sm:pt-40 ">
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
