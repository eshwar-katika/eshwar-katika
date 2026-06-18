'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';

const contactLinks = [
  {
    id: 'contact-email',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,12 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'eshwarkatika20@gmail.com',
    href: 'mailto:eshwarkatika20@gmail.com',
    color: 'cyan',
    desc: 'Best way to reach me',
  },
  {
    id: 'contact-linkedin',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/eshwar-katika',
    href: 'https://www.linkedin.com/in/eshwar-katika',
    color: 'purple',
    desc: 'Connect professionally',
  },
  {
    id: 'contact-phone',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 9515754919',
    href: 'tel:+919515754919',
    color: 'green',
    desc: 'Call / WhatsApp',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState('');

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-scale');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) (e.target as HTMLElement).classList.add('visible');
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(''), 2000);
    });
  };

  return (
    <section className={`section ${styles.contactSection}`} id="contact" ref={sectionRef}>
      <div className={styles.bgBlob} />
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Let&apos;s <span className="text-gradient-cyan cursive">Work Together</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Open to internships, full-time roles, freelance projects, and research collaborations
            in cybersecurity and software development.
          </p>
        </div>

        {/* Contact cards */}
        <div className={styles.cardsRow}>
          {contactLinks.map((c, i) => (
            <div key={c.id} className={`${styles.contactCard} ${styles[`card${c.color.charAt(0).toUpperCase() + c.color.slice(1)}`]} reveal delay-${i + 1}`}>
              <div className={`${styles.iconWrap} ${styles[`icon${c.color.charAt(0).toUpperCase() + c.color.slice(1)}`]}`}>
                {c.icon}
              </div>
              <div className={styles.cardInfo}>
                <p className={styles.cardLabel}>{c.label}</p>
                <p className={styles.cardValue}>{c.value}</p>
                <p className={styles.cardDesc}>{c.desc}</p>
              </div>
              <div className={styles.cardActions}>
                <a href={c.href} target={c.id === 'contact-email' || c.id === 'contact-phone' ? '_self' : '_blank'} rel="noopener noreferrer" className="btn btn-ghost" id={`${c.id}-open`} style={{ fontSize: '13px', padding: '8px 16px' }}>
                  Open
                </a>
                <button
                  className={`${styles.copyBtn} ${copied === c.id ? styles.copied : ''}`}
                  onClick={() => handleCopy(c.value, c.id)}
                  id={`${c.id}-copy`}
                  title="Copy to clipboard"
                >
                  {copied === c.id ? (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className={`${styles.ctaBanner} reveal`}>
          <div className={styles.bannerBg} />
          <div className={styles.bannerContent}>
            <div className={styles.bannerText}>
              <h3 className={styles.bannerTitle}>Ready to build something great?</h3>
              <p className={styles.bannerSub}>
                Currently in my final year at BIET and actively looking for opportunities.
              </p>
            </div>
            <a
              href="mailto:eshwarkatika20@gmail.com"
              className="btn btn-primary"
              id="contact-cta-email"
              style={{ fontSize: '15px', padding: '14px 32px' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
