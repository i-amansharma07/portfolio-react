import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";


const Tech = () => {
  return (
    
    <div>
    <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText} text-center`}>
      what i know
    </p>
    <h2 className={`${styles.sectionHeadText} text-center`}>
     Skills
    </h2>
  </motion.div>
    <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-32 h-32' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default SectionWrapper(Tech, "skills");
