// "use client"

// import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

// const CAROUSEL_IMAGES = [
//   "/carousel-image-1.jpg",
//   "/carousel-image-2.jpg",
//   "/carousel-image-3.jpg",
//   "/carousel-image-4.jpg",
//   "/carousel-image-5.jpg",
// ]

// const AUTO_ROTATE_INTERVAL = 5000 // 5 seconds

// export default function CarouselHomeSection() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isAutoRotating, setIsAutoRotating] = useState(true)

//   // Auto-rotate carousel
//   useEffect(() => {
//     if (!isAutoRotating) return

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
//     }, AUTO_ROTATE_INTERVAL)

//     return () => clearInterval(interval)
//   }, [isAutoRotating])

//   const goToSlide = (index) => {
//     setCurrentIndex(index)
//     setIsAutoRotating(false)
//     setTimeout(() => setIsAutoRotating(true), 10000)
//   }

//   const goToPrevious = () => {
//     setCurrentIndex((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length)
//     setIsAutoRotating(false)
//     setTimeout(() => setIsAutoRotating(true), 10000)
//   }

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
//     setIsAutoRotating(false)
//     setTimeout(() => setIsAutoRotating(true), 10000)
//   }

//   return (
//     <section className="w-full bg-background py-12">
//       <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
//         {/* Header with Title and Icon */}
//         <div className="mb-6 sm:mb-8 md:mb-10">
//           <div className="flex items-center justify-center text-center gap-2 sm:gap-3 mb-4 sm:mb-6">
//             <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
//               Core Service/Solutions
//             </h2>
//             <ExternalLink className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-muted-foreground flex-shrink-0" />
//           </div>
//           <p className="text-center">
//             As the leading player in PV solar greenfield project development, we harness the power of the Sun
//           </p>
//         </div>

//         {/* Carousel Container */}
//         <div className="w-full max-w-[1400px] mx-auto">
//           {/* Image Carousel */}
//           <div className="relative w-full overflow-hidden rounded-lg bg-muted">
//             <div className="relative w-full h-[400px]">
//               {CAROUSEL_IMAGES.map((image, index) => (
//                 <div
//                   key={index}
//                   className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
//                     index === currentIndex ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   <img
//                     src={image || "/placeholder.svg"}
//                     alt={`Carousel slide ${index + 1}`}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Controls: Indicators Centered & Arrows on Right */}
//           <div className="flex items-center justify-between mt-6 sm:mt-8 md:mt-10">
//             {/* Indicators Centered */}
//             <div className="flex-1 flex justify-center">
//               <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
//                 {CAROUSEL_IMAGES.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToSlide(index)}
//                     className={`transition-all duration-300 rounded-full ${
//                       index === currentIndex
//                         ? "w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-foreground"
//                         : "w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-muted-foreground hover:bg-border"
//                     }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                     aria-current={index === currentIndex}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Navigation Buttons on Right */}
//             <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
//               <button
//                 onClick={goToPrevious}
//                 className="p-2 sm:p-2.5 md:p-3 rounded-full border border-border hover:bg-muted transition-colors"
//                 aria-label="Previous slide"
//               >
//                 <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-foreground" />
//               </button>
//               <button
//                 onClick={goToNext}
//                 className="p-2 sm:p-2.5 md:p-3 rounded-full border border-border hover:bg-muted transition-colors"
//                 aria-label="Next slide"
//               >
//                 <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-foreground" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



"use client";

import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

export default function SolutionsDli() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const solutionCards = [
    {
      id: "1",
      icon: "/images/s1.svg",
      title: "Major Component Replacements",
      description:
        "Large mobile cranes are essential for replacing major components of a wind turbine, such as  blades, gearboxes, and generators.",
    },
    {
      id: "2",
      icon: "/images/s2.svg",
      title: "New WTG Installations",
      description:
        "DLI’s systems are proving to play a crucial role in the installation of new wind turbines,  particularly as turbines become taller, heavier, and more complex.",
    },
    {
      id: "3",
      icon: "/images/s3.svg",
      title: "Refurbishments",
      description:
        "Refurbishing involves focuses on restoring and revitalising existing wind turbines to extend their  operational life.",
    },
    {
      id: "4",
      icon: "/images/s4.svg",
      title: "Crane Rentals",
      description:
        "Crane rental services for wind turbines are a highly specialized sector of the heavy  lifting industry, crucial for the construction, maintenance.",
    },
    {
      id: "5",
      icon: "/images/s5.svg",
      title: "Breakdown Mainenance",
      description:
        "We at DLI understand and realise that breakdown maintenance (also known as reactive or  corrective maintenance) is an unavoidable necessity.",
    },
    {
      id: "6",
      icon: "/images/abt5.svg",
      title: "Crane Method",
      description:
        "We have established successful collaborations with crane companies in India in order to provide this service when needed.",
    },
  ];

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint in Tailwind
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show only first 2 on mobile if not expanded
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
        <p className="mb-8 max-w-3xl text-sm sm:text-sm md:text-base lg:text-base
 text-white text-center mx-auto">
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
              <h3 className="mb-3 text-center font-bold text-sm sm:text-sm md:text-md lg:text-xl text-[#293E52]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-center text-sm text-[#293E52] line-clamp-4">
                {card.description}
              </p>
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
