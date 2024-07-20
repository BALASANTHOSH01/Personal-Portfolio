"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import {TiWeatherSunny as Sun } from "react-icons/ti"
import { BsMoonStars as Moon } from "react-icons/bs";

export default function Switch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className=" bg-jade-500 rounded-full p-2 w-[50px] h-[50px] flex items-center justify-center">
      <button
        className=" rounded-full transition-colors duration-300 focus:outline-none text-lg"
        id="theme-toggle"
        aria-label="auto"
        aria-live="polite"
        onClick={handleClick}
      >
        {theme === "dark" ? (
          <Sun className=" text-purple-200" />
        ) : (
          <Moon className=" text-purple-heart-600" />
        )}
      </button>
    </div>
  );
}