'use client';

import { useEffect, useRef } from 'react';
import { Shield, Key, Lock, Globe, Coffee, Cpu, Terminal, BookOpen } from 'lucide-react';
import styles from './Certifications.module.css';

const certs = [
  {
    id: 'ceh-dos',
    title: 'CEH v13: Denial of Service (DoS)',
    issuer: 'Infosys Springboard',
    icon: <Terminal size={22} strokeWidth={1.6} />,
    color: 'cyan',
    link: 'https://drive.google.com/file/d/1eLJvY3LrEx1SbU_GbdHWKb6ikvTc0niA/view?usp=drive_link',
    desc: 'EC-Council CEH v13 curriculum — DoS/DDoS attack vectors, mitigation strategies, and incident response in enterprise environments.',
  },
  {
    id: 'secure-coding-java',
    title: 'Secure Coding in Java SE 11',
    issuer: 'Infosys Springboard',
    icon: <Cpu size={22} strokeWidth={1.6} />,
    color: 'purple',
    link: 'https://drive.google.com/file/d/1b4G-8bem83Scj1iYdrmFk0dmGQnarle5/view?usp=drive_link',
    desc: 'Java SE 11 Programmer II — secure coding practices, vulnerability prevention (OWASP), and hardening Java applications.',
  },
  {
    id: 'crypto-infosys',
    title: 'Fundamentals of Cryptography',
    issuer: 'Infosys Springboard',
    icon: <Key size={22} strokeWidth={1.6} />,
    color: 'cyan',
    link: 'https://drive.google.com/file/d/1kDFtS9N5LiHbx6O2rmLpPq4Z7XDsV_ZY/view?usp=drive_link',
    desc: 'Symmetric & asymmetric encryption, hashing algorithms, PKI, and key management for secure communications.',
  },
  {
    id: 'infosec-infosys',
    title: 'Fundamentals of Information Security',
    issuer: 'Infosys Springboard',
    icon: <Lock size={22} strokeWidth={1.6} />,
    color: 'green',
    link: 'https://drive.google.com/file/d/1ZD91oyZspcwzV7vPQQeUw0D0XjEKReTc/view?usp=drive_link',
    desc: 'Core InfoSec principles — CIA triad, risk management frameworks, access control, and security policy design.',
  },
  {
    id: 'cybersec-infosys',
    title: 'Cybersecurity',
    issuer: 'Infosys Springboard',
    icon: <Shield size={22} strokeWidth={1.6} />,
    color: 'purple',
    link: 'https://drive.google.com/file/d/126BLomRfX8LZIcF-X5nE6aJJaifoUczr/view?usp=drive_link',
    desc: 'Comprehensive cybersecurity course covering network security, ethical hacking concepts, and defense-in-depth strategies.',
  },
  {
    id: 'cybersec-intro',
    title: 'Introduction to Cyber Security',
    issuer: 'Infosys Springboard',
    icon: <Globe size={22} strokeWidth={1.6} />,
    color: 'cyan',
    link: 'https://drive.google.com/file/d/1lSuMCxPxoC9ATRE87-_Kr9DARUgcYU8r/view?usp=drive_link',
    desc: 'Foundational cybersecurity — threat landscape, attack types, malware categories, and security best practices.',
  },
  {
    id: 'java-se11',
    title: 'Programming Using Java',
    issuer: 'Infosys Springboard',
    icon: <Coffee size={22} strokeWidth={1.6} />,
    color: 'green',
    link: 'https://drive.google.com/file/d/1tFB40J90u6VsYU4tjn2rrQxgctC0YpSc/view?usp=drive_link',
    desc: 'Java programming — OOP principles, collections, exception handling, multithreading, and enterprise application patterns.',
  },
  {
    id: 'java-beginners',
    title: 'Java for Beginners',
    issuer: 'Infosys Springboard',
    icon: <BookOpen size={22} strokeWidth={1.6} />,
    color: 'purple',
    link: 'https://drive.google.com/file/d/1UoJbRVB3KIYUDSMyC3A9_ir2cfAj68fe/view?usp=drive_link',
    desc: 'Java fundamentals — variables, control flow, methods, arrays, and building foundational programs in Java.',
  },
];

export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-scale');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) (e.target as HTMLElement).classList.add('visible');
        }),
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className={`section ${styles.certsSection}`} id="certifications" ref={sectionRef}>
      <div className="grid-bg" style={{ opacity: 0.3 }} />
      <div className="container">
        <div className="reveal" style={{ marginBottom: '60px' }}>
          <span className="section-label">Verified Credentials</span>
          <h2 className="section-title">
            Certifications &amp; <span className="text-gradient-purple cursive">Courses</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Industry-recognized certifications in cybersecurity, cryptography, and software development.
          </p>
        </div>

        <div className={styles.grid}>
          {certs.map((cert, i) => (
            <a
              key={cert.id}
              id={`cert-${cert.id}`}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.certCard} reveal delay-${(i % 3) + 1}`}
            >
              <div className={styles.cardTop}>
                <div className={`${styles.certIcon} ${styles[`icon${cert.color.charAt(0).toUpperCase() + cert.color.slice(1)}`]}`}>
                  {cert.icon}
                </div>
                <div className={styles.certBadge}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  View
                </div>
              </div>
              <h3 className={styles.certTitle}>{cert.title}</h3>
              <p className={`${styles.certIssuer} ${styles[`text${cert.color.charAt(0).toUpperCase() + cert.color.slice(1)}`]}`}>
                {cert.issuer}
              </p>
              <p className={styles.certDesc}>{cert.desc}</p>
              <div className={`${styles.cardGlow} ${styles[`glow${cert.color.charAt(0).toUpperCase() + cert.color.slice(1)}`]}`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
