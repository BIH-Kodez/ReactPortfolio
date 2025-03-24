import { motion } from "framer-motion";
import profileImage from "../assets/Hero-SVG.svg";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section className="relative bg-[#0f172a] min-h-screen overflow-hidden">
      {/* Background Beams */}
      <div className="absolute  inset-0 z-0">
        <BackgroundBeamsWithCollision />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex items-center justify-center px-6 md:px-12 lg:px-24 min-h-screen">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl w-full gap-8 md:gap-12">
          {/* Text */}
          <motion.div
            className="text-center md:text-left flex-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl sm:text-5xl font-bold mb-4 text-white"
              variants={itemVariants}
            >
              <span className="block">Hello, I'm</span>
              <motion.span
                className="text-purple-400 inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Esmin Pasic
              </motion.span>
              <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Front End Developer / SEO Specialist
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-gray-300 mt-4 mb-8 max-w-lg mx-auto md:mx-0 text-lg"
              variants={itemVariants}
            >
              Creative Front-End Developer & SEO Strategist driven by clean code,
              fast experiences, and results that show up in search.
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.button
                className="bg-gradient-to-r from-purple-500 to-blue-400 text-white font-semibold py-3 px-6 rounded-full shadow-lg relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Download CV</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-1 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full animate-spin-slow blur-[80px] opacity-20" />
              <motion.div
                className="relative border-4 border-transparent bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-full p-1 w-full h-full overflow-hidden"
                whileHover={{ rotate: 2, scale: 1.02 }}
              >
                <img
                  src={profileImage}
                  alt="Esmin Pasic"
                  className="w-full h-full object-cover rounded-full"
                  loading="eager"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;