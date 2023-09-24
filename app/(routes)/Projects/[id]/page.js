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
      <div className="flex sm:flex-col gap-3 ml-2 mr-7 flex-wrap">
        {project?.imageURL?.map((image) => (
          <Image
            src={image}
            alt="project-img"
            height={150}
            width={150}
            className="sm:mx-0"
            loading="lazy"
          />
        ))}
      </div>

      <p>{project?.description}</p>
      <p>{project?.tags}</p>
    </div>
  );
};

export default page;
