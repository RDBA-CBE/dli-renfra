"use client"
import { useState } from "react"

// Reusable Card Component for Crane Models
function CraneModelCard({ model }) {
  return (
    <div className="space-y-3">
      <div className="bg-gray-100 h-64 sm:h-80 flex items-center justify-center overflow-hidden rounded-lg">
        <img
          src={model.image}
          alt={model.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-2">
        <h3 className="font-bold text-[#293E52] text-xl">{model.name}</h3>
        <p className="text-sm text-[#293E52] leading-relaxed">{model.description}</p>
      </div>
       <div className="grid grid-cols-1  gap-3">
          {model.features.map((feature) => (
            <div key={feature.id} className="flex items-center gap-2">
              <div className="md:w-4 md:h-4  w-3.5 h-3.5 flex items-center justify-center flex-shrink-0">
               <img src="/images/check.svg" alt="tick"/>
              </div>
              <span className="text-sm text-[#293E52]">{feature.label}</span>
            </div>
          ))}
        </div>
    </div>
  )
}

// Crane Models Grid Section
function CraneModelsSection({ title, models }) {
  return (
    <div className="md:mb-18 mb-7">
      <h2 className="text-lg md:text-2xl font-bold text-[#293E52] mb-6 text-center">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 md:gap-x-4 gap-6 md:gap-y-12">
        {models.map((model) => (
          <CraneModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  )
}
// Workflow Section with Images
function WorkflowSection({ title, description, images }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const previewLength = 200

  return (
    <div className="">
      <h2 className="text-lg md:text-2xl font-bold text-[#293E52] mb-4 text-start">
        {title}
      </h2>
      {/* <div className="mb-6">
        <p className="text-sm md:text-base text-[#293E52]/80 leading-relaxed">
          <span className="md:hidden">
            {isExpanded ? description : `${description.slice(0, previewLength)}...`}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#3AB257] font-semibold ml-1 hover:underline"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </span>
          <span className="hidden md:inline">{description}</span>
        </p>
      </div> */}
      <div className="md:space-y-6 space-y-2">
        {images.map((image) => (
          <div
            key={image.id}
            className="w-full bg-gray-100  overflow-hidden "
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// Intro Paragraph Component
function IntroParagraph({ text }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const previewLength = 150

  return (
    <div className="md:mb-10 mb-6">
      <p className="text-sm md:text-base text-[#293E52]/80 leading-relaxed text-center md:max-w-5xl w-full mx-auto">
        {/* Mobile: Show truncated text with read more/less */}
        <span className="md:hidden">
          {isExpanded ? text : `${text.slice(0, previewLength)}...`}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#3AB257] font-semibold ml-1 hover:underline"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </span>
        {/* Desktop: Show full text */}
        <span className="hidden md:inline">{text}</span>
      </p>
    </div>
  )
}

export default function CraneModelsPage() {
  const pageData = {
    introText: "At Derrick Lifters India (DLI), our in-house engineered crane systems are designed to deliver precision, strength, and flexibility for all major wind turbine lifting operations. Each model is built to handle complex lifting challenges with superior safety, reliability, and performance in mind. Our systems feature robust hydraulic mechanisms, wide boom angles, and high-capacity winches—making them ideal for both installation and maintenance of wind turbines in diverse site conditions.",
    
    craneModels: {
      title: "Crane Models",
      models: [
        {
          id: 1,
          name: "ST-DLI-6000",
          description: "Compact yet powerful lifting solution designed for efficient wind turbine maintenance and installations",
          image: "/images/crane1.png",
         features: [
          { id: 1, label: "Winch Lifting Capacity: 3Ton/per fall" },
          { id: 2, label: "Hydraulic Cylinder Capacity: 10 Ton" },
          { id: 3, label: "Boom Up Angle: 0° to 75°" },
          { id: 4, label: "40t and 60t are under development." },
          
        ]
        },
        {
          id: 2,
          name: "ST-DLI-10000",
          description: "Engineered for superior lifting performance, the ST-DLI-10000 delivers exceptional strength, precision, and reliability for large-scale wind turbine maintenance and installation projects.",
          image: "/images/crane2.png",
          features: [
          { id: 1, label: "Winch Lifting Capacity: 3Ton/per fall" },
          { id: 2, label: "Hydraulic cylinder capacity - 10ton" },
          { id: 3, label: "Boom up angle - 0° to 75°" },
         
        ]
        },
        {
          id: 3,
          name: "ST-DLI-20000",
          description: "Built for heavy-duty lifting, the ST-DLI-20000 combines power and precision to handle complex wind turbine component replacements with maximum efficiency and safety..",
          image: "/images/crane3.png",
          features: [
          { id: 1, label: "Winch Lifting capacity - 8Ton/Per fall" },
          { id: 2, label: "Hydraulic cylinder capacity - 40ton" },
          { id: 3, label: "Boom up angle - 0° to 75°" },
          { id: 4, label: "Crane Swing Angle -0° to 270°" },
          
        ]
        },
        {
          id: 4,
          name: "ST-DLI-30000",
          description: "Engineered for maximum lifting performance, the ST-DLI-30000 delivers exceptional strength and stability for large-scale wind turbine installations and major component replacements.",
          image: "/images/crane4.png",
          features: [
          { id: 1, label: "Winch Lifting capacity - 10Ton/Per fall" },
          { id: 2, label: "Hydraulic cylinder capacity - 40ton Each" },
          { id: 3, label: "Boom up angle - 0° to 75°" },
          { id: 4, label: "Crane Swing Angle -0° to 270°" },
       
        ]
        }
      ]
    },
    certifications: {
      logos: [
        { id: 1, name: "ISO Certified", image: "/images/company-logo.png" },
        { id: 2, name: "CE Approved", image: "/images/company-logo.png" },
        { id: 3, name: "Safety Standards", image: "/images/company-logo.png" }
      ]
    },
    workflow: {
      title: "Compatibility Matrix",
      description: "Our streamlined workflow process ensures efficient crane installation, maintenance, and component replacement. We follow industry best practices with a systematic approach to minimize downtime and maximize operational efficiency. Our expert technicians conduct thorough inspections and use only genuine parts for replacements. Each step is documented and quality-checked to ensure compliance with safety regulations. We provide comprehensive training to your staff and offer 24/7 support for emergency situations. Our preventive maintenance programs help extend equipment lifespan and reduce unexpected failures.",
      images: [
        // {
        //   id: 1,
        //   src: "/images/workflow1.png",
        //   alt: "Workflow Process Diagram"
        // },
        {
          id: 2,
          src: "/images/workflow2.png",
          alt: "Component Replacement Procedure"
        }
      ]
    }
  }

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <IntroParagraph text={pageData.introText} />
      <CraneModelsSection 
        title={pageData.craneModels.title}
        models={pageData.craneModels.models}
      />
      <WorkflowSection
        title={pageData.workflow.title}
        description={pageData.workflow.description}
        images={pageData.workflow.images}
      />
    </section>
  )
}
