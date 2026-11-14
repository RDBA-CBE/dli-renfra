import { CircleCheck, ShieldCheck, Truck } from "lucide-react";
import InnerBanner from "@/components/Inner-Banner";

const craneFeatures = [
  "Rigging equipment: slings, shackles, hooks, spreader bars",
  "Fleet of top-brand cranes up to 800 tons, with 130 ton and 160 ton support cranes",
  "Advanced models for higher lifting heights and heavier loads",
  "Multiple counterweight configurations for optimized lifting plans",
  "Cranes fully serviced, certified, and load-tested",
];

const liftingPackages = [
  "Licensed and trained crane operators",
  "Access mats for ground stabilization",
  "Surveyor support for lift planning and load guidance",
  "Traffic control, permits, and safety supervision",
  "Transport of cranes and components to site",
];

const craneFleet = [
  { model: "XGC800-1", capacity: "800 Ton" },
  { model: "XCT160L8", capacity: "160 Ton" },
  { model: "XCT130_Y1", capacity: "130 Ton" },
];

function CheckList({ items }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base text-[#293E52]">
          <CircleCheck
            className="mt-0.5 h-5 w-5 shrink-0 text-[#3AB257]"
            aria-hidden="true"
          />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CraneRentalsPage() {
  return (
    <>
      <InnerBanner title="Crane Rentals" bgImage="/images/crane-banner.png" />

      <main className="2xl:!mb-[300px]">
        <section className="mx-auto grid max-w-[1400px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.4fr_0.8fr] lg:px-8 lg:py-14">
          <div className="flex flex-col justify-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#3AB257]">
              Crane Rental Package
            </p>
            <h1 className="text-2xl font-bold text-[#293E52] sm:text-3xl lg:text-4xl">
              Dependable Cranes for Heavy Lifting Needs
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#293E52]">
              We provide crawler cranes up to 800-ton capacity, operated by
              licensed, experienced professionals and supported by complete
              lifting service packages for safe and efficient project execution.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-[#293E52] to-[#329ACD] p-7 text-white sm:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                <Truck className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/85">
                Crawler crane capacity
              </p>
            </div>
            <p className="mt-6 text-5xl font-bold sm:text-6xl">800 Ton</p>
          </div>
        </section>

        <section className="bg-[#F6F8F9]">
          <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-2">
              <article className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
                <h2 className="mb-6 text-xl font-bold text-[#293E52] sm:text-2xl">
                  Our Crane Features
                </h2>
                <CheckList items={craneFeatures} />
              </article>

              <article className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
                <h2 className="mb-6 text-xl font-bold text-[#293E52] sm:text-2xl">
                  Our Lifting Packages Include
                </h2>
                <CheckList items={liftingPackages} />
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3AB257]">
              Crane Fleet
            </p>
            <h2 className="mt-1 text-2xl font-bold text-[#293E52] sm:text-3xl">
              Available Crane Models
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {craneFleet.map(({ model, capacity }) => (
              <article
                key={model}
                className="flex items-center gap-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#E8F5EC] text-[#329ACD]">
                  <Truck className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#293E52]">{model}</h3>
                  <p className="mt-1 text-2xl font-semibold text-[#3AB257]">
                    {capacity}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#293E52]">
          <div className="mx-auto max-w-[1400px] px-4 py-10 text-white sm:px-6 lg:px-8 lg:py-12">
            <div className="flex items-start gap-4">
              <ShieldCheck
                className="mt-1 h-7 w-7 shrink-0 text-[#3AB257]"
                aria-hidden="true"
              />
              <div>
                <h2 className="text-xl font-bold sm:text-2xl">
                  Reliable Crane Support You Can Trust
                </h2>
                <p className="mt-3 max-w-5xl text-base leading-relaxed text-white/85">
                  We ensure on-time crane delivery, complete technical crew
                  support, and safe, efficient lifting operations for all
                  heavy-lift requirements.
                </p>
                <div className="mt-6 border-t border-white/20 pt-5">
                  <h3 className="text-lg font-bold sm:text-xl">
                    Reliable Crane Support
                  </h3>
                  <p className="mt-2 max-w-5xl text-sm leading-relaxed text-white/85 sm:text-base">
                    We provide on-time crane deployment, full technical crew
                    support, and safe, efficient lifting operations to meet all
                    heavy-lift project requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
