import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Element } from 'react-scroll';
import './hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Merhaba, Ben Çağatay
        </motion.h1>

        <motion.div
          className="hero-typewriter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Typewriter
            options={{
              strings: [
                'Fullstack Web Geliştiricisi',
                'React & Node.js Uzmanı',
                'Tutkulu Yazılımcı',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <a href="#about" className="hero-btn blue">Hakkımda</a>
          <a href="#contact" className="hero-btn outline">İletişim</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
