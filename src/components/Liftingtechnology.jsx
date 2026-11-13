"use client"

import { useId, useState } from "react"
import {
  ChevronDown, Wind, GraduationCap, Wrench, RefreshCw, HardHat,
  Truck, Users, Replace, Construction, ShieldCheck, Award, CheckCircle2,
  Mountain, PackageCheck, Settings, MoveVertical,
  Maximize2, Weight, Zap, RotateCcw, Cog
} from "lucide-react"

// DLI brochure pages 7 to 18 only.
// Images are served from public/images/liftingtechnology/.

const IMG = "/images/liftingtechnology/"

// Blue-to-green gradient icons without a background.
function GradientIcon({ icon: Icon, size = 28, className = "" }) {
  const gradientId = useId().replace(/:/g, "")
  if (!Icon) return null

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#329ACD" />
          <stop offset="100%" stopColor="#3AB257" />
        </linearGradient>
      </defs>
      <Icon
        x={4}
        y={4}
        width={40}
        height={40}
        stroke={`url(#${gradientId})`}
        strokeWidth={2.5}
        fill="none"
      />
    </svg>
  )
}

function SectionHeading({ children, eyebrow }) {
  return (
    <div className="mb-5 md:mb-8">
      {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#3AB257] sm:text-sm">{eyebrow}</p>}
      <h2 className="text-xl font-bold text-[#293E52] sm:text-2xl md:text-3xl">{children}</h2>
    </div>
  )
}

function Photo({ src, alt, className = "", caption }) {
  const hasFit = /\bobject-(cover|contain|fill|none|scale-down)\b/.test(className)
  return (
    <figure className="w-full overflow-hidden rounded-lg">
      <img
        src={`${IMG}${src}`}
        alt={alt}
        loading="lazy"
        className={`block w-full rounded-lg ${hasFit ? "" : "object-cover"} ${className}`.trim()}
      />
      {caption && <figcaption className="mt-2 text-center text-xs font-medium text-[#293E52]/80 sm:text-sm">{caption}</figcaption>}
    </figure>
  )
}

function CopyBlock({ title, children, icon }) {
  return (
    <div className="space-y-2 border-b border-[#CDCDCD] pb-4 last:border-b-0">
      <div className="flex items-center gap-3">
        {icon && <GradientIcon icon={icon} size={28} />}
        <h3 className="text-base font-semibold text-[#293E52] sm:text-lg">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-[#293E52]/80 sm:text-base">{children}</p>
    </div>
  )
}

function SplitSection({ title, blocks, photos, imageFirst = false, eyebrow }) {
  return (
    <section className="md:mb-16 mb-8">
      <SectionHeading eyebrow={eyebrow}>{title}</SectionHeading>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
        <div className={`space-y-5 ${imageFirst ? "md:order-2" : ""}`}>
          {blocks.map((block, index) => <CopyBlock key={index} title={block.title} icon={block.icon}>{block.description}</CopyBlock>)}
        </div>
        <div className={`grid gap-4 ${imageFirst ? "md:order-1" : ""}`}>
          {photos.map((photo, index) => <Photo key={index} {...photo} className={photo.className || "h-56 md:h-64 w-full"} />)}
        </div>
      </div>
    </section>
  )
}

function StatGrid({ items, columns = 3 }) {
  return (
    <div className={`grid grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"} gap-3 md:gap-5`}>
      {items.map((item, index) => (
        <div key={index} className="rounded-lg border border-[#CDCDCD] p-4 text-center md:p-5">
          <div className="flex items-center justify-center gap-2">
            {item.icon && <GradientIcon icon={item.icon} size={26} />}
            <span className="text-2xl font-bold text-[#3AB257] md:text-3xl">{item.value}</span>
          </div>
          <p className="mt-2 text-xs font-medium text-[#293E52] sm:text-sm">{item.label}</p>
        </div>
      ))}
    </div>
  )
}

const liftingMethods = [
  {
    title: "Advanced DLI Crane Systems",
    icon: Construction,
    description: "Engineered Derrick systems designed for major component replacement with high precision, faster execution, reduced cost, and minimal site footprint. Ideal for locations where conventional cranes are not feasible.",
  },
  {
    title: "Crane-less Lifting Solutions",
    icon: Wind,
    description: "Specialized lifting methods that eliminate the need for large cranes, enabling safe, efficient replacement of blades, generators, gearboxes, and other WTG components while keeping agricultural land and site surroundings undisturbed.",
  },
  {
    title: "Conventional Crane Method",
    icon: Truck,
    description: "Conventional crane-based lifting for specific turbines or site conditions requiring large-capacity cranes, ensuring flexibility and compatibility across multi-brand WTG platforms.",
  },
]

const patentedBenefits = [
  {
    title: "Patented Technology",
    icon: Award,
    description: "DLI is the first company in Asia to innovate and develop this advanced crane-less Derrick lifting technology. The system is patented by the Indian Patent Office under Patent No. 202241060727.",
  },
  {
    title: "CE Certified",
    icon: ShieldCheck,
    description: "DLI's lifting technology is CE Mark Certified by TUV Nord, meeting European safety and performance standards for engineered reliability, structural integrity, and field operation.",
  },
  {
    title: "Proven Technology",
    icon: CheckCircle2,
    description: "Gearbox replacements have been completed on Gamesa G97, Senvion K110, and M120 turbine models. For new models, the engineering team is prepared to develop, validate, and execute a lifting process within one month.",
  },
  {
    title: "Terrain Is Not a Limitation",
    icon: Mountain,
    description: "The compact system operates across mountainous terrain, agricultural land, and rural areas requiring only a suitable route for 40 ft container movement, without large-crane access or heavy site preparation.",
  },
]

const craneBenefits = [
  {
    title: "Minimal Transportation",
    icon: Truck,
    description: "Efficient logistics require only two 40 ft trailers, reducing mobilization cost, simplifying site access, and minimizing environmental impact.",
  },
  {
    title: "Certified & Trained Workforce",
    icon: ShieldCheck,
    description: "Operations are executed by certified professionals trained in GWO and advanced safety procedures, supported by 100% certified PPE usage.",
  },
  {
    title: "Direct Loading & Unloading",
    icon: PackageCheck,
    description: "Equipment is loaded and unloaded directly from the container for faster mobilization, reduced handling, and safer transportation.",
  },
  {
    title: "Easy Nacelle Installation",
    icon: Settings,
    description: "Structured SOPs and engineered lifting methods enable quick, safe installation at the nacelle using DLI's own lifting systems.",
  },
]

const hoists = [
  { model: "BeeMa 30T", capacity: "30 TON", wind: "18 m/s", radius: "3650 mm", height: "150 m", photo: "beema-30t-photo.png" },
  { model: "BeeMa 20T", capacity: "20 TON", wind: "18 m/s", radius: "3200 mm", height: "150 m", photo: "beema-20t-photo.png" },
  { model: "BeeMa 10T", capacity: "10 TON", wind: "18 m/s", radius: "2550 mm", height: "150 m", photo: "beema-10t-photo.png" },
  { model: "BeeMa 6T", capacity: "6 TON", wind: "18 m/s", radius: "3400 mm", height: "150 m", photo: "beema-6t-photo.png" },
]

function HoistCard({ hoist }) {
  return (
    <article className="overflow-hidden rounded-lg border border-[#CDCDCD] bg-white">
      <Photo src={hoist.photo} alt={`${hoist.model} lifting hoist operating on a wind turbine`} className="h-52 sm:h-64 w-full object-cover" />
      <div className="p-4 md:p-5">
        <h3 className="mb-1 text-lg font-bold text-[#293E52] sm:text-xl md:text-2xl">{hoist.model}</h3>
        <p className="mb-4 text-sm text-[#293E52]/80 sm:text-base">{hoist.model} Lifting Hoist</p>
        <div className="grid grid-cols-2 gap-3">
          {[
            ["Safe Working Load", hoist.capacity, Weight],
            ["Wind Speed", hoist.wind, Wind],
            ["Max Working Radius", hoist.radius, Maximize2],
            ["Max Working Height", hoist.height, MoveVertical],
          ].map(([label, value, Icon]) => (
            <div key={label} className="rounded-lg bg-[#F5F5F5] px-3 py-3">
              <div className="mb-2 flex items-center gap-2">
                <GradientIcon icon={Icon} size={22} />
                <p className="text-xs text-[#293E52]/70 sm:text-sm">{label}</p>
              </div>
              <p className="mt-1 text-sm font-bold text-[#293E52] sm:text-base">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

function Gallery({ title, items }) {
  return (
    <section className="md:mb-16 mb-8">
      <SectionHeading>{title}</SectionHeading>
      <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
        {items.map((item) => (
          <div key={item.caption} className="space-y-3">
            <Photo src={item.src} alt={item.caption} className="h-56 md:h-72 w-full object-cover" />
            <p className="text-center text-sm font-semibold text-[#293E52] sm:text-base">{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const achievements = [
  { value: "475+", label: "Generator Replacements", icon: Zap },
  { value: "450+", label: "Single Blade Replacements", icon: Wind },
  { value: "150+", label: "TA Pin Replacements", icon: Wrench },
  { value: "180+", label: "Blade Bearing Replacements", icon: Cog },
  { value: "25+", label: "Transformer Replacements", icon: Zap },
  { value: "70+", label: "Resistor Box Replacements", icon: Settings },
  { value: "200+", label: "Gearbox Replacements", icon: Cog },
  { value: "50+", label: "Rotor De & Re-Erections", icon: RotateCcw },
  { value: "20+", label: "HSS Replacements", icon: Wrench },
]

const craneAchievements = [
  { value: "40+", label: "Rotor De & Re-Erections", icon: RotateCcw },
  { value: "40+", label: "Gearbox Replacements", icon: Cog },
  { value: "2+", label: "Fired Nacelle Replacements", icon: ShieldCheck },
  { value: "5+", label: "Transformer Replacements", icon: Zap },
  { value: "5+", label: "Generator Replacements", icon: Zap },
  { value: "5+", label: "Main Bearing Replacements", icon: Cog },
]

function ReferenceDiagram({ title, image, alt, note }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <section className="md:mb-16 mb-8">
      <SectionHeading>{title}</SectionHeading>
      <p className="mb-4 text-sm leading-relaxed text-[#293E52]/80 sm:text-base">{note}</p>
      <div className="rounded-lg border border-[#CDCDCD] p-3 md:p-6 bg-white">
        <img src={`${IMG}${image}`} alt={alt} loading="lazy" className="mx-auto block w-full h-auto object-contain max-h-[620px]" />
      </div>
      <button type="button" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}
        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#3AB257] hover:underline sm:text-base">
        {expanded ? "Hide diagram details" : "View diagram details"}
        <ChevronDown size={18} className={expanded ? "rotate-180" : ""} />
      </button>
      {expanded && <p className="mt-3 text-sm leading-relaxed text-[#293E52]/80 sm:text-base">{alt}. The colour-coded components and model-level compatibility shown in the original brochure artwork have been retained in this diagram.</p>}
    </section>
  )
}

function DLIServicePages() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 text-[#293E52]">
      {/* BROCHURE PAGE 7: Lifting technologies */}
      <section className="md:mb-16 mb-8">
        <SectionHeading>Lifting Technology</SectionHeading>
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {liftingMethods.map((method) => (
            <article key={method.title} className="flex h-full flex-col rounded-lg border border-[#329ACD]/20 bg-gradient-to-br from-[#EEF7FC] to-[#EDF9F1] p-5 shadow-sm transition-shadow hover:shadow-md md:p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-[#329ACD]/20">
                  <GradientIcon icon={method.icon} size={26} />
                </span>
                <h3 className="text-base font-semibold text-[#293E52] sm:text-lg">{method.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#293E52]/80 sm:text-base">{method.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* BROCHURE PAGE 8: Product introduction */}
      <section className="md:mb-16 mb-8">
        <div className="grid items-center gap-6 rounded-xl border border-[#CDCDCD] bg-gradient-to-r from-[#F3F9FC] to-white p-5 md:grid-cols-2 md:gap-8 md:p-8 lg:p-10">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#3AB257] sm:text-sm">Introduced in 2024</p>
            <h2 className="mb-4 text-xl font-bold text-[#293E52] sm:text-2xl md:text-3xl">DLI BeeMa Lifting Hoist</h2>
            <p className="text-sm leading-relaxed text-[#293E52]/80 sm:text-base lg:text-lg">
              2024 marked a major milestone for DLI, as years of rigorous testing, engineering refinement, and field validation led to the launch of its breakthrough Derrick Lifter crane system. This technology is designed to transform major component replacement in the wind energy sector.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-lg bg-white p-3 shadow-sm ring-1 ring-[#CDCDCD]/50 md:p-4">
            <img
              src={`${IMG}beema-system.png`}
              alt="DLI BeeMa nacelle-mounted lifting hoist engineering illustration"
              loading="lazy"
              className="h-auto max-h-[420px] w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* BROCHURE PAGE 9: Technology benefits */}
      <section className="md:mb-16 mb-8">
        <SectionHeading>Patented & Certified Technology</SectionHeading>
        <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-8">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            {patentedBenefits.map((item) => (
              <div key={item.title} className="relative flex h-full flex-col overflow-hidden rounded-lg border border-[#CDCDCD] bg-gradient-to-r from-[#F3F9FC] to-white p-4 shadow-sm md:p-5">
                <span className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#329ACD] to-[#3AB257]" />
                <div className="mb-3 flex items-center gap-3 pl-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-[#CDCDCD]/60">
                    <GradientIcon icon={item.icon} size={22} />
                  </span>
                  <h3 className="text-base font-semibold text-[#293E52] sm:text-lg">{item.title}</h3>
                </div>
                <p className="pl-3 text-sm leading-relaxed text-[#293E52]/80 sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="grid h-full grid-cols-2 auto-rows-fr gap-4">
            {[
              { src: "terrain-field.png", alt: "DLI system on a wind turbine viewed from above", className: "col-span-2 min-h-[14rem] md:min-h-0" },
              { src: "nacelle-operation.png", alt: "DLI BeeMa lifting equipment mounted on turbine nacelle", className: "min-h-[11rem] md:min-h-0" },
              { src: "landscape-operation.png", alt: "DLI installation operating in challenging terrain", className: "min-h-[11rem] md:min-h-0" },
            ].map((photo) => (
              <figure key={photo.src} className={`h-full w-full overflow-hidden rounded-lg ${photo.className}`}>
                <img
                  src={`${IMG}${photo.src}`}
                  alt={photo.alt}
                  loading="lazy"
                  className="block h-full w-full rounded-lg object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* BROCHURE PAGE 10: Deployment and operations */}
      <section className="md:mb-16 mb-8">
        <SectionHeading>DLI Crane Lifting</SectionHeading>
        <div className="grid items-stretch gap-6 lg:grid-cols-2 md:gap-8">
          <div className="grid h-full grid-cols-2 auto-rows-fr gap-3 md:gap-4">
            {[
              { src: "transport-trailer.png", alt: "DLI transport trailer on site" },
              { src: "workforce.png", alt: "DLI trained installation workforce" },
              { src: "unloading.png", alt: "DLI container loading and unloading" },
              { src: "nacelle-install.png", alt: "DLI hoist installed on turbine nacelle" },
            ].map((photo) => (
              <figure key={photo.src} className="h-full w-full overflow-hidden rounded-lg">
                <img
                  src={`${IMG}${photo.src}`}
                  alt={photo.alt}
                  loading="lazy"
                  className="block h-full min-h-[11rem] w-full rounded-lg object-cover sm:min-h-[13rem] lg:min-h-0"
                />
              </figure>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {craneBenefits.map((item) => (
              <div key={item.title} className="rounded-lg border border-[#CDCDCD] bg-white p-4 md:p-5">
                <div className="mb-3 flex items-center gap-3">
                  <GradientIcon icon={item.icon} size={28} />
                  <h3 className="text-base font-semibold text-[#293E52] sm:text-lg">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-[#293E52]/80 sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BROCHURE PAGE 11: Full-page equipment visual */}
      <section className="md:mb-16 mb-8">
        <SectionHeading>BeeMa Crane System in Action</SectionHeading>
        <Photo src="patented-system.png" alt="Patented CE-marked DLI lifting system mounted on wind turbine" className="h-auto w-full object-contain" />
      </section>

      {/* BROCHURE PAGES 12 & 13: Four equipment variants */}
      <section className="md:mb-16 mb-8">
        <SectionHeading>BeeMa Lifting Hoist Models</SectionHeading>
        <p className="mb-6 text-sm text-[#293E52]/80 sm:text-base">Explore the BeeMa 30T, 20T, 10T, and 6T lifting hoist models and their working specifications.</p>
        <div className="grid md:grid-cols-2 gap-5 md:gap-8">
          {hoists.map((hoist) => <HoistCard key={hoist.model} hoist={hoist} />)}
        </div>
      </section>

      {/* BROCHURE PAGE 14: Craneless MCR and track record */}
      <section className="md:mb-16 mb-8">
        <SectionHeading>Craneless Lifting</SectionHeading>
        <p className="mb-6 max-w-5xl text-sm leading-relaxed text-[#293E52]/80 sm:text-base lg:text-lg">
          Speed Team introduced crane-less major component replacement (MCR) technology in 2011. What began with smaller 225 kW turbines evolved into a solution for modern multi-MW wind turbine generators, reducing operational costs and downtime while supporting more than a decade of field operations.
        </p>
        <StatGrid items={achievements} />
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-6">
          <Photo src="blade-bearing.png" alt="Blade bearing replacement" caption="Blade Bearing Replacement" className="h-56 md:h-64 w-full object-cover" />
          <Photo src="generator-replacement.png" alt="Generator replacement" caption="Generator Replacement" className="h-56 md:h-64 w-full object-cover" />
          <Photo src="main-shaft.png" alt="Main shaft replacement" caption="Main Shaft Replacement" className="h-56 md:h-64 w-full object-cover" />
        </div>
      </section>

      {/* BROCHURE PAGE 15: Three replacement visuals */}
      <Gallery title="Craneless Component Replacement" items={[
        { src: "gearbox-replacement.png", caption: "Gearbox Replacement" },
        { src: "single-blade.png", caption: "Single Blade Replacement" },
        { src: "transformer-replacement.png", caption: "Transformer Replacement" },
      ]} />

      {/* BROCHURE PAGE 16: OEM by component diagram */}
      <ReferenceDiagram
        title="Craneless Lifting Solutions"
        image="Craneless-Lifting-Solutions.webp"
        alt="Craneless lifting OEM/platform compatibility matrix covering Gamesa, GE, Senvion, Suzlon, Vestas, NEG Micon, Inox, Envision, Regen and LSML, with gearbox, generator, main shaft, transformer and single blade bearing pictograms"
        note="OEM / platform compatibility for crane-less major component replacement. The original component-by-platform illustration is preserved to retain the source's colour-coded statuses."
      />

      {/* BROCHURE PAGE 17: BeeMa crane compatibility diagram */}
      <ReferenceDiagram
        title="DLI BeeMa Crane Lifting Service"
        image="DLI-BeeMa-CraneLifting-Services.webp"
        alt="BeeMa 20T and 30T crane lifting service model compatibility chart with rotor, single blade, available and under-development component legend"
        note="BeeMa crane lifting service across turbine models and capacities. The source chart distinguishes components that can be changed now from those under development."
      />

      {/* BROCHURE PAGE 18: Conventional crane services */}
      <section className="md:mb-16 mb-8">
        <SectionHeading>Crane Lifting Services</SectionHeading>
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-8">
          <figure className="w-full overflow-hidden rounded-lg">
            <img
              src={`${IMG}rotor-erection.png`}
              alt="Conventional crane performing rotor de-erection and re-erection"
              loading="lazy"
              className="block h-[320px] w-full rounded-lg object-cover sm:h-[400px] md:h-[520px] lg:h-[560px]"
            />
            <figcaption className="mt-2 text-center text-xs font-medium text-[#293E52]/80 sm:text-sm">Rotor De & Re-Erection</figcaption>
          </figure>
          <div>
            <p className="mb-6 text-sm leading-relaxed text-[#293E52]/80 sm:text-base">
              Conventional cranes are used to replace major failed components, following an approach similar to turbine installation for safe and efficient execution. DLI partners with established crane service providers across India for dependable and timely replacement solutions.
            </p>
            <StatGrid items={craneAchievements} />
            <h3 className="mb-3 mt-8 text-lg font-bold text-[#293E52] sm:text-xl md:text-2xl">Specialized Recovery Capabilities</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Damaged rotor and blade replacement", icon: Wind },
                { label: "Run-away turbine recovery", icon: RotateCcw },
                { label: "Fired turbine recovery and component replacement", icon: ShieldCheck },
                { label: "T1, T2, T3, T4, T5 component exchange tower replacements", icon: Construction },
                { label: "Handling main bearing exchange", icon: Cog },
                { label: "Rotor and unbalanced rotor handling", icon: Wrench },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 border-b border-[#CDCDCD] pb-3 text-sm text-[#293E52]/80 sm:text-base">
                  <GradientIcon icon={item.icon} size={24} className="mt-0.5" />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}


export default function LiftingTechnology() {
  return <DLIServicePages />
}
