"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tilt } from '@jdion/tilt-react';
import { MdArrowOutward as Arrow } from "react-icons/md";

const ProjectCard = ({
  title,
  description,
  image,
  thumbnail,
  smalldesc,
  name, // Add a slug to identify the project for routing
  technology,
}) => {
  return (
    <Tilt className=" bg-transparent border border-slate-200 dark:border-slate-500 mx-auto flex flex-row items-start justify-between p-3 px-[5%] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div>
        <Link href={`/Projects/${name}`} >
          <Image
            src={thumbnail}
            alt={title}
            width={100}
            height={100}
            className="rounded-xl shadow-md"
          />
          <h3 className="text-2xl font-bold my-2">
            {title}
          </h3>
          <p className=" text-sm text-slate-400">{smalldesc}</p>
          <Link href={`/Projects/${name}`} className=" bg-jade-500 rounded-full px-5 py-1 flex items-center justify-center text-white my-2">Check <Arrow /></Link>
        </Link>
      </div>
    </Tilt>
  );
};

export default ProjectCard;
