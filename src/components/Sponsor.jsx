import { useMemo } from "react";

/* ------------------------------------------------------------------ */
/*  Asset loader — nama folder HARUS persis seperti di disk           */
/* ------------------------------------------------------------------ */

const sponsorAssets = import.meta.glob(
  "/src/assets/SPONSOR/**/*.{png,jpg,jpeg,svg,webp,PNG,JPG,JPEG,SVG,WEBP}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

// Perhatikan trailing underscore — sesuai folder aslinya
const TIER_FOLDERS = {
  platinum: "PLATINUM_",
  gold: "GOLD_",
  silver: "SILVER_",
  bronze: "BRONZE_",
  alternative: "ALTERNATIF_",
  diamond: "DIAMOND_",
};

const getSponsorLogos = (tier) => {
  const folder = TIER_FOLDERS[tier];
  if (!folder) return [];

  const needle = `/SPONSOR/${folder}/`.toLowerCase();

  return Object.entries(sponsorAssets)
    .filter(([path]) => path.toLowerCase().includes(needle))
    .sort(([a], [b]) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
    )
    .map(([, url]) => url);
};

// Debug (dev only) — cek console kalau ada yang masih hilang
if (import.meta.env.DEV) {
  const summary = Object.fromEntries(
    Object.keys(TIER_FOLDERS).map((t) => [t, getSponsorLogos(t).length]),
  );
  // eslint-disable-next-line no-console
  console.info("[Sponsors] jumlah logo per tier:", summary);
}

/* ------------------------------------------------------------------ */
/*  Tier config — LANDSCAPE cards, diperbesar                         */
/*  Tier hanya penanda internal: grouping + styling + sort order.     */
/* ------------------------------------------------------------------ */

const TIER_CONFIG = {
  platinum: {
    order: 0,
    wrapClass:
      "flex flex-wrap items-stretch justify-center gap-6 sm:gap-8 max-w-5xl mx-auto",
    card: "w-full max-w-[640px] min-h-[260px] sm:min-h-[300px] rounded-xl border-[#C5A15D]/55 px-8 py-7 sm:px-10 sm:py-8",
    hover: "hover:border-[#C5A15D]/85 hover:bg-[#202638]",
    logoMax: "max-h-40 sm:max-h-52",
    placeholderIcon: "text-5xl sm:text-6xl",
    placeholderText: "text-xs",
    featured: true,
  },
  gold: {
    order: 1,
    wrapClass:
      "flex flex-wrap items-stretch justify-center gap-5 sm:gap-6 max-w-6xl mx-auto",
    card: "w-full max-w-[480px] min-h-[200px] sm:min-h-[220px] rounded-lg border-[#C5A15D]/40 px-7 py-6",
    hover: "hover:border-[#C5A15D]/70 hover:bg-[#1F2435]",
    logoMax: "max-h-32 sm:max-h-40",
    placeholderIcon: "text-4xl sm:text-5xl",
    placeholderText: "text-[11px]",
  },
  silver: {
    order: 2,
    wrapClass:
      "flex flex-wrap items-stretch justify-center gap-4 sm:gap-5 max-w-6xl mx-auto",
    card: "w-full max-w-[380px] min-h-[160px] sm:min-h-[180px] rounded-lg border-[#C5A15D]/30 px-6 py-5",
    hover: "hover:border-[#C5A15D]/60 hover:bg-[#1E2333]",
    logoMax: "max-h-24 sm:max-h-32",
    placeholderIcon: "text-3xl sm:text-4xl",
    placeholderText: "text-[10px]",
  },
  bronze: {
    order: 3,
    wrapClass:
      "flex flex-wrap items-stretch justify-center gap-4 sm:gap-5 max-w-6xl mx-auto",
    card: "w-full max-w-[300px] min-h-[130px] sm:min-h-[150px] rounded-lg border-[#C5A15D]/20 px-5 py-4",
    hover: "hover:border-[#C5A15D]/45 hover:bg-[#1D2231]",
    logoMax: "max-h-20 sm:max-h-24",
    placeholderIcon: "text-2xl sm:text-3xl",
    placeholderText: "text-[9px]",
  },
  // BARU — supaya 3 logo ALTERNATIF_ ikut tampil
  alternative: {
    order: 4,
    wrapClass:
      "flex flex-wrap items-stretch justify-center gap-4 sm:gap-5 max-w-6xl mx-auto",
    card: "w-full max-w-[380px] min-h-[160px] sm:min-h-[180px] rounded-lg border-[#C5A15D]/30 px-6 py-5",
    hover: "hover:border-[#C5A15D]/60 hover:bg-[#1E2333]",
    logoMax: "max-h-24 sm:max-h-32",
    placeholderIcon: "text-3xl sm:text-4xl",
    placeholderText: "text-[10px]",
  },
  diamond: {
    order: 5,
    wrapClass:
      "flex flex-wrap items-stretch justify-center gap-5 sm:gap-6 max-w-6xl mx-auto",
    card: "w-full max-w-[480px] min-h-[200px] sm:min-h-[220px] rounded-lg border-[#C5A15D]/50 px-7 py-6",
    hover: "hover:border-[#C5A15D]/80 hover:bg-[#1F2435]",
    logoMax: "max-h-32 sm:max-h-40",
    placeholderIcon: "text-4xl sm:text-5xl",
    placeholderText: "text-[11px]",
  },
};

/* ------------------------------------------------------------------ */
/*  Generate sponsors: 1 card per file yang BENAR-BENAR ada           */
/* ------------------------------------------------------------------ */

const sponsors = Object.keys(TIER_CONFIG)
  .sort((a, b) => TIER_CONFIG[a].order - TIER_CONFIG[b].order)
  .flatMap((tier) =>
    getSponsorLogos(tier).map((logo, i) => ({
      id: `${tier}-${i}`,
      logo,
      tier,
    })),
  );

/* ------------------------------------------------------------------ */
/*  Sponsor card                                                      */
/* ------------------------------------------------------------------ */

function SponsorCard({ sponsor, tier }) {
  const c = TIER_CONFIG[tier];

  return (
    <article
      className={`
        group relative flex h-full items-center justify-center
        overflow-hidden bg-[#1B2030]
        transition duration-300 hover:-translate-y-1
        ${c.card} ${c.hover}
      `}
    >
      <div
        className="absolute inset-x-5 top-0 h-px bg-[#C5A15D]/50"
        aria-hidden="true"
      />
      <span
        className="absolute left-3 top-2 text-xs text-[#C5A15D]/65"
        aria-hidden="true"
      >
        ◇
      </span>
      <span
        className="absolute right-3 top-2 text-xs text-[#C5A15D]/65"
        aria-hidden="true"
      >
        ◇
      </span>

      {c.featured && (
        <>
          <div
            className="pointer-events-none absolute inset-3 rounded-lg border border-[#C5A15D]/15"
            aria-hidden="true"
          />
          <span
            className="absolute left-1/2 top-1.5 -translate-x-1/2 text-xs text-[#C5A15D]/70"
            aria-hidden="true"
          >
            ◆
          </span>
          <span
            className="absolute bottom-1.5 left-1/2 -translate-x-1/2 text-xs text-[#C5A15D]/70"
            aria-hidden="true"
          >
            ◆
          </span>
        </>
      )}

      <img
        src={sponsor.logo}
        alt="Sponsor logo"
        loading="lazy"
        className={`relative max-w-[85%] object-contain ${c.logoMax}`}
      />

      <div
        className="absolute inset-x-7 bottom-0 h-px bg-[#C5A15D]/25"
        aria-hidden="true"
      />
    </article>
  );
}

/* ------------------------------------------------------------------ */
/*  Tier section — no label, subtle divider only                      */
/* ------------------------------------------------------------------ */

function TierSection({ tier, items }) {
  const c = TIER_CONFIG[tier];

  return (
    <section>
      <div className="mb-8 h-px w-full bg-[#C5A15D]/25 sm:mb-10" />
      <ul className={`list-none ${c.wrapClass}`}>
        {items.map((sponsor) => (
          <li key={sponsor.id} className="flex">
            <SponsorCard sponsor={sponsor} tier={tier} />
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */

const Sponsors = () => {
  const grouped = useMemo(() => {
    const map = new Map();
    for (const sponsor of sponsors) {
      if (!map.has(sponsor.tier)) map.set(sponsor.tier, []);
      map.get(sponsor.tier).push(sponsor);
    }
    return map;
  }, []);

  const activeTiers = Object.keys(TIER_CONFIG)
    .sort((a, b) => TIER_CONFIG[a].order - TIER_CONFIG[b].order)
    .filter((tier) => grouped.get(tier)?.length);

  return (
    <section
      aria-labelledby="sponsors-title"
      className="w-full bg-[#151926] px-4 py-20 text-[#F3E7CC] sm:px-6 sm:py-24 lg:px-8"
    >
      <header className="mb-14 flex items-center gap-4 sm:mb-16 sm:gap-6">
        <div className="h-px flex-1 bg-[#C5A15D]/45" />
        <div className="shrink-0 text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#C5A15D] sm:text-xs">
            ✦ &nbsp; Our Partners &nbsp; ✦
          </p>
          <h2
            id="sponsors-title"
            className="font-serif text-base font-semibold uppercase tracking-[0.12em] text-[#F3E7CC] sm:text-xl sm:tracking-[0.2em]"
          >
            Special Thanks To Our Sponsors
          </h2>
        </div>
        <div className="h-px flex-1 bg-[#C5A15D]/45" />
      </header>

      <div className="mx-auto flex max-w-6xl flex-col gap-14 sm:gap-20">
        {activeTiers.map((tier) => (
          <TierSection key={tier} tier={tier} items={grouped.get(tier)} />
        ))}
      </div>

      <div className="mx-auto mt-16 flex max-w-48 items-center justify-center gap-3 sm:mt-20">
        <div className="h-px flex-1 bg-[#C5A15D]/40" />
        <span className="text-xs text-[#C5A15D]" aria-hidden="true">
          ❖
        </span>
        <div className="h-px flex-1 bg-[#C5A15D]/40" />
      </div>
    </section>
  );
};

export default Sponsors;
