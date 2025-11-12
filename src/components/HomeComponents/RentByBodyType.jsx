const bodyTypes = [
  { name: "SUV", icon: "/assets/suv-red 1.png" },
  { name: "Crossover", icon: "/assets/crossover-red 1.png" },
  { name: "Wagon", icon: "/assets/wagon-red 1.png" },
  { name: "Family MBP", icon: "/assets/mpv-red 1.png" },
  { name: "Sport Coupe", icon: "/assets/sport-coupe-red 1.png" },
  { name: "Compact", icon: "/assets/compact-red 1.png" },
  { name: "Coup", icon: "/assets/sport-coupe-red 1.png" },
  { name: "BMW", icon: "/assets/pickup-red 1.png" },
  { name: "Sedan", icon: "/assets/sedan-red 1.png" },
  { name: "Limousine", icon: "/assets/wagon-red 1.png" },
  { name: "Convertible", icon: "/assets/convertible-red 1.png" },
  { name: "Crossover", icon: "/assets/crossover-red 1.png" },
];

const RentByBodyType = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900">
          Rent by Body Type
        </h2>
        <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium">
          View all <span className="text-lg">→</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {bodyTypes.map((type) => (
          <div
            key={type.name}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50 shadow-sm border transition-all duration-300
              ${
                type.active
                  ? "border-blue-500 bg-white shadow-md"
                  : "border-transparent hover:border-gray-300 hover:bg-white"
              }`}
          >
            <img
              src={type.icon}
              alt={type.name}
              className="max-h-14 object-contain mb-3"
            />
            <p className="text-gray-800 font-medium text-sm md:text-base">
              {type.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RentByBodyType;
