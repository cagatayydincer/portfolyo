import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

const Home = () => (
  <section style={styles.section}>
    <motion.h1
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={styles.title}
    >
      Merhaba, ben Çağatay
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      style={styles.subtitle}
    >
      Fullstack Developer & React Enthusiast
    </motion.p>
  </section>
);

const styles = {
  section: {
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '4rem 1rem',
  },
  title: {
    color: '#60a5fa',
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  subtitle: {
    color: '#cbd5e1',
    fontSize: '1.4rem',
  },
};

export default Home;
