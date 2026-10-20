import { useEffect } from "react";
import { useState } from "react";

const Button = ({ color = "white/1", children }) => {
  const colors = {
    "white/1": "bg-white/1 text-white",
    "black/10": "bg-black/20 text-white",
  };

  return (
    <>
      <div className="px-10 sm:px-0 w-full sm:w-fit">
        <div
          className={`   relative overflow-hidden
      rounded-full
      border border-white/20
      bg-white/10
      text-center
      backdrop-blur-xl
      shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_3px_10px_rgba(80,50,20,0.12)]
      px-8 py-1.5
      text-xl font-bold text-black/75

      transition-all duration-300 ease-out
      hover:bg-white/20
      hover:border-white/30 
      hover:shadow-[inset_0_1px_3px_rgba(255,255,255,0.95),0_5px_14px_rgba(80,50,20,0.2)]
      hover:-translate-y-1
      active:scale-95
      active:translate-y-0

      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-[#B18F5F]`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Button;
