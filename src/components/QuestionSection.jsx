import React from "react";

const QuestionSection = () => {
  return (
    <section className="text-white container max-w-6xl px-4 mx-auto flex flex-col md:flex-row gap-y-8 justify-between items-center py-10">
      {/* Left Content */}
      <div className="flex-1 font-poppins">
        <h2 className="text-3xl md:text-4xl mb-4 font-light md:text-left text-center">
          Do you have
          <br className="md:block hidden" /> any questions?
        </h2>
        <p className="text-sm text-gray-400 mb-6 max-w-md md:text-left text-center">
          Feel free to send us your questions or request a free consultation.
        </p>
        <form className="flex gap-2 md:justify-start justify-center items-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 py-2 rounded-md text-base-100 w-[200px] sm:w-[250px] outline-none border-2 border-gray-200/50 focus:border-blue-500 transition-colors"
          />
          <button
            type="button"
            className="bg-primary-500 hover:bg-primary-500/80 transition text-white font-medium px-4 py-2 cursor-pointer rounded-md min-w-32"
          >
            Get Started
          </button>
        </form>
      </div>

      {/* Right Logo */}
      <div className="flex-1 flex md:justify-end justify-center items-center">
        <img
          className="mr-10 md:block hidden"
          src="/questions-icon/questions-section-arrow-icon.png"
          alt="arrow icon"
        />
        <div className="text-8xl font-goodly text-white">ornext</div>
      </div>
    </section>
  );
};

export default QuestionSection;
