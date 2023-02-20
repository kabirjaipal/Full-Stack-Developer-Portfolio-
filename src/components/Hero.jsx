import React from "react";

const Hero = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Full Stack Developer
          </h1>
          <p className="mt-5 text-xl text-gray-500 capitalize">
            I build awesome web applications using the latest technologies.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="bg-indigo-500 transition duration-500 hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-md"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
