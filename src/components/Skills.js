import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaMobileAlt } from 'react-icons/fa';
import './skill.css';

const skills = [
  {
    icon: <FaReact size={40} color="#61dafb" />,
    title: 'React',
    description: 'Bileşen tabanlı modern arayüzler geliştiriyorum.',
  },
  {
    icon: <FaNodeJs size={40} color="#68a063" />,
    title: 'Node.js',
    description: 'Sunucu taraflı uygulamalar ve RESTful API’ler yazıyorum.',
  },
  {
    icon: <FaDatabase size={40} color="#facc15" />,
    title: 'Veritabanı',
    description: 'MongoDB ve PostgreSQL gibi veritabanlarıyla çalışıyorum.',
  },
  {
    icon: <FaMobileAlt size={40} color="#38bdf8" />,
    title: 'Responsive Tasarım',
    description: 'Her cihazda sorunsuz çalışan arayüzler geliştiriyorum.',
  },
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <h2>Neler Yapabilirim?</h2>
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div className="skill-card" key={index}>
          {skill.icon}
          <h3>{skill.title}</h3>
          <p>{skill.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
