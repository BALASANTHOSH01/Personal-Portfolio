"use client";

import React from "react";
import Image from "next/image";
import { SiEthiopianairlines as WingIcon } from "react-icons/si";
import { GrStarOutline as StarIcon } from "react-icons/gr";
import heroImg from "@/assets/heroImg.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div id="home" className="section px-[2%] h-dvh md:h-[60vh] mx-auto">
      <div className="ml-[5%] mt-[3%] flex flex-col items-center  justify-center py-[2%]">
        <div className=" w-[40%] md:w-[100%] text-center bg-[var(--secondaryColor)] px-[10px] text-gray-300 py-[5px] text-lg md:text-sm rounded-[50px] relative border my-[2%]">
          {/* <WingIcon className="text-jade-500 text-[40px] absolute right-[-30px] top-[-40px]" /> */}
          <p>Hello, I'm Bala Santhosh, a Software Engineer</p>
        </div>

        <div className=" flex flex-col items-center md:mt-[2%] justify-center">
          <div className="text-[80px] md:text-[37px] text-white text-center">
            <div className=" flex md:flex-col md:items-center items-start gap-3 justify-center z-40">
              {/* <StarIcon className="absolute z-0 text-gray-800 text-[40px] right-0"/> */}
              <p>I'm a {" "}</p>
              <span className="text-jade-500">
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    500,
                    "Software Engineer !", // initially rendered starting point
                    1000,
                    "Front-End Engineer !",
                    1000,
                    "Full Stack Developer !",
                    500
                  ]}
                  speed={2}
                  repeat={Infinity}
                />
              </span>
             
            </div>
            <p>who codes for growth</p>
          </div>

          <div className=" w-[50%] md:mt-[2%] md:w-[98%] text-[20px] text-center text-gray-400">
            <p>
            I'm a trailblazing software developer with a passion for innovation and proven real-world success. Ready to channel my skills and drive to elevate a dynamic company and achieve remarkable results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
