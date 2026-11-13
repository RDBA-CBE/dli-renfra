"use client";
import Image from "next/image";

export default function TimelineSection() {
  const items = [
    {
      title: "Technology",
      description:
        "At DLI,  we invest heavily in the continuous research and development of our products that will create value in the lifting processes. Our aim is to enhance the longevity and performance of the wind turbine components. The patents available on our various lifting systems are the outcome of our commitment to pioneer technology.",
      imgSrc: "/images/c1.svg",
    },
    {
      title: "Reliability and Transparency",
      description:
        "We understand the critical importance of minimizing downtime. We are committed to providing prompt, reliable service and clear communication throughout the repair process. We believe in building a foundation of trust with our clients through honest assessments, transparent pricing, and dependable results.",
      imgSrc: "/images/c2.svg",
    },
    {
      title: "Quality and Expertise",
      description:
        "We employ a team of highly skilled and certified professionals who are experts in Major Component Replacement and WTG Installation. We use state-of-the-art equipment and follow best-in-class Standard Operating procedures for all the Major Component Replacement and WTG Installation, repair, and maintain your turbines, maximizing their performance and extending their lifespan.",
      imgSrc: "/images/c3.svg",
    },
    {
      title: "Safety",
      description:
        "We are unwavering in our commitment to the highest safety standards. Our technicians are rigorously trained in technically & GWO Certified People and follow strict protocols to ensure a safe working environment for everyone involved, from our team to your site personnel.",
      imgSrc: "/images/c4.svg",
    },
    {
      title: "Sustainability and Environmental Responsibility",
      description:
        "Our work is inherently linked to a cleaner, greener future. We are dedicated to minimizing our environmental footprint by using eco-friendly practices, properly disposing of waste materials, and striving to extend the life of turbine components to reduce the need for new manufacturing.",
      imgSrc: "/images/c5.svg",
    },
    {
      title: "Timely Completion",
      description:
        "We understand that every minute of downtime costs you money. We are committed to efficient project management and swift execution to get your turbines back online as quickly as possible without compromising on quality or safety.",
      imgSrc: "/images/c6.svg",
    },
    {
      title: "Competitive Pricing",
      description:
        "We are dedicated to providing outstanding value. Our pricing is transparent and competitive, ensuring you receive a high return on your investment without hidden costs.",
      imgSrc: "/images/c7.svg",
    },
  ];

    return (
    <section className="relative py-16 bg-white">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#293E52] mb-12">
        Our Values
      </h2>
      <p className="text-sm sm:text-sm md:text-base lg:text-base text-[#293E52] max-w-6xl mx-auto mb-12 text-center">At DLI, we are committed to delivering exceptional wind turbine Mojor Component Replacement Using Derrick Technology, Installation, Refurbishment and maintenance services that ensure the long-term reliability and efficiency of your assets. Our dedication is rooted in three core principles</p>

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Vertical line only visible on desktop */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[2px] bg-gray-200 h-[93%]"></div>

        <div className="space-y-16 md:space-y-24">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-center md:items-start"
            >
              {/* Left content */}
              <div
                className={`hidden md:flex w-1/2 justify-end pr-10 ${
                  index % 2 === 0 ? "opacity-100" : "opacity-0"
                }`}
              >
                {index % 2 === 0 && (
                  <div className="text-right max-w-sm">
                    <h3 className="text-lg font-semibold text-[#172431] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#172431] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Icon circle (centered for mobile, absolute for desktop) */}
              <div
                className="
                  z-10 flex items-center justify-center 
                  w-16 h-16 rounded-full 
                  bg-[#E0F2F1] border border-gray-100 shadow-md 
                  mx-auto 
                  md:mx-0 md:absolute md:left-1/2 md:-translate-x-1/2
                "
              >
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Right content */}
              <div
                className={`hidden md:flex w-1/2 justify-start pl-10 ${
                  index % 2 !== 0 ? "opacity-100" : "opacity-0"
                }`}
              >
                {index % 2 !== 0 && (
                  <div className="text-left max-w-sm">
                    <h3 className="text-lg font-bold text-[#172431] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#293E52] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Mobile view */}
              <div className="md:hidden text-center mt-6">
                <h3 className="text-lg font-bold text-[#172431] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#293E52] leading-relaxed px-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}