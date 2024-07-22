'use client'

import React from "react";
import Image from "next/image";
import { FaLinkedin as LinkedInIcon, FaGithub as GitHubIcon } from "react-icons/fa";
import BSImage from "@/assets/heroImg.png";
import { MdEmail as EmailIcon } from "react-icons/md";


const AboutSection = () => {
  return (
    <section id="about" className="section px-6 py-16 ">
      <div className="container mx-auto flex flex-row md:flex-col items-center justify-center gap-12">
        <div className=" text-center w-1/2 md:w-[95%] lg:text-left text-[20px]">
          <h2 className="text-[50px] font-bold mb-4">About Me</h2>
          <p className=" text-gray-400 mb-4">
            Hi, I'm <span className="font-semibold text-jade-500">Bala Santhosh</span>, a MERN stack developer with a strong focus on <span className="font-semibold text-jade-500">Next.js, React.js</span>, <span className="font-semibold text-jade-500">Node.js</span>, and <span className="font-semibold text-jade-500">MongoDB</span>. I'm pursuing a B.Tech. in Information Technology from Info Institute of Engineering.
          </p>
          <p className=" text-gray-400 mb-4">
            I've worked on projects like the <span className="font-semibold text-jade-500">Student Attendance Tracker</span>, enhancing management efficiency, and <span className="font-semibold text-jade-500">CodersCave</span>, improving client engagement.
          </p>
          <p className=" text-gray-400 mb-4">
            As the Web Development Lead for the Google Developer Student Club at my institute, I drive innovative web projects. I'm eager to build impactful software solutions for real-world challenges.
          </p>

          <div className="flex justify-center gap-10 mt-6 text-gray-400">
            <a href="mailto:santhos01ac@gmail.com" target="_blank" rel="noopener noreferrer" className=" hover:text-gray-800 flex flex-row items-center gap-2 text-lg ">
              <EmailIcon className="text-3xl " />
              <p>Email</p>
            </a>
            <a href="https://github.com/BALASANTHOSH01" target="_blank" rel="noopener noreferrer" className=" hover:text-gray-800 flex flex-row items-center gap-2 text-lg ">
              <GitHubIcon className="text-3xl " />
              <p>Github</p>
            </a>
            <a href="https://www.linkedin.com/in/balasanthosh01" target="_blank" rel="noopener noreferrer" className=" hover:text-gray-800 flex flex-row items-center gap-2 text-lg">
              <LinkedInIcon className="text-3xl " />
              <p>LinkedIn</p>
            </a>
          </div>

        </div>
        <div className=" flex justify-center">
          <Image src={BSImage} alt="Bala Santhosh" width={400} height={400} className="rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


{/* <div className="lg:w-1/2 flex justify-center">
          <Image src={BSImage} alt="Bala Santhosh" width={400} height={400} className="rounded-full border-4 border-gray-300 shadow-lg" />
        </div> */}
