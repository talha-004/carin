import React from "react";
import { Search, CalendarCheck2, Smile } from "lucide-react";

const HowItWorks = () => {
  return (
    <section>
      <div className="bg-gray-50 py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          How it woks
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Renting a car has never been easier. Our streamlined process makes it
          simple for you to book and confirm your vehicle of choice online
        </p>
      </div>
      <div className="relative bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative">
          {/* LEFT: Steps */}
          <div className="flex flex-col space-y-6 md:w-1/2 z-10 -mr-24">
            {/* Step 1 */}
            <div className="flex items-start bg-white shadow-sm rounded-2xl p-6 border border-gray-200">
              <div className="bg-gray-100 p-3 rounded-xl mr-4">
                <Search size={24} className="text-gray-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Browse and select
                </h3>
                <p className="text-gray-600 mt-1 text-sm">
                  Choose from our wide range of premium cars, select the pickup
                  and return dates and locations that suit you best.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start bg-white shadow-sm rounded-2xl p-6 border border-gray-200">
              <div className="bg-gray-100 p-3 rounded-xl mr-4">
                <CalendarCheck2 size={24} className="text-gray-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Book and confirm
                </h3>
                <p className="text-gray-600 mt-1 text-sm">
                  Book your desired car with just a few clicks and receive an
                  instant confirmation via email or SMS.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start bg-white shadow-sm rounded-2xl p-6 border border-gray-200">
              <div className="bg-gray-100 p-3 rounded-xl mr-4">
                <Smile size={24} className="text-gray-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Enjoy your ride
                </h3>
                <p className="text-gray-600 mt-1 text-sm">
                  Pick up your car at the designated location and enjoy your
                  premium driving experience with our top-quality service.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Car Image */}
          <div className="relative  p-20 bg-gray-100 rounded-3xl border border-gray-300">
            {/* Light rounded background behind car */}
            <div className="absolute top-10 right-0 w-[90%] h-[90%] "></div>

            <img
              src="/assets/jeep.png"
              alt="Jeep"
              className="relative z-10 w-full md:w-[90%] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
