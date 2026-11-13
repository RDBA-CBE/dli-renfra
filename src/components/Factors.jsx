

"use client"

export default function DifferentiatingFactor() {
  return (
    <section className="w-full bg-white">
      {/* Header Section */}
      <div className="px-4 py-12 ">
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
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-[1400px] px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-0">
          {/* Left Column - Text Content */}
          <div>
            {/* Item 1 */}
            <div className="pb-8 lg:pr-8 border-b border-slate-200">
              <h2 className="text-lg sm:text-xl font-bold text-green-600 mb-4 uppercase tracking-wide">
                Innovative Design Features
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The DLI crane is a precision-engineered system that minimizes human intervention during complex turbine
                maintenance. It efficiently replaces key components like rotors, blades, gearboxes, and
                generators—enhancing safety, reducing manpower, and cutting operational costs through automation.
              </p>
            </div>

            {/* Item 2 */}
            <div className="py-8 lg:pr-8 border-b border-slate-200">
              <h2 className="text-lg sm:text-xl font-bold text-green-600 mb-4 uppercase tracking-wide">
                Addressing Future Workforce Challenges
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Derrick Lifts India (DLI) identified the looming manpower shortage in the energy sector by 2030 and
                developed the DLI system to address it. Through advanced automation, it reduces human involvement in
                major turbine replacements, boosting efficiency, minimizing risk, and ensuring top-tier safety and
                precision in maintenance operations.
              </p>
            </div>

            {/* Item 3 */}
            <div className="py-8 lg:pr-8">
              <h2 className="text-lg sm:text-xl font-bold text-green-600 mb-4 uppercase tracking-wide">
                Pioneering Spirit in Asia
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                DLI is the first company in India to innovate and develop advanced crane technology, placing the nation
                at the forefront of renewable energy innovation. This breakthrough highlights India's growing leadership
                in engineering excellence, transforming how critical renewable infrastructure is maintained and optimized.
              </p>
            </div>
          </div>

          {/* Right Column - Image Section (No Gap Below) */}
          <div className="mt-12 lg:mt-0 flex flex-col justify-end">
            <div className="relative h-96 lg:h-full overflow-hidden lg:ml-8">
              <img
                src="/images/home-about.gif"
                alt="Decorative background"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

