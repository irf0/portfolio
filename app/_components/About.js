import React from "react";
import CustomizedTimeline from "./CustomizedTimeline";

function About() {
  return (
    <div className="flex flex-col justify-center p-10 flex-wrap mx-10">
      <div>
        <h1 className="text-5xl font-extrabold">about me.</h1>
      </div>

      <div className="py-5 px-5 shadow-md my-4 rounded-md text-xl font-bold text-gray-500 dark:text-gray-100">
        <h1>
          Hi, My name is Irfan, I am a Professional Software Developer. I Love
          to solve business' problems and help them by providing highly
          effective solutions using my skills.
        </h1>
      </div>
      <div className="px-10 text-center w-fit place-self-center">
        <div>
          <h1 className="text-center underline text-lg">
            some background story.
          </h1>
        </div>
        <CustomizedTimeline />
      </div>
    </div>
  );
}

export default About;
