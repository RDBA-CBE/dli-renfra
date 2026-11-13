"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function MissionVisionSection() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section className="w-full bg-[#F6F6F6]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">

          {/* Left Column - Mission */}
          <motion.div
            className="flex flex-col lg:pb-6 md:pb-0 pt-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="mb-4 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-4">
              Mission
            </h2>
            <p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base 
">
          {/* To be a leading solution provider for wind turbine installations and component replacements using innovative, reliable, and efficient derrick lifting solutions, with an aim to enhance the longevity and performance of wind turbines. */}

          To provide safe, reliable, and innovative lifting solutions for WTG installation and major component replacement using advanced DLI crane and crane-less technologies.

            </p>
          </motion.div>

          {/* Center Column - Single Image */}
          <motion.div
            className="flex items-center justify-center lg:pt-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/images/mission.gif"
              alt="Mission Vision Illustration"
              width={250}
              height={250}
              className="h-auto w-[200px] md:w-[220px] lg:w-[280px] md:top-8 lg:top-7 relative object-contain"
            />
          </motion.div>

          {/* Right Column - Vision */}
          <motion.div
            className="flex flex-col pb-6 md:pb-0 lg:pt-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } } }}
          >
            <h2 className="mb-4 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-4">
              Vision
            </h2>
            <p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base
">
             {/* Be a reckoning force in the renewable energy sector by using innovative technologies in the lifting processes of wind turbine and its components that leads to high equipment availability and performance of assets.  */}

             To excel in advanced lifting services through innovation, precision, and superior execution in WTG installation and major component replacement.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
