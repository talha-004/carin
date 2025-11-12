import React from "react";
import { MapPin, CalendarDays, ArrowRight } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
      {/* Pick-up Location */}
      <div className="flex flex-col w-full md:w-1/4">
        <label className="text-gray-700 text-sm font-medium mb-2">
          Pick-up Location
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
          <MapPin size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search a location"
            className="w-full outline-none text-gray-700 placeholder-gray-500"
          />
        </div>
      </div>

      {/* Pick-up Date */}
      <div className="flex flex-col w-full md:w-1/4">
        <label className="text-gray-700 text-sm font-medium mb-2">
          Pick-up date
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
          <input
            type="date"
            className="w-full outline-none text-gray-700 placeholder-gray-500"
            defaultValue="2025-12-12"
          />
          <CalendarDays size={18} className="text-gray-500 ml-2" />
        </div>
      </div>

      {/* Drop-off Location */}
      <div className="flex flex-col w-full md:w-1/4">
        <label className="text-gray-700 text-sm font-medium mb-2">
          Drop-off Location
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
          <MapPin size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search a location"
            className="w-full outline-none text-gray-700 placeholder-gray-500"
          />
        </div>
      </div>

      {/* Drop-off Date */}
      <div className="flex flex-col w-full md:w-1/4">
        <label className="text-gray-700 text-sm font-medium mb-2">
          Drop-off date
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
          <input
            type="date"
            className="w-full outline-none text-gray-700 placeholder-gray-500"
            defaultValue="2025-12-12"
          />
          <CalendarDays size={18} className="text-gray-500 ml-2" />
        </div>
      </div>

      {/* Find Vehicle Button */}
      <button className="w-full md:w-auto bg-green-700 text-white font-semibold px-6 py-3 rounded-full flex items-center justify-center hover:bg-green-800 transition">
        Find a Vehicle <ArrowRight size={18} className="ml-2" />
      </button>
    </div>
  );
};

export default SearchBar;
