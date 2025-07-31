import React from "react";

const HeroSection = () => {
  return (
    <header className="max-w-6xl container  mx-auto ps-4 select-none overflow-x-hidden">
      <div className="relative md:min-h-[810px] sm:min-h-[800px] min-h-[615px] ">
        {/* image box  */}
        <div className="absolute right-0 w-2/3 h-full sm:scale-100 sm:top-0 -top-16 scale-75">
          <span className="absolute top-0 right-0">
            <img
              className="min-w-100"
              src="/hero/top-arrow.png"
              alt="top arrow"
            />
          </span>
          <div className="slow-spin duration-[100s] w-fit absolute top-80 right-44">
            <img className="min-w-100" src="/hero/wheel.png" alt="wheel" />
          </div>
          <span className="top-128 absolute right-86">
            <img
              className="min-w-80"
              src="/hero/bottom-arrow.png"
              alt="bottom-arrow"
            />
          </span>
        </div>
      </div>
      {/* heading  */}
      <h1 className="font-goodly 2xl:text-[160px] md:text-9xl  lg:text-[150px] sm:text-8xl text-7xl text-white flex flex-col md:pt-36 md:pb-40 py-28 absolute top-0 z-10 mt-18">
        <span>"What's next</span> <span className="ms-12">in tech."</span>
      </h1>
    </header>
  );
};

export default HeroSection;
