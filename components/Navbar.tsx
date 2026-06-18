'use client';

import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact', label: 'Contact' },
];

// Dummy Google Drive resume link — replace with your actual link
const RESUME_LINK = 'https://drive.google.com/file/d/1NCUcfkQcdd0VxJ84xquw2XEcq8Fkvc0-/view?usp=sharing';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} id="navbar">
      <div className={`container ${styles.inner}`}>
        {/* Logo — serif eK monogram only */}
        <a
          href="#"
          className={styles.logo}
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <span className={styles.logoIcon}><em>e</em>K</span>
        </a>

        {/* Desktop Nav */}
        <ul className={styles.links} role="navigation">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${styles.link} ${activeSection === link.href.replace('#', '') ? styles.active : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className={styles.actions}>
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-ghost ${styles.resumeBtn}`}
            id="nav-resume-btn"
          >
            <Download size={15} strokeWidth={2} />
            Resume
          </a>
          <a
            href="mailto:eshwarkatika20@gmail.com"
            className={`btn btn-primary ${styles.ctaBtn}`}
            id="nav-hire-btn"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${styles.mobileLink} ${activeSection === link.href.replace('#', '') ? styles.active : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
              <Download size={15} /> Resume
            </a>
          </li>
          <li>
            <a href="mailto:eshwarkatika20@gmail.com" className="btn btn-primary">Hire Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
