"use client";

const IMAGE_PATH = "/images/csr/";

const galleryImage = {
  src: `${IMAGE_PATH}gallery.webp`,
  alt: "DLI and Speed Team Group corporate social responsibility activities and community initiatives",
};

const companies = [
  {
    name: "Speed MecoTronix Pvt Ltd",
    website: "https://www.speedmtx.com",
    websiteLabel: "www.speedmtx.com",
    image: `${IMAGE_PATH}mecotronix.webp`,
    description:
      "Develops advanced lifting technology, manufactures components, and delivers R&D-driven solutions for Wind and Solar projects.",
  },
  {
    name: "GWind Services Pvt Ltd",
    website: "https://www.gwind.in",
    websiteLabel: "www.gwind.in",
    image: `${IMAGE_PATH}gw.webp`,
    description:
      "Provides O&M support for multi-brand WTGs, supplies essential spares, and maximizes the operational lifespan of WTGs.",
  },
  {
    name: "WandSe Solutions India Pvt Ltd",
    website: "https://www.wandse.com",
    websiteLabel: "www.wandse.com",
    image: `${IMAGE_PATH}wandse.webp`,
    description:
      "Supplies Wind and Solar spares and delivers expert repair and refurbishment of key WTG components.",
  },
];

export default function CorporateSocialResponsibility() {
  return (
    <section className="relative w-full overflow-hidden border-t border-[#293E52]/10 bg-[#F4F8FA]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="mx-auto w-full max-w-[1400px] px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        {/* CSR */}
        <div className="mb-14 md:mb-20">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#3AB257] sm:text-sm">
                Community & Care
              </p>
              <h2 className="text-2xl font-bold leading-tight text-[#293E52] sm:text-3xl md:text-4xl">
                Corporate Social Responsibility
              </h2>
              <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#329ACD] to-[#3AB257]" />
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#293E52]/80 sm:text-base md:text-lg">
                We are committed to giving back to the communities we work in. Through our CSR initiatives, we support local development, environmental care, education, and safety awareness. Our activities aim to create a positive social impact and contribute to a sustainable future for the next generation.
              </p>
            </div>

            <div className="flex h-full items-center">
              <img
                src={galleryImage.src}
                alt={galleryImage.alt}
                className="h-auto max-h-[360px] w-full rounded-2xl object-contain sm:max-h-[420px] md:max-h-[460px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Group companies */}
        <div>
          <div className="mb-8 md:mb-12 md:flex md:items-end md:justify-between md:gap-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#329ACD] sm:text-sm">
                Our Network
              </p>
              <h2 className="text-2xl font-bold leading-tight text-[#293E52] sm:text-3xl md:text-4xl">
                Our Group of Companies
              </h2>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#293E52]/80 sm:text-base md:mt-0 md:text-right">
              End-to-end renewable energy solutions including R&amp;D, advanced lifting technology, turnkey Wind/Solar/BESS projects, O&amp;M for WTGs, multi-brand spare supply, and refurbishment of key wind turbine components.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3 md:gap-x-10 md:gap-y-12">
            {companies.map((company, index) => (
              <article key={company.name} className="group relative flex h-full flex-col pt-6">
                <span className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-[#329ACD]/50 via-[#3AB257]/40 to-transparent" />
                <span className="mb-4 text-xs font-semibold tracking-widest text-[#293E52]/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="mb-5 flex h-20 items-center sm:h-24">
                  <img
                    src={company.image}
                    alt={`${company.name} logo`}
                    className="h-full w-auto max-w-full object-contain object-left transition duration-300 group-hover:translate-x-1"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-base font-semibold text-[#293E52] sm:text-lg">
                  {company.name}
                </h3>
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex w-fit items-center gap-1 text-sm font-medium text-[#329ACD] transition hover:text-[#3AB257] sm:text-base"
                >
                  {company.websiteLabel}
                  <span aria-hidden="true">↗</span>
                </a>
                <p className="mt-3 text-sm leading-relaxed text-[#293E52]/80 sm:text-base">
                  {company.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
