const brands = [
  { name: "Toyota", logo: "/assets/Vector.png" },
  { name: "Ford", logo: "/assets/layer1.png" },
  { name: "Tesla", logo: "/assets/Tesla svg.png" },
  { name: "Volkswagen", logo: "/assets/Volkswagen USA svg.png" },
  { name: "Honda", logo: "/assets/Honda svg.png" },
  { name: "Nissan", logo: "/assets/Nissan USA svg.png" },
  { name: "Chevrolet", logo: "/assets/Chevrolet - png.png" },
  { name: "BMW", logo: "/assets/bmw_logo_icon_145840 1.png" },
  {
    name: "Mercedes-Benz",
    logo: "/assets/mercedes_benz_logo_icon_145798 1.png",
  },
  { name: "Hyundai", logo: "/assets/Hyundai svg.png" },
  { name: "Audi", logo: "/assets/Audi svg.png" },
  { name: "KIA", logo: "/assets/Kia svg.png" },
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
