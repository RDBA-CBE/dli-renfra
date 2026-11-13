const cardData = [
  {
    id: 1,
    title: "Rotor Single Blade",
    image: "/images/choose1.svg",
  },
  {
    id: 2,
    title: "Blade Bearing / Pitch Plate / Pressure Plate",
    image: "/images/choose2.svg",
  },
  {
    id: 3,
    title: "Gearbox",
    image: "/images/choose3.svg",
  },
  {
    id: 4,
    title: "High-Speed or Intermediate Shaft",
    image: "/images/choose4.svg",
  },
  {
    id: 5,
    title: "Generators",
    image: "/images/choose5.svg",
  },
  {
    id: 6,
    title: "Transformers",
    image: "/images/choose6.svg",
  },
  {
    id: 7,
    title: "Coolers",
    image: "/images/choose7.svg",
  },
]

export function CardGrid() {
  return (
    <div className="space-y-6">
      {/* First Row - 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.slice(0, 4).map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>

      {/* Second Row - 3 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.slice(4, 7).map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  )
}

function Card({ title, image }) {
  return (
    <div
      className="relative h-48 sm:h-56 lg:h-64 rounded-lg overflow-hidden group cursor-pointer"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

      {/* Title positioned at bottom-left */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <h3 className="text-white text-sm sm:text-base font-medium leading-tight text-pretty">{title}</h3>
      </div>
    </div>
  )
}