// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about-me" className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#172554] text-white py-20 px-6 md:px-12 lg:px-24">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-lg text-gray-300 leading-relaxed">
          I'm a <span className="text-blue-400 font-medium">self-taught Front-End Developer</span> and <span className="text-purple-400 font-medium">SEO Specialist</span> who found my way into tech by chasing a challenge I couldn’t ignore.
          After feeling unfulfilled in my previous career, I turned late nights and energy drinks into code, design, and eventually — my first developer job.
        </p>

        <p className="text-lg text-gray-300 mt-6 leading-relaxed">
          That first role became my real classroom. I took on everything I could — from building themes and fixing bugs to mentoring coworkers and optimizing sites for performance and visibility.
          With time, I discovered a true passion for SEO — and dove deep. I’ve taken countless courses, refined best practices, and continue to level up my front-end + SEO stack to help teams I work with grow smarter and faster.
        </p>

        <p className="text-lg text-gray-300 mt-6 leading-relaxed">
          I’m always learning, always building, and always striving to get better — not just for myself, but for the people, teams, and users I build for.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
