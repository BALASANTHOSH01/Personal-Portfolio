'use client';
import React, { useState } from "react";
import { Link } from "react-scroll";
import { Jost } from "next/font/google";
const jost = Jost({ subsets: ["latin"] });

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleActiveItem = (item) => {
    setActiveItem(item);
  };

  const NavItem = ({ itemsName, to }) => {
    return (
      <Link
        to={to}
        smooth={true}
        duration={500}
        offset={-70}
        className={`w-[16%] rounded-[50px] px-[17px] md:px-[2%] cursor-pointer md:py-[5px] py-[10px] text-center overflow-hidden md:text-black text-white text-[17px] md:text-[17px] ${
          activeItem === itemsName ? 'bg-jade-600 md:text-white' : ''
        }`}
        onClick={() => handleActiveItem(itemsName)}
      >
        <p>{itemsName}</p>
      </Link>
    );
  };

  return (
    <div className="flex flex-row items-center md:fixed md:bottom-2 md:left-[5%] w-[90%] mx-auto px-[12px] md:px-[0px] bg-[var(--secondaryColor)] rounded-[50px] justify-between mt-[1%] border overflow-hidden md:bg-white">
      <NavItem itemsName="Home" to="home" />
      <NavItem itemsName="About" to="about" />
      <NavItem itemsName="Skills" to="skills" />

      <div className={`w-auto rounded-[50px] px-[17px] py-[10px] text-jade-500 font-bold text-[40px] md:text-[20px] md:hidden ${jost.className}`}>
        <p>BALASANTHOSH</p>
      </div>

      <NavItem itemsName="Projects" to="projects" />
      <NavItem itemsName="Contact" to="contact" />
      <NavItem itemsName="Resume" to="resume" />
    </div>
  );
};

export default NavBar;
