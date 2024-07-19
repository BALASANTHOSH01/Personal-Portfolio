'use client';
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Set the initial value
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        className={`w-[16%]  rounded-[50px] px-[17px]  cursor-pointer md:py-[5px] py-[10px] text-center md:text-black text-white text-[17px] md:text-[20px] ${activeItem === itemsName ? 'bg-jade-600 w-[20%] md:bg-transparent ' : ''}`}
        onClick={() => handleActiveItem(itemsName)}
      >
        <p>{itemsName}</p>
        {activeItem === itemsName && <hr className="h-[3px] w-[100%] border bg-jade-600"/>}
      </Link>
    );
  };

  return (
    <div className="flex flex-row items-center md:fixed md:bottom-5 md:left-[5%] w-[90%] mx-auto px-[12px] md:px-[0px] bg-[var(--secondaryColor)] rounded-[50px] justify-between md:justify-around  mt-[1%] border overflow-hidden  md:bg-white">

      <NavItem itemsName="Home" to="home" />
      {!isMobileScreen && <>
        <NavItem itemsName="About" to="about" />
        <NavItem itemsName="Skills" to="skills" />
      </>}
      <div className={`w-auto rounded-[50px] px-[17px] py-[10px] text-jade-500 font-bold text-[40px] md:text-[20px] md:hidden ${jost.className}`}>
        <p>BALASANTHOSH</p>
      </div>
      <NavItem itemsName="Projects" to="projects" />
      {!isMobileScreen && <NavItem itemsName="Contact" to="contact" />}
      <NavItem itemsName="Resume" to="resume" />
    </div>
  );
};

export default NavBar;
