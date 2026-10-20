import { useEffect, useState } from "react";
import { motion } from "motion/react";
import CountUp from "./CountUp"; // Sesuaikan path dengan lokasi file CountUp.jsx

// Isi ketika deadline sudah ditentukan.
// Format: YYYY-MM-DDTHH:mm:ss+08:00
const REGISTRATION_DEADLINE = "2026-12-02T23:59:59+08:00";

const getTimeLeft = (deadline) => {
  if (!deadline) return null;

  const target = new Date(deadline).getTime();

  if (Number.isNaN(target)) {
    return { invalid: true };
  }

  const difference = target - Date.now();

  if (difference <= 0) {
    return {
      expired: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

// Variants untuk container & item
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const RegistrationCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeLeft(REGISTRATION_DEADLINE),
  );

  // Flag: apakah animasi count-up awal (dari 0) sudah selesai.
  // Selama false, CountUp akan mulai dari 0.
  // Setelah true, CountUp mengikuti nilai asli setiap detiknya.
  const [countUpDone, setCountUpDone] = useState(false);

  useEffect(() => {
    if (!REGISTRATION_DEADLINE) return;

    const updateCountdown = () => {
      setTimeLeft(getTimeLeft(REGISTRATION_DEADLINE));
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Hari", value: timeLeft?.days },
    { label: "Jam", value: timeLeft?.hours },
    { label: "Menit", value: timeLeft?.minutes },
    { label: "Detik", value: timeLeft?.seconds },
  ];

  return (
    <section className="relative isolate w-full overflow-hidden px-4 py-20 text-center text-[#F3E7CC] sm:py-28">
      {/* Marble atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
          
          `,
        }}
      />

      {/* Soft golden glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] -z-10 h-72 w-[75%] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(195,153,79,0.15), transparent 70%)",
        }}
      />

      <style>{`
        @keyframes goldShimmer {
          0% {
            background-position: 180% center;
          }
          100% {
            background-position: -180% center;
          }
        }

        .greek-gold {
          background: linear-gradient(
            110deg,
            #9e7638 0%,
            #f7e5b5 25%,
            #c49b51 50%,
            #f7e5b5 75%,
            #9e7638 100%
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .greek-card {
          background:
            linear-gradient(
              145deg,
              rgba(255, 248, 225, 0.12),
              rgba(255, 255, 255, 0.035) 40%,
              rgba(185, 145, 74, 0.055)
            );
          border: 1px solid rgba(205, 170, 105, 0.38);
          box-shadow:
            0 12px 40px rgba(0, 0, 0, 0.24),
            inset 0 1px 0 rgba(255, 237, 195, 0.2),
            inset 0 -1px 0 rgba(168, 126, 57, 0.14);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
        }
      `}</style>

      {/* Heading */}
      <div className="relative mx-auto mb-12 max-w-3xl sm:mb-14">
        <div className="mb-7 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C5A15D] sm:w-20" />
          <span className="greek-gold text-xl" aria-hidden="true">
            ✦
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#D8C49B]/80 sm:text-xs">
            Chronos
          </span>
          <span className="greek-gold text-xl" aria-hidden="true">
            ✦
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C5A15D] sm:w-20" />
        </div>

        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C5A15D] sm:text-xs">
          Registration Deadline
        </p>

        <h2 className="greek-gold font-serif text-3xl font-semibold tracking-wide sm:text-5xl">
          Waktu Pendaftaran
        </h2>

        <p className="mx-auto mt-5 max-w-lg font-serif text-sm italic leading-relaxed text-[#E4D7BC]/70 sm:text-base">
          Setiap detik membawa kita lebih dekat pada waktunya.
        </p>

        <div className="mx-auto mt-7 flex w-48 items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B99555]/80" />
          <span className="text-xs text-[#C5A15D]">❖</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B99555]/80" />
        </div>
      </div>

      {/* Countdown states */}
      {!REGISTRATION_DEADLINE ? (
        <div className="greek-card relative mx-auto max-w-md overflow-hidden rounded-xl px-6 py-6 sm:px-10">
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#E4C580]/80 to-transparent" />
          <p className="font-serif text-base text-[#E8D8B4]">
            Batas waktu pendaftaran belum ditentukan.
          </p>
          <p className="mt-2 text-xs tracking-wide text-[#D8C49B]/50">
            Countdown akan dimulai setelah tanggal ditetapkan.
          </p>
        </div>
      ) : timeLeft?.invalid ? (
        <p className="text-sm text-red-300">
          Format tanggal deadline tidak valid.
        </p>
      ) : timeLeft?.expired ? (
        <div className="greek-card mx-auto max-w-md rounded-xl px-6 py-8">
          <p className="greek-gold font-serif text-2xl font-semibold">
            Waktu Telah Tiba
          </p>
          <p className="mt-2 text-sm text-[#E4D7BC]/65">
            Pendaftaran telah ditutup.
          </p>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onViewportEnter={() => {
            // Setelah animasi count-up awal selesai (sesuaikan dengan duration CountUp),
            // set flag countUpDone = true agar angka mengikuti nilai real time.
            setTimeout(() => setCountUpDone(true), 1500);
          }}
          className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5"
        >
          {units.map(({ label, value }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="
                greek-card group relative overflow-hidden rounded-xl
                px-3 py-6 transition-all duration-500
                hover:-translate-y-1 hover:border-[#E5C783]/65
                hover:shadow-[0_16px_45px_rgba(0,0,0,0.3),0_0_24px_rgba(197,161,93,0.08)]
                sm:px-5 sm:py-8
              "
            >
              {/* Gold edge reflection */}
              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,242,208,0.10), transparent 35%, transparent 70%, rgba(197,161,93,0.08))",
                }}
              />

              {/* Top gold line */}
              <div className="absolute left-4 right-4 top-0 h-px bg-gradient-to-r from-transparent via-[#E8CC91]/80 to-transparent" />

              {/* Small decorative diamonds */}
              <span
                className="absolute left-3 top-3 text-[9px] text-[#C5A15D]/60"
                aria-hidden="true"
              >
                ◈
              </span>
              <span
                className="absolute right-3 top-3 text-[9px] text-[#C5A15D]/60"
                aria-hidden="true"
              >
                ◈
              </span>

              {/* Number - CountUp dari 0 saat pertama kali muncul, lalu ikut nilai real */}
              <div className="greek-gold relative font-serif text-4xl font-semibold tracking-wide sm:text-5xl">
                <CountUp
                  from={countUpDone ? value || 0 : 0}
                  to={value || 0}
                  duration={countUpDone ? 0.6 : 1.5}
                  className="count-up-text"
                />
              </div>

              {/* Label */}
              <p className="relative mt-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#E4D7BC]/65 sm:text-xs">
                {label}
              </p>

              {/* Bottom ornament */}
              <div className="mx-auto mt-5 flex w-12 items-center gap-2">
                <div className="h-px flex-1 bg-[#C5A15D]/50" />
                <span className="text-[8px] text-[#C5A15D]">◆</span>
                <div className="h-px flex-1 bg-[#C5A15D]/50" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Footer */}
      <div className="mt-9 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.23em] text-[#D8C49B]/40 sm:text-xs">
        <span aria-hidden="true">❧</span>
        <p>Seize the Moment</p>
        <span aria-hidden="true">❧</span>
      </div>
    </section>
  );
};

export default RegistrationCountdown;
