import dynamic from "next/dynamic";
const Projects = dynamic(() => import("@/app/_components/Projects"));
import React from "react";

//This is Projects component
function AllProjects() {
  return (
    <div>
      <Projects />
    </div>
  );
}

export default AllProjects;
