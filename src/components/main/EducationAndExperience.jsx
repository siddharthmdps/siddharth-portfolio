"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import { useInView } from 'react-intersection-observer'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdOutlineWork, MdKeyboardDoubleArrowUp } from "react-icons/md";
import { EducationAndExperience as EduExp } from "@/constants";


const EducationAndExperience = () => {
  const {ref, inView} = useInView({
    triggerOnce: true
  })

  const imageVariants = {
      hidden: {opacity: 0},
      visible: {opacity: 1}
  }

  const animationDelay = 0.3
  return (
    <section id="EducationAndExperience">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Education
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Experience
        </motion.div>
        <VerticalTimeline animate={false}>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<MdKeyboardDoubleArrowUp />}
          />
          {EduExp.map((element, idx)=>
            <motion.div
              key={idx}
              ref={ref}
              initial="hidden"
              variants={idx%2==0?slideInFromLeft(idx * animationDelay):slideInFromRight(idx * animationDelay)}
              animate={inView ? "visible" : "hidden"}
              custom={idx}
              transition={{delay: idx * animationDelay}}
            >
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(33, 150, 243, 0.2)', color: '#fff', marginBottom: '1rem' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={element.timeline}
                iconStyle={element.type==='education'?{ background: 'rgb(6, 182, 212)', color: '#fff' }:element.type==='experience'?{ background: 'rgb(168, 85, 247)', color: '#fff' }:{}}
                position={idx%2==0?"left":"right"}
                icon={element.type==='education'?<FaGraduationCap className="scale-150" />:element.type==='experience'?<MdOutlineWork />:''}
                // className="text-red-500 "
                dateClassName="text-6xl"
              >
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl font-extrabold">
                    {element.title}
                </div>
                  <div className="font-extrabold m-1">
                    {element.subTitle}
                  </div>
                  {element.description.map((e, idx2)=>
                    <div key={idx2}>
                      {e}
                    </div>)}
              </VerticalTimelineElement>
            </motion.div>
          )}
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<CiStar />}
          /> 
    </VerticalTimeline>
    </section>
  );
};

export default EducationAndExperience;
