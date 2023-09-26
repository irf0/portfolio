import { Home, MoodBad } from "@mui/icons-material";

export default function NotFound() {
  return (
    <div className="flex flex-col text-center justify-center p-20 m-20 gap-4">
      <div>
        <h2 className="text-9xl sm:text-4xl font-extrabold">
          4<strong className="text-[#00e676]">0</strong>4
        </h2>
        <p className="text-xl font-bold">
          Ah, Oh <MoodBad /> It seems you have arrived at Mars.
        </p>
      </div>
      <a href="/">
        <button
          type="button"
          className="p-3 rounded-md font-bold bg-gray-900 text-gray-300"
        >
          Let's Go Home <Home />
        </button>
      </a>
    </div>
  );
}
