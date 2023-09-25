import React from "react";

function About() {
  return (
    <div className="flex flex-col justify-center p-10 sm:p-1 sm:flex-nowrap flex-wrap mx-10 border-b border-gray-300 dark:border-gray-700 sm:mx-0">
      <div>
        <h1 className="text-5xl sm:text-3xl font-extrabold">about me.</h1>
      </div>

      <div className="py-5 px-5 sm:text-lg sm:py-1 sm:px-3 sm:my-1 shadow-md my-4 rounded-md text-xl text-gray-500 dark:text-gray-300">
        <div className="gap-5 flex flex-col text-left mx-48 sm:mx-5 flex-wrap">
          <h1 className="text-2xl sm:text-lg font-extrabold -ml-8">
            👋 Hi there!
          </h1>
          <p className="font-bold">
            I'm <span className="font-extrabold dark:text-white">Irfan</span>, a
            passionate{" "}
            <span className="dark:text-white font-extrabold">
              Full Stack Developer
            </span>{" "}
            with a knack for turning ideas into realities.🚀
          </p>
          <h1 className="dark:text-white font-extrabold">🎨 My Craft?</h1>{" "}
          <p className="font-semibold ml-6">
            I specialize in crafting seamless <strong> web experiences</strong>{" "}
            and bringing
            <strong> mobile apps </strong>to life. <br /> I thrive on the art of
            coding and problem-solving.
          </p>
          <h2 className="dark:text-white font-extrabold">🎯 My Mission?</h2>{" "}
          <p className="font-semibold ml-6">
            To blend technology and creativity, shaping user-centric solutions
            that leave a lasting impression. From <strong>front-end</strong>{" "}
            finesse to <strong>back-end</strong> wizardry, I've got it covered
            because, I am literally obsessed to learn more about this thing!.
          </p>
          <h2 className="dark:text-white font-extrabold">⏳Free Time?</h2>
          <p className="font-semibold ml-6">
            When I'm not immersed in code, you'll find me exploring new places,
            trying new foods, biking, and of course exploring what's new in tech
            world.
          </p>
          <h2 className="dark:text-white font-extrabold">📩Get in touch</h2>
          <p className="font-semibold ml-6">
            Let's collaborate and make your digital dreams a reality. Drop me a
            message below, and let's turn your vision into reality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
