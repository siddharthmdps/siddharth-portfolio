"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroContent = () => {
  return (
    <motion.div
        initial="hidden"
        animate="visible"
        className='grid grid-cols-1 md:grid-cols-2 items-center justify-center px-20 mt-40 w-full z-[20]'
    >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div variants={slideInFromTop} className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'>
                <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                <h1 className='Welcome-text text-[13px]'>Siddharth Singh Portfolio</h1>
            </motion.div>
            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 font-bold text-white max-w-[600px] w-auto h-auto'
            >
                <span style={{ fontSize: '2em', display: 'inline-block' }} >
                    Hi, I &apos; m
                </span>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-5xl min-h-[6rem]'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Siddharth Singh',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Data Scientist',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Data Engineer',
                            1000,
                            'Full-Stack Developer',
                            1000,
                            'Software Developer',
                            1000
                        ]}
                        wrapper="div"
                        speed={50}
                        repeat={Infinity}
                    />
                </span>
            </motion.div>
            <motion.p
            variants={slideInFromLeft(0.8)}
            className='my-5 max-w-[600px] text-gray-400 text-3xl'
            >
                <span>
                    I specialize in {" "}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>bringing ideas to reality</span>
                </span>
            </motion.p>
            <motion.a
            variants={slideInFromLeft(1)}
            className='px-6 py-3 w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  rounded-full mr-4 bg-white hover:bg-slate-200 text-white cursor-pointer'
            href='/SiddharthSinghResume.pdf' target="_blank"
            >
                Download Resume
            </motion.a>
                
            </div>
            <motion.div
            variants={slideInFromRight(0.8)}
            className='w-full h-full flex justify-center items-center'
            >
                <img src='/CoderWithCarpet.png'
                alt="work icons"
                height={650}
                width={650} 
                className='scale-150' 
                loading="lazy"
                />
            </motion.div>
    </motion.div>
  )
}

export default HeroContent