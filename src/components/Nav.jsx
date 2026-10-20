import { useEffect, useState } from "react";

import logoClassic from "../assets/logo-classiic.png";
import teksClassic from "../assets/teks-classiic.png";
import logoMilad from "../assets/logo-milad.png";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setScrolled(false);
        return;
      }

      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        nav fixed top-0 left-0 z-50 w-full
        transition-all duration-500 ease-in-out
        

        ${scrolled ? "md:px-20 md:py-2" : ""}
      `}
    >
      <div
        className={`
          w-full flex items-center justify-center
          bg-white/1 backdrop-blur-lg
          border-b border-white/20
          shadow-lg

          

          transition-all duration-500 ease-in-out
          inset-shadow-[0_0px_6px_0px_rgba(255,255,255,0.1)]

          ${scrolled ? "md:rounded-[50px] md:px-5" : ""}
        `}
      >
        <div className="flex items-center gap-3">
          <img
            src={logoClassic}
            alt="Logo Classic"
            className={`
              object-contain
              transition-all duration-500

              w-12 h-12

              ${scrolled ? "md:w-[3rem] md:h-[3rem]" : ""}
            `}
          />

          <img
            src={teksClassic}
            alt="Classic26"
            className={`
              object-contain
              transition-all duration-500

              w-32

              ${scrolled ? "md:w-[8rem]" : ""}
            `}
          />

          <img
            src={logoMilad}
            alt="Logo Milad"
            className={`
            object-contain
            transition-all duration-500

            w-12 h-12

            ${scrolled ? "md:w-[3rem] md:h-[3rem]" : ""}
          `}
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
