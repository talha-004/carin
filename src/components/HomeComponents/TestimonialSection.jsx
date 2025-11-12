import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            What Our Customers Say
          </h2>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition">
              <ArrowLeft size={20} className="text-gray-700" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition">
              <ArrowRight size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-gray-700 text-xl font-semibold leading-relaxed  mb-8">
          “I was really impressed with the level of service I received from this
          car rental company. The process was smooth and easy, and the car I
          rented was in excellent condition. The staff was friendly and helpful,
          and I felt well taken care of throughout my rental period. I would
          definitely recommend this company to anyone looking for a premium car
          rental experience.”
        </blockquote>

        {/* User Info */}
        <div className="flex items-center space-x-4">
          <img
            src="/assets/customer1.jpg"
            alt="Customer"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="text-gray-900 font-semibold">Mehmood Al Zahrani</h4>
            <p className="text-gray-500 text-sm">From Jeddah</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
