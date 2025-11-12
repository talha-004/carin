const brands = [
  { name: "Toyota", logo: "/assets/Group 71.png" },
  { name: "Ford", logo: "/assets/Group 72.png" },
  { name: "Tesla", logo: "/assets/Group 73.png" },
  { name: "Volkswagen", logo: "/assets/Group 74.png" },
  { name: "Honda", logo: "/assets/Group 75.png" },
  { name: "Nissan", logo: "/assets/Group 76.png" },
  { name: "Chevrolet", logo: "/assets/Group 77.png" },
  { name: "BMW", logo: "/assets/Group 78.png" },
  { name: "Mercedes-Benz", logo: "/assets/Group 79.png" },
  { name: "Hyundai", logo: "/assets/Group 80.png" },
  { name: "Audi", logo: "/assets/Group 81.png" },
  { name: "KIA", logo: "/assets/Group 82.png" },
];

const RentByBrands = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900">
          Rent by Brands
        </h2>
        <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium">
          View all <span className="text-lg">→</span>
        </button>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="flex flex-col items-center justify-center bg-gray-50 hover:bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-14 object-contain mb-3 grayscale hover:grayscale-0 transition duration-300"
            />
            <p className="text-gray-800 font-medium text-sm md:text-base">
              {brand.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RentByBrands;
