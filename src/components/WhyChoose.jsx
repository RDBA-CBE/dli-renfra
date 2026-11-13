

"use client"

export default function WhyChoose() {
  const expertiseItems = [
  {
    title: "MULTI-BRAND EXPERTISE",
    description:
      "Experience across multiple WTG platforms and major components.",
  },
  {
    title: "HIGH PRECISION & SAFETY",
    description:
      "Engineered lifting procedures with strict safety controls on every project.",
  },
  {
    title: "PATENTED CERTIFIED",
    description:
      "Patented, certified lifting solutions designed for safe, high-performance WTG component handling.",
  },
  {
    title: "SKILLED WORKFORCE",
    description:
      "GWO-trained technicians, experienced engineers, and certified manpower.",
  },
  {
    title: "EFFICIENT EXECUTION",
    description:
      "Optimized processes ensuring faster turnaround and minimal downtime.",
  },
  {
    title: "ADVANCED TECHNOLOGY",
    description:
      "Proprietary Derrick crane and crane-less solutions enabling safe, fast, and cost-efficient operations.",
  },
  {
    title: "INNOVATION FOCUSED",
    description:
      "Continuous development of customized lifting tools, jigs & fixtures.",
  },
  {
    title: "END-TO-END CAPABILITY",
    description:
      "Turnkey solutions across WTG projects and services.",
  },
];

  return (
    <section className="w-full bg-white">
      {/* Header Section */}
      {/* <div className="px-4 py-12 ">
        <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#293E52] mb-4 text-balance">
              Differentiating Factor
            </h1>
            <p className="text-sm sm:text-base text-[#293E52]text-balance max-w-2xl mx-auto">
              Key innovations that set DLI apart in the wind turbine maintenance and lifting industry
            </p>
          </div>
        </div>
      </div> */}

      {/* Content Section */}
      <div className = "mx-auto max-w-[1400px] px-4 lg:px-0">
      <div className="md:mb-16 mb-6">
      {/* <h2 className="text-lg md:text-3xl font-bold text-[#293E52] mb-3">{title}</h2> */}
      <div className="grid lg:grid-cols-2 gap-8 ">
        <div className="space-y-3 flex flex-col justify-between ">
          {expertiseItems.map((item, idx) => (
            <div key={idx} className="space-y-2 border-b pb-3 border-[#CDCDCD] font-medium">
              <h3 className="md:text-lg text-sm font-semibold text-[#293E52]">{item.title}</h3>
              <p className="text-sm text-[#293E52CC]">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center h-75 sm:h-84 lg:h-full rounded-lg">
          <img src="/images/rd-bg.png" alt="R&D Section" className="w-full h-full object-cover rounded-lg " />
        </div>
      </div>
    </div>
    </div>
    </section>
  )
}

