import { motion } from "framer-motion";
import { useEffect } from "react";

export default function SuccessAnimation({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Background gradient animation
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  // Checkmark circle animation
  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  // Checkmark SVG animation
  const checkmarkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  // Text animations
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 1.0,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 1.3,
      },
    },
  };

  // Pulse animation for circle
  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: 1.3,
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-linear-to-br from-gray-50 via-white to-gray-100 z-50"
      variants={backgroundVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-green-100 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 bg-green-50 rounded-full opacity-10"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main content */}
      <div className="flex flex-col items-center gap-8 px-4 relative z-10">
        {/* Checkmark Circle with pulse */}
        <motion.div
          className="relative"
          variants={circleVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-28 h-28 sm:w-36 sm:h-36 bg-linear-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-2xl"
            variants={pulseVariants}
            animate="animate"
          >
            <motion.svg
              className="w-14 h-14 sm:w-20 sm:h-20 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.path
                d="M5 13l4 4L19 7"
                variants={checkmarkVariants}
                initial="hidden"
                animate="visible"
              />
            </motion.svg>
          </motion.div>
        </motion.div>

        {/* Success Text */}
        <motion.div
          className="text-center max-w-md"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Vote Successfully Completed
          </h2>
        </motion.div>

        {/* Malayalam subtitle */}
        <motion.p
          className="text-base sm:text-lg text-gray-600 text-center max-w-md font-medium"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          നിങ്ങളുടെ വോട്ട് വിജയകരമായി രേഖപ്പെടുത്തപ്പെട്ടു
        </motion.p>

        {/* Loading indicator */}
        <motion.div
          className="flex gap-2 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
