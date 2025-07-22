import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-12 text-blue-400">Get in Touch</h2>
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-900 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-2xl text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <p className="text-gray-300">thong@example.com</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-900 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FaPhone className="text-2xl text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Phone</h3>
              </div>
              <p className="text-gray-300">+1 234 567 890</p>
            </motion.div>
          </div>
          <div className="flex justify-center space-x-8">
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-2xl text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-2xl text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <FaGithub />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
