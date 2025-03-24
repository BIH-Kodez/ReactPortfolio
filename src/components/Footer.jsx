import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#0f172a] text-gray-300 py-6 px-6 md:px-12 lg:px-24"
    >
      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto m-4 gap-4">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Esmin Pasic. All rights reserved.
        </p>

        <motion.div
          className="flex space-x-6 text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="https://github.com/BIH-Kodez?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-notifcenter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <SiIndeed />
          </a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
