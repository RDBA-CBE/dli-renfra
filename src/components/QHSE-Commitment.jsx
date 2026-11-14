"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const qhseItems = [
  {
    title: "Quality Assurance - ISO 9001:2015 Certified",
    description:
      "Consistent And Reliable Service Through Engineered Procedures And Strict Quality Controls.",
  },
  {
    title: "Health & Safety - ISO 45001:2018 Certified",
    description:
      "Safe Operations Supported By Risk Assessments, SOPs, And Certified Lifting Practices.",
  },
  {
    title: "Environmental Focus - ISO 14001:2015 Certified",
    description:
      "Low-impact Lifting And Crane-less Technologies That Reduce Emissions And Protect Surrounding Land.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
  }),
}

export default function QHSECommitment() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#3CA948] text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
        >
          QHSE Commitment
        </motion.h2>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

          {/* Left: TUV India Badge */}
          <motion.div
            className="flex-shrink-0 flex items-center justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
          >
            <div className="bg-[#0B1F3A] rounded-lg p-6 w-68 flex flex-col items-center gap-4 shadow-lg">
              {/* TUV India Logo */}
              <Image
                src="/images/new/log-1.jfif"
                alt="TUV India Pvt. Ltd."
                width={120}
                height={50}
                className="object-contain"
              />
              <p className="text-white text-xs font-semibold tracking-wide text-center">
                TUV INDIA PVT. LTD.
              </p>
              {/* Divider */}
              <div className="w-full border-t border-gray-500" />
              {/* ISO Badges */}
              <div className="text-white text-sm font-medium space-y-1 text-left w-full">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#3CA948] rounded-sm inline-block"></span>
                  <span>ISO 9001</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#3CA948] rounded-sm inline-block"></span>
                  <span>ISO 14001</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#3CA948] rounded-sm inline-block"></span>
                  <span>ISO 45001</span>
                </div>
              </div>
              {/* Divider */}
              <div className="w-full border-t border-gray-500" />
              <p className="text-gray-400 text-xs text-center">tuv-nord.com/in</p>
            </div>
          </motion.div>

          {/* Right: QHSE Items */}
          <div className="flex flex-col gap-7 flex-1">
            {qhseItems.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="border-l-4 border-[#3CA948] pl-5"
              >
                <h3 className="text-base md:text-lg font-bold text-[#172431] uppercase mb-1">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-[#293E52] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
