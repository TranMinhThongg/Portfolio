import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-8 text-blue-400">About Me</h2>
        <div className="space-y-8">
          <p className="text-xl text-gray-300">
            I'm a passionate developer with a keen eye for detail and a love for creating beautiful, functional websites.
            With experience in modern web technologies, I strive to create user-friendly and visually appealing digital experiences.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-400">•</span>
                  <span className="ml-2">React.js</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400">•</span>
                  <span className="ml-2">Node.js</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400">•</span>
                  <span className="ml-2">JavaScript/TypeScript</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400">•</span>
                  <span className="ml-2">Tailwind CSS</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Interests</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-400">•</span>
                  <span className="ml-2">Web Development</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400">•</span>
                  <span className="ml-2">UI/UX Design</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400">•</span>
                  <span className="ml-2">Open Source</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400">•</span>
                  <span className="ml-2">Technology Trends</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
