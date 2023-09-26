import {
  CloseRounded,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import React, { useEffect, useRef } from "react";
function Sidebar({ openMenu }) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        openMenu();
      }
    }
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="absolute right-0.5 sm:p-0 sm:-mr-4 overflow-hidden overflow-x-hidden z-50 h-87vh w-72 sm:-mt-5 rounded-tl-lg rounded-bl-lg shadow-2xl dark:border border-gray-950 shadow-gray-950 bg-white dark:bg-gray-800 duration-100 ease-out animate-slide-in backdrop-contrast-100"
    >
      <div className="flex">
        <button type="button" onClick={openMenu}>
          <CloseRounded />
        </button>
      </div>

      <div className="flex flex-col text-center text-4xl gap-3 font-extrabold text-[#00e676]">
        <p
          id="navlink"
          className="dark:hover:text-white hover:text-black cursor-pointer"
          onClick={openMenu}
        >
          home.
        </p>
        <a href="#about" onClick={openMenu}>
          about.
        </a>

        <a
          id="navlink"
          className="dark:hover:text-white hover:text-black cursor-pointer"
          href="#skills"
          onClick={openMenu}
        >
          skills.
        </a>
        <a
          id="navlink"
          className="dark:hover:text-white hover:text-black cursor-pointer"
          href="#projects"
          onClick={openMenu}
        >
          projects.
        </a>
        <a
          id="navlink"
          className="dark:hover:text-white hover:text-black cursor-pointer"
          href="#services"
          onClick={openMenu}
        >
          services.
        </a>
        <a
          id="navlink"
          className="dark:hover:text-white hover:text-black cursor-pointer"
          href="#contact"
          onClick={openMenu}
        >
          contact.
        </a>
      </div>

      <div className="flex place-content-center gap-5 mt-6">
        <a
          id="navlink"
          href="https://www.linkedin.com/in/dev-irfan/"
          target="_blank"
        >
          <LinkedIn className="fill-blue-800" style={{ fontSize: 35 }} />
        </a>
        <a id="navlink" href="https://twitter.com/mirfan3053" target="_blank">
          <Twitter className=" text-blue-500" style={{ fontSize: 35 }} />
        </a>
        <a id="navlink" href="https://github.com/irf0" target="_blank">
          <GitHub style={{ fontSize: 32 }} />
        </a>
        <a
          id="navlink"
          href="https://www.instagram.com/the_mirfan/"
          target="_blank"
        >
          <Instagram style={{ fontSize: 32 }} />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
