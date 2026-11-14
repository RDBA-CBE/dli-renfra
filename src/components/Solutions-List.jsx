
"use client";

import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function SolutionsPageList() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const solutionCards = [
    {
      id: "4",
      icon: "/images/s4.svg",
      title: "Crane Rentals",
      viewDetail: "View Details",
      link: "/solutions/crane-rentals",
      description:
        "Crane rental services for wind turbines are a highly specialized sector of the heavy  lifting industry, crucial for the construction, maintenance.",
    },
    {
      id: "7",
      icon: "/images/abt2.svg",
      title: "GWO TRAINING",
      viewDetail: "View Details",
      link: "/solutions/gwo-training",
      description:
        "We have established successful collaborations with crane companies in India in order to provide this service when needed.",
    },
    {
      id: "8",
      icon: "/images/c2.svg",
      title: "CUSTOMIZED JIGS & FIXTURES",
      description:
        "We have established successful collaborations with crane companies in India in order to provide this service when needed.",
    },
    {
      id: "9",
      icon: "/images/c6.svg",
      title: "TURNKEY INSTALLATION SOLUTIONS",
      viewDetail: "View Details",
      link: "/solutions/turnkey-installation-solutions",
      description:
        "We have established successful collaborations with crane companies in India in order to provide this service when needed.",
    },
    {
      id: "10",
      icon: "/images/c4.svg",
      title: "SKILLED TECHNICAL MANPOWER",
      description:
        "We have established successful collaborations with crane companies in India in order to provide this service when needed.",
    },
  ];

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show only first 2 cards on mobile
  const displayedCards =
    isMobile && !showAll ? solutionCards.slice(0, 2) : solutionCards;

  return (
    <section className="w-full bg-gradient-to-b from-[#329ACD] to-[#3AB257] px-4 py-12 md:px-8 md:py-16 xl:!mb-[300px]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-4 flex justify-center">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white flex items-center gap-2">
            Our Solutions
            <a href="/solutions">
              <ExternalLink className="w-7 h-7 text-white" />
            </a>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="mb-8 max-w-3xl text-sm sm:text-sm md:text-base lg:text-base text-white text-center mx-auto">
          Comprehensive lifting and maintenance solutions tailored for every
          stage of wind turbine life — from installation to refurbishment.
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {displayedCards.map((card) => {
            const content = (
              <div className="h-full rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 flex justify-center">
                  <img
                    src={card.icon || "/placeholder.svg"}
                    alt={card.title}
                    className="h-20 w-20 object-contain"
                  />
                </div>

                <h3 className="mb-3 text-center text-lg font-bold leading-snug text-[#293E52] capitalize sm:text-xl">
                  {card.title.toLowerCase()}
                </h3>

                {/* <p className="mb-4 text-center text-sm text-gray-600">
                  {card.description}
                </p> */}

                {/* Show View Details only when link exists */}
                {card.link && (
                  <span className="block text-center text-base font-semibold text-[#329ACD] hover:underline sm:text-lg">
                    {card.viewDetail || "View Details"}
                  </span>
                )}
              </div>
            );

            return card.link ? (
              <Link
                key={card.id}
                href={card.link}
                aria-label={`${card.title}: ${card.viewDetail || "View Details"}`}
                className="block h-full"
              >
                {content}
              </Link>
            ) : (
              <div key={card.id} className="h-full">
                {content}
              </div>
            );
          })}
        </div>

        {/* Show More / Show Less - Mobile Only */}
        {isMobile && solutionCards.length > 2 && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-white text-[#329ACD] font-semibold rounded-full shadow-md hover:bg-[#f2f2f2] transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
