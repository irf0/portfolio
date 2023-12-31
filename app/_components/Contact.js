import { Email, Phone } from "@mui/icons-material";
import React from "react";

function Contact() {
  return (
    <div>
      <h1 className="text-5xl sm:text-3xl p-6 mx-10 sm:p-5 sm:mx-2 font-extrabold">
        contact.
      </h1>
      <h2 className="text-xl sm:text-lg mx-14 text-center font-bold sm:p-5 sm:mx-2">
        <strong className="border-b-2 border-[#2ffd2f] sm:border-b text-2xl">
          Let's work together?
        </strong>
      </h2>
      <div className="flex sm:flex-col justify-center gap-7">
        <div className="border dark:border-gray-700 border-gray-300 rounded-lg my-6 w-fit flex flex-col p-6 gap-4 place-items-center">
          <h1 className="text-center">
            <span className="font-bold text-xl sm:text-lg">
              Have a Specific Message?
            </span>{" "}
            <br /> Feel free to send a message and I'll get back to you.
          </h1>

          <form
            className="flex flex-col gap-2"
            action="https://getform.io/f/f0934354-70d4-4789-b563-0bf6c4195b80"
            method="POST"
          >
            <input
              required
              type="text"
              placeholder="Your name."
              className="p-4 focus:outline-none rounded-lg w-350 sm:w-275 bg-inherit border dark:border-gray-700 border-gray-300"
            />
            <input
              required
              type="email"
              placeholder="Your email."
              className="p-4 focus:outline-none rounded-lg w-350 sm:w-275 bg-inherit border dark:border-gray-700 border-gray-300"
            />
            <textarea
              name="message"
              placeholder="Your message."
              rows={4}
              className="p-4 focus:outline-none rounded-lg w-350 sm:w-275 bg-inherit border dark:border-gray-700 border-gray-300"
            />
            <button
              type="submit"
              className="bg-transparent transition-all duration-200 border dark:border-gray-800 border-gray-300 hover:bg-[#00e676] rounded-md p-2 w-40 dark:text-gray-800 font-bold place-self-center"
            >
              Send
            </button>
          </form>
        </div>

        <div className="border dark:border-gray-700 border-gray-300 rounded-lg my-6 w-350 sm:w-330 flex flex-col p-6 gap-4 place-items-center">
          <h1 className="text-xl sm:text-lg font-bold">Get in touch today.</h1>
          <a href="https://wa.link/uow8lm" target="_blank">
            <div className="flex gap-1">
              <Phone className="text-[#25d366]" />
              <h3>
                Mobile : <span className="hover:underline"> 7025 824 984</span>
              </h3>
            </div>
          </a>

          <a href="mailto:mirfan3054@gmail.com">
            <div className="flex gap-1">
              <Email className="text-[#25d366]" />
              <h3>
                Email :{" "}
                <span className="hover:underline">mirfan3054@gmail.com</span>
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
