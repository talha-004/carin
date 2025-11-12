import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between   bg-white">
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-6  ml-0 p-10 lg:p-0 lg:ml-26 px-5">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Discover the world on wheels with our car rental service
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Choose from a wide range of cars that fit your style and budget.
          Experience the freedom of the open road with our reliable and
          efficient rental service.
        </p>

        {/* Contact Button */}
        <div className="flex items-center space-x-3 pt-4">
          <div className="flex items-center space-x-3 border-t border-gray-300 pt-4">
            <button className="flex items-center text-lg text-gray-800 font-medium hover:text-green-700 transition">
              <span className="bg-black text-white p-2 rounded-full mr-2">
                <ArrowRight size={18} />
              </span>
              Contact us
            </button>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className=" flex justify-center ">
        <img
          src="/assets/pngegg.png"
          alt="Car"
          className="w-full max-w-lg md:max-w-2xl object-contain"
        />
      </div>
    </section>
  );
};
export default HeroSection;
