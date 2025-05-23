import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Ana Sayfa' },
    { id: 'about', label: 'Hakkımda' }, // Tek bir hedef kullanıyoruz
    { id: 'skills', label: 'Neler Yapabilirim?' },
    { id: 'portfolio', label: 'Portfolyo' },
    { id: 'contact', label: 'İletişim' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <ul className="navbar-links">
        {navItems.map((item) => (
          <li key={item.id}>
            <ScrollLink
              activeClass="active"
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              {item.label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;