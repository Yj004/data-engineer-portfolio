import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-tertiary">&copy; {new Date().getFullYear()} Yashjeet. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/yj004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-tertiary hover:text-secondary transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/yashjeet-singh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-tertiary hover:text-secondary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://twitter.com/yashjeet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-tertiary hover:text-secondary transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a 
              href="mailto:work.yashjeet@gmail.com" 
              className="text-tertiary hover:text-secondary transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 