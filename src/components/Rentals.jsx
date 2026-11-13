"use client"
import { useEffect, useRef, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader } from "./ui/card"
import Link from "next/link"

// Intro Section with Read More/Less
function IntroSection({ text }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const previewLength = 200

  return (
    <div className="mb-8 px-4">
      <p className="text-sm md:text-base text-[#293E52] leading-relaxed text-center max-w-4xl mx-auto">
        <span className="md:hidden">
          {isExpanded ? text : `${text.slice(0, previewLength)}...`}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#329ACD] font-semibold ml-1 hover:underline"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </span>
        <span className="hidden md:inline">{text}</span>
      </p>
    </div>
  )
}

// Video Section
function VideoSection({ videoUrl, thumbnail, description }) {
  return (
    <div className="md:mb-12 mb-6">
      <div className="relative w-full bg-gray-900 rounded-lg overflow-hidden h-64 md:h-96">
        <video className="w-full h-full object-cover" controls poster={thumbnail}>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="text-sm md:text-base text-[#293E52] leading-relaxed mt-4 md:mt-8 text-center max-w-5xl mx-auto">
        {description}
      </p>
    </div>
  )
}

// Specialization Card Component
function SpecializationCard({ data }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold text-[#293E52]">{data.title}</h3>
      <p className="text-sm md:text-base text-[#293E52] leading-relaxed">{data.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.features.map((feature) => (
            <div key={feature.id} className="flex items-center gap-2">
              <div className="w-4 h-4   flex items-center justify-center flex-shrink-0">
               <img src="/images/check.svg" alt="tick"/>
              </div>
              <span className="text-sm text-[#293E52]">{feature.label}</span>
            </div>
          ))}
        </div>

    </div>
  )
}

// Projects Gallery Section
function ProjectsSection({ projects }) {
  return (
    <div className="md:mb-12 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-lg md:text-2xl font-bold text-[#293E52]">Projects</h2>
        <img src="/images/export.svg" alt="export" className="w-5 h-5" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-100 rounded-md overflow-hidden h-64 sm:h-80">
            <img src={project.image || "/placeholder.svg"} alt={project.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

// Related Solutions Card
function RelatedSolutionCard({ solution }) {
  return (
    <Card className="h-full flex flex-col ">
      <CardHeader className="">
        <div className="flex items-start justify-between">
          <img src={solution.icon || "/placeholder.svg"} alt={solution.title} className="w-9 h-9" />
          <img src="/images/export.svg" alt="export" className="w-5 h-5" />
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <h3 className="text-lg font-bold text-[#293E52] mb-1.5">{solution.title}</h3>
        <p className="text-sm text-[#293E52] leading-relaxed">{solution.description}</p>
      </CardContent>
    </Card>
  )
}

// Main Component
export default function RentalsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(3)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCards(1)
      else if (window.innerWidth < 1024) setVisibleCards(2)
      else setVisibleCards(3)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  const solutionData = {
    intro:
      "Crane rental services for wind turbines are a highly specialized sector of the heavy lifting industry, crucial for the construction, maintenance, and decommissioning of wind farms. These projects require massive, powerful cranes capable of lifting extremely heavy components to great heights.",

    video: {
      url: "/videos/solution-demo.mp4",
      thumbnail: "/images/spec-video.png",
      description:
        "Derrick Lifters India offers rental crawler and telescopic cranes up to 800-ton capacity. The operators of such cranes are highly skilled and are licensed/experienced personnel from competent authorities.  We offer comprehensive lifting service packages that are tailored to meet your requirements and budgets. We commit to delivering cranes on schedule to your work site along with the technical crew to ensure a safe, efficient lifting operation. To rent crawler cranes from us for any heavy lift, contact us today",
    },

    specializations: [
      {
        id: 1,
        title: "Features",
        image: "/images/crane.png",
        description:
          "Our Crane rental solutions feature:",
        features: [
          { id: 1, label: "Rigging equipment - slings, shackles, hooks, spreader bars." },
          { id: 2, label: "Fleet of top brand cranes up to 800-ton capacity and supporting crane of 100-150 tons." },
          { id: 3, label: "Advanced models with greater lifting heights/loads." },
          { id: 4, label: "Counterweight variants for optimized lifting plans." },
          { id: 5, label: "Cranes fully serviced and load tested" },
          { id: 6, label: "Our Lifting Packages Include Licensed and trained operators" },
          { id: 6, label: "Access mats to stabilize ground conditions" },
          { id: 6, label: "Surveyor for lift planning and load guidance" },
          { id: 6, label: "Traffic control, permits, and safety supervision" },
          { id: 6, label: "Transport of cranes and components" },



        ],
      },
      
    ],

    projects: [
      { id: 1, image: "/images/project1.png", alt: "Project 1" },
      { id: 2, image: "/images/project2.png", alt: "Project 2" },
      { id: 3, image: "/images/project3.png", alt: "Project 3" },
    ],

    relatedSolutions: [
      {
        id: 1,
        icon: "/images/s1.svg",
        title: "Major Component Replacements",
        description:
          "Large mobile cranes are essential for replacing major components of a wind turbine, such as blades, gearboxes, and generators.",
      },
      {
        id: 2,
        icon: "/images/s3.svg",
        title: "Refurbishments",
        description:
          "Refurbishing focuses on restoring and revitalising existing wind turbines to extend their  operational life.",
      },
      {
        id: 3,
        icon: "/images/s2.svg",
        title: "New WTG Installations",
        description:
          "DLI's systems are proving to play a crucial role in the installation of new wind turbines, particularly as turbines become taller, heavier, and more complex.",
      },
    ],
  }
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <IntroSection text={solutionData.intro} />

      <VideoSection
        videoUrl={solutionData.video.url}
        thumbnail={solutionData.video.thumbnail}
        description={solutionData.video.description}
      />

      <div className="md:mb-12 mb-6">
        {/* <h2 className="text-lg md:text-2xl font-bold text-[#293E52] mb-6 text-center">Specialization</h2> */}
        <div className="grid md:grid-cols-1 gap-6">
          {solutionData.specializations.map((spec) => (
            <SpecializationCard key={spec.id} data={spec} />
          ))}
        </div>
      </div>

      <ProjectsSection projects={solutionData.projects} />



      <div>
        <h2 className="text-lg md:text-2xl font-bold text-[#293E52] mb-6">Related Solutions</h2>

        <div className="relative overflow-hidden">
          {/* Carousel wrapper */}
          <div
            ref={containerRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(100 / visibleCards) * currentIndex}%)` }}
          >
            {solutionData.relatedSolutions.map((solution) => (
              <div key={solution.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2">
                <RelatedSolutionCard solution={solution} />
              </div>
            ))}
          </div>

          {/* Dots + Navigation */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots centered */}
            <div className="flex-1 flex justify-center">
              {Array.from({ length: Math.ceil(solutionData.relatedSolutions.length / visibleCards) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors mx-1 ${
                      index === currentIndex ? "bg-[#329ACD]" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ),
              )}
            </div>

            {/* Navigation on right */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === 0 ? Math.ceil(solutionData.relatedSolutions.length / visibleCards) - 1 : prev - 1,
                  )
                }
                className="w-10 h-10 rounded-full border-2 border-[#293E52] flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Previous solutions"
              >
                <ArrowLeft className="w-5 h-5 text-[#293E52]" />
              </button>
              <button
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === Math.ceil(solutionData.relatedSolutions.length / visibleCards) - 1 ? 0 : prev + 1,
                  )
                }
                className="w-10 h-10 rounded-full border-2 border-[#293E52] flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Next solutions"
              >
                <ArrowRight className="w-5 h-5 text-[#293E52]" />
              </button>
            </div>
          </div>
        </div>
      </div>
       {/* ✅ Go Back button */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[#293E52] text-[#293E52] rounded-full font-semibold hover:bg-[#293E52] hover:text-white transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Go Back to Solutions
        </Link>
      </div>
    </section>
  )
}
