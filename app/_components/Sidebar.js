import { CloseRounded } from "@mui/icons-material";
import React, { useRef } from "react";

function Sidebar({ openMenu }) {
  const ref = useRef();
  return (
    <div
      ref={ref}
      className="absolute right-1 overflow-hidden z-50 h-87vh w-340 sm:-mt-5 rounded-tl-lg rounded-bl-lg shadow-2xl dark:border border-gray-950 shadow-gray-950 bg-white dark:bg-gray-800 duration-100 ease-out animate-slide-in"
    >
      <div className="flex">
        <button type="button" onClick={openMenu}>
          <CloseRounded />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
