const sponsors = [
  { id: 1, name: "Sponsor 01", logo: null },
  { id: 2, name: "Sponsor 02", logo: null },
  { id: 3, name: "Sponsor 03", logo: null },
  { id: 4, name: "Sponsor 04", logo: null },
  { id: 5, name: "Sponsor 05", logo: null },
  { id: 6, name: "Sponsor 06", logo: null },
];

const Sponsors = () => {
  const renderSponsorGroup = (duplicate = false) => (
    <div
      className="sponsor-group flex shrink-0 items-center gap-5 pr-5 sm:gap-7 sm:pr-7"
      aria-hidden={duplicate}
    >
      {sponsors.map((sponsor) => (
        <div
          key={`${duplicate ? "duplicate-" : ""}${sponsor.id}`}
          className="
            group/card relative flex h-36 w-[190px] shrink-0
            flex-col items-center justify-center
            rounded-lg border border-[#C5A15D]/30
            bg-[#1B2030] px-4
            shadow-[0_4px_12px_rgba(0,0,0,0.12)]
            transition-all duration-300
            hover:-translate-y-1
            hover:border-[#C5A15D]/65
            hover:bg-[#202638]
            sm:h-40 sm:w-[230px]
          "
        >
          {/* Simple gold top border */}
          <div className="absolute left-4 right-4 top-0 h-px bg-[#C5A15D]/50" />

          {/* Minimal corner ornaments */}
          <span
            className="absolute left-3 top-2 text-[10px] text-[#C5A15D]/65"
            aria-hidden="true"
          >
            ◇
          </span>

          <span
            className="absolute right-3 top-2 text-[10px] text-[#C5A15D]/65"
            aria-hidden="true"
          >
            ◇
          </span>

          {/* Sponsor logo */}
          {sponsor.logo ? (
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              loading="lazy"
              className="relative max-h-14 max-w-[80%] object-contain sm:max-h-16"
            />
          ) : (
            <div className="flex flex-col items-center gap-2">
              <span
                className="font-serif text-3xl text-[#C5A15D]"
                aria-hidden="true"
              >
                ✦
              </span>

              <span className="text-[9px] uppercase tracking-[0.2em] text-[#D8C49B]/60">
                Logo Sponsor
              </span>
            </div>
          )}

          <p className="mt-3 max-w-full truncate font-serif text-xs tracking-wide text-[#F3E7CC]/85 sm:text-sm">
            {sponsor.name}
          </p>

          {/* Bottom gold border */}
          <div className="absolute bottom-0 left-8 right-8 h-px bg-[#C5A15D]/25" />
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full overflow-hidden bg-[#151926] py-20 text-[#F3E7CC] sm:py-24">
      <style>{`
        @keyframes sponsorMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .sponsor-track {
          display: flex;
          width: max-content;
          animation: sponsorMarquee 28s linear infinite;
          will-change: transform;
        }

        .sponsor-marquee:hover .sponsor-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .sponsor-track {
            animation: none;
          }

          .sponsor-marquee {
            overflow-x: auto;
          }
        }
      `}</style>

      {/* Heading */}
      <div className="mb-10 flex w-full items-center gap-4 sm:mb-12 sm:gap-6">
        <div className="h-px flex-1 bg-[#C5A15D]/45" />

        <div className="shrink-0 text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#C5A15D] sm:text-xs">
            ✦ &nbsp; Our Partners &nbsp; ✦
          </p>

          <h2 className="font-serif text-sm font-semibold uppercase tracking-[0.12em] text-[#F3E7CC] sm:text-xl sm:tracking-[0.2em]">
            Special Thanks To Our Sponsor
          </h2>
        </div>

        <div className="h-px flex-1 bg-[#C5A15D]/45" />
      </div>

      {/* Infinite sponsor marquee */}
      <div className="sponsor-marquee w-full overflow-hidden py-8">
        <div className="sponsor-track">
          {renderSponsorGroup(false)}
          {renderSponsorGroup(true)}
        </div>
      </div>

      {/* Footer ornament */}
      <div className="mx-auto mt-10 flex max-w-48 items-center justify-center gap-3 sm:mt-12">
        <div className="h-px flex-1 bg-[#C5A15D]/40" />
        <span className="text-xs text-[#C5A15D]">❖</span>
        <div className="h-px flex-1 bg-[#C5A15D]/40" />
      </div>
    </section>
  );
};

export default Sponsors;
