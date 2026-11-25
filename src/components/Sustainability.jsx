"use client";

const IMAGE_PATH = "/images/sustainability/";

const initiatives = [
  "Driving a cleaner future through renewable energy adoption and environmentally responsible project practices.",
  "Our wind energy solutions help reduce carbon emissions, minimize environmental impact, and accelerate the global transition to sustainable power.",
  "Through our innovative projects, Derrick Lifters India has achieved an annual reduction of approximately 706,630.08 metric tons of CO₂e, depending on local grid emission factors. This achievement reflects our commitment to a cleaner environment and a more sustainable future for the next generation.",
];

export default function Sustainability() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(58,178,87,0.08),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(50,154,205,0.08),_transparent_50%)]" />
      <div className="mx-auto w-full max-w-[1400px] px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        {/* Header */}
        <header className="mb-10 md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#3AB257] sm:text-sm">
            Environment & Impact
          </p>
          <h2 className="max-w-3xl text-2xl font-bold leading-tight text-[#293E52] sm:text-3xl md:text-4xl">
            Sustainability &amp; Green Initiatives
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#293E52]/75 sm:text-base md:text-lg">
            Advancing renewable energy solutions that reduce emissions and support a cleaner future.
          </p>
          <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#329ACD] to-[#3AB257]" />
        </header>

        {/* Initiatives */}
        <div className="mb-14 grid grid-cols-1 items-center gap-8 md:mb-20 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="relative pl-6 sm:pl-8">
            <span className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-[#329ACD] via-[#3AB257]/60 to-transparent" />
            <ul className="space-y-6 sm:space-y-8">
              {initiatives.map((text, index) => (
                <li key={index} className="relative">
                  <span className="absolute -left-6 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-white text-sm font-bold text-[#329ACD] ring-1 ring-[#329ACD]/30 sm:-left-8 sm:h-11 sm:w-11 sm:text-base">
                    0{index + 1}
                  </span>
                  <p className="pt-1.5 text-sm leading-relaxed text-[#293E52]/80 sm:text-base md:text-lg">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex h-full items-center justify-center">
            <img
              src={`${IMAGE_PATH}co2-sustainability.png`}
              alt="Green energy and carbon emissions reduction visual"
              className="h-auto max-h-[360px] w-full max-w-md object-contain sm:max-h-[420px] md:max-h-[460px]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Thirukkural */}
        <div className="mb-14 md:mb-20">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-[#3AB257]/10 to-[#329ACD]/10" />
              <img
                src={`${IMAGE_PATH}thiruvalluvar.png`}
                alt="Thiruvalluvar with renewable energy landscape"
                className="h-full min-h-[300px] w-full rounded-2xl object-cover sm:min-h-[360px] md:min-h-[440px]"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-flex w-fit rounded-full bg-[#3AB257]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#3AB257] sm:text-sm">
                Wisdom for Sustainability
              </span>
              <figure className="relative">
                <span aria-hidden="true" className="pointer-events-none absolute -left-1 -top-4 select-none text-6xl font-serif leading-none text-[#329ACD]/15 sm:text-7xl">
                  “
                </span>
                <blockquote className="relative space-y-5 pl-2 sm:pl-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#293E52]/50 sm:text-sm">Thirukkural – Kural 214</p>
                    <p className="mt-2 text-lg font-semibold leading-relaxed text-[#293E52] sm:text-xl md:text-2xl" lang="ta">
                      தன்னயலான் தக்கார்க்குச் செய்த ஒன்றும் மன்னுயிர்க்கு உண்டி பயன்.
                    </p>
                  </div>
                  <div className="h-px w-16 bg-gradient-to-r from-[#329ACD] to-[#3AB257]" />
                  <div>
                    <p className="text-sm leading-relaxed text-[#293E52]/80 sm:text-base md:text-lg">
                      Every good action we perform today becomes a source of benefit for all living beings in the future. What we do now shapes the wellbeing of generations to come.
                    </p>
                  </div>
                </blockquote>
                <figcaption className="mt-5 pl-2 text-sm font-semibold text-[#329ACD] sm:pl-4 sm:text-base">
                  — Thiruvalluvar <span className="font-medium text-[#293E52]/60">(4th–5th Century CE)</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* Commitment */}
        <div className="relative overflow-hidden rounded-2xl bg-[#293E52] px-6 py-8 sm:px-8 sm:py-8 md:px-10">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(50,154,205,0.14),transparent_45%,rgba(58,178,87,0.14))]" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#3AB257]/20 blur-2xl" />
          <div className="relative flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:text-left">
            <div className="flex-1">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6FE39A] sm:text-xs">Our Commitment</p>
              <div className="space-y-1.5 sm:space-y-2">
                <p className="text-xl font-bold leading-snug text-white sm:text-2xl md:text-3xl">
                  Committed to <span className="text-[#6FE39A]">protecting nature</span>!!!
                </p>
                <p className="text-xl font-bold leading-snug text-white sm:text-2xl md:text-3xl">
                  Harnessing the <span className="text-[#7DD3FC]">power of wind</span>!!!
                </p>
                <p className="text-xl font-bold leading-snug text-white sm:text-2xl md:text-3xl">
                  Building a <span className="text-[#6FE39A]">cleaner, greener earth</span>!!!
                </p>
              </div>
            </div>
            <div className="relative shrink-0">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#329ACD] via-[#3AB257] to-[#6FE39A] opacity-70 blur-sm" />
              <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-[#329ACD] to-[#3AB257] p-1 shadow-xl sm:h-48 sm:w-48 md:h-56 md:w-56">
                <div className="h-full w-full overflow-hidden rounded-full bg-[#1b3446] ring-4 ring-white/10">
                  <img
                    src={`${IMAGE_PATH}green-earth.png`}
                    alt="Hands holding a greener Earth with renewable energy"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
