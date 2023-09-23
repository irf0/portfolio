import projectData from "@/app/utils/projectData";
import Image from "next/image";
import React from "react";

//This is Projects component
function AllProjects() {
  return (
    <div className="p-10 mx-10 sm:p-5 sm:mx-2 sm:justify-center border-b border-gray-300 dark:border-gray-700">
      <h1 className="text-5xl sm:text-3xl font-extrabold">projects.</h1>
      <div className="flex p-5 sm:p-2 justify-center gap-4 sm:gap-2 sm:flex-col select-none">
        {projectData.map((project) => (
          <a href={`/Projects/${project.id}`}>
            <div className="p-5 shadow-2xl cursor-default rounded-lg dark:border-gray-900 dark:border sm:w-72 sm:-ml-4 w-80 flex-col">
              <h1>Name: {project.name}</h1>
              <Image
                src={project.imageURL}
                alt="project1"
                width={200}
                height={350}
              />
              <p>Description: {project.description}</p>
              <p>Tags: {project.tags}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default AllProjects;
