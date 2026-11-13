
import { ExternalLink } from "lucide-react"
import { ProcessGrid } from "./Process-Grid"

export function SectionAbout() {

   
  

  return (
    <section className="w-full pt-12">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8">
        {/* Two-column layout: responsive stacking */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {/* Title with Icon */}
            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#293E52]">About us</h1>
              <a href="/about">
                <ExternalLink
                  className="w-6 sm:w-7 h-6 sm:h-7"
                  strokeWidth={2}
                  style={{ stroke: "url(#grad)" }}
                />
                <svg width="0" height="0">
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3AB257" />
                    <stop offset="100%" stopColor="#329ACD" />
                  </linearGradient>
                </svg>
              </a>
            </div>

            {/* Descriptive Text */}
            <p className="text-sm sm:text-sm md:text-base lg:text-base leading-relaxed text-foreground/80">
              {/* At Derrick Lifters India Pvt Ltd (DLI), we have pioneered a safer, faster, and more cost-effective approach to complex wind turbine installations and maintenance. Our unique expertise lies in the application of our patented advanced Derrick crane lifting solutions for WTG-Major Components Replacements, WTG installations, and refurbishments. We provide the robust lifting capabilities you need to swiftly restore full operational capacity and keep your clean energy flowing. */}

              Our Renewable Sector began its journey in 2008 and has since grown into a leading renewable energy solutions provider, delivering Wind, Solar, and Energy Storage projects across India and Sri Lanka. With strategic locations near major wind corridors, the Group offers end-to-end turnkey services including design, installation, commissioning, operations, and maintenance. 
            </p>

            {/* Large Image */}
            <div className="w-full overflow-hidden m-0 p-0 top-14 lg:right-16 relative flex justify-center sm:right-6">
              <img
                src="/images/home-about.gif"
                alt="Team collaboration"
                className="block m-0 p-0 w-[130%] max-w-none"
              />
            </div>
          </div>

          {/* Right Column - Process Grid */}
          <div className="flex items-center mb-12">
            <ProcessGrid 
              
            />
          </div>
        </div>
      </div>
    </section>
  )
}
