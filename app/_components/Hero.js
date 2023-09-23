import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { WordHighlight } from "./WordHighlight";
import { BiCertification } from "react-icons/bi";
import { CheckBoxOutlineBlankSharp, Checklist } from "@mui/icons-material";
import { MenuPaper } from "@mui/material";

function Hero() {
  const colors = ["#F59E0B", "#dedede", "#00e676", "#10B981", "#3B82F6"];
  return (
    <div className="flex justify-around sm:flex-col border-b dark:border-gray-700 border-gray-300 p-20 sm:p-5">
      <div className=" bg-[#00e676] text-[#e3e2e2] rounded-full place-self-center h-40 w-40 sm:flex lg:hidden xl:hidden">
        <p>My Image here..</p>
      </div>
      <div>
        <h1 className="text-4xl sm:text-2xl sm:-ml-6 font-extrabold -ml-16 mb-5">
          Hey there,👋 I'm Irfan,
        </h1>
        <RoughNotationGroup show={true}>
          <WordHighlight color={colors[0]}>
            <h1 className="text-5xl sm:text-3xl sm:my-2 sm:p-0.5 text-center md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2 p-2">
              Web Developer.
            </h1>
          </WordHighlight>
        </RoughNotationGroup>
        <RoughNotationGroup show={true}>
          <WordHighlight color={colors[1]}>
            <h1 className="text-5xl sm:text-3xl sm:my-2 sm:p-0.5  text-center md:text-8xl font-bold text-gray-700 dark:text-slate-700 my-2 p-2">
              App Developer.
            </h1>
          </WordHighlight>
        </RoughNotationGroup>
        <RoughNotationGroup show={true}>
          <WordHighlight color={colors[2]}>
            <h1 className="text-5xl sm:text-3xl sm:my-2 sm:p-0.5 text-center md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2 p-2">
              Content Creator.
            </h1>
          </WordHighlight>
        </RoughNotationGroup>
        <div className="gap-6 flex">
          <a
            id="btnlink"
            href="https://www.linkedin.com/in/dev-irfan/"
            target="_blank"
          >
            <button
              className="mt-4 p-3 text-gray-800 text-lg font-bold rounded-sm bg-[#00e676]"
              type="button"
            >
              Let's Connect 🤝
            </button>
          </a>
          <button
            className="mt-4 p-3 px-4 text-gray-800 text-lg font-bold rounded-sm bg-[#00e676]"
            type="button"
          >
            Download CV 📃
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <div className=" bg-[#00e676] rounded-lg h-96 w-72 sm:hidden md:hidden">
          <p>My Image here..</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
