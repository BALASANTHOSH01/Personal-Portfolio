'use client';
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Jost } from "next/font/google";
import MobileNav from "./MobileNav";
import ThemeSwitch from "../ThemeSwitch/ThemeButton";

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

  const NavItem = ({ itemsName, to, externalLink }) => {
    if (externalLink) {
      return (
        <a
          href={externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-[16%] rounded-[50px] px-[17px] cursor-pointer md:py-[5px] py-[10px] text-center md:text-black dark:text-white text-[17px] md:text-[20px] ${activeItem === itemsName ? 'bg-jade-600 w-[20%] md:bg-transparent' : ''}`}
          onClick={() => handleActiveItem(itemsName)}
        >
          <p>{itemsName}</p>
        </a>
      );
    }

    return (
      <Link
        to={to}
        smooth={true}
        duration={500}
        offset={-70}
        className={`w-[16%] rounded-[50px] px-[17px] cursor-pointer md:py-[5px] py-[10px] text-center md:text-black text-[17px] dark:text-white md:text-[20px] ${activeItem === itemsName ? 'bg-jade-600 w-[20%] md:bg-transparent' : ''}`}
        onClick={() => handleActiveItem(itemsName)}
      >
        <p>{itemsName}</p>
        {isMobileScreen && activeItem === itemsName && <hr className="h-[3px] w-[100%] border bg-jade-600" />}
      </Link>
    );
  };

  return (
    <div className="flex flex-row items-center md:fixed md:bottom-5 md:left-[5%] w-[90%] mx-auto px-[12px] md:px-[0px] bg-[#f3f3f3] text-[var(--secondaryColor)] dark:bg-[var(--secondaryColor)] rounded-[50px] justify-between md:justify-around mt-[1%] border overflow-hidden md:bg-white">
      {!isMobileScreen && <>
        <NavItem itemsName="Home" to="home" />
        <NavItem itemsName="About" to="about" />
        <NavItem itemsName="Skills" to="skills" />
      </>}
      <div className={`w-auto rounded-[50px] px-[17px] py-[10px] text-jade-500 font-bold text-[40px] md:text-[20px] md:hidden ${jost.className}`}>
        <p>BALASANTHOSH</p>
      </div>
      {!isMobileScreen && <>
        <NavItem itemsName="Projects" to="projects" />
        <NavItem itemsName="Contact" to="contact" />
        <NavItem itemsName="Resume" externalLink="https://drive.google.com/file/d/14EDTqJ5ZTYlb66K9Crup_tGkka_xxw7F/view?usp=drive_link" />
      </>}
      {isMobileScreen && <MobileNav />}
      <div>
      </div>
    </div>
  );
};

export default NavBar;
