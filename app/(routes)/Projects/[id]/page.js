import projectData from "@/app/utils/projectData";
import React from "react";

const page = ({ params }) => {
  const { id } = params;

  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div>
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold p-2 text-center">Video Demo</h1>
        <div className="place-self-center border-2 rounded-md">
          <video width="320" height="240" controls autoPlay>
            <source src="/assets/foodashvid.mp4" type="video/mp4" />
          </video>
        </div>

        <h1 className="text-2xl font-bold p-2 text-center mt-10">
          Screenshots
        </h1>
        <div className="flex w-fit place-content-center place-self-center  gap-3 ml-2 p-5 mr-7 flex-wrap ">
          {project?.imageURL?.map((image) => (
            <img
              key={project?.id}
              src={image}
              alt="project-img"
              className="sm:mx-0 h-370 w-190"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <h1 className="text-2xl font-bold p-2 text-center mt-5">About the app</h1>
      <div className="flex justify-center sm:justify-normal">
        <div className=" w-45vw sm:w-fit sm:place-self-auto">
          <h1 className="text-2xl font-bold p-3">{project?.name}</h1>

          <h2 className="text-2xl font-bold p-1 px-4">Overview</h2>
          <p className="font-semibold text-lg flex-wrap p-3">
            {project?.description}
          </p>

          <h2 className="text-2xl font-bold p-1">Description</h2>
          <p className="font-semibold text-lg flex-wrap p-3"></p>
        </div>
      </div>
    </div>
  );
};

export default page;
