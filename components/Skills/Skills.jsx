'use client';

import React from "react";
import skills from "./SkillDetails";
import Image from 'next/image';

const Skills = () => {
  return (
    <div id="skills" className="container section md:mt-[5%] mx-auto px-20 md:px-3 py-6">
      <div className="text-center mb-8 ">
        <h2 className="text-[50px] font-semibold dark:text-white">My Skills</h2>
        <p className="mt-2 mb-4  dark:text-gray-400 text-[20px]">
          Below are some of the technologies and tools I have experience with.
        </p>
      </div>

      <SkillSection skills={skills} />
    </div>
  );
};

const SkillSection = ({  skills }) => (
  <div className="my-8">
    {/* <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{title}</h3> */}
    <div className="grid grid-cols-4 md:grid-cols-3 md:gap-10  gap-16 justify-start w-[85%]  md:w-[95%] mx-auto">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col items-center p-4 bg-transparent  dark:bg-gray-900 rounded-lg shadow-md ">

          <Image src={skill.image} alt={skill.name} width={70} height={70} />
          
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
