import { motion } from "framer-motion";

export default function CandidateCard({ candidate, onVoteAgain }) {
  const candidateDetails = {
    ward: {
      name: "ഷംസാദ നജീബ്",
      image: "/images/candi1.jpg",
      logo: "/images/one.png",
      position: 3,
      level: "Ward",
      place: "KUNNAMANGALAM",
      code: "VAZHAKKAD",
    },
    block: {
      name: "വിനോദ് പടനിലം",
      image: "/images/candi2.jpg",
      logo: "/images/two.png",
      position: 4,
      level: "Block",
      place: "KUNNAMANGALAM",
      code: "MALAPPURAM",
    },
    district: {
      name: "സീന",
      image: "/images/candi3.jpg",
      logo: "/images/three.png",
      position: 2,
      level: "District",
      place: "KUNNAMANGALAM",
      code: "MALAPPURAM",
    },
  };

  const details = candidateDetails[candidate.party];

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Image animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4 py-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full max-w-sm">
        {/* Image Section */}
        <motion.div
          className="relative mb-3"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Image container */}
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
            <img
              src={details.image}
              alt={details.name}
              className="w-full h-auto object-contain"
            />

            {/* Voted Badge */}
            <motion.div
              className="absolute top-3 left-3 bg-blue-900 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 font-semibold shadow-lg text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <span>Voted</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>

            {/* Decorative bottom element */}
            <div className="absolute -bottom-2 right-0 w-16 h-16 bg-linear-to-br from-yellow-200 to-yellow-300 rounded-full opacity-30 blur-xl"></div>
          </div>
        </motion.div>

        {/* Candidate Info Card */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-3 mb-3"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name and Logo */}
          <div className="flex items-start gap-2 mb-3 pb-3 border-b border-gray-200">
            <div className="flex-1">
              <h2 className="text-lg font-extrabold text-gray-900 mb-0.5">
                {details.name}
              </h2>
              <p className="text-xs text-gray-500">Candidate</p>
            </div>
            <img
              src={details.logo}
              alt="Party Logo"
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Details Grid */}
          <div className="space-y-1.5">
            {/* Position */}
            <div className="flex items-center justify-between p-1.5 bg-gray-50 rounded">
              <span className="text-xs font-medium text-gray-600">
                Position
              </span>
              <span className="text-xs font-bold text-gray-900">
                {details.position}
              </span>
            </div>

            {/* Level */}
            <div className="flex items-center justify-between p-1.5 bg-gray-50 rounded">
              <span className="text-xs font-medium text-gray-600">Level</span>
              <span className="text-xs font-bold text-gray-900">
                {details.level}
              </span>
            </div>

            {/* Place */}
            <div className="flex items-center justify-between p-1.5 bg-gray-50 rounded">
              <span className="text-xs font-medium text-gray-600">Place</span>
              <span className="text-xs font-bold text-gray-900">
                {details.place}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Buttons */}
        <div className="space-y-1.5">
          {/* Voted Button */}
          <motion.button
            className="w-full bg-gray-300 text-gray-700 py-1.5 rounded-lg font-semibold cursor-not-allowed opacity-60 text-xs"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            disabled
          >
            ✓ Voted
          </motion.button>

          {/* Vote Again Button */}
          <motion.button
            onClick={onVoteAgain}
            className="w-full bg-linear-to-r from-green-500 to-green-600 text-white py-1.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow text-xs"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            Vote Again
          </motion.button>
        </div>

        {/* Footer Info */}
        <motion.p
          className="text-center text-xs text-gray-500 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Redirecting to next candidate...
        </motion.p>
      </div>
    </motion.div>
  );
}
