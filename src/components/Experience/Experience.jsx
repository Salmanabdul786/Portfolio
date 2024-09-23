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
    des:"Wipro Limited is a leading global information technology, consulting, and business process services company. Headquartered in Bangalore, India, Wipro provides a wide range of services including IT solutions, digital strategy, and consulting across various industries like banking, healthcare, and manufacturing. "
  },
  {
    title: "Course Developer",
    company: "Career Crafter India",
    period: "2020 – 2021",
    type: "Internship ",
    logo: "/cc.jpeg", // Update with the actual path for the logo
    des:"Wipro Limited is a leading global information technology, consulting, and business process services company. Headquartered in Bangalore, India, Wipro provides a wide range of services including IT solutions, digital strategy, and consulting across various industries like banking, healthcare, and manufacturing."
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
