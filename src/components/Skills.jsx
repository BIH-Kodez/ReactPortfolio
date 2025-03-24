import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3, FaJs, FaGithub, FaCode, FaGoogle,
  FaChartLine, FaClock, FaPeopleCarry, FaComments
} from 'react-icons/fa';
import { 
  SiFigma, SiSemrush, SiGoogletagmanager, 
  SiGooglesearchconsole, SiGoogle, SiTailwindcss,
  SiReact, SiNextdotjs 
} from 'react-icons/si';

const Skills = () => {
  const skillsData = {
    programming: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3 className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> }
    ],
    frameworks: [
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'React.js', icon: <SiReact className="text-blue-400" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-gray-300" /> }
    ],
    tools: [
      { name: 'GitHub', icon: <FaGithub className="text-gray-300" /> },
      { name: 'VS Code', icon: <FaCode className="text-blue-400" /> },
      { name: 'Figma', icon: <SiFigma className="text-purple-400" /> }
    ],
    seo: [
      { name: 'Google Analytics', icon: <FaGoogle className="text-blue-500" /> },
      { name: 'Google Tag Manager', icon: <SiGoogletagmanager className="text-green-400" /> },
      { name: 'Google Search Console', icon: <SiGooglesearchconsole className="text-purple-400" /> },
      { name: 'Google APIs', icon: <SiGoogle className="text-red-400" /> },
      { name: 'SEMrush', icon: <SiSemrush className="text-yellow-400" /> }
    ],
    softSkills: [
      { name: 'Time Management', icon: <FaClock className="text-blue-400" /> },
      { name: 'Problem-Solving', icon: <FaChartLine className="text-green-400" /> },
      { name: 'Agile Teamwork', icon: <FaPeopleCarry className="text-purple-400" /> },
      { name: 'Communication', icon: <FaComments className="text-red-400" /> }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills-tools" className="py-20 px-6 md:px-12 lg:px-44 bg-gradient-to-br from-[#0f172a] to-[#1e293b] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -top-32 -left-32"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity
          }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -bottom-32 -right-32"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 2
          }}
        />
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          Skills & Tools
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {/* Programming Languages */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl backdrop-blur-lg border border-[#334155]"
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-4 flex justify-center  items-center gap-2">
              <FaCode className="text-lg" /> Programming
            </h3>
            <div className="space-y-3">
              {skillsData.programming.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center bg-[#0f172a]/50 px-4 py-3 rounded-lg group hover:bg-[#1d3a5c]/50 transition-all border border-[#334155] gap-3"
                >
                  {skill.icon}
                  <span className="text-gray-300 group-hover:text-white">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Frameworks & Libraries */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl backdrop-blur-lg border border-[#334155]"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex justify-center items-center gap-2">
              <SiReact className="text-lg" /> Frameworks
            </h3>
            <div className="space-y-3">
              {skillsData.frameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center bg-[#0f172a]/50 px-4 py-3 rounded-lg group hover:bg-[#1d3a5c]/50 transition-all border border-[#334155] gap-3"
                >
                  {framework.icon}
                  <span className="text-gray-300 group-hover:text-white">{framework.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Development Tools */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl backdrop-blur-lg border border-[#334155]"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4 flex justify-center items-center gap-2">
              <FaCode className="text-lg" /> Tools
            </h3>
            <div className="space-y-3">
              {skillsData.tools.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center bg-[#0f172a]/50 px-4 py-3 rounded-lg group hover:bg-[#1d3a5c]/50 transition-all border border-[#334155] gap-3"
                >
                  {tool.icon}
                  <span className="text-gray-300 group-hover:text-white">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SEO Tools */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl backdrop-blur-lg border border-[#334155]"
          >
            <h3 className="text-xl font-semibold text-green-400 mb-4 flex justify-center items-center gap-2">
              <FaChartLine className="text-lg" /> SEO Tools
            </h3>
            <div className="space-y-3">
              {skillsData.seo.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center bg-[#0f172a]/50 px-4 py-3 rounded-lg group hover:bg-[#1d3a5c]/50 transition-all border border-[#334155] gap-3"
                >
                  {tool.icon}
                  <span className="text-gray-300 group-hover:text-white">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl backdrop-blur-lg border border-[#334155]"
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-4 flex justify-center items-center gap-2">
              <FaPeopleCarry className="text-lg" /> Soft Skills
            </h3>
            <ul className="space-y-3">
              {skillsData.softSkills.map((skill, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center text-gray-300 group hover:text-white transition-colors gap-3"
                >
                  {skill.icon}
                  {skill.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;