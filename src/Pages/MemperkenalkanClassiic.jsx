import { motion, useReducedMotion } from "framer-motion";
import mascot from "../assets/Mascot.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const acronym = [
  ["C", "Competition"],
  ["L", "Language"],
  ["A", "Art"],
  ["S", "Science"],
  ["S", "Sport"],
  ["I", "Islamic"],
  ["I", "Insan"],
  ["C", "Cendekia"],
];

const stats = [
  ["16", "Mata Lomba"],
  ["1000+", "Peserta"],
  ["3", "Provinsi"],
  ["9", "Milad MAN IC Lotim"],
];

export default function MemperkenalkanClassiic() {
  const reduce = useReducedMotion();
  const vp = reduce
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.25 },
      };

  return (
    <section
      id="tentang-classiic"
      className="relative w-full overflow-hidden border-t border-[#C5A15D]/10 bg-[#151926] py-24 text-[#F3E7CC] sm:py-32"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-[#C5A15D]/10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-[#C5A15D]/10" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-8 lg:px-12">
        <div className="lg:col-span-7">
          <motion.div
            variants={fadeUp}
            custom={0}
            {...vp}
            className="mb-6 flex items-center gap-4"
          >
            <span className="h-px w-8 bg-[#C5A15D]/60" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A15D]">
              ✦ &nbsp; Memperkenalkan CLASSIIC &nbsp; ✦
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            {...vp}
            className="font-serif text-4xl leading-[1.05] tracking-tight text-[#F3E7CC] sm:text-5xl lg:text-6xl"
          >
            Bukan Sekadar Nama.
            <br />
            <span className="text-[#C5A15D]">Ini Fondasi.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            {...vp}
            className="mt-8 max-w-xl text-sm leading-relaxed text-[#F3E7CC]/75 sm:text-base"
          >
            CLASSIIC merupakan singkatan dari{" "}
            <em className="not-italic text-[#F3E7CC]">
              Competition of Language, Art, Science, Sport, and Islamic of Insan
              Cendekia
            </em>
            . Lahir dari MAN IC Lombok Timur, CLASSIIC menjadi panggung tahunan
            bagi generasi madrasah di Bali, NTT, dan NTB.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            {...vp}
            className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4"
          >
            {acronym.map(([letter, word]) => (
              <div
                key={`${letter}-${word}`}
                className="flex items-baseline gap-2"
              >
                <span className="font-serif text-2xl text-[#C5A15D] sm:text-3xl">
                  {letter}
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#F3E7CC]/55">
                  {word}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={reduce ? {} : { scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 h-px w-full origin-left bg-[#C5A15D]/35"
          />

          <motion.div
            variants={fadeUp}
            custom={4}
            {...vp}
            className="mt-8 flex flex-wrap items-center gap-y-6 divide-x divide-[#C5A15D]/25"
          >
            {stats.map(([value, label]) => (
              <div key={label} className="px-5 first:pl-0 last:pr-0">
                <p className="font-serif text-2xl text-[#C5A15D] sm:text-3xl">
                  {value}
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#F3E7CC]/50 sm:text-[10px]">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative flex items-center justify-center lg:col-span-5">
          <div className="pointer-events-none absolute flex items-center justify-center">
            <div className="h-64 w-64 rounded-full border border-[#C5A15D]/20 sm:h-80 sm:w-80" />
            <div className="absolute h-48 w-48 rounded-full border border-[#C5A15D]/10 sm:h-60 sm:w-60" />
          </div>
          <motion.img
            src={mascot}
            alt="Gatca"
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            whileInView={reduce ? {} : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-[320px] object-contain sm:max-w-[380px]"
            loading="lazy"
          />
          <p className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap text-[9px] uppercase tracking-[0.3em] text-[#C5A15D]/60">
            Siyoon — Maskot CLASSIIC
          </p>
        </div>
      </div>
    </section>
  );
}
