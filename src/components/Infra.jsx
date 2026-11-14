
"use client";

const IMAGE_PATH = "/images/infrastructure/";

const infrastructureSections = [
  {
    title: "R&D Center",
    image: `${IMAGE_PATH}rd-center.png`,
    alt: "DLI Research and Development Center",
    paragraphs: [
      "Proprietary Lifting Technology - WTG: Development of DLI Cranes and Crane-less Systems for WTG projects.",
      "Structural Design & Fabrication: Creation of jigs, fixtures, and customized tools to optimize installation and maintenance.",
    ],
  },
  {
    title: "Store & Warehouse & Container",
    image: `${IMAGE_PATH}warehouse.png`,
    alt: "DLI Warehouse and Container Facilities",
    paragraphs: [
      "Tenkasi (TN): Central warehouse and spare parts hub.",
      "Telagi (KA): Regional storage for rapid deployment.",
      "Gadhsisa (GJ): Strategic western India support facility.",
      "Mobile units with dedicated trucks for flexible transport and on-site availability across India.",
    ],
  },
  {
    title: "Skilled Teams Across India",
    image: `${IMAGE_PATH}skilled-teams.png`,
    alt: "DLI Skilled Technical Teams",
    paragraphs: [
      "Experienced teams across multiple states for WTG installation, de-erection, re-erection, and O&M. Trained in multi-brand turbines, proprietary lifting systems, and strict safety practices.",
    ],
  },
  {
    title: "Structure, Tools & Jig Availability",
    image: `${IMAGE_PATH}tools-jigs.png`,
    alt: "DLI Lifting Structures, Tools and Jigs",
    paragraphs: [
      "Multi-OEM structures, tools, and jigs available for major component replacement, securely maintained and stored at our store and warehouse facilities.",
    ],
  },
];

function InfrastructureItem({ title, image, alt, paragraphs, index }) {
  const reverse = index % 2 !== 0;

  return (
    <article className="overflow-hidden rounded-xl border border-[#CDCDCD] bg-white shadow-sm">
      <div className={`grid grid-cols-1 md:grid-cols-2 ${reverse ? "md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1" : ""}`}>
        {/* Content */}
        <div className="flex flex-col justify-center p-5 sm:p-6 md:p-8 lg:p-10">
          <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#3AB257]/10 text-sm font-semibold text-[#3AB257]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mb-4 text-lg font-semibold leading-snug text-[#293E52] md:text-xl lg:text-2xl">
            {title}
          </h3>
          <div className="space-y-3 text-sm leading-relaxed text-[#293E52]/80 md:text-base">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="border-l-2 border-[#3AB257]/40 pl-3">{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex min-h-[240px] items-center justify-center bg-white p-4 sm:min-h-[300px] md:min-h-full md:p-6 lg:p-8">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="h-auto max-h-[320px] w-full object-contain md:max-h-[380px]"
          />
        </div>
      </div>
    </article>
  );
}

export default function Infra() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6 md:py-12 lg:px-8">
      <div className="mb-8 md:mb-12">
        <h2 className="text-xl font-bold text-[#293E52] sm:text-2xl md:text-3xl">
          Infrastructure & Facilities
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-[#293E52]/80 sm:text-base">
          Our facilities, assets, and teams supporting wind energy projects across India.
        </p>
      </div>

      <div className="space-y-6 md:space-y-8">
        {infrastructureSections.map((section, index) => (
          <InfrastructureItem key={section.title} index={index} {...section} />
        ))}
      </div>
    </section>
  );
}
