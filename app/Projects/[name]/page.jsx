"use client";

// pages/projects/[slug].js
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import ProjectDetails from "@/components/Project/ProjectDetails";
import Image from "next/image";
import { useParams } from "next/navigation";
import { IoArrowBack as BackIcon } from "react-icons/io5";
import { IoIosArrowForward as ScrumIcon } from "react-icons/io";
import { FaLink as LinkIcon } from "react-icons/fa6";
import { IoLogoGithub as GithubIcon } from "react-icons/io";
import { TbWorldWww as WebsiteIcon } from "react-icons/tb";
import Link from "next/link";

const ProjectProfile = () => {
  const { name } = useParams();

  // Find the project details based on the slug
  const project = ProjectDetails.find((p) => p.title === name);

  if (!project) return <p>Project not found</p>;

  useEffect(()=>{
    document.scrollingElement.scrollTop=0;
  },[]);

  return (
    <div className=" ml-[8%] text-gray-400 pb-[5%]">
      {/**Back Button */}
      <Link
        href={"/"}
        className="fixed md:absolute cursor-pointer bg-gray-800 p-4 md:p-3 md:text-[20px] text-[22px] text-gray-300 rounded-[50%] left-[2%] top-[12%] md:top-[5%] hover:bg-gray-700 hover:text-gray-50 duration-200"
      >
        <BackIcon />
      </Link>

      {/**Project Title */}
      <div className=" mt-[5%] md:mt-[22%] flex flex-row items-center gap-2">
        <a
          href={project.website}
          target="_blank"
          rel="noreferrer"
          className=" text-[50px] dark:text-white text-black font-bold hover:underline"
        >
          {project.title}
        </a>
        <LinkIcon className="text-[18px]" />
      </div>

      {/**Scrum Master */}
      <div className="my-[1%] mt-[5%] md:my-[4%]  md:mt-[7%] flex flex-row items-center dark:text-gray-400 text-black gap-2 font-semibold">
        <p>Home</p>
        <ScrumIcon />
        <p>Projects</p>
        <ScrumIcon />
        <p className="text-white">{project.title}</p>
      </div>

      <div className="flex flex-row md:flex-col gap-[10%] md:gap-[2%] items-start dark:text-gray-400 text-gray-500 w-[80%] md:w-[97%] my-[3%] font-semibold">
        {/**Description */}
        <div className=" md:my-[5%] ">
          <p className=" text-lg">{project.desc1}</p>
          <p className=" text-lg mt-[2%] md:mt-[3%]">{project.desc2}</p>
        </div>

        {/** Technology */}
        <div className=" md:mt-[6%] overflow-hidden">
          <p className=" text-[23px] dark:text-white text-black">Technologies</p>
          <hr className=" my-[1%] md:w-[40%]" />

          <div className=" flex flex-col md:flex-wrap items-center gap-2 my-[3%] mt-[6%] md:w-[90%]">
            {project.technology.map((technology) => (
              <p key={technology}>{technology},</p>
            ))}
          </div>
        </div>
      </div>

      <div className=" flex flex-row gap-10 md:items-start items-center justify-start md:mt-[6%] text-gray-500">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-gray-800 dark:text-white flex flex-row items-center gap-2 text-xl "
        >
          <GithubIcon className="text-3xl " />
          <p>Github</p>
          <LinkIcon />
        </a>

        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-gray-800 dark:text-white flex flex-row items-center gap-2 text-xl "
        >
          <WebsiteIcon className="text-3xl "/>
          <p>{project.title}</p>
          <LinkIcon />
        </a>
      </div>

      
    </div>
  );
};

export default ProjectProfile;
