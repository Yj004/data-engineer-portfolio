import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="md:col-span-2">
              <p className="text-tertiary mb-4">
                Hello! I'm Yashjeet, a passionate Data Engineer with expertise in designing and implementing 
                data infrastructure, ETL pipelines, and analytics solutions. My journey in the data world 
                began with a fascination for transforming raw data into meaningful insights that drive 
                business decisions.
              </p>
              
              <p className="text-tertiary mb-4">
                With a strong foundation in computer science and data engineering principles, I specialize 
                in building scalable data architectures that handle large volumes of data efficiently. 
                I enjoy solving complex data problems and creating systems that make data accessible 
                and valuable to organizations.
              </p>
              
              <p className="text-tertiary mb-4">
                My technical toolkit includes:
              </p>
              
              <ul className="grid grid-cols-2 gap-2 mb-6">
                <li className="text-tertiary flex items-center">
                  <span className="text-secondary mr-2">▹</span> Python
                </li>
                <li className="text-tertiary flex items-center">
                  <span className="text-secondary mr-2">▹</span> SQL
                </li>
                <li className="text-tertiary flex items-center">
                  <span className="text-secondary mr-2">▹</span> Apache Spark
                </li>
                <li className="text-tertiary flex items-center">
                  <span className="text-secondary mr-2">▹</span> Hadoop
                </li>
                <li className="text-tertiary flex items-center">
                  <span className="text-secondary mr-2">▹</span> Airflow
                </li>
                <li className="text-tertiary flex items-center">
                  <span className="text-secondary mr-2">▹</span> AWS/GCP/Azure
                </li>
                <li className="text-tertiary flex items-center">
                  <span className="text-secondary mr-2">▹</span> Kafka
                </li>
                <li className="text-tertiary flex items-center">
                  <span className="text-secondary mr-2">▹</span> Docker
                </li>
              </ul>
              
              <p className="text-tertiary">
                When I'm not coding or designing data pipelines, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying outdoor activities. I'm always eager to 
                learn and grow in this ever-evolving field of data engineering.
              </p>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden border-2 border-secondary relative z-10 bg-gradient-to-b from-primary to-blue-600">
                <img 
                  src="/images/profile-image.jpg" 
                  alt="Yashjeet" 
                  className="w-full h-auto mix-blend-overlay hover:mix-blend-normal transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x500?text=Yashjeet';
                  }}
                />
              </div>
              <div className="absolute inset-0 border-2 border-secondary rounded-lg translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 