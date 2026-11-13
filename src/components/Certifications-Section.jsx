"use client"

import { useState } from "react"
import AccordionItem from "./Accordion"

export function CertificationsSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (<div className="w-full max-w-[1400px] mx-auto px-4 py-12">
    {/* Header Section */}
    <div className="text-center mb-12 space-y-4">
      {/* <p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p> */}
    </div>

    {/* Accordions */}
    <div className="border border-border rounded-lg overflow-hidden">
      {/* ISO Certifications */}
      <AccordionItem title="ISO Certifications" isOpen={openIndex === 0} onClick={() => toggleAccordion(0)}>
        <div className="space-y-6">
          <div>
            <p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base mb-2">
              Our company upholds the highest quality standards by implementing the ISO 9001:2015 certified Quality Management System. This internationally recognized system ensures we consistently provide products and services that meet strict quality requirements and exceed customer expectations. It demonstrates our commitment to quality across all aspects of our business.
            </p>

          </div>

          {/* ISO Badges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
            <div className="flex flex-col items-center justify-center p-4 bg-background rounded-lg border-2 border-dotted border-[#D3D3D3]">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-3">
                <img
                  src="/images/iso.png"
                  alt="ISO Logo"
                  className="w-22 h-22 object-contain"
                />
              </div>
              <p className="text-md text-[#3CA948] font-bold text-center">ISO-9001:2015</p>
              <p className="text-xs text-[#293E52] text-center mt-1">(Quality Management System )</p>
            </div>



            <div className="flex flex-col items-center justify-center p-4 bg-background rounded-lg border-2 border-dotted border-[#D3D3D3]">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-3">
                <img
                  src="/images/iso.png"
                  alt="ISO Logo"
                  className="w-22 h-22 object-contain"
                />
              </div>
              <p className="text-md text-[#3CA948] font-bold text-center">ISO -14001:2015</p>
              <p className="text-xs text-[#293E52] text-center mt-1">(Environmental Management System )</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-background rounded-lg border-2 border-dotted border-[#D3D3D3]">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-3">
                <img
                  src="/images/iso.png"
                  alt="ISO Logo"
                  className="w-22 h-22 object-contain"
                />
              </div>
              <p className="text-md text-[#3CA948] font-bold text-center">ISO -45001:2015</p>
              <p className="text-xs text-[#293E52] text-center mt-1">(Occupational Health Safety Management System  )</p>
            </div>
          </div>
 <div>
              <p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base ">
               We proudly adhere to the ISO 14001:2015 certified Environmental Management System that promotes environmental protection and prevention of pollution. We are committed to minimizing our environmental impact by reducing waste, emissions and resource consumption while improving our energy efficiency. This certification demonstrates our pledge to responsible practices for the environment.
              </p>
        
            </div>
             <div>
              <p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base ">
              Our ISO 45001:2015 certified Occupational Health and Safety Management System underscores our dedication to employee safety and wellbeing. We implement rigorous protocols and training to prevent workplace hazards and ensure a safe operating environment. This global standard reflects our core value of prioritizing health, safety and the reduction of occupational risks.
              </p>
        
            </div>

          <div>
            {/* <p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
          </div>
        </div>
      </AccordionItem>

      {/* Quality */}
      <AccordionItem title="Design" isOpen={openIndex === 1} onClick={() => toggleAccordion(1)}>
        <div className="space-y-4">
          <div>
            <p className="mb-2 text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
              Our technology is designed in adherences to the stringent IEC 61400 requirements which is a set of design requirements made to ensure that wind turbines are appropriately engineered against damage from hazards within the planned lifetime
            </p>

          </div>

          {/* <ul className="space-y-1">
              <li className="flex items-start gap-3">
                <span className="text-primary mb-2">•</span>
                <span className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </li> 
              <li className="flex items-start gap-3">
                <span className="text-primary mb-2">•</span>
                <span className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mb-2">•</span>
                <span className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mb-2">•</span>
                <span className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mb-2">•</span>
                <span className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mb-2">•</span>
                <span className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
              </li>
            </ul> */}
        </div>
      </AccordionItem>

      {/* Health and Safety */}
      <AccordionItem title="Safety & Commissioning" isOpen={openIndex === 2} onClick={() => toggleAccordion(2)}>
        <div className="space-y-6">
          <div>
            <p className="mb-2 text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
              DLI adapts the guidelines set by EWEA when it comes to safety measures when working at heights and with heavy equipment. We also follow the best practices set by EWEA for WTG lifting including thorough and documented planning and preparations, use of competent manpower, regular maintenance of our derrick lifts, etc..

            </p>

          </div>



          <div>
            {/* <p className="text-[#293E52] font-semibold mb-3 text-sm sm:text-[14px] md:text-[16px] lg:text-[18px]">Goal</p>
              <p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.

              </p> */}
          </div>
        </div>
      </AccordionItem>

      {/* Policy */}
      <AccordionItem title="Technical Training" isOpen={openIndex === 3} onClick={() => toggleAccordion(3)}>
        <div className="space-y-6">
          <div>
            <p className="mb-2 text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
              Our DLI team are GWO trained and certified engineers and are regularly scheduled for periodical refresher trainings to keep them abreast to the updated requirements. The company is also certified by the GWO. DLI ensures that no engineers are sent to the work sites without the completion of mandatory trainings.

            </p>

          </div>



          <div>
            {/* <p className="text-[#293E52]  font-semibold mb-3 text-sm sm:text-[14px] md:text-[16px] lg:text-[18px]">Our Vision</p>
              <p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.

              </p> */}
          </div>
        </div>
      </AccordionItem>
    </div>
  </div>
  )
}