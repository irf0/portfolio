import dynamic from "next/dynamic";
import React from "react";
import projectData from "../utils/projectData";
import { ArrowRightAlt, GitHub } from "@mui/icons-material";

//This is Projects component
function Projects() {
  return (
    <div className="p-10 mx-10 sm:p-5 sm:mx-2 sm:justify-center border-b border-gray-300 dark:border-gray-700">
      <h1 className="text-5xl sm:text-3xl font-extrabold">projects.</h1>
      <p className="p-4 font-bold text-xl">
        Here are some projects I have worked on.
      </p>

      <h2 id="navlink" className="text-2xl p-1 font-bold ml-8">
        Mobile
      </h2>

      <div className="flex p-5 sm:p-2 sm:justify-normal justify-center gap-4 sm:gap-2 sm:flex-col select-none">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="p-5 sm:p-2 shadow-2xl rounded-lg dark:border-gray-900 dark:border sm:-ml-7 sm:border sm:border-gray-300 w-45vw sm:w-80  cursor-pointer"
          >
            <div className="flex gap-3 justify-center flex-wrap">
              {project?.imageURL?.slice(0, 2).map((image) => (
                <img
                  src={image}
                  alt="project-img"
                  className="h-340 w-150 sm:h-48 sm:w-24 hover:scale-105 transition-all duration-300"
                  loading="lazy"
                />
              ))}
            </div>

            <h1 id="navlink" className="text-2xl font-bold p-3">
              {project.name}
            </h1>
            <p className="font-semibold flex-wrap p-3">{project.description}</p>

            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <div className="dark:rounded-sm italic p-0.5 px-1 border border-gray-400 dark:border-gray-200 w-fit text-sm font-semibold dark:hover:bg-gray-400 hover:bg-slate-900 hover:text-white dark:hover:text-slate-700">
                  <p>{tag}</p>
                </div>
              ))}
            </div>

            <div className=" flex gap-3 justify-center">
              <a href={`/Projects/${project.id}`}>
                <button
                  type="button"
                  className="sm:mx-2 align-middle font-bold text-lg text-gray-800 sm:p-1 p-2 my-3 rounded-md bg-[#00e676]"
                >
                  View Details <ArrowRightAlt />
                </button>
              </a>

              <a href={project.github}>
                <button
                  type="button"
                  className=" font-bold text-lg text-gray-800 sm:p-1 p-2 my-3 rounded-md bg-[#00e676]"
                >
                  View Github <GitHub />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
