"use client";

import React, { useEffect, useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher";
import { useTheme } from "next-themes";
import { BiMenuAltRight, BiSolidMoon, BiSolidSun } from "react-icons/bi";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { isMobile } from "react-device-detect";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import {} from "react-icons/bi";

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
    <div className="p-5 sm:p-0 flex justify-between align-middle border-b border-gray-400 dark:border-gray-700 mb-2">
      {isMobile && (
        <button
          className="sm:visible xl:hidden sm:text-lg"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "light" ? <BiSolidMoon /> : <BiSolidSun />}
        </button>
      )}
      <Link href="/">
        <div className="self-center p-2 rounded-md">
          <h1 className="text-2xl sm:text-lg leading-tight font-extrabold text-[#00e676]">
            <span> {" <developer "}</span>
            <span> {"Irfan/>"}</span>
          </h1>
          <h4 className="dark:text-gray-400 text-gray-900 text-xs text-end -mt-2 -mr-4">
            obsessed about coding!
          </h4>
        </div>
      </Link>

      <div className="p-3 px-14 rounded-xl dark:border dark:border-gray-800 flex gap-10 shadow-lg dark:shadow-lg sm:hidden text-lg">
        <Link
          id="navlink"
          className="dark:hover:text-white hover:text-black cursor-pointer"
          href="/"
        >
          home.
        </Link>
        <ScrollLink
          id="navlink"
          className="dark:hover:text-white hover:text-black cursor-pointer "
          to=""
          smooth={true}
          duration={800}
        >
          about.
        </ScrollLink>

        <ScrollLink
          id="navlink"
          className="dark:hover:text-white hover:text-black cursor-pointer"
          to=""
          smooth={true}
          duration={800}
        >
          skills.
        </ScrollLink>
        <ScrollLink
          id="navlink"
          className="dark:hover:text-white hover:text-black cursor-pointer"
          to=""
          smooth={true}
          duration={800}
        >
          projects.
        </ScrollLink>
        <ScrollLink
          id="navlink"
          className="dark:hover:text-white hover:text-black cursor-pointer"
          to=""
          smooth={true}
          duration={800}
        >
          services.
        </ScrollLink>
        <ScrollLink
          id="navlink"
          className="dark:hover:text-white hover:text-black cursor-pointer"
          to=""
          smooth={true}
          duration={800}
        >
          contact.
        </ScrollLink>
      </div>
      <div className="self-center gap-6 flex text-lg">
        <div
          className={`${
            isMobile || isSidebarOpen
              ? "hidden"
              : "self-center gap-6 flex text-lg p-3 px-14 rounded-xl dark:border-gray-800 shadow-lg dark:shadow-2xl"
          }`}
        >
          <Link
            id="navlink"
            href="https://www.linkedin.com/in/dev-irfan/"
            target="_blank"
          >
            <LinkedIn className="fill-blue-800" style={{ fontSize: 28 }} />
          </Link>
          <Link
            id="navlink"
            href="https://twitter.com/mirfan3053"
            target="_blank"
          >
            <Twitter className=" text-blue-500" style={{ fontSize: 28 }} />
          </Link>
          <Link id="navlink" href="https://github.com/irf0" target="_blank">
            <GitHub style={{ fontSize: 25 }} />
          </Link>

          {!isMobile && (
            <button
              style={{ fontSize: 23 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "light" ? <BiSolidMoon /> : <BiSolidSun />}
            </button>
          )}
        </div>
        {isSidebarOpen && <Sidebar openMenu={openMenu} />}

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
