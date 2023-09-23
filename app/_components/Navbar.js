"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BiMenuAltRight, BiSolidMoon, BiSolidSun } from "react-icons/bi";
import Sidebar from "./Sidebar";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { isMobile } from "react-device-detect";

function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const openMenu = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="p-5 sm:p-0 flex justify-between align-middle border-b border-gray-300 dark:border-gray-700 mb-2">
      {isMobile && (
        <button
          className="sm:visible xl:hidden sm:text-lg"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "light" ? <BiSolidMoon /> : <BiSolidSun />}
        </button>
      )}
      <a href="/">
        <div className="self-center p-2 rounded-md">
          <h1 className="text-2xl sm:text-lg leading-tight font-extrabold text-[#00e676]">
            <span> {" <developer "}</span>
            <span> {"Irfan/>"}</span>
          </h1>
          <h4 className="dark:text-gray-400 text-gray-900 text-xs text-end -mt-2 -mr-4">
            obsessed about coding!
          </h4>
        </div>
      </a>

      <div className="p-3 px-14 rounded-xl dark:border dark:border-gray-800 flex gap-10 shadow-lg dark:shadow-lg sm:hidden text-lg">
        <a
          id="navlink"
          className="dark:hover:text-white hover:text-black cursor-pointer"
          href="/"
        >
          home.
        </a>
        <a
          id="navlink"
          className="dark:hover:text-white hover:text-black cursor-pointer "
          href="#about"
        >
          about.
        </a>

        <a
          id="navlink"
          className="dark:hover:text-white hover:text-black cursor-pointer"
          href="#skills"
        >
          skills.
        </a>
        <a
          id="navlink"
          className="dark:hover:text-white hover:text-black cursor-pointer"
          href="#projects"
        >
          projects.
        </a>
        <a
          id="navlink"
          className="dark:hover:text-white hover:text-black cursor-pointer"
          href="#services"
        >
          services.
        </a>
        <a
          id="navlink"
          className="dark:hover:text-white hover:text-black cursor-pointer"
          href="#contact"
        >
          contact.
        </a>
      </div>

      <div className="self-center gap-6 flex sm:block text-lg">
        <div
          className={`${
            isMobile || isSidebarOpen
              ? "hidden"
              : "self-center gap-6 flex text-lg p-3 px-14 rounded-xl dark:border-gray-800 shadow-lg dark:shadow-2xl"
          }`}
        >
          <a
            id="navlink"
            href="https://www.linkedin.com/in/dev-irfan/"
            target="_blank"
          >
            <LinkedIn className="text-blue-800" style={{ fontSize: 28 }} />
          </a>
          <a id="navlink" href="https://twitter.com/mirfan3053" target="_blank">
            <Twitter className=" text-blue-500" style={{ fontSize: 28 }} />
          </a>
          <a id="navlink" href="https://github.com/irf0" target="_blank">
            <GitHub style={{ fontSize: 25 }} />
          </a>

          {!isMobile && (
            <button
              style={{ fontSize: 23 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "light" ? <BiSolidMoon /> : <BiSolidSun />}
            </button>
          )}
        </div>
        <div className="fixed z-10">
          {isSidebarOpen && <Sidebar openMenu={openMenu} />}
        </div>

        {isMobile && !isSidebarOpen && (
          <button type="button" onClick={openMenu}>
            <BiMenuAltRight style={{ fontSize: 25 }} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
