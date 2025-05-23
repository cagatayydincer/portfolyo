import React from 'react';
import { Element } from 'react-scroll';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Tüm Hakları Saklıdır. | Tasarım: React Portfolio</p>
      <div className="footer-socials">
        <a href="#">X</a>
        <a href="https://github.com/cagatayydincer/" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="#">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
