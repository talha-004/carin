import React from "react";
import { Gauge, Settings, Users, Fuel, ArrowRight } from "lucide-react";

const ImpressiveCollection = () => {
  const cars = [
    {
      id: 1,
      name: "BMW M8 Coupe 2022",
      price: 78.9,
      image: "/assets/bmw-m8.png",
      mileage: "4,000",
      type: "Auto",
      capacity: "4 Person",
      fuel: "Electric",
    },
    {
      id: 2,
      name: "BMW X7 M50i 2022",
      price: 78.9,
      image: "/assets/bmw-x7.png",
      mileage: "4,000",
      type: "Auto",
      capacity: "4 Person",
      fuel: "Electric",
    },
    {
      id: 3,
      name: "Porsche Cayenne GTS 2022",
      price: 78.9,
      image: "/assets/porsche-cayenne.png",
      mileage: "4,000",
      type: "Auto",
      capacity: "4 Person",
      fuel: "Electric",
    },
    {
      id: 4,
      name: "Audi A8 L 2022",
      price: 78.9,
      image: "/assets/audi-a8.png", // make sure to add this image in /public/assets
      mileage: "4,000",
      type: "Auto",
      capacity: "4 Person",
      fuel: "Electric",
    },
    {
      id: 5,
      name: "Nissan Maxima Platinum 2022",
      price: 78.9,
      image: "/assets/nissan-maxima.png",
      mileage: "4,000",
      type: "Auto",
      capacity: "4 Person",
      fuel: "Electric",
    },
    {
      id: 6,
      name: "Porsche Cayenne GTS 2022",
      price: 78.9,
      image: "/assets/porsche-black.png",
      mileage: "4,000",
      type: "Auto",
      capacity: "4 Person",
      fuel: "Electric",
    },
  ];

  return (
    <section>
      <div className="bg-gray-50 py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Our Impressive Collection of Cars
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Ranging from elegant sedans to powerful sports cars, all carefully
          selected to provide our customers with the ultimate driving
          experience.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button className="bg-green-700 text-white font-medium px-6 py-3 rounded-full hover:bg-green-800 transition">
            Popular Car
          </button>
          <button className="bg-white text-gray-800 border border-gray-300 font-medium px-6 py-3 rounded-full hover:bg-green-100 transition">
            Luxury Car
          </button>
          <button className="bg-white text-gray-800 border border-gray-300 font-medium px-6 py-3 rounded-full hover:bg-green-100 transition">
            Vintage Car
          </button>
          <button className="bg-white text-gray-800 border border-gray-300 font-medium px-6 py-3 rounded-full hover:bg-green-100 transition">
            Family Car
          </button>
          <button className="bg-white text-gray-800 border border-gray-300 font-medium px-6 py-3 rounded-full hover:bg-green-100 transition">
            Off-Road Car
          </button>
        </div>
      </div>
      <div className="bg-gray-50 py-16 px-6 md:px-16">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-3xl shadow-md p-5 flex flex-col items-center"
            >
              <img
                src={car.image}
                alt={car.name}
                className="rounded-2xl mb-5 w-full h-56 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {car.name}
              </h3>
              <p className="text-2xl font-extrabold mt-2">
                ${car.price.toFixed(2)}
                <span className="text-gray-500 text-sm font-normal"> /day</span>
              </p>

              {/* Car Info Icons */}
              <div className="flex justify-between items-center bg-gray-100 rounded-xl px-4 py-3 mt-4 w-full">
                <div className="flex flex-col items-center text-gray-700 text-sm">
                  <Gauge size={18} />
                  <span>{car.mileage}</span>
                </div>
                <div className="flex flex-col items-center text-gray-700 text-sm">
                  <Settings size={18} />
                  <span>{car.type}</span>
                </div>
                <div className="flex flex-col items-center text-gray-700 text-sm">
                  <Users size={18} />
                  <span>{car.capacity}</span>
                </div>
                <div className="flex flex-col items-center text-gray-700 text-sm">
                  <Fuel size={18} />
                  <span>{car.fuel}</span>
                </div>
              </div>

              {/* Rent Button */}
              <button className="mt-6 border border-gray-900 text-gray-900 font-medium px-8 py-2 rounded-full hover:bg-green-700 hover:text-white transition">
                Rent Now
              </button>
            </div>
          ))}
        </div>

        {/* See all cars button */}
        <div className="text-center mt-12">
          <button className="bg-green-700 text-white font-semibold px-8 py-3 rounded-full hover:bg-green-800 transition flex items-center mx-auto">
            See all Cars <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImpressiveCollection;
