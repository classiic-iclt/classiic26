import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import mascot from "../assets/Mascot.png";
import IntroduceText from "../components/introducing-our-mascot";
const Mascot = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;

    const rect = e.currentTarget.getBoundingClientRect();

    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);

    if (isMobile) {
      const rect = e.currentTarget.getBoundingClientRect();

      setCoords({
        x: rect.width / 2,
        y: rect.height / 2,
      });
    }
  };

  return (
    <>
      <div className="flex gap-10 flex-col w-full items-center justify-center bg-primary-background p-4 sm:p-6 md:p-12 lg:p-24">
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            "--mouse-x": `${coords.x}px`,
            "--mouse-y": `${coords.y}px`,
          }}
          initial={{ opacity: 0, y: 65 }} // Starting state (hidden)
          whileInView={{ opacity: 1, y: 0 }} // Animated state when in view
          viewport={{ once: true, amount: 0.3 }} // Options: animate once, triggers when 30% visible
          transition={{ duration: 0.6, ease: "easeOut" }} // Animation timing
          className="
          relative
          w-full
          overflow-hidden
          rounded-2xl
          border  border-white/5
          bg-white/1
          p-5 sm:p-6 md:p-8
          backdrop-blur-md
          transition-shadow
          duration-300
          hover:shadow-2xl
          hover:shadow-white/5
          animate-fluid-scale
          hover:inset-shadow-[0_0px_6px_0px_rgba(255,255,255,0.1)]
          
        "
        >
          <IntroduceText />
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: isMobile ? 1 : isHovered ? 1 : 0,
              background: `
              radial-gradient(
                300px circle at var(--mouse-x) var(--mouse-y),
                rgba(255,255,255,0.06),
                transparent 20%
              )
            `,
            }}
          />

          <div
            className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
            style={{
              opacity: isMobile ? 1 : isHovered ? 1 : 0,
              background: `
              radial-gradient(
                400px circle at var(--mouse-x) var(--mouse-y),
                rgba(255,255,255,0.15),
                transparent 45%
              )
            `,
              maskImage:
                "linear-gradient(black, black) exclude, linear-gradient(black, black)",
              WebkitMaskComposite: "xor",
              padding: "1px",
            }}
          />

          <div className="relative z-10 h-30  h-fit w-full bg-contain bg-center bg-no-repeat ">
            <img
              src={mascot}
              alt="Mascot"
              className="
    w-full
    transition-all
    duration-250
    ease-in-out
    hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]
  "
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Mascot;
