import Image from "next/image";
import React from "react";
import projectData from "../utils/projectData";

//This is Projects component
function Projects() {
  return (
    <div className="p-10 mx-10 sm:p-5 sm:mx-2 sm:justify-center border-b border-gray-300 dark:border-gray-700">
      <h1 className="text-5xl sm:text-3xl font-extrabold">projects.</h1>
      <p className="p-4 font-bold text-xl">
        Here are some projects I have worked on.
      </p>

      <div className="flex p-5 sm:p-2 justify-center gap-4 sm:gap-2 sm:flex-col select-none">
        {projectData.map((project) => (
          <a href={`/Projects/${project.id}`}>
            <div
              key={project.id}
              className="p-5 shadow-2xl rounded-lg dark:border-gray-900 dark:border sm:w-fit sm:-ml-4 w-fit flex-col cursor-pointer"
            >
              <Image
                src={project?.imageURL}
                alt="project1"
                height={300}
                width={300}
                className="mx-7"
              />
              <h1 id="navlink" className="text-xl font-bold">
                {project.name}
              </h1>
              <p className="font-semibold">{project.description}</p>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <div className="dark:rounded-sm p-0.5 px-1 border border-gray-400 dark:border-gray-200 w-fit text-sm font-semibold dark:hover:bg-gray-400 hover:bg-slate-900 hover:text-white dark:hover:text-slate-700">
                    <p>{tag}</p>
                  </div>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
