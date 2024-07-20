"use client";

import React from "react";
import ProjectDetails from "./ProjectDetails";
import ProjectCard from "./ProjectCard";
import { SiEthiopianairlines as WingIcon } from "react-icons/si";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section my-[4%] px-[5%]">
      <div className="container mx-auto">

        {/* <div className="w-[200px] mx-auto text-center bg-[var(--secondaryColor)] px-[10px] text-gray-300 py-[5px] rounded-[50px]  border my-[2%]">
          <WingIcon className="text-jade-500 text-[40px] absolute right-[-30px] top-[-40px]" />
          <p>My Projects</p>
        </div> */}
        <h2 className="text-[50px]  font-bold text-center mb-4">Projects</h2>

        {/* <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2> */}
        <div className="grid grid-cols-3 md:grid-cols-1 gap-16  py-16">
          {ProjectDetails.map((project) => (
            <ProjectCard
              key={project.title} // Changed to use title for uniqueness
              title={project.title}
              smalldesc={project.smalldesc}
              description={project.desc1}
              image={project.img1}
              name={project.title}
              thumbnail={project.thumbnail}
              link={project.website || project.github} // Use website if available, otherwise fallback to GitHub
              technology={project.technology}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
