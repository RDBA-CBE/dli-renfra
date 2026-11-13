"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

// R&D Section Component
function RDSection({ title, items }) {
  return (
    <div className="md:mb-16 mb-6">
      <h2 className="text-lg md:text-3xl font-bold text-[#293E52] mb-3">{title}</h2>
      <div className="grid md:grid-cols-2 gap-8 ">
        <div className="space-y-3 flex flex-col justify-between ">
          {items.map((item, idx) => (
            <div key={idx} className="space-y-2 border-b pb-3 border-[#CDCDCD] font-medium">
              <h3 className="md:text-lg text-sm font-semibold text-[#293E52]">{item.title}</h3>
              <p className="text-sm text-[#293E52CC]">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center h-64 sm:h-98 rounded-lg">
          <img src="/images/rd-bg.png" alt="R&D Section" className="w-full h-full object-cover rounded-lg " />
        </div>
      </div>
    </div>
  )
}

// Factory Section Component
function FactorySection({ title, content, image, content1 }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const previewLength = 200

  return (
    <div className="md:mb-12 mb-6 -mx-4 sm:-mx-6 lg:-mx-8">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-lg md:text-3xl font-bold text-[#293E52] md:mb-8 mb-4 pl-4">{title}</h2>

        <div className="grid md:grid-cols-2 md:gap-8 gap-6 items-start">
          <div className="min-h-64 md:min-h-70 flex items-center justify-center overflow-hidden rounded-lg">
            <img
              src="/images/factory.png"
              alt="Factory Section"
              className="w-full h-[350px] object-cover rounded-lg p-4"
            />
          </div>

          <div className="space-y-4">
            <div className="text-sm md:text-base text-[#293E52]/80 leading-relaxed px-4">
              {/* Mobile: Show truncated text with read more/less */}
              <span className="md:hidden">
                {isExpanded ? (
                  <>
                    {content}
                    <br />
                    <br />
                    {content1}
                  </>
                ) : (
                  `${content.slice(0, previewLength)}...`
                )}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#3AB257] font-semibold ml-1 hover:underline"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </span>
              {/* Desktop: Show full text */}
              <span className="hidden md:block">
                {content}
                <br />
                <br />
                {content1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Why Clients Trust Component
function WhyClientsSection({ title, items }) {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 py-8 lg:py-12">
      <h2 className="text-xl md:text-3xl font-bold text-[#293E52] mb-12 text-center">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {/* Circular container with gradient border */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-4 drop-shadow-lg">
              {/* Outer gradient border */}
              <div
                className="absolute inset-0 rounded-full shadow-lg"
                style={{
                  background: "linear-gradient(180deg, #329ACD 0%, #329ACD 50%, #3AB257 50%, #3AB257 100%)",
                  padding: "3px",
                }}
              >
                {/* White inner circle */}
                <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center px-3">
                  {/* Icon */}
                  <div className="w-12 h-12 md:w-12 md:h-12 flex items-center justify-center mb-2">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title inside circle */}
                  <h3 className="font-semibold text-[#293E52] text-xs md:text-sm text-center leading-tight w-10/12">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SalientFeaturesSection({ title, items }) {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const itemsToDisplay = showAll ? items : items.slice(0, 4)
  const hasMoreItems = items.length > 4

  return (
    <div className="">
      <h2 className="text-lg md:text-3xl font-bold text-[#293E52] mb-8">{title}</h2>
      <div className="space-y-3">
        {itemsToDisplay.map((item, idx) => (
          <div key={idx} className="border border-[#CDCDCD] rounded-lg overflow-hidden">
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full flex items-center justify-between gap-3 p-4 hover:bg-[#F5F5F5] transition-colors"
            >
              <div className="flex items-start gap-3 text-left">
                <img src="/images/check.svg" alt="tick" className="w-4 h-4 mt-1 flex-shrink-0" />
                <p className="text-sm font-medium text-[#293E52]">{item.title}</p>
              </div>
              <ChevronDown
                size={20}
                className={`flex-shrink-0 text-[#293E52] transition-transform duration-300 ${
                  expandedIndex === idx ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Accordion Content */}
            {expandedIndex === idx && (
              <div className="px-4 py-3 bg-[#F9F9F9] border-t border-[#CDCDCD] text-sm text-[#293E52]/80">
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {hasMoreItems && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 px-4 py-2 text-[#3AB257] font-semibold hover:underline transition-colors"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  )
}

function IntroParagraph({ text }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const previewLength = 150

  return (
    <div className="md:mb-10 mb-6">
      <p className="text-sm md:text-base lg:text-lg text-[#293E52] leading-relaxed text-center max-w-5xl mx-auto">
        {/* Mobile: Show truncated text with read more/less */}
        <span className="md:hidden">
          {isExpanded ? text : `${text.slice(0, previewLength)}...`}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#3AB257] font-semibold ml-1 hover:underline"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </span>
        {/* Desktop: Show full text */}
        <span className="hidden md:inline">{text}</span>
      </p>
    </div>
  )
}

export default function PatentedTechnologies() {
  const rdItems = [
    {
      title: "Innovation at the Core",
      description:
        "Driven by creativity and problem-solving, our R&D team continuously develops smarter and safer crane systems tailored to evolving industry needs.",
    },
    {
      title: "Our First Breakthrough",
      description:
        "The ST-DLI-2000 marked our first milestone — a fully in-house developed crane prototype designed with limited resources but limitless determination.",
    },
    {
      title: "Engineering Precision",
      description:
        "From advanced software modeling to real-world testing, every DLI crane is built to deliver unmatched accuracy, strength, and reliability in any environment.",
    },
    {
      title: "Next - Gen Development",
      description:
        "Our team is shaping the future of lifting technology through automation, intelligent control systems, and globally patented innovations.",
    },
  ]
  const introText =
    "At Derrick Lifters India (DLI), innovation drives every solution we create. Our patented lifting technologies are designed to enhance safety, efficiency, and precision in wind turbine installations and maintenance. Each patent reflects our commitment to engineering excellence and industry advancement."
  const factoryContent =
    "The Derrick structures are designed, engineered, manufactured and maintained at our fully equipped factory located in Tenkasi, Tamil Nadu. This is a highly specialized factory set up that  blend heavy engineering with precision fabrication.  Working closely with the R&D team, our systems are designed to be highly adaptable and can  be configured to suit different wind turbine models and site conditions."
  const factoryContent1 =
    "With a skilled workforce of more than 50, the fabrication, machining and assembly process are  done in-house.   Each derrick crane system undergoes rigorous testing to ensure it meets safety standards and  performance specifications. This includes load tests, functional checks, and a thorough  inspection of all welds and connections.  Inspite of its huge final structure, the DLI systems are modular and can reach the wind farm  sites in just 2 container trucks and are assembled on site, making it a convenient solution for the  maintenance team of the farms."
  const trustReasons = [
    { title: "Reduced Downtime", image: "/images/clock.png" },
    { title: "Enhanced Efficiency", image: "/images/settings.png" },
    { title: "Safety-Driven Innovation", image: "/images/safety.png" },
    { title: "Significant Cost Savings", image: "/images/cost.png" },
  ]

  const salientFeatures = [
    {
      title: "Nacelle-mounted design",
      description:
        "Unlike traditional crawler cranes or truck-mounted cranes, DLI is mounted directly on the wind turbine's nacelle. This positioning allows for more efficient and targeted operations.",
    },
    {
      title: "Versatility",
      description:
        "DLI can replace a wide range of major wind turbine components, including rotors, single blades, blade bearings, pitch plates, pressure plates, main bearings, gearboxes, high-speed shafts, intermediate shafts, generators, and transformers.",
    },
    {
      title: "Cost-effective",
      description:
        "By eliminating the need for large ground-based cranes, DLI significantly reduces the overall cost of erection and maintenance activities.",
    },
    {
      title: "Time-saving",
      description:
        "The nacelle-mounted design allows for quicker setup and operation, reducing downtime and increasing the efficiency of maintenance operations.",
    },
    {
      title: "Low space utilization",
      description:
        "Unlike large crawler cranes that require significant ground space, DLI operates from the nacelle, minimizing the footprint on the wind farm site.",
    },
    {
      title: "Quality",
      description:
        "The precise positioning and controlled environment of nacelle- mounted operations ensure superior handling of delicate components, reducing the risk of damage during installation and replacement procedures. Our ISO 9001 certification guarantees consistent quality management systems and continuous improvement in all operations.",
    },
    {
      title: "Environmental benefits",
      description:
        "By reducing the need for heavy ground equipment, DLI helps control pollution and minimizes environmental impact during maintenance operations.",
    },
    {
      title: "Scalability",
      description:
        "The system can likely be adapted to various turbine sizes and models, making it a flexible solution for wind farm operators.",
    },
    {
      title: "Operational efficiency",
      description:
        "The ability to perform major component replacements without relying on external crane rentals can lead to more streamlined maintenance schedules and reduced logistical complexity.",
    },
    {
      title: "Accessibility",
      description:
        "DLI can potentially access turbines in locations that might be challenging for traditional cranes, such as offshore installations or turbines in complex terrain.",
    },
    {
      title: "Safety",
      description:
        "Operating from the nacelle may provide enhanced safety for workers by reducing ground-level hazards associated with large crane operations. Our commitment to safety is reinforced by our ISO 45001 certification, ensuring world-class occupational health and safety management systems.",
    },
  ]

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <IntroParagraph text={introText} />
      {/* R&D Section */}
      <RDSection title="R&D" items={rdItems} />

      {/* Factory Section */}
      <FactorySection title="Factory" content={factoryContent} content1={factoryContent1} image="/images/factory.png" />

      {/* Why Clients Trust Section */}
      <WhyClientsSection title="Why clients trust our patented DLI technology?" items={trustReasons} />

      {/* Salient Features Section */}
      <SalientFeaturesSection title="Salient Features" items={salientFeatures} />
    </section>
  )
}
