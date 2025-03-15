import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <p className="text-tertiary mb-8">
                I'm currently open to new opportunities and collaborations. Whether you have a question, 
                a project idea, or just want to say hello, feel free to reach out. I'll do my best to 
                get back to you as soon as possible!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-secondary mr-4">
                    <FaEnvelope size={20} />
                  </div>
                  <a 
                    href="mailto:work.yashjeet@gmail.com" 
                    className="text-tertiary hover:text-secondary transition-colors duration-300"
                  >
                    work.yashjeet@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <div className="text-secondary mr-4">
                    <FaLinkedin size={20} />
                  </div>
                  <a 
                    href="https://linkedin.com/in/yashjeet-singh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-tertiary hover:text-secondary transition-colors duration-300"
                  >
                    linkedin.com/in/yashjeet-singh
                  </a>
                </div>
                
                <div className="flex items-center">
                  <div className="text-secondary mr-4">
                    <FaGithub size={20} />
                  </div>
                  <a 
                    href="https://github.com/yj004" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-tertiary hover:text-secondary transition-colors duration-300"
                  >
                    github.com/yj004
                  </a>
                </div>
                
                <div className="flex items-center">
                  <div className="text-secondary mr-4">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <span className="text-tertiary">San Francisco, CA</span>
                </div>
              </div>
            </div>
            
            <div className="bg-dark p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              
              {submitSuccess ? (
                <div className="bg-green-900/30 border border-green-500 text-green-200 rounded p-4 mb-6">
                  Thank you for your message! I'll get back to you soon.
                </div>
              ) : null}
              
              {submitError ? (
                <div className="bg-red-900/30 border border-red-500 text-red-200 rounded p-4 mb-6">
                  {submitError}
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-tertiary mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary border border-tertiary/30 rounded p-3 text-light focus:border-secondary focus:outline-none transition-colors duration-300"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-tertiary mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary border border-tertiary/30 rounded p-3 text-light focus:border-secondary focus:outline-none transition-colors duration-300"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-tertiary mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary border border-tertiary/30 rounded p-3 text-light focus:border-secondary focus:outline-none transition-colors duration-300"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-tertiary mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-primary border border-tertiary/30 rounded p-3 text-light focus:border-secondary focus:outline-none transition-colors duration-300"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex justify-center items-center"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 