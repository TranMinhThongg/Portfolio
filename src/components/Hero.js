import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-blue-400">Hello, I'm Thong</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          A passionate developer and problem solver
        </p>
        <div className="space-y-4">
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="#projects"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-blue-400 hover:text-blue-300 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            View My Work
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
