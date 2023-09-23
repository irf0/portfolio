import Image from "next/image";
import React from "react";

function Skills() {
  return (
    <div className="p-10 mx-10 sm:p-5 sm:mx-2 sm:justify-center border-b border-gray-300 dark:border-gray-700">
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
            <Image
              src="/assets/tech/figma.png"
              width={40}
              height={40}
              alt="irfan-figma"
            />
            <Image
              src="/assets/tech/html.png"
              width={40}
              height={40}
              alt="irfan-html"
            />
            <Image
              src="/assets/tech/css.png"
              width={40}
              height={40}
              alt="irfan-css"
            />
            <Image
              src="/assets/tech/wordpress.png"
              width={40}
              height={40}
              alt="irfan-css"
            />
            <Image
              src="/assets/tech/javascript.png"
              width={40}
              height={40}
              alt="irfan-js"
            />
            <Image
              src="/assets/tech/reactjs.png"
              width={40}
              height={40}
              alt="irfan-react"
            />
            <Image
              src="/assets/tech/nextjs.svg"
              width={40}
              height={40}
              className=" dark:bg-gray-500 rounded-full"
            />
            <Image
              src="/assets/tech/redux.png"
              width={40}
              height={40}
              alt="irfan-redux"
            />
            <Image
              src="/assets/tech/tailwind.png"
              width={40}
              height={40}
              alt="irfan-tw"
            />
            <Image
              src="/assets/tech/chatgpt.png"
              width={38}
              height={36}
              alt="irfan-chatgpt"
            />
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
            <Image
              src="/assets/tech/javascript.png"
              width={40}
              height={40}
              alt="irfan-js"
            />
            <Image
              src="/assets/tech/nodejs.png"
              width={40}
              height={40}
              alt="irfan-nodejs"
            />
            <Image
              src="/assets/tech/mongodb.png"
              width={40}
              height={40}
              alt="irfan-mongodb"
            />
            <Image
              src="/assets/tech/api.png"
              width={40}
              height={40}
              alt="irfan-api"
            />
            <Image
              src="/assets/tech/chatgpt.png"
              width={38}
              height={36}
              alt="irfan-chatgpt"
            />
            <Image
              src="/assets/tech/git.png"
              width={40}
              height={40}
              alt="irfan-git"
            />
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
            <Image
              src="/assets/tech/figma.png"
              width={40}
              height={40}
              alt="irfan-figma"
            />
            <Image
              src="/assets/tech/html.png"
              width={40}
              height={40}
              alt="irfan-html"
            />
            <Image
              src="/assets/tech/css.png"
              width={40}
              height={40}
              alt="irfan-css"
            />
            <Image
              src="/assets/tech/javascript.png"
              width={40}
              height={40}
              alt="irfan-js"
            />
            <Image
              src="/assets/tech/reactjs.png"
              width={40}
              height={40}
              alt="irfan-react"
            />
            <Image
              src="/assets/tech/redux.png"
              width={40}
              height={40}
              alt="irfan-redux"
            />
            <Image
              src="/assets/tech/tailwind.png"
              width={40}
              height={40}
              alt="irfan-tw"
            />
            <Image
              src="/assets/tech/nodejs.png"
              width={40}
              height={40}
              alt="irfan-nodejs"
            />
            <Image
              src="/assets/tech/expressjs.png"
              width={39}
              height={38}
              alt="irfan-express"
              className="dark:bg-slate-100 rounded-full"
            />
            <Image
              src="/assets/tech/mongodb.png"
              width={40}
              height={40}
              alt="irfan-mongodb"
            />
            <Image
              src="/assets/tech/api.png"
              width={40}
              height={40}
              alt="irfan-api"
            />
            <Image
              src="/assets/tech/git.png"
              width={40}
              height={40}
              alt="irfan-git"
            />
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
            <Image
              src="/assets/tech/javascript.png"
              width={40}
              height={40}
              alt="irfan-js"
            />
            <Image
              src="/assets/tech/reactjs.png"
              width={40}
              height={40}
              alt="irfan-react"
            />
            <Image
              src="/assets/tech/expo.png"
              width={38}
              height={30}
              alt="irfan-expo"
              className="dark:bg-slate-100 dark:rounded-full dark:p-1 gap-2"
            />
            <Image
              src="/assets/tech/redux.png"
              width={40}
              height={40}
              alt="irfan-redux"
            />
            <Image
              src="/assets/tech/android.png"
              width={40}
              height={40}
              alt="irfan-android"
            />

            <Image
              src="/assets/tech/white-ios.png"
              width={40}
              height={40}
              alt="irfan-ios"
              className="bg-black dark:bg-transparent rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
