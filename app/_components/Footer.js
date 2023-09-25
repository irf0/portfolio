import {
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex p-6 sm:p-4 justify-evenly sm:justify-between">
        <a href="#navbar">
          <div>
            <h1 className="text-3xl flex place-items-center sm:text-lg leading-tight font-extrabold text-[#00e676]">
              {"<Irfan />"}
            </h1>
            <h4 className="dark:text-gray-400 text-gray-900 text-xs text-end -mt-2 -mr-4">
              obsessed about coding!
            </h4>
          </div>
        </a>

        <div className="flex place-items-center">
          <h1 className="text-lg sm:text-sm font-bold">
            {" "}
            &copy;Mohammad Irfan 2023{" "}
          </h1>
        </div>

        <div className="gap-4 flex sm:hidden">
          <a href="https://www.linkedin.com/in/dev-irfan/" target="_blank">
            <LinkedIn className="text-[#25d366]" style={{ fontSize: 28 }} />
          </a>
          <a href="https://twitter.com/mirfan3053" target="_blank">
            <Twitter className="text-[#25d366]" style={{ fontSize: 28 }} />
          </a>
          <a href="https://github.com/irf0" target="_blank">
            <GitHub className="text-[#25d366]" style={{ fontSize: 25 }} />
          </a>
          <a href="https://www.instagram.com/the_mirfan/" target="_blank">
            <Instagram className="text-[#25d366]" style={{ fontSize: 25 }} />
          </a>
          <a href="https://wa.link/uow8lm" target="_blank">
            <WhatsApp className="text-[#25d366]" style={{ fontSize: 25 }} />
          </a>
        </div>
      </div>

      <div className="gap-4 flex md:hidden lg:hidden xl:hidden mx-20">
        <a href="https://www.linkedin.com/in/dev-irfan/" target="_blank">
          <LinkedIn className="text-[#25d366]" style={{ fontSize: 28 }} />
        </a>
        <a href="https://twitter.com/mirfan3053" target="_blank">
          <Twitter className="text-[#25d366]" style={{ fontSize: 28 }} />
        </a>
        <a href="https://github.com/irf0" target="_blank">
          <GitHub className="text-[#25d366]" style={{ fontSize: 25 }} />
        </a>
        <a href="https://www.instagram.com/the_mirfan/" target="_blank">
          <Instagram className="text-[#25d366]" style={{ fontSize: 25 }} />
        </a>
        <a href="https://wa.link/uow8lm" target="_blank">
          <WhatsApp className="text-[#25d366]" style={{ fontSize: 25 }} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
