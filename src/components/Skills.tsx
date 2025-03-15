import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaDatabase, FaAws, FaDocker, 
  FaGithub, FaLinux
} from 'react-icons/fa';
import { 
  SiApachespark, SiApacheairflow, SiApachekafka, 
  SiGooglecloud, SiMicrosoftazure, SiTensorflow,
  SiPandas, SiNumpy, SiJupyter, SiPostgresql,
  SiMongodb, SiRedis, SiElasticsearch, SiKubernetes
} from 'react-icons/si';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="card"
    >
      <div className="text-secondary text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-tertiary">{description}</p>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const skillsData = [
    {
      icon: <FaPython />,
      title: "Python",
      description: "Expert in Python for data processing, analysis, and building data pipelines.",
    },
    {
      icon: <FaDatabase />,
      title: "SQL",
      description: "Proficient in SQL for data querying, manipulation, and database design.",
    },
    {
      icon: <SiApachespark />,
      title: "Apache Spark",
      description: "Experience with Spark for large-scale data processing and analytics.",
    },
    {
      icon: <SiApacheairflow />,
      title: "Airflow",
      description: "Building and managing complex data workflows and pipelines.",
    },
    {
      icon: <SiApachekafka />,
      title: "Kafka",
      description: "Implementing real-time data streaming and event-driven architectures.",
    },
    {
      icon: <FaAws />,
      title: "AWS",
      description: "Utilizing AWS services for cloud-based data solutions (S3, Redshift, EMR, etc.).",
    },
    {
      icon: <SiGooglecloud />,
      title: "Google Cloud",
      description: "Experience with GCP services like BigQuery, Dataflow, and Dataproc.",
    },
    {
      icon: <SiMicrosoftazure />,
      title: "Azure",
      description: "Working with Azure Data Factory, Synapse Analytics, and other data services.",
    },
    {
      icon: <SiPandas />,
      title: "Pandas",
      description: "Data manipulation and analysis using Pandas dataframes.",
    },
    {
      icon: <SiNumpy />,
      title: "NumPy",
      description: "Numerical computing and array operations for data processing.",
    },
    {
      icon: <SiPostgresql />,
      title: "PostgreSQL",
      description: "Database design, optimization, and advanced SQL operations.",
    },
    {
      icon: <SiMongodb />,
      title: "MongoDB",
      description: "Working with NoSQL databases for flexible data storage.",
    },
    {
      icon: <FaDocker />,
      title: "Docker",
      description: "Containerizing applications and data services for consistent deployment.",
    },
    {
      icon: <SiKubernetes />,
      title: "Kubernetes",
      description: "Orchestrating containerized applications for scalability.",
    },
    {
      icon: <FaGithub />,
      title: "Git/GitHub",
      description: "Version control and collaborative development workflows.",
    },
    {
      icon: <FaLinux />,
      title: "Linux",
      description: "Command line proficiency and shell scripting for automation.",
    },
  ];

  return (
    <section className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Skills & Technologies</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {skillsData.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                delay={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 