import React from "react";
import servicesData from "../utils/servicesData";
import { LinkedIn, WhatsApp } from "@mui/icons-material";

function Services() {
  return (
    <div>
      <div className="p-10 mx-10 sm:p-5 sm:mx-2 sm:justify-center border-b border-gray-300 dark:border-gray-800">
        <h1 className="text-5xl font-extrabold">services.</h1>
        <div className="flex p-5 sm:p-2 sm:justify-normal justify-center gap-4 sm:gap-2 sm:flex-col select-none">
          {servicesData.map((service) => (
            <div
              id={service?.id}
              className="p-5 sm:p-2 shadow-2xl rounded-lg dark:border-gray-900 dark:border sm:-ml-7 sm:border sm:border-gray-300 w-45vw sm:w-80  cursor-pointer"
            >
              <div className=" flex">
                <h1 className="text-8xl font-extrabold">{service?.num}.</h1>
                <h2 className="text-4xl p-3 align-text-bottom font-extrabold">
                  {service?.name}
                </h2>
              </div>

              <p className="font-semibold p-3 text-lg">{service?.decription}</p>
              <h2 className="text-xl font-bold p-3">What I Offer?</h2>
              {service?.offers.map((offer) => (
                <p className="font-semibold p-0.5 text-lg">• {offer}</p>
              ))}

              <div className="p-2">
                <a href="#contact">
                  <button
                    type="button"
                    className="p-2 w-40 text-lg font-bold rounded-md bg-[#00e676] dark:text-gray-800"
                  >
                    Get in touch
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
