const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Section */}
        <div className="flex flex-col  md:flex-row justify-between gap-12 md:gap-20 mb-12">
          {/* Brand */}
          <div className=" min-w-[250px]">
            <img
              className="w-[120px] mb-4"
              src="/assets/Carin_logo.png"
              alt="logo"
            />
            <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-sm">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>

          {/* Link Sections */}
          <div className="flex flex-wrap   md:flex-nowrap gap-12 md:gap-20 ">
            {/* About */}
            <div>
              <h3 className="text-gray-900 font-semibold text-lg mb-4">
                About
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                <li className="hover:text-green-700 transition cursor-pointer">
                  How it works
                </li>
                <li className="hover:text-green-700 transition cursor-pointer">
                  Featured
                </li>
                <li className="hover:text-green-700 transition cursor-pointer">
                  Partnership
                </li>
                <li className="hover:text-green-700 transition cursor-pointer">
                  Business Relation
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-gray-900 font-semibold text-lg mb-4">
                Community
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                <li className="hover:text-green-700 transition cursor-pointer">
                  Events
                </li>
                <li className="hover:text-green-700 transition cursor-pointer">
                  Blog
                </li>
                <li className="hover:text-green-700 transition cursor-pointer">
                  Podcast
                </li>
                <li className="hover:text-green-700 transition cursor-pointer">
                  Invite a friend
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-gray-900 font-semibold text-lg mb-4">
                Socials
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                <li className="hover:text-green-700 transition cursor-pointer">
                  Discord
                </li>
                <li className="hover:text-green-700 transition cursor-pointer">
                  Instagram
                </li>
                <li className="hover:text-green-700 transition cursor-pointer">
                  Twitter
                </li>
                <li className="hover:text-green-700 transition cursor-pointer">
                  Facebook
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>©2025 Carin. All rights reserved</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-700 transition">
              Privacy & Policy
            </a>
            <a href="#" className="hover:text-green-700 transition">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
