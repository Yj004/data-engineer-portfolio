import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl order-2 md:order-1"
          >
            <h1 className="text-secondary font-mono mb-2">Hi, my name is</h1>
            <h2 className="text-5xl md:text-7xl font-bold mb-4">Yashjeet.</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-tertiary mb-6">I build data pipelines and insights.</h3>
            
            <p className="text-tertiary text-lg md:text-xl max-w-2xl mb-8">
              I'm a data engineer specializing in building robust data infrastructure, 
              ETL pipelines, and analytics solutions. I transform raw data into 
              valuable insights that drive business decisions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn-primary flex items-center gap-2">
                View My Work <FaArrowRight />
              </Link>
              <Link to="/contact" className="btn-primary flex items-center gap-2">
                Get In Touch <FaArrowRight />
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-blue-600/40 rounded-full blur-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-secondary/50 z-10">
                  <img 
                    src="/images/profile-image.jpg" 
                    alt="Yashjeet" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400x400?text=Yashjeet';
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home; 