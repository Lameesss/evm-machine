export default function Table({
  selectedParty,
  onVote,
  glowingLight,
  votedCandidate,
}) {
  const candidateData = {
    ward: {
      position: 3,
      name: "ഷംസാദ നജീബ്",
      logo: "/images/one.png",
    },
    block: {
      position: 4,
      name: "വിനോദ് പടനിലം",
      logo: "/images/two.png",
    },
    district: {
      position: 2,
      name: "സീന",
      logo: "/images/three.png",
    },
  };

  const currentCandidate = candidateData[selectedParty];

  const candidates = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: i + 1 === currentCandidate.position ? currentCandidate.name : null,
    logo: i + 1 === currentCandidate.position ? currentCandidate.logo : null,
  }));

  const getTableBgColor = () => {
    switch (selectedParty) {
      case "ward":
        return "bg-white";
      case "block":
        return "bg-pink-200";
      case "district":
        return "bg-blue-200";
      default:
        return "bg-white";
    }
  };

  const getTableBorderColor = () => {
    switch (selectedParty) {
      case "ward":
        return "border-gray-300";
      case "block":
        return "border-pink-300";
      case "district":
        return "border-blue-300";
      default:
        return "border-gray-300";
    }
  };

  return (
    <div className="flex justify-center px-2 sm:px-4 py-6">
      <div
        className={`w-full max-w-2xl ${getTableBgColor()} rounded-2xl p-6 sm:p-8 border-4 ${getTableBorderColor()}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8 px-4 py-4 bg-white rounded-lg">
          <div className="flex items-center gap-3">
            <h2 className="text-lg sm:text-xl font-bold">Ready</h2>
            <div
              className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full transition-all duration-300 ${
                glowingLight
                  ? "bg-red-500 shadow-lg shadow-red-500 animate-pulse"
                  : "bg-green-500"
              }`}
            ></div>
          </div>
          <h2 className="text-lg sm:text-xl font-bold">Ballot Unit 1</h2>
        </div>

        {/* Table */}
        <table className="w-full border-collapse border-2 border-gray-400 text-xs sm:text-base">
          <tbody>
            {candidates.map((candidate) => (
              <tr
                key={candidate.id}
                className="border-b-2 border-gray-400 last:border-b-0"
              >
                {/* Column 1: Serial Number */}
                <td className="w-8 sm:w-16 font-semibold text-gray-700 py-3 sm:py-8 px-1 sm:px-3 border-r-2 border-gray-400 text-center text-sm sm:text-xl">
                  {candidate.id}
                </td>

                {/* Column 2: Candidate Name - Large Center Column */}
                <td className="flex-1 text-gray-600 py-4 sm:py-8 px-3 sm:px-4 border-r-2 border-gray-400 text-xs sm:text-sm min-w-0">
                  <div className="flex items-center gap-2">
                    {candidate.name && (
                      <>
                        <span className="text-xs sm:text-sm font-bold">
                          {candidate.name}
                        </span>
                        {candidate.logo && (
                          <img
                            src={candidate.logo}
                            alt="candidate logo"
                            className="w-6 h-6 sm:w-7 sm:h-7 object-contain shrink-0"
                          />
                        )}
                      </>
                    )}
                  </div>
                </td>

                {/* Column 3: Red Light + Vote Button */}
                <td className="py-2 sm:py-6 px-2 sm:px-4">
                  <div className="flex items-center justify-end gap-2 sm:gap-3">
                    <button
                      className={`w-5 h-5 sm:w-7 sm:h-7 rounded-full transition-all duration-300 shrink-0 ${
                        glowingLight === candidate.id
                          ? "bg-red-500 shadow-lg shadow-red-500 animate-pulse"
                          : "bg-red-900 hover:bg-red-800"
                      }`}
                    ></button>
                    <button
                      onClick={() => onVote(candidate.id, candidate.name)}
                      disabled={votedCandidate !== null}
                      className="px-6 sm:px-10 py-3 sm:py-5 bg-blue-900 text-white rounded-full font-semibold hover:bg-blue-800 transition text-xs sm:text-base whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                    ></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
