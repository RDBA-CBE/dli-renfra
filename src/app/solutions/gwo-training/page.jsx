import {
  CircleCheck,
  Globe2,
  GraduationCap,
  LifeBuoy,
  MapPinned,
  Settings2,
  UsersRound,
  Wind,
} from "lucide-react";
import InnerBanner from "@/components/Inner-Banner";

const trainingModules = [
  {
    title: "Basic Safety Training (BST)",
    courses: [
      "First Aid",
      "Working at Heights",
      "Fire Awareness",
      "Manual Handling",
    ],
    Icon: UsersRound,
  },
  {
    title: "Basic Technical Training (BTT)",
    courses: ["Mechanical", "Electrical", "Hydraulics"],
    Icon: Settings2,
  },
  {
    title: "Advanced Rescue Training (ART)",
    courses: [
      "Hub, Spinner & Inside Blade Rescue (HSIBR)",
      "Nacelle, Tower & Basement Rescue (NTBR)",
    ],
    Icon: LifeBuoy,
  },
];

const trackRecord = [
  {
    label: "GWO",
    description: "3500+ hours of successful GWO training delivery.",
    Icon: GraduationCap,
  },
  {
    label: "COURSES",
    description: "Development of advanced GWO training courses.",
    Icon: Settings2,
  },
  {
    label: "MODULES",
    description: "Expert-led safety and technical training modules.",
    Icon: LifeBuoy,
  },
  {
    label: "CAPABILITY",
    description: "Multi-language instruction capability.",
    Icon: Globe2,
  },
  {
    label: "TRAINING TEAM",
    description: "Pan-India presence with mobile and regional training team.",
    Icon: MapPinned,
  },
];

export default function GwoTrainingPage() {
  return (
    <>
      <InnerBanner title="GWO Training" bgImage="/images/sol-bg.svg" />

      <main className="w-full 2xl:!mb-[300px]" >
        <section className="mx-auto grid max-w-[1400px] items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:px-8 lg:py-14">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#3AB257]">
              Global Wind Organisation
            </p>
            <h1 className="text-2xl font-bold text-[#293E52] sm:text-3xl lg:text-4xl">
              GWO Certified Training Service
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#293E52] sm:text-base">
              We are an accredited Global Wind Organization (GWO) Training
              Provider, delivering internationally recognized safety and
              technical training programs for the wind energy sector. Our
              training is designed to meet global standards and prepare
              technicians for real-world wind turbine operations, installation,
              and maintenance.
            </p>
          </div>

          <div className="flex min-h-56 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#329ACD] to-[#3AB257] p-8 text-center text-white">
            <span className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
              <Wind className="h-9 w-9" aria-hidden="true" />
            </span>
            <span className="text-4xl font-bold tracking-wide">GWO</span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-[0.14em]">
              Global Wind Organisation
            </span>
            <span className="mt-4 text-sm">Certified Training Provider</span>
          </div>
        </section>

        <section className="bg-[#F6F8F9]">
          <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="mb-7">
              <h2 className="mt-1 text-2xl font-bold text-[#293E52] sm:text-3xl">
                GWO Training Modules
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {trainingModules.map(({ title, courses, Icon }) => (
                <article
                  key={title}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E8F5EC] text-[#329ACD]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-[#293E52]">{title}</h3>
                  <ul className="mt-5 space-y-3">
                    {courses.map((course) => (
                      <li
                        key={course}
                        className="flex items-start gap-2 text-sm text-[#293E52]"
                      >
                        <CircleCheck
                          className="mt-0.5 h-5 w-5 shrink-0 text-[#3AB257]"
                          aria-hidden="true"
                        />
                        <span className="text-[16px] text-[#293E52]">{course}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mb-7">
            <h2 className="mt-1 text-2xl font-bold text-[#293E52] sm:text-3xl">
              Our Track Record Includes
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {trackRecord.map(({ label, description, Icon }) => (
              <article
                key={label}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold uppercase tracking-wider text-[#329ACD]">
                    {label}
                  </span>
                  <Icon
                    className="h-5 w-5 text-[#3AB257]"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-5 text-lg font-medium leading-relaxed text-[#293E52]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#293E52]">
          <div className="mx-auto max-w-[1400px] px-4 py-10 text-white sm:px-6 lg:px-8 lg:py-12">
            <h2 className="text-xl font-bold sm:text-2xl">
              Trusted GWO Training Provider
            </h2>
            <p className="mt-3 max-w-5xl text-sm leading-relaxed text-white/85 sm:text-base">
              Expert instructors for all GWO modules (BST, BTT, ART) with
              training available in major languages across India, supported by
              convenient locations, proven success, and fully customized
              learning solutions.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
