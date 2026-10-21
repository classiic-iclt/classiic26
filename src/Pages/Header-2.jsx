import { motion, useReducedMotion } from "framer-motion";
import heroBg from "../assets/hero-section.png";
import mascot from "../assets/logo-classiic.png";

export default function Header() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#151926] bg-cover bg-center bg-no-repeat pt-28"
    >
      {/*
        Overlay tipis: cukup untuk membuat teks cream terbaca,
        tetapi tidak menenggelamkan gambar hero seperti versi sebelumnya.
        Gradient dari kiri (tempat teks) ke kanan (tempat maskot).
      */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#151926]/85 via-[#151926]/50 to-[#151926]/20" />

      {/* Transisi halus ke section berikutnya */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#151926]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-24 lg:grid-cols-12 lg:px-12">
        {/* Narasi — sama seperti versi redesign */}
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate={reduce ? false : "visible"}
          className="lg:col-span-7"
        >
          <motion.div variants={item} className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-[#C5A15D]/60" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A15D]">
              ✦ &nbsp; Milad MAN IC Lombok Timur ke-7 &nbsp; ✦
            </p>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-serif text-5xl leading-[1.02] tracking-tight text-[#F3E7CC] sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Di Mana Bahasa,
            <br />
            <span className="text-[#C5A15D]">Seni, dan Sains</span>
            <br />
            Bertemu.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-sm leading-relaxed text-[#F3E7CC]/80 sm:text-base"
          >
            CLASSIIC26 mempertemukan potensi Insan Cendekia dari Bali, NTT, dan
            NTB dalam satu panggung yang setara — merawat akal, rasa, dan nilai
            keislaman.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#pendaftaran"
              className="border border-[#C5A15D] bg-[#C5A15D] px-7 py-3 text-[11px] uppercase tracking-[0.2em] text-[#151926] transition-colors hover:bg-transparent hover:text-[#C5A15D]"
            >
              Daftar Sekarang
            </a>
            <a
              href="#tentang-classiic"
              className="text-[11px] uppercase tracking-[0.2em] text-[#F3E7CC]/70 underline decoration-[#C5A15D]/40 underline-offset-4 transition-colors hover:text-[#F3E7CC]"
            >
              Kenali CLASSIIC
            </a>
          </motion.div>
        </motion.div>

        {/* Maskot */}
        <div className="relative flex items-center justify-center lg:col-span-5">
          <div className="pointer-events-none absolute flex items-center justify-center">
            <div className="h-64 w-64 rounded-full border border-[#C5A15D]/20 sm:h-80 sm:w-80" />
            <div className="absolute h-48 w-48 rounded-full border border-[#C5A15D]/10 sm:h-60 sm:w-60" />
          </div>
          <motion.img
            src={mascot}
            alt="Gatca, maskot CLASSIIC"
            initial={reduce ? false : { opacity: 0, scale: 0.94 }}
            animate={reduce ? false : { opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-[300px] object-contain drop-shadow-[0_0_32px_rgba(197,161,93,0.15)] sm:max-w-[360px]  "
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#F3E7CC]/40">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-[#C5A15D]/60 to-transparent" />
      </div>
    </section>
  );
}
