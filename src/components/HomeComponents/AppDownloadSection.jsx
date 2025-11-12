import React from "react";
import { Zap, Apple, Play } from "lucide-react";

const AppDownloadSection = () => {
  return (
    <section className="relative bg-green-700 text-white pt-20 pb-40 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* LEFT SIDE - Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold flex items-center gap-2">
            Download our mobile app
            <Zap size={28} className="text-yellow-400" />
          </h2>

          <p className="text-gray-100 text-lg leading-relaxed max-w-md">
            Get exclusive access to car rentals with our mobile app. Download
            now and experience convenience on the go.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            {/* App Store */}
            <button className="flex items-center bg-white text-black px-4 py-3 rounded-full gap-3 shadow-md hover:scale-105 transition">
              <Apple size={26} className="text-black" />
              <div className="text-left leading-tight">
                <p className="text-xs text-gray-600">Download on the</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </button>

            {/* Google Play */}
            <button className="flex items-center bg-white text-black px-4 py-3 rounded-full gap-3 shadow-md hover:scale-105 transition">
              <Play size={26} className="text-green-600" />
              <div className="text-left leading-tight">
                <p className="text-xs text-gray-600">Get it on</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Phones */}
        <div className="md:w-1/2 flex items-end justify-center relative mt-16 md:mt-0">
          {/* iPhone */}
          <img
            src="/assets/iPhone14ProMax.png"
            alt="iPhone App Preview"
            className="w-56 md:w-64 relative z-10 drop-shadow-2xl md:-mr-10 -mb-32"
          />
          {/* Samsung */}
          <img
            src="/assets/Samsung.png"
            alt="Samsung App Preview"
            className="w-56 md:w-64 relative z-20 drop-shadow-2xl -mb-32 md:-ml-10"
          />
        </div>
      </div>

      {/* White Background Extension */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-white"></div>
    </section>
  );
};

export default AppDownloadSection;
