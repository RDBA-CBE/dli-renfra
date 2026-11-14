import Image from "next/image";
import { MapPin, Workflow } from "lucide-react";
import InnerBanner from "@/components/Inner-Banner";

const turnkeyCapabilities = [
  { title: "Land Development", image: "/images/p1.png" },
  { title: "Road Development", image: "/images/p2.png" },
  { title: "EB/DB Yard Works", image: "/images/p3.png" },
  // { title: "Road Development", image: "/images/p4.png" },
  { title: "HT Line Works", image: "/images/p5.png" },
  { title: "Substation Works", image: "/images/p6.png" },
];

export default function TurnkeyInstallationSolutionsPage() {
  return (
    <>
      <InnerBanner
        title="Turnkey Installation Solutions"
        bgImage="/images/wtg-bg.svg"
      />

      <main className="2xl:!mb-[300px]">
        <section className="mx-auto grid max-w-[1400px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-14">
          <div className="flex flex-col justify-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#3AB257]">
              Turnkey WTG I&amp;C
            </p>
            <h1 className="text-2xl font-bold text-[#293E52] sm:text-3xl lg:text-4xl">
              End-to-End Wind Turbine Installation
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-[#293E52] sm:text-base">
              We deliver complete wind turbine installation solutions across
              multi-brand tower systems, MW-range turbines, all tower types, and
              prototype models. With strong project management and technical
              expertise, our team ensures safe, efficient, and reliable
              execution of end-to-end WTG projects.
            </p>

            <div className="mt-8 border-l-4 border-[#3AB257] pl-5">
              <h2 className="text-lg font-bold text-[#293E52] sm:text-xl">
                End-to-End Project Solutions
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#293E52] sm:text-base">
                We deliver complete onshore wind turbine installations and
                commissioning with strong project management and reliable
                execution.
              </p>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-[#293E52] sm:min-h-[440px]">
            <Image
              src="/images/p3.png"
              alt="Wind turbine installation in progress"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#142b3c]/95 via-[#142b3c]/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="text-sm font-semibold text-white/85">Since 2008</p>
              <p className="mt-1 text-4xl font-bold sm:text-5xl">1.2+ GW</p>
              <p className="mt-1 text-base font-semibold sm:text-lg">
                WTG installations completed
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-medium sm:text-base">
                <MapPin className="h-5 w-5 shrink-0 text-[#3AB257]" aria-hidden="true" />
                India, Sri Lanka
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F6F8F9]">
          <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="mb-7 flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8F5EC] text-[#329ACD]">
                <Workflow className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="text-2xl font-bold text-[#293E52] sm:text-3xl">
                Our Turnkey Capabilities
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {turnkeyCapabilities.map(({ title, image }, index) => (
                <article
                  key={`${title}-${index}`}
                  className="group relative min-h-56 overflow-hidden rounded-xl bg-[#293E52] shadow-sm"
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#142b3c]/90 via-transparent to-transparent" />
                  <h3 className="absolute inset-x-0 bottom-0 border-t-4 border-[#3AB257] px-5 py-4 text-lg font-bold text-white sm:text-xl">
                    {title}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
