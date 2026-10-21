import Scroll from "../assets/Scroll.png";
import TypingText from "./TypingText";
import { motion } from "framer-motion";
const images = import.meta.glob("../assets/mascot-lomba/*.png", {
  eager: true,
  import: "default",
});

const daftarLomba = [
  {
    nama: "Storytelling",
    file: "Storytelling.png",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdqE6V-ka9ogMZVSuHmv7GHZEHG5u7tJhdBYTsbrRfnfXcnUg/viewform?usp=header",
    urlKarya:
      "https://docs.google.com/forms/d/e/1FAIpQLSdD4eCdIaFaLLZVdcGqi0v-JGm5jIqNXpjBPs-mWhZeIqYHRw/viewform?usp=header",
  },
  {
    nama: "Badminton",
    file: "Badminton.png",
    url: "https://docs.google.com/forms/d/e/1FAIpQLScNSzKbbC_EQKyU6g9pNyJstTtBCsiHzw8fmk_SWt3R25yavw/viewform?usp=publish-editor",
  },
  {
    nama: "Futsal",
    file: "Bola.png",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfyyXHXozB7fcSf_9ZWoWGSPK8h9skSjVdScmPKPeLxQ-viLA/viewform?usp=publish-editor",
  },
  {
    nama: "Essay",
    file: "Essay.png",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfv7apEMU05j0zYYyLvt-dp1kgA7Ada8Z69I6B1UGIldRIn5g/viewform?usp=header",
  },
  {
    nama: "Kaligrafi",
    file: "Kaligrafi.png",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeLNYt6HPLXrRN8QSSWuH3OPunxstLhjjDNjjE5Rh7X7CGzFg/viewform?usp=header",
  },
  {
    nama: "Khitobah",
    file: "Khitobah.png",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeMlWdzf0c5fC8nn0rihXUAZIaQSIMUAhT2hVFTiJ89PoYl3g/viewform?usp=preview",
  },
  {
    nama: "Science",
    file: "Science.png",
  },
  {
    nama: "Puisi",
    file: "Puisi.png",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSe_tMtyuywuFkYP8rlNj8MpQefPBttkcwjjEr3VkCuDK9gc3w/viewform?usp=header",
    urlKarya:
      "https://docs.google.com/forms/d/e/1FAIpQLSfg3bznQHLbccJBThaodkWxO1As_ntyUg6k1tS3vwMvZv84Sw/viewform?usp=header",
  },
  {
    nama: "Tilawah",
    file: "Tilawah.png",
    url: "https://docs.google.com/forms/d/e/1FAIpQLScftbOgSno_761hNVDf8gmwyFOmow5VBZZvRYVOhzcOj1zCpg/viewform?fbzx=224394130505531807",
  },
].map((lomba) => ({
  ...lomba,
  image: images[`../assets/mascot-lomba/${lomba.file}`],
}));

const Sma = () => {
  const bgStyle = {
    backgroundImage: `url(${Scroll})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="w-full flex flex-col justify-center px-2 py-6">
      <div className="flex justify-center gap-3 mb-4">
        <div>
          {" "}
          <motion.div
            className="h-px w-full bg-amber-50 origin-left"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          />
          <motion.div
            className="text-[#FAF7F0] text-5xl"
            initial={{ opacity: 0 }} // Starting state (hidden)
            whileInView={{ opacity: 1 }} // Animated state when in view
            viewport={{ once: true, amount: 0.9 }} // Options: animate once, triggers when 30% visible
            transition={{ duration: 0.6, ease: "easeOut" }} // Animation timing
          >
            <TypingText text="SMA/MA" delay={0.5} />
          </motion.div>
          <motion.div
            className="h-px w-full bg-amber-50 origin-left"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        </div>
      </div>
      <div className="grid w-fit mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
        {daftarLomba.map((lomba, index) => {
          const total = daftarLomba.length;
          const remainder = total % 3;
          const isLastRow = index >= total - remainder && remainder !== 0;

          const position = isLastRow && remainder === 1 ? "lg:col-start-2" : "";

          return (
            <motion.div
              key={lomba.file}
              initial={{ opacity: 0, y: 50 }} // Starting state (hidden)
              whileInView={{ opacity: 1, y: 0 }} // Animated state when in view
              viewport={{ once: true, amount: 0.3 }} // Options: animate once, triggers when 30% visible
              transition={{ duration: 0.6, ease: "easeOut" }} // Animation timing
              className={`
                group relative
                w-[280px]
                max-w-full
                h-fit
                aspect-[464/520]
                ${position}
                drop-shadow-2xl
                drop-shadow-[#B18F5F]
              `}
              style={bgStyle}
            >
              {/* 
                Inner Wrapper: Menggunakan padding untuk membuat "Safe Area" 
                pt-[22%] = memberi ruang untuk gulungan atas
                pb-[18%] = memberi ruang untuk gulungan bawah
                px-6 = memberi jarak dari pinggir kiri-kanan kertas
              */}
              <div className="absolute inset-0 flex flex-col items-center px-6 pt-[22%] pb-[18%]">
                {/* Nama lomba */}
                <h2 className="relative z-10 w-full text-center font-bold text-[#151926] text-2xl mb-2">
                  {lomba.nama}
                </h2>

                {/* Maskot Container */}
                {/* flex-1 akan mengisi sisa ruang di antara judul dan batas bawah padding */}
                <div className="w-full flex-1 min-h-0 flex items-center justify-center">
                  <img
                    src={lomba.image}
                    alt={lomba.nama}
                    /* max-h-full dan max-w-full memastikan gambar tidak akan melebihi area padding */
                    className="w-[90%] max-h-full object-contain"
                  />
                </div>
              </div>

              {/* Tombol Glass - posisinya absolut relatif terhadap card utama */}
              <div
                className="
                  absolute bottom-[15%] left-0 right-0
                  flex justify-center gap-3
                  opacity-100 translate-y-0 pointer-events-auto
                  lg:opacity-0 lg:translate-y-5 lg:pointer-events-none
                  lg:transition-all lg:duration-500 lg:ease-out
                  lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:pointer-events-auto
                "
              >
                {" "}
                <button
                  className="
                    rounded-full border border-white/70 bg-white/30 backdrop-blur-sm
                    shadow-[inset_0_1px_3px_rgba(255,255,255,0.8),0_4px_12px_rgba(80,50,20,0.15)]
                    px-4 py-2 text-xs font-bold text-[#151926]
                    transition-all duration-300 ease-out
                    md:hover:bg-white/60 md:hover:border-white md:hover:-translate-y-1 md:hover:shadow-lg
                    active:scale-95
                  "
                >
                  JUKNIS
                </button>
                <a href={lomba.url}>
                  <button
                    className="
                    rounded-full border border-white/70 bg-white/30 backdrop-blur-xl
                    shadow-[inset_0_1px_3px_rgba(255,255,255,0.8),0_4px_12px_rgba(80,50,20,0.15)]
                    px-4 py-2 text-xs font-bold text-[#151926]
                    transition-all duration-300 ease-out
                    md:hover:bg-white/60 md:hover:border-white md:hover:-translate-y-1 md:hover:shadow-lg
                    active:scale-95
                  "
                  >
                    DAFTAR
                  </button>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Sma;
