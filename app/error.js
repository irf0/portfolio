"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col text-center justify-center p-20 m-20 gap-4">
      <h2 className="font-bold text-xl sm:text-lg">
        Something went wrong! Don't Worry,
      </h2>

      <button
        className="bg-red-500 w-80 sm:w-40 place-self-center p-3 rounded-md font-bold text-lg"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Let's Try again
      </button>
    </div>
  );
}
