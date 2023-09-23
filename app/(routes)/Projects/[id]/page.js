import projectData from "@/app/utils/projectData";
import Image from "next/image";
import React from "react";

const page = ({ params }) => {
  const { id } = params;
  const idNumber = parseInt(id);
  const project = projectData.find((p) => p.id === idNumber);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div>
      <h1>The name is {project?.name}</h1>
      <Image
        src={project?.imageURL}
        alt={project?.name}
        width={100}
        height={100}
      />
      <p>{project?.description}</p>
      <p>{project?.tags}</p>
    </div>
  );
};

export default page;
