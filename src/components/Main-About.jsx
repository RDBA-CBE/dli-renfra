"use client"

import { useState,useEffect } from "react";
import { axiosGet,BASE_URL } from "@/lib/api";
import WhyChoose from "./WhyChoose";

export default function AboutLayout() {
  const processItems = [
    { img: "/images/abt6.svg", number: "40% - 30% ", title: "Reduction in Cost" },
    { img: "/images/new-abt1.svg", number: "3 Times faster ", title: "Faster Installations and Replacements" },
    { img: "/images/abt5.svg", number: "Upto 30 Tons ", title: "winch Lifting Range" },
    { img: "/images/new-abt2.svg", number: "4", title: "Technology patents" },
    { img: "/images/s5.svg", number: "More than 2GW ", title: "Turnkey projects & services completed " },
    { img: "/images/new-abt3.svg", number: "1,735 ",  title: " Major components successfully " },
    { img: "/images/abt4.svg", number: "706,630+ mt",  title: "Co2e Carbon Emissions reduced" },
    { img: "/images/new-abt4.svg", number: "61400", title: "IEC " },
  ]

  const [solutionsCard,setSolutionsCard] = useState([])
  
      const fetchData = async () => {
    
        axiosGet
          .get(
            `masters/about/get/?web_sts=1`
          )
          .then((response) => {
            setSolutionsCard(response.data.data);
    
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };
      useEffect(() => {
        fetchData();
      }, []);

    const overviewItems = [
      { image_path: "/images/new/svg-1.svg", value: "WTG INSTALLATIONS", title:"1.2GW+" },
      { image_path: "/images/new/svg-2.svg", value: "WIND PROJECTS IN PROGRESS", title:"300MW+" },
      { image_path: "/images/new/svg-3.png", value: "SOLAR CAPACITY COMMISSIONED", title:"309MW+" },
      { image_path: "/images/new/svg-4.svg", value: "UPCOMING SOLAR PROJECTS", title:"400MWp+" },
      { image_path: "/images/new/svg-5.svg", value: "WTG O&M COVERING 150 WTGS", title:"70MW+" },
      { image_path: "/images/new/svg-6.svg", value: "WTG O&M IN TH", title:"100MW+" },
      { image_path: "/images/new/svg-8.svg", value: "PSS DELIVERED", title:"125MW+" },
      { image_path: "/images/new/svg-9.svg", value: "PSS UNDER CONSTRUCTION", title:"100MW+" },
      { image_path: "/images/new/svg-3.png", value: "TECHNICIANS RECEIVED GWO TRAINING", title:"3000+" },
      { image_path: "/images/new/svg-4.svg", value: "BESS UNDER EXECUTION", title:"25MW+" },
     
    ]


  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 pb-12">
      {/* Row 1: Title and Content */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left: Title */}
          <div className="p-6 md:p-8">
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#293E52]">
              Empowering the Future of Renewable Energy
            </h2>
          </div>

          {/* Right: Content Paragraphs */}
          <div className="px-6 py-2 md:p-8 space-y-3 text-[#293E52]">
             <p className="mt-2 text-5xl font-bold text-[#293E52] md:text-6xl">
              2008
            </p>
            <p>
             {/* At Derrick Lifters India Pvt Ltd (DLI), we have pioneered a safer, faster, and more cost-effective approach to complex wind turbine installations and maintenance. Our unique expertise lies in the application of our patented advanced Derrick crane lifting solutions for WTG- Major Components Replacements, WTG installations, and refurbishments. we provide the robust lifting capabilities you need to swiftly restore full operational capacity and keep your clean energy flowing. */}

             Our Renewable Sector began its journey 
and has since grown into a leading renewable energy
solutions provider, delivering Wind, Solar, and Energy
Storage projects across India and Sri Lanka. With
strategic locations near major wind corridors, the Group
offers end-to-end turnkey services including design,
installation, commissioning, operations, and
maintenance. The Group
’
s core strengths include R&D,
Wind & Solar turnkey project execution, WTG and Solar
O&M, major component replacement, multi-brand
spares supply, WTG component refurbishment,
customized lifting solutions, and specialized technical
services across multiple locations. Speed Team Group is
certified with ISO 9001, ISO 14001, ISO 45001, CECertified Lifting Technology, and is a GWO Certified
Training Provider
            </p>
          </div>
        </div>
      </div>

      

      


<div className="mt-6">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
    {overviewItems.map((item, index) => (
      <div
        key={index}
        className="min-h-[200px] md:min-h-[232px] p-6 md:p-8 flex flex-col items-center justify-center text-center border border-border"
      >
        <img
          src={item.image_path}
          alt={item.title}
          className="w-12 h-12 md:w-14 md:h-16 object-contain mb-3"
        />

        <p className="text-lg lg:text-3xl font-bold text-foreground mb-2">
          {item.title}
        </p>

        <p className="text-sm md:text-base text-[#293E52]">
          {item.value}
        </p>
      </div>
    ))}
  </div>
</div>

<section className="mt-16 rounded-lg bg-[#F4F7F9] p-6 md:p-10 lg:p-12 mb-18">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_2fr] md:gap-10">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#329ACD]">
              Established
            </p>
            <p className="mt-2 text-5xl font-bold text-[#293E52] md:text-6xl">
              2024
            </p>
          </div>

          <div className="space-y-4 text-[#293E52]">
            <h2 className="text-2xl font-semibold md:text-3xl">
              An independent wind energy service provider
            </h2>
            <p className="leading-relaxed">
              Derrick Lifters India Pvt. Ltd. (DLI) was established in 2024 as
              an independent wind energy service provider, specializing in WTG
              installation and major component replacement using advanced
              Derrick lifting systems, crane-less technology, and cranes.
            </p>
            <p className="leading-relaxed">
              DLI is built on engineering innovation, developing proprietary
              lifting solutions that ensure safe, efficient, and cost-effective
              handling of wind turbine components. The company executes WTG
              installation, de-erection, and re-erection services with high
              precision and strict safety standards.
            </p>
          </div>
        </div>
      </section>

      <div className="pb-10  ">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#293E52]">
          Why choose us?
        </h3>
      </div>

      <WhyChoose/>




      {/* Row 2: Center Title */}
      {/* <div className="pb-6 md:p-8 lg:p-8 text-center">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#293E52]">
          Why choose us?
        </h3>
      </div> */}

      
      {/* <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
         
          <div className="bg-muted min-h-64 md:min-h-80 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/10 rounded flex items-center justify-center">
              <img
                src="/images/main-about.png"
                alt="Placeholder"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>

          
          <div className="p-6 md:p-8 space-y-3 leading-relaxed text-[#293E52]">
            <p className="leading-relaxed text-center lg:text-left">
              DLI is part of Speed Team Group, a fast-growing group of companies in the renewable landscape providing a boutique of solutions and services ranging from wind and solar project development, manufacturing of solar panels and BESS, construction of renewable projects, sourcing of electrical equipment and operation and maintenance. Speed Team Group focuses on delivering innovation, sustainability, and excellence in energy solutions through its businesses. 
            </p>

            <p className="leading-relaxed text-center lg:text-left"> 
              With an exponential growth in the installation of renewable projects throughout the country, DLI is rapidly establishing itself as a key player in the renewable energy sector, offering cutting-edge services that enhance the performance and longevity of wind energy assets. A decade of relentless innovation has established DLI as an industry leader, combining advanced technologies with profound industry insights. Our innovative solutions have revolutionized Major Component Replacement, making complex operations simple and efficient through cutting-edge Derrick Technology.
            </p>
          </div>
        </div>
      </div> */}

      
      <div className="border border-border !mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {solutionsCard.map((item, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 flex flex-col items-center justify-center text-center border-border ${
                index % 4 !== 3 ? "border-r" : ""
              } ${index >= 4 ? "border-t" : ""}`}
            >
              <img
                src={BASE_URL+item.image_path}
                alt={item.title}
                className="w-12 h-12 md:w-14 md:h-16 object-contain mb-3"
              />
              <p className="text-lg lg:text-3xl font-bold text-foreground mb-2">{item.title}</p>
              <p className="text-sm md:text-base text-[#293E52]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  )
}
