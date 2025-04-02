import React from "react";
import NavbarSidebar from "./NavbarSidebar";

const HomePage = () => {
  return (
    <NavbarSidebar>
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
        {/* Left side text content */}
        <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
          <h1 className="text-5xl font-bold text-teal-800 leading-tight mb-6">
            Innovative Solutions <br />
            for Your Healthcare Needs
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Discover cutting-edge healthcare solutions tailored to your unique
            needs. Trust our expertise for comprehensive diagnostics, advanced
            therapies, and top-quality medical equipment.
          </p>
        </div>

        {/* Right side images */}
        <div className=" gap-4">
          <div className="rounded-lg overflow-hidden h-[400px]">
            <img
              src="https://rsdcollege.in/images/about/abt.jpg"
              alt="Doctor with patient"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </NavbarSidebar>
  );
};

export default HomePage;
