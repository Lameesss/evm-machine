export default function Buttons({ selectedParty, onSelectParty }) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-4 justify-center pt-8 sm:pt-12 pb-4 sm:pb-6 px-2">
      <button
        onClick={() => onSelectParty("ward")}
        className={`px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white rounded-full font-semibold transition ${
          selectedParty === "ward"
            ? "bg-gray-600 ring-2 ring-gray-800"
            : "bg-gray-400 hover:bg-gray-500"
        }`}
      >
        WARD
      </button>
      <button
        onClick={() => onSelectParty("block")}
        className={`px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white rounded-full font-semibold transition ${
          selectedParty === "block"
            ? "bg-pink-500 ring-2 ring-pink-700"
            : "bg-pink-300 hover:bg-pink-400"
        }`}
      >
        BLOCK
      </button>
      <button
        onClick={() => onSelectParty("district")}
        className={`px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white rounded-full font-semibold transition ${
          selectedParty === "district"
            ? "bg-blue-500 ring-2 ring-blue-700"
            : "bg-blue-300 hover:bg-blue-400"
        }`}
      >
        DISTRICT
      </button>
    </div>
  );
}
