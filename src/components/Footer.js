import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-400">
          <p className="mb-2">Built with ❤️ using React and Tailwind CSS</p>
          <p>© {new Date().getFullYear()} Thong. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
