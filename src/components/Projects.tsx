import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  image: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  githubLink, 
  liveLink, 
  image,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card flex flex-col h-full"
    >
      <div className="relative overflow-hidden rounded-t-lg mb-4 h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://via.placeholder.com/600x400?text=${title.replace(/\s+/g, '+')}`;
          }}
        />
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      <p className="text-tertiary mb-4 flex-grow">{description}</p>
      
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="text-xs bg-primary px-2 py-1 rounded text-secondary border border-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-tertiary hover:text-secondary transition-colors duration-300"
              aria-label={`GitHub repository for ${title}`}
            >
              <FaGithub size={20} />
            </a>
          )}
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-tertiary hover:text-secondary transition-colors duration-300"
              aria-label={`Live demo for ${title}`}
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const projectsData = [
    {
      title: "Real-time Data Pipeline",
      description: "Designed and implemented a real-time data processing pipeline using Apache Kafka, Spark Streaming, and Elasticsearch to analyze streaming data from IoT devices.",
      technologies: ["Kafka", "Spark Streaming", "Elasticsearch", "Python", "Docker"],
      githubLink: "https://github.com/yashjeet/realtime-data-pipeline",
      image: "/projects/data-pipeline.jpg"
    },
    {
      title: "Data Warehouse Solution",
      description: "Built a comprehensive data warehouse solution on AWS using Redshift, integrating data from multiple sources with automated ETL processes using Airflow.",
      technologies: ["AWS Redshift", "Airflow", "Python", "SQL", "dbt"],
      githubLink: "https://github.com/yashjeet/data-warehouse-solution",
      image: "/projects/data-warehouse.jpg"
    },
    {
      title: "ML Feature Engineering Pipeline",
      description: "Developed a robust feature engineering pipeline for machine learning models, processing and transforming raw data into model-ready features.",
      technologies: ["Python", "Pandas", "Scikit-learn", "PySpark", "MLflow"],
      githubLink: "https://github.com/yashjeet/ml-feature-pipeline",
      image: "/projects/ml-features.jpg"
    },
    {
      title: "Data Quality Framework",
      description: "Created a comprehensive data quality framework with automated testing, validation, and monitoring of data pipelines to ensure data integrity.",
      technologies: ["Great Expectations", "Python", "Airflow", "Prometheus", "Grafana"],
      githubLink: "https://github.com/yashjeet/data-quality-framework",
      image: "/projects/data-quality.jpg"
    },
    {
      title: "Cloud Data Lake",
      description: "Architected and implemented a scalable data lake solution on GCP, enabling efficient storage and processing of structured and unstructured data.",
      technologies: ["GCP", "Cloud Storage", "Dataproc", "BigQuery", "Terraform"],
      githubLink: "https://github.com/yashjeet/cloud-data-lake",
      image: "/projects/data-lake.jpg"
    },
    {
      title: "Streaming Analytics Dashboard",
      description: "Built an interactive real-time analytics dashboard that visualizes streaming data metrics with low latency for business intelligence.",
      technologies: ["Kafka", "Spark", "Node.js", "React", "D3.js"],
      githubLink: "https://github.com/yashjeet/streaming-analytics-dashboard",
      liveLink: "https://streaming-analytics-demo.yashjeet.com",
      image: "/projects/analytics-dashboard.jpg"
    }
  ];

  return (
    <section className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                image={project.image}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 