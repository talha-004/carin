import React from "react";
const providers = [
  {
    name: "Key Car Rental",
    logo: "/assets/1f61c67e5b76ce97a72d9131151c3d5c5ecffc8b.png",
  },
  { name: "Europcar", logo: "/assets/main-logo.569c225 1.png" },
  {
    name: "Budget",
    logo: "/assets/7c7dcc293eb55a2eaf50fbf92a072861f828d3b4.png",
  },
  {
    name: "Hertz",
    logo: "/assets/d74a9ad62f9b8c9e58a625c14d3ea1a61e4d76dd.png",
  },
  { name: "Lumi", logo: "/assets/lumi-logo 1.png" },
  {
    name: "Theeb",
    logo: "/assets/9c8dceb03d4bdd5a86362b1c7a06edbf6e3f5acb.png",
  },
  { name: "Yelo", logo: "/assets/logo 1.png" },
  {
    name: "Rent2You",
    logo: "/public/assets/48a96c259e2b6f13a9bb4d55f45a94fcbbe08b56.png",
  },
  {
    name: "Sixt",
    logo: "/assets/8a93c836e6b2a82a3d7f8bfc6daee5aa851430f7.png",
  },
  {
    name: "First Class Rent a Car",
    logo: "/assets/6735ba91a2ddf2a4f55f0cc34516a2299b21f134.png",
  },
];
function RentByProviders() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg font-semibold text-gray-800">
          Rent by Providers
        </h2>
        <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
          View all
          <span className="text-lg">→</span>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
        {providers.map((provider) => (
          <div
            key={provider.name}
            className="flex justify-center items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition"
          >
            <img
              src={provider.logo}
              alt={provider.name}
              className="max-h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default RentByProviders;
