import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, propertyImg, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={propertyImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <h3 className="text-2xl text-white tracking-widest">{title}</h3>
        <p className="pb-4 pt-2 text-white">React JS</p>
        <Link href={projectUrl}>
          <p className="py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
