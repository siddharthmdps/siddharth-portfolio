import { Connect } from "@/constants";
import Link from "next/link";
import React from "react";
import { Luckiest_Guy, Chakra_Petch } from 'next/font/google'

const luckiest_Guy = Luckiest_Guy({ weight: '400', subsets: ['latin'] })
const chakra_Petch = Chakra_Petch({ weight: '700', subsets: ['latin'] })

const Navbar = () => {
  return (
    <div className="w-[100vw] p-3 fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center justify-center md:justify-start"
        >
          <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-3xl ${chakra_Petch.className}`}>
            SIDDHARTH SINGH
          </span>
        </a>

        <div className="flex items-center justify-center">
          <div className="flex items-center justify-between w-full h-auto md:border md:border-[#7042f861] md:bg-[#0300145e] md:mr-[15px] md:px-[20px] md:py-[10px] md:rounded-full text-gray-200 max-md:underline max-md:my-3">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#EducationAndExperience" className="cursor-pointer">
              Experience
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 justify-between md:justify-end items-center">
          {Connect.map((connect) => (
            <a key={connect.name} href={connect.to} target="_blank">
              <img
                src={connect.src}
                alt={connect.name}
                width={40}
                height={40}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
