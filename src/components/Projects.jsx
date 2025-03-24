// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Find My Parish – GIS Map Integration',
    description: `Rebuilt the "Find My Parish" locator tool by replacing the legacy Ruby-based system with a streamlined JavaScript approach. 
    I extracted GIS data from shapefiles and integrated it into a Google Cloud-hosted API. 
    This allowed for dynamic lookup and mapping of smaller parishes not indexed on Google Maps, improving community visibility and engagement while eliminating server-side dependencies.`,
    image: '/images/Findmyparish.png',
    live: 'https://www.archstl.org/join-us/mass-times/?find=my-parish', // Replace with actual URL if available
    github: '', // Leave empty or add link if repo exists
  },
  {
    title: 'Cando – Property Investment Landing Page',
    description: `Developed a responsive React.js landing page for a real estate investment platform using Tailwind CSS. 
    The design focused on clean, modern UI and conversion-driven elements. 
    Built to be fast, accessible, and scalable for marketing teams to promote property investments to potential users.`,
    image: '/images/Realestatepic.png',
    live: 'https://bih-kodez.github.io/real-estate-project/', // Replace with actual deployed link
    github: 'https://github.com/your-cando-repo', // Replace if repo is public
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0f172a] text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="rounded-xl border border-blue-500/20 bg-white/5 p-6 shadow-xl backdrop-blur-md flex flex-col"
            >
              <div className="mb-4 rounded-md overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-6 flex-grow">{project.description}</p>

              <div className="flex gap-4 flex-wrap">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-blue-400 px-4 py-2 rounded-full text-sm font-semibold shadow hover:scale-105 transition"
                  >
                    Live preview
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[#0f172a] transition"
                  >
                    Check on GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
