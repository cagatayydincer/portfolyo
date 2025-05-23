import React from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        İletişim
      </motion.h2>

      <motion.form
        onSubmit={(e) => e.preventDefault()}
        className="contact-form"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="form-group">
          <label>Ad Soyad</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Mail</label>
          <input type="email" required />
        </div>
        <div className="form-group">
          <label>İçerik</label>
          <textarea rows="5" required></textarea>
        </div>
        <button type="submit">Gönder</button>
      </motion.form>

      <div className="social-links">
        <p>Sosyal Medya</p>
        <ul>
          <li><a href="#">X</a></li>
          <li><a href="https://github.com/cagatayydincer/">GitHub</a></li>
          <li><a href="#">Facebook</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
