import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

import familyPic from "../assets/images/family-pic.jpeg";

export const Intro = ({ showMore, handleShowMore }) => {
  return (
    <div className="flex flex-col items-center sm:px-2">
      <div className="flex flex-col items-center md:flex-row md:justify-around w-full md:p-16">
        <section>
          <ScrollAnimation animateIn="fadeIn" delay={500}>
            <div>
              <img
                className="w-80 rounded"
                src={familyPic}
                alt="profile-picture"
              />
            </div>
          </ScrollAnimation>
        </section>
        <section className="p-8 lg:p-16 flex items-center flex-col md:w-3/5 rounded">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl pb-4">Jared Vandeventer</h1>
            <p className="text-xl">Full Stack Software Engineer</p>
            <a href="mailto:vanthedev@gmail.com" className="text-blue-300">
              vanthedev@gmail.com
            </a>
            <p>720-470-7493</p>

            <p className="py-4 leading-8">
              I'm a passionate developer that loves the puzzle. I'm of the
              self-taught variety. That being said, I've enjoyed the tutilege of
              countless instructors and content creators on various platforms
              across the web during my intial entry into technology and to this
              day.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
