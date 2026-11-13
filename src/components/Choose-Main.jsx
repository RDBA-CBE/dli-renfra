"use client";

export default function ChooseusMain() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-start justify-between py-16 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
      {/* Left Side - Title */}
      <div className="lg:w-1/2 w-full mb-8 lg:mb-0 max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#293E52]">
          Smarter, Safer, and <br />
          Faster Turbine <br />
          Component <br />
          Replacement
        </h2>
      </div>

      {/* Right Side - Paragraphs */}
      <div className="lg:w-1/2 w-full space-y-6 text-[#293E52] text-base leading-relaxed">
        <p>
          Unexpected wind turbine equipment failures can lead to significant financial
          losses and energy production gaps. The future of reliable energy depends not
          only on quick installation speed but also on the consistent performance of your
          wind turbines! If a breakdown occurs, our Derrick Technology will replace your
          major component using our tech. Furthermore, the cost involved in such
          replacements using conventional cranes is very high!
        </p>

        <p>
          Derrick Lifters India's patented lifting systems significantly reduce downtime
          by up to 30%, enhance operational efficiency, and improve safety in wind turbine
          maintenance operations. By optimizing the replacement process, we achieve faster
          turnaround times while ensuring compliance with the highest safety standards.
          This results in 15–20% improvements in overall project timelines and reduced
          operational disruptions. Our clients have benefited from more than 40–30% in
          cost savings using our systems compared to conventional cranes.
        </p>
      </div>
    </section>
  );
}
