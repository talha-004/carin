import React from "react";
import { BadgeCheck, DollarSign, CalendarCheck2 } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="bg-green-700  text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Our Services & Benefits
        </h2>
        <p className="text-gray-100 max-w-3xl mx-auto text-lg leading-relaxed mb-16">
          To make renting easy and hassle-free, we provide a variety of services
          and advantages. We have you covered with a variety of vehicles and
          flexible rental terms.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-white text-green-700 p-4 rounded-full">
              <BadgeCheck size={30} />
            </div>
            <h3 className="text-lg font-semibold">Quality Choice</h3>
            <p className="text-gray-100 leading-relaxed text-sm max-w-sm">
              We offer a wide range of high-quality vehicles to choose from,
              including luxury cars, SUVs, vans, and more.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-white text-green-700 p-4 rounded-full">
              <DollarSign size={30} />
            </div>
            <h3 className="text-lg font-semibold">Affordable Prices</h3>
            <p className="text-gray-100 leading-relaxed text-sm max-w-sm">
              Our rental rates are highly competitive and affordable, allowing
              our customers to enjoy their trips without breaking the bank.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-white text-green-700 p-4 rounded-full">
              <CalendarCheck2 size={30} />
            </div>
            <h3 className="text-lg font-semibold">Convenient Online Booking</h3>
            <p className="text-gray-100 leading-relaxed text-sm max-w-sm">
              With our easy-to-use online booking system, customers can quickly
              and conveniently reserve their rental car from anywhere, anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
