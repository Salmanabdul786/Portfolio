import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './experience.scss';

const experiences = [
  {
    title: "Project Engineer",
    company: "Wipro Limited",
    period: "2021 - Present",
    type: "Full Time",
    logo: "/wipro.jpeg", // Update with the actual path for the logo,
    des:"Worked as a developer, enhancing web applications by transitioning front-end functionality to ReactJS and optimizing back-end processes. Developed reusable components, integrated RESTful APIs, and improved SQL database performance, ensuring efficient project execution and timely milestone delivery. "
  },
  {
    title: "Course Developer",
    company: "Career Crafter India",
    period: "2020 – 2021",
    type: "Internship ",
    logo: "/cc.jpeg", // Update with the actual path for the logo
    des:"Served as a Course Developer, creating and enhancing undergraduate courses in diverse fields like Information Technology and BFSI, while collaborating with experts to improve student engagement through interactive simulations and course revamps."
  }
];

const Experience= () => {
  return (
    <div className="experience-slider-wrapper">
       <div className="progress">
        <h1>Experience</h1>
      </div>
      <div className="experience-section">
      {experiences.map((experience, index) => (
        <div className="experience-card" key={index}>
          <img src={experience.logo} alt={experience.company} className="experience-logo" />
          <div className="experience-details">
            <h3>{experience.title}</h3>
            <p>{experience.company}</p>
            <p>{experience.period} <span>•</span> {experience.type}</p>
            <p>{experience.des}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Experience;
