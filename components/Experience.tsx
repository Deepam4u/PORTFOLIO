import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl pl-6">
        Experience
      </h3>

      <div className="w-full mt-20 flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-transparent scrollbar-thin xl:space-x-14 ">
      <ExperienceCard
          clogo="./logo.webp"
          title="Web Developer Intern"
          company="at, Academy Skill Development"
          point1="Contributed to the development of an appointment booking system using MERN stack technology. Implemented a user-friendly platform with widespread applications across various industries."
          point2="Implemented interactive features using React JS and Redux for to optimize data display and enhance user engagement."
          startDate="June, 2022"
          endDate="July, 2022"
      />

      {/* <ExperienceCard
          clogo="/companyLogo/zeza-logo.png"
          title="Web Developer Intern"
          company="at, Academy Skill Development"
          point1="Contributed to the development of an appointment booking system using MERN stack technology. Implemented a user-friendly platform with widespread applications across various industries."
          point2="Implemented interactive features using React JS and Redux for to optimize data display and enhance user engagement."
          startDate="April, 2023"
          endDate="July, 2023"
      />
         */}
      </div>
    </motion.div>
  );
}
