
"use client";

const presenceDetails = [
  {
    highlight: "India & Sri Lanka",
    tag: "Current Presence",
    title: "Proven Geographic Footprint",
    description:
      "Proven execution experience across multiple states in India (Pan India) and successful project delivery in Sri Lanka, covering WTG installation, major component replacement, O&M services, and specialized lifting solutions.",
  },
  {
    highlight: "Europe & Asia",
    tag: "Future Expansion",
    title: "Future Global Expansion",
    description:
      "Across Europe and Asia, we are strengthening our international presence with enhanced capabilities in WTG installation, major component replacement, O&M services, and advanced lifting solutions. Our long-term vision is to establish a pan-world footprint in the global wind energy sector.",
  },
];

export default function GlobalPresence() {
  return (
    <section className="w-full bg-gradient-to-b from-[#EEF6FB] via-[#F7FAFC] to-white py-8 md:py-12">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl font-bold text-[#293E52] sm:text-2xl md:text-3xl">
            Global Presence
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-[#293E52]/80 sm:text-base">
            Delivering wind energy solutions across regions with a growing international footprint.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:gap-8">
          {presenceDetails.map((item, index) => (
            <article
              key={item.title}
              className="relative flex h-full flex-col overflow-hidden rounded-xl border border-[#CDCDCD] bg-gradient-to-br from-[#F3F9FC] to-white p-5 shadow-sm sm:p-6 md:p-7"
            >
              <span className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#329ACD] to-[#3AB257]" />
              <div className="mb-4 flex flex-wrap items-center gap-3 pl-3">
                <span className="inline-flex rounded-full bg-[#3AB257]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#3AB257] sm:text-sm">
                  {item.tag}
                </span>
                <span className="text-sm font-semibold text-[#329ACD] sm:text-base">
                  {item.highlight}
                </span>
              </div>
              <h3 className="mb-3 pl-3 text-lg font-semibold leading-snug text-[#293E52] sm:text-xl md:text-2xl">
                {item.title}
              </h3>
              <p className="pl-3 text-sm leading-relaxed text-[#293E52]/80 sm:text-base">
                {item.description}
              </p>
              <span className="pointer-events-none absolute right-4 top-4 text-4xl font-bold text-[#293E52]/5 sm:text-5xl">
                {String(index + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-[#CDCDCD] bg-gradient-to-br from-[#F7FAFC] to-white p-4 shadow-sm sm:p-6 md:mt-12 md:p-8">
          <div className="mb-4 flex items-center justify-between gap-4 border-b border-[#CDCDCD]/70 pb-3">
            <h3 className="text-base font-semibold text-[#293E52] sm:text-lg md:text-xl">Our Global Reach</h3>
            <span className="rounded-full bg-[#329ACD]/10 px-3 py-1 text-xs font-medium text-[#329ACD] sm:text-sm">Map View</span>
          </div>
          <img
            src="/images/globalpresence/global-presence-map.png"
            alt="DLI global presence map highlighting India and international expansion"
            loading="lazy"
            className="mx-auto block h-auto w-full max-w-5xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
