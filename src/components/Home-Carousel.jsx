"use client";

import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

export default function SolutionsDli() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const solutionCards = [
        {
      id: "2",
      icon: "/images/s2.svg",
      title: "WTG Installations",
      description:
        "DLI’s systems are proving to play a crucial role in the installation of new wind turbines,  particularly as turbines become taller, heavier, and more complex.",
    },

    {
      id: "7",
      icon: "/images/abt2.svg",
      title: "GWO Training",
      viewDetail: "View Details",
      link: "/solutions/gwo-training",
      description:
        "We have established successful collaborations with crane companies in India in order to provide this service when needed.",
    },

     {
      id: "8",
      icon: "/images/c2.svg",
      title: "Customized Jigs & Fixtures",
      description:
        "We have established successful collaborations with crane companies in India in order to provide this service when needed.",
    },

     {
      id: "3",
      icon: "/images/s3.svg",
      title: "Major Component Refurbishments",
      description:
        "Refurbishing involves focuses on restoring and revitalising existing wind turbines to extend their  operational life.",
    },

    {
      id: "1",
      icon: "/images/s1.svg",
      title: "Major Component Replacements",
      description:
        "Large mobile cranes are essential for replacing major components of a wind turbine, such as  blades, gearboxes, and generators.",
    },

     
    {
      id: "9",
      icon: "/images/c6.svg",
      title: "Turnkey Installation Solutions",
      viewDetail: "View Details",
      link: "/solutions/turnkey-installation-solutions",
      description:
        "We have established successful collaborations with crane companies in India in order to provide this service when needed.",
    },

   
    {
      id: "4",
      icon: "/images/s4.svg",
      title: "Conventional Crane Rentals",
      description:
        "Crane rental services for wind turbines are a highly specialized sector of the heavy  lifting industry, crucial for the construction, maintenance.",
    },

      {
      id: "10",
      icon: "/images/c4.svg",
      title: "Skilled Technical Manpower",
      description:
        "We have established successful collaborations with crane companies in India in order to provide this service when needed.",
    },
    
    {
      id: "5",
      icon: "/images/s5.svg",
      title: "Breakdown Mainenance",
      description:
        "We at DLI understand and realise that breakdown maintenance (also known as reactive or  corrective maintenance) is an unavoidable necessity.",
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

  const displayedCards =
    isMobile && !showAll ? solutionCards.slice(0, 2) : solutionCards;

  return (
    <section className="w-full bg-gradient-to-b from-[#329ACD] to-[#3AB257] px-4 py-12 md:px-8 md:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-4 flex justify-center">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white flex items-center gap-2">
            Our Solutions
            <a href="/solutions"><ExternalLink className="w-7 h-7 text-white" /></a>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="mb-8 max-w-3xl text-sm sm:text-sm md:text-base lg:text-base text-white text-center mx-auto">
          Comprehensive lifting and maintenance solutions tailored for every stage of wind turbine life — from installation to refurbishment.
        </p>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {displayedCards.map((card) => (
            <div
              key={card.id}
              className="rounded-lg bg-white p-6 shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <img
                  src={card.icon || "/placeholder.svg"}
                  alt={card.title}
                  className="h-20 w-20 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-center font-bold text-sm sm:text-sm md:text-md lg:text-xl text-[#293E52] ">
                {card.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button (mobile only) */}
        {isMobile && (
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
