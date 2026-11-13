"use client"
import { useEffect, useRef } from "react"

export default function TimelineSection() {
  const timelineRef = useRef(null)

  useEffect(() => {
    const timeline = timelineRef.current
    if (!timeline) return

    let animationFrame
    const scrollSpeed = 0.5

    const scrollTimeline = () => {
      if (timeline.scrollLeft >= timeline.scrollWidth - timeline.clientWidth) {
        timeline.scrollLeft = 0
      } else {
        timeline.scrollLeft += scrollSpeed
      }
      animationFrame = requestAnimationFrame(scrollTimeline)
    }

    animationFrame = requestAnimationFrame(scrollTimeline)

    timeline.addEventListener("mouseenter", () => cancelAnimationFrame(animationFrame))
    timeline.addEventListener("mouseleave", () => (animationFrame = requestAnimationFrame(scrollTimeline)))

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  const items = [
    {
      year: "2010",
      description:
        "Launch of STMCT Crane - Less Technology",
    },
    {
      year: "2014",
      description: "Become Private Limited Company",
    },
    {
      year: "2017",
      description: "IMS Certified Company and Excellence Award — DLI was Established",
    },
    {
      year: "2018",
      description: "International Social Award",
    },
    {
      year: "2019",
      description: "Enter into Global Market SriLanka",
    },
     {
      year: "2020",
      description: "Authorized GWO Traning Provider",
    },
       {
      year: "2021",
      description: "Best EPC Contractor in Wind Award",
    },
       {
      year: "2022",
      description: "Best O&M Service Award, Established Wandse & GWind",
    },
        {
      year: "2023",
      description: "Support nearly 110 + major component replacement by using 10 ton crane during this year",
    },
        {
      year: "2024",
      description: "Support nearly 150+ major component replacement parts during this year",
    },
        {
      year: "2025",
      description: "Approaching the global contacts to elaborate the business in global level",
    },
        {
      year: "2026",
      description: "First step to starts the business in Dubai after taking order from dubai",
    },
  ]

  return (
    <section className="w-full py-16 bg-white">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12 text-[#1A202C]">Growth Journey</h2>

      <div className="relative overflow-hidden">
        {/* Scrollable Timeline Container */}
        <div
          ref={timelineRef}
          className="flex items-center overflow-x-auto scrollbar-hide gap-24 px-10 md:px-20"
        >
          {/* Center Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300 -translate-y-1/2"></div>

          {/* Timeline Items */}
{/* Timeline Items */}
          {items.map((item, index) => (
            <div key={index} className="relative flex-shrink-0 min-h-[200px] w-64">
              {index % 2 === 0 ? (
                <>
                  {/* Description on Top */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 text-center font-bold bg-blue-50 text-[#293E52] text-sm rounded-lg p-4 shadow-sm">
                    {item.description}
                    <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-50 rotate-45"></div>
                  </div>

                  {/* Timeline Dot - Positioned exactly on the line */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-green-500 rounded-full border-4 border-white z-10 shadow-sm"></div>

                  {/* Year Below */}
                <p className="absolute bottom-0 left-1/2 -translate-x-1/2 font-bold text-lg sm:text-lg md:text-xl lg:text-xl text-[#293E52]">{item.year}</p>
                </>
              ) : (
                <>
                  {/* Year on Top */}
                  <p className="absolute top-0 left-1/2 -translate-x-1/2 font-bold text-lg sm:text-lg md:text-xl lg:text-xl text-[#293E52]">{item.year}</p>

                  {/* Timeline Dot - Positioned exactly on the line */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-green-500 rounded-full border-4 border-white z-10 shadow-sm"></div>

                  {/* Description Below */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 text-center font-bold bg-blue-50 text-gray-700 text-sm rounded-lg p-4 shadow-sm">
                    {item.description}
                    <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-50 rotate-45"></div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}