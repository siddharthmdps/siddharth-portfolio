import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import { Connect } from "@/constants";
import Link from "next/link";
import { Aldrich } from 'next/font/google'

const aldrich = Aldrich({ weight: '400', subsets: ['latin'] })

const Footer = () => {
  return (
    // <div className="w-full h-full shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md text-gray-200 p-[15px] absolute">
    //     <div className="w-full flex flex-col items-center justify-center m-auto">
    //         <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
    //             <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
    //                 <div className="font-bold text-[16px]">Community</div>
    //                 <p className="flex flex-row items-center my-[15px] cursor-pointer">
    //                     <FaYoutube />
    //                     <span className="text-[15px] ml-[6px]">Youtube</span>    
    //                 </p>
    //                 <p className="flex flex-row items-center my-[15px] cursor-pointer">
    //                     <RxGithubLogo />
    //                     <span className="text-[15px] ml-[6px]">Github</span>    
    //                 </p>
    //                 <p className="flex flex-row items-center my-[15px] cursor-pointer">
    //                     <RxDiscordLogo />
    //                     <span className="text-[15px] ml-[6px]">Discord</span>    
    //                 </p>
    //             </div>
    //             <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
    //                 <div className="font-bold text-[16px]">Social Media</div>
    //                 <p className="flex flex-row items-center my-[15px] cursor-pointer">
    //                     <FaYoutube />
    //                     <span className="text-[15px] ml-[6px]">Instagram</span>    
    //                 </p>
    //                 <p className="flex flex-row items-center my-[15px] cursor-pointer">
    //                     <RxGithubLogo />
    //                     <span className="text-[15px] ml-[6px]">Twitter</span>    
    //                 </p>
    //                 <p className="flex flex-row items-center my-[15px] cursor-pointer">
    //                     <RxDiscordLogo />
    //                     <span className="text-[15px] ml-[6px]">Linkedin</span>    
    //                 </p>
    //             </div>
    //             <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
    //                 <div className="font-bold text-[16px]">About</div>
    //                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
    //                     <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
    //                 </p>
    //                 <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
    //                     <span className="text-[15px] ml-[6px]">Learning about me</span>    
    //                 </p>
    //                 <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
    //                     <span className="text-[15px] ml-[6px]">mifwebchain@gmail.com</span>    
    //                 </p>
    //             </div>
    //         </div>

    //         <div className="mb-[20px] text-[15px] text-center">
    //             &copy; Siddharth Singh 2023 Inc. All rights reserved
    //         </div>
    //     </div>
    // </div>
    <div className={`w-[100vw] z-[20] text-gray-200 absolute shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md ${aldrich.className}`}>
        <div className=" grid max-md:grid-cols-1 grid-cols-6">
            <div className="flex justify-center">
                <img src="/SiddharthSingh.png" alt="Siddharth Singh" height={250} width={250} className="object-cover" loading="lazy" />
            </div>
            <div className="p-4 md:col-span-4 flex justify-between items-center overflow-hidden">
                <div className="pl-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl font-extrabold">
                        About Me
                    </span>
                    <div>
                        Namaste 🙏, I am Siddharth Singh and I was born and brought up in India 🇮🇳 but currently I am residing in Singapore 🇸🇬 . My journey in programming and web development commenced during my 6th-class in high school. I initially delved into languages like C and C++, and presently, I am engrossed in mastering Python and NextJS for both Data Science and Full Stack Development. The vast expanse of knowledge continually beckons, prompting me to embrace new insights daily.
                    </div>
                    <div>
                        In addition to my coding pursuits, I find great pleasure in exploring embedded systems and undertaking electronics projects, particularly those entailing IoT and cloud computing.
                    </div>
                    <div>
                        On a personal note, I indulge in the joys of cooking, relish engaging in Valorant alongside my friends, and have a penchant for discovering new places and savoring diverse cuisines. If any of these facets resonate with you, I would be delighted to connect with you.
                    </div>
                </div>
            </div>
            <div className="flex flex-col overflow-clip">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl font-extrabold text-center">
                    Connect
                </span>
                <div>
                    {Connect.map((element,idx)=>
                    <Link key={idx} className="flex items-center cursor-pointer hover:underline max-md:pl-8" href={element.to} target="_blank">
                        <img src={element.src} alt={element.name} height={30} width={30} loading="lazy"/>
                        <span className="pl-2">{element.id}</span>
                    </Link>)}
                </div>
            </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center">&copy; Siddharth Singh 2023 Inc. All rights reserved</div>
    </div>
  )
}

export default Footer