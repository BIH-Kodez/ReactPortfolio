// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const devDuties = [
  'Developed custom themes and templates using DNN CMS for dynamic content delivery.',
  'Transitioned to WordPress CMS, building custom themes and templates tailored to department needs.',
  'Improved coding standards and architecture across the archstl.org site, enhancing stability and maintainability.',
  'Diagnosed and resolved plugin conflicts, performed plugin configuration, and managed updates.',
  'Created and managed staging environments for safe testing and development workflows.',
  'Assisted team members in downloading local copies of the site via Local by Flywheel for safe backups and sandboxing.',
];

const seoDuties = [
  'Collaborated closely with the marketing team to enhance SEO strategies and content performance.',
  'Built responsive WordPress pages optimized for both SEO and user experience.',
  'Held regular SEO-focused meetings with marketing to support their campaign goals.',
  'Implemented SEO best practices across newly developed pages for various departments.',
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0f172a] text-white py-20 px-6 md:px-12 lg:px-24">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">My Experience</h2>

        {/* CMS Experience Card */}
        <motion.div
          className="rounded-xl border border-purple-500/40 bg-white/5 p-8 shadow-lg backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-start gap-4 md:items-center mb-4">
            {/* Optional logo - remove src if not needed */}
            {/* <img src="/cms-logo.png" alt="CMS Logo" className="w-10 h-10 object-contain" /> */}
            <h3 className="text-2xl font-semibold">
              Archdiocese Of Saint Louis 
            </h3>
          </div>

          <p className="text-lg text-gray-400 font-medium mb-6">November 2022 – Present</p>

          {/* Web Dev Responsibilities */}
          <motion.div
            className="mb-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4 text-blue-300">Web Development & CMS Duties</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              {devDuties.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <motion.span whileHover={{ scale: 1.2 }} className="mt-1">
                    <FaCheckCircle className="text-blue-400" />
                  </motion.span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SEO Responsibilities */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4 text-purple-300">SEO & Marketing Collaboration</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              {seoDuties.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <motion.span whileHover={{ scale: 1.2 }} className="mt-1">
                    <FaCheckCircle className="text-purple-400" />
                  </motion.span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;