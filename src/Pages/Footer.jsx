import { MdEmail } from "react-icons/md";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const contacts = [
    {
      number: "+62 858-7755-7663",
      link: "6285877557663",
      nama: "Fatih Zakwan",
    },
    {
      number: "+62 878-9637-4540",
      link: "6287896374540",
      nama: "Dzaki Khalfani",
    },
  ];

  return (
    <footer className="w-full overflow-hidden rounded-t-[24px] border-t-2 border-[#C5A15D]/70 bg-[#151926] text-[#F3E7CC]">
      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 gap-10 p-6 sm:p-8 md:grid-cols-2 md:gap-10 lg:p-10">
        {/* KONTAK KAMI */}
        <section className="min-w-0">
          <h2 className="mb-6 font-serif text-3xl font-semibold tracking-wide text-[#F3E7CC] sm:text-4xl lg:text-5xl">
            Kontak Kami
          </h2>

          <div className="space-y-3 text-base sm:text-lg lg:text-xl">
            {/* EMAIL */}
            <a
              href="mailto:classiiciclotim@gmail.com"
              className="flex items-start gap-3 transition-colors duration-300 hover:text-[#C5A15D]"
            >
              <MdEmail className="mt-1 h-5 w-5 shrink-0 text-[#C5A15D] sm:h-6 sm:w-6" />

              <span className="break-all">classiiciclotim@gmail.com</span>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/classiic_iclt/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition-colors duration-300 hover:text-[#C5A15D]"
            >
              <FaInstagram className="h-5 w-5 shrink-0 text-[#C5A15D] sm:h-6 sm:w-6" />

              <span>@classiic_iclt</span>
            </a>

            {/* WHATSAPP */}
            <div className="pt-2">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#C5A15D]">
                WhatsApp
              </p>

              <div className="space-y-3">
                {contacts.map((contact) => (
                  <a
                    key={contact.link}
                    href={`https://wa.me/${contact.link}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 transition-colors duration-300 hover:text-[#C5A15D]"
                  >
                    <FaWhatsapp className="h-5 w-5 shrink-0 text-[#C5A15D] sm:h-6 sm:w-6" />

                    <span>{contact.number}</span>
                    <p>({contact.nama})</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LOKASI SEKOLAH */}
        <section className="flex min-w-0 flex-col">
          <h2 className="mb-6 text-right font-serif text-3xl font-semibold tracking-wide text-[#F3E7CC] sm:text-4xl lg:text-5xl">
            Lokasi Kami
          </h2>

          {/* MAP / SCHOOL LOCATION */}
          <div className="relative min-h-[240px] flex-1 overflow-hidden rounded-xl border border-[#C5A15D]/30 bg-[#1B2030] shadow-[inset_0_1px_0_rgba(243,231,204,0.06)] sm:min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.000773586811!2d116.4552222735974!3d-8.691474688530047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc4d24d04832c7%3A0x8e831296a6e61960!2sMAN%20Insan%20Cendekia%20Lombok%20Timur!5e0!3m2!1sen!2sid!4v1791816422058!5m2!1sen!2sid"
              title="Lokasi MAN Insan Cendekia Lombok Timur"
              className="h-full min-h-[240px] w-full sm:min-h-[300px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />

            {/* Subtle gold accent */}
            <div className="pointer-events-none absolute left-4 right-4 top-0 h-px bg-[#C5A15D]/40" />
          </div>
        </section>
      </div>

      {/* ORNAMENTAL DIVIDER */}
      <div className="flex items-center gap-4 px-6 sm:px-8 lg:px-10">
        <div className="h-px flex-1 bg-[#C5A15D]/25" />
        <span className="font-serif text-xs text-[#C5A15D]" aria-hidden="true">
          ❖
        </span>
        <div className="h-px flex-1 bg-[#C5A15D]/25" />
      </div>

      {/* COPYRIGHT */}
      <div className="px-6 py-5 text-center text-xs tracking-wide text-[#D8C49B]/65 sm:px-8 sm:text-sm lg:px-10">
        © {new Date().getFullYear()} Classiic26. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
