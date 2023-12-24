import Image from "next/image";
import React from "react";

// interface Props {
//   src: string;
//   title: string;
//   description: string;
// }

const ProjectCard = ({ src, title, description, to, tags }) => {
  return (
    <a className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] absolute z-[20]" href={to}
     target={to.startsWith('#')?"":"_blank"}>
      <img
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
        loading="lazy"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 mb-5">{description}</p>
        {tags.map((element, idx)=>
          <span key={idx} className="mt-2 text-gray-300 text-xs border border-purple-500 p-2 rounded-full mr-2">{element}</span>
        )}
      </div>
    </a>
  );
};

export default ProjectCard;
