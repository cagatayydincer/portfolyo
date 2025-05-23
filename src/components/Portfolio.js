import React from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import './portfolio.css';

const projects = [
  {
    title: 'Kişisel Blog',
    description: 'React ve Node.js kullanarak geliştirilen bir blog uygulaması.',
  },
  {
    title: 'E-Ticaret Sitesi',
    description: 'React, Redux ve Stripe ile ödeme sistemi entegre e-ticaret projesi.',
  },
  {
    title: 'Not Alma Uygulaması',
    description: 'Node.js backend ve MongoDB veri tabanı ile not uygulaması.',
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfolyo</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
