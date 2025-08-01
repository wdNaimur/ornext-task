import React from "react";

const Footer = () => {
  return (
    <footer className="text-white px-4 container max-w-6xl mx-auto font-poppins">
      <div className="flex flex-col md:flex-row justify-between gap-10 border-t border-gray-700 pb-8 pt-10">
        {/* Left Column */}
        <div className="flex-1">
          <p className="text-xs text-gray-400 uppercase mb-1">Opening Hours</p>
          <p className="text-lg font-semibold mb-4">24/7</p>
          <p className="text-xs text-gray-400 uppercase mb-1">Email</p>
          <p className="text-sm font-medium">ceo@ornext.net</p>
        </div>

        {/* Middle Column 1 */}
        <div className="flex-1">
          <ul className="space-y-2">
            <li className="font-medium">Carrier +</li>
            <li className="text-sm text-gray-300 opacity-60">Support</li>
            <li className="text-sm text-gray-300 opacity-60">
              Business Partner
            </li>
            <li className="text-sm text-gray-300 opacity-60">PDF Portfolio</li>
          </ul>
        </div>

        {/* Middle Column 2 */}
        <div className="flex-1">
          <ul className="space-y-2">
            <li className="font-medium">Carrier +</li>
            <li className="text-sm text-gray-300 opacity-60">Support</li>
            <li className="text-sm text-gray-300 opacity-60">
              Business Partner
            </li>
            <li className="text-sm text-gray-300 opacity-60">PDF Portfolio</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="flex-1 text-right space-y-8">
          <p className="text-sm md:text-base font-medium min-w-80">
            Transforming Ideas into Intelligent <br /> Solutions
          </p>
          <small className="opacity-60">
            © {new Date().getFullYear()} — Copyright
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
