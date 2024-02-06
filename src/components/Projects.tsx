import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

export const Projects = () => {
  return (
    <section className="md:p-8 flex flex-col items-center">
      <div>
        <h1 className="text-4xl pb-6">Projects</h1>
      </div>
      <ul className="md:p-4 lg:p-16 flex flex-col items-center w-full">
        <ScrollAnimation
          animateIn="fadeIn"
          className=" bg-orange rounded w-full xl:w-3/4 p-8 shadow-lg mb-8 bg-gradient-to-r from-orange to-fadedOrange"
        >
          <div>
            <p className="text-3xl text-blue-200">Address Book</p>
          </div>
          <p className="py-2">
            <span className="text-blue-200">Tech stack:</span> React,
            Python/Flask/SQLAlchemy and SQLite
          </p>

          <a
            href="https://github.com/jvandy83/address-book.git"
            className="py-2 cursor-pointer text-blue-200"
          >
            View the source code
          </a>
          <div className="flex justify-center pt-4">
            <a href="https://contact-saver.com">
              <button className="border p-2 rounded hover:bg-darkPurple hover:text-orange hover:border-transparent hover:-translate-y-px active:translate-y-px">
                Have a look
              </button>
            </a>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          className=" bg-orange rounded w-full xl:w-3/4 p-8 shadow-lg bg-gradient-to-l from-orange to-fadedOrange"
        >
          <div>
            <p className="text-3xl text-blue-200">Custom Color Picker</p>
          </div>
          <p className="py-2">
            <span className="text-blue-200">Tech stack:</span> React
          </p>

          <a
            href="https://github.com/jvandy83/custom-color-app"
            className="py-2 cursor-pointer text-blue-200"
          >
            View the source code
          </a>
          <div className="flex justify-center pt-4">
            <a
              href="https://jvandy83.github.io/custom-color-app/#/"
              className="border p-2 rounded hover:bg-darkPurple hover:text-orange hover:border-transparent hover:-translate-y-px active:translate-y-px"
            >
              Have a look
            </a>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          className=" bg-orange rounded w-full xl:w-3/4 p-8 mt-8 shadow-lg bg-gradient-to-r from-orange to-fadedOrange"
        >
          <div>
            <p className="text-3xl text-blue-200">Weather App</p>
          </div>
          <p className="py-2">
            <span className="text-blue-200">Tech stack:</span> React,
            TailwindCSS
          </p>
          <a
            href="https://weather-app.co"
            className="py-2 cursor-pointer text-blue-200"
          >
            View the source code
          </a>
          <div className="flex justify-center pt-4">
            <a
              href="https://weather-app.co"
              className="border p-2 rounded hover:bg-darkPurple hover:text-orange hover:border-transparent hover:-translate-y-px active:translate-y-px"
            >
              Have a look
            </a>
          </div>
        </ScrollAnimation>
      </ul>
    </section>
  );
};
