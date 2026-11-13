import { CardGrid } from "./Card-Grid"

export function DLiSection() {
  return (
    <section className="bg-white py-12 ">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Section */}
        <div className="mb-12 text-center">
          <p className="text-[#293E52] text-sm sm:text-base leading-relaxed max-w-6xl mx-auto text-balance">
            DLi has developed and received patents on 4 systems which are engineered to operate with minimal human
            intervention, addressing potential workforce limitations They are capable of handling complex tasks such as
            replacing rotors, Single Blade, Blade Bearing/ PressurePlate/ Pitch Plate, Main Shaft, Gear Box, Generator,
            Transformer and cooler with reduced manpower requirements. Our crane models ST-DLi-4000, ST-DLi-10000,
            ST-DLi-20000 and ST-DLi-30000 have a lifting capacity of 6 tons, 10 tons, 20 tons and 30 tons respectively.
            Depending on the component, the necessary cranes are used.
          </p>
        </div>

        {/* Cards Grid Section */}
        <CardGrid />
      </div>
    </section>
  )
}
