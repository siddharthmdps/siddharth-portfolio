"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { SparklesIcon, StarIcon } from '@heroicons/react/24/solid'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
// interface Props {
//     src: string;
//     width: number;
//     height: number;
//     index: number;
// }

const SkillDataProvider = ({ src, width, height, index, skill_name}) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.3
  return (
    <span className='hover:bg-slate-100'>
  <motion.div
  ref={ref}
  initial="hidden"
  variants={imageVariants}
  animate={inView ? "visible" : "hidden"}
  custom={index}
  transition={{delay: index * animationDelay}}
  className='flex justify-center h-[90px] w-auto text-center mb-2'
  >
    <img
      src={src}
      width={width}
      height={height}
      alt={skill_name}
      className='object-contain'
      loading="lazy"
    />
  </motion.div>
  {/* <span className='text-red-500'>
    {skill_name}
    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            skill_name,
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                        ]}
                        wrapper="span"
                        speed={50}
                        // style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
    </span> */}
    <motion.div
          // variants={slideInFromTop}
                  ref={ref}
          initial="hidden"
          variants={imageVariants}
          animate={inView ? "visible" : "hidden"}
          custom={index}
          transition={{delay: index * animationDelay}}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <StarIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            {skill_name}
          </h1>
        </motion.div>
    </span>
  )
}

export default SkillDataProvider