import Image from "next/image";
import React from "react";
import skillsData from "../utils/skillsData";

function Skills() {
  return (
    <div className="p-10 mx-10 sm:p-5 sm:mx-2 sm:justify-center border-b border-gray-300 dark:border-gray-800">
      <h1 className="text-5xl sm:text-3xl font-extrabold">skills.</h1>
      <div className="flex p-5 sm:p-2 justify-center gap-4 sm:gap-2 sm:flex-col select-none">
        <div className="p-5 shadow-2xl cursor-default rounded-lg dark:border-gray-900 dark:border sm:w-72 sm:-ml-4 w-80 flex-col">
          <Image
            src="/assets/images/front-end.png"
            alt="front-end"
            height={200}
            width={200}
            className="mx-7"
          />

          <h1 id="navlink" className="text-xl font-bold">
            Front-End Development
          </h1>

          <p className="font-semibold">
            I build highly responsive, mobile friendly, dynamic and visually
            appealing frontend.
          </p>

          <h1 className="font-bold mt-4">Tech Stack</h1>
          <div className="flex flex-wrap gap-1">
            {skillsData?.map((techImages) =>
              techImages?.frontendimages?.map((image, index) => (
                <Image
                  src={image}
                  width={40}
                  height={40}
                  alt="frontend-dev"
                  className={`${
                    index === 6 && "dark:bg-gray-500 rounded-full"
                  }`}
                />
              ))
            )}
          </div>
        </div>

        <div className="p-5 shadow-2xl dark:border-gray-900 dark:border rounded-lg w-80 sm:w-72 sm:-ml-4">
          <Image
            src="/assets/images/backend.png"
            alt="back-end"
            height={200}
            width={200}
            className="mx-7"
          />
          <h1 id="navlink" className="text-xl font-bold">
            Back-End Development
          </h1>
          <p className="font-semibold">
            I build scalable backends using various backend technologies.
          </p>
          <h1 className="font-bold mt-4">Tech Stack</h1>
          <div className="flex">
            {skillsData?.map((techImages) =>
              techImages?.backendimages?.map((image, index) => (
                <Image src={image} width={40} height={40} alt="backend-dev" />
              ))
            )}
          </div>
        </div>
        <div className="p-5 shadow-2xl dark:border-gray-900 dark:border rounded-lg w-80 sm:w-72 sm:-ml-4">
          <Image
            src="/assets/images/fullstack.png"
            alt="back-end"
            height={200}
            width={200}
            className="mx-7"
          />
          <h1 id="navlink" className="text-xl font-bold">
            Full Stack Development
          </h1>
          <p className="font-semibold">
            I can also work on Full Stack projects which means I can build both
            the Front-End part and the Back-End part myself.
          </p>
          <h1 className="font-bold mt-4">Tech Stack</h1>
          <div className="flex flex-wrap gap-1">
            {skillsData?.map((techImages) =>
              techImages?.fullstackimages?.map((image, index) => (
                <Image
                  src={image}
                  width={40}
                  height={40}
                  alt="fullstack-dev"
                  className={`${
                    index === 6 && "dark:bg-gray-500 rounded-full"
                  }`}
                />
              ))
            )}
          </div>
        </div>
        <div className="p-5 shadow-2xl dark:border-gray-900 dark:border rounded-lg w-80 sm:w-72 sm:-ml-4">
          <Image
            src="/assets/images/development.png"
            alt="mobile-dev"
            height={200}
            width={200}
            className="mx-7"
          />
          <h1 id="navlink" className="text-xl font-bold">
            Mobile Development
          </h1>
          <p className="font-semibold">
            I can scalabe, optimized, and responsive mobile apps using React
            Native that runs on both Android and IOS.
          </p>
          <h1 className="font-bold mt-4">Tech Stack</h1>
          <div className="flex gap-1">
            {skillsData?.map((techImages) =>
              techImages?.mobiledevimages?.map((image, index) => (
                <Image
                  src={image}
                  width={40}
                  height={40}
                  alt="mobile-dev"
                  className={`${
                    index === 1 && "dark:bg-white h-9 w-9 rounded-full"
                  }`}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
