'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { GraduationCap, Trophy, MapPin, Calendar, Shield, Zap } from 'lucide-react';
import styles from './About.module.css';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const highlights = [
  { icon: <GraduationCap size={18} strokeWidth={1.8} />, label: 'Education', value: 'B.Tech CS & Cyber Security' },
  { icon: <Trophy size={18} strokeWidth={1.8} />, label: 'CGPA', value: '8.3 — Dept. Topper' },
  { icon: <MapPin size={18} strokeWidth={1.8} />, label: 'Location', value: 'Hyderabad, India' },
  { icon: <Calendar size={18} strokeWidth={1.8} />, label: 'Graduation', value: '2026' },
];

export default function About() {
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section className="section" id="about">
      <div className="container">
        <div className={styles.grid}>
          {/* Left — Text */}
          <div className="reveal-left" ref={leftRef}>
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Passionate about{' '}
              <span className="text-gradient-cyan cursive">Security</span> &{' '}
              <span className="text-gradient-purple cursive">Software</span>
            </h2>
            <div className="divider" />
            <p className={styles.bio}>
              I&apos;m <strong>Eshwar Katika</strong>, a final-year B.Tech student
              specializing in Computer Science and Cyber Security at BIET (JNTUH-affiliated),
              Hyderabad. I hold the <strong>highest CGPA in my department</strong> with a
              stellar 8.3 GPA.
            </p>
            <p className={styles.bio}>
              My work spans <strong>full-stack development</strong> (MERN, Django, Spring Boot)
              and <strong>cybersecurity</strong> — building honeypot systems, deepfake
              detectors, and secure campus platforms. I love the intersection of software
              engineering and digital defence.
            </p>

            <div className={styles.highlights}>
              {highlights.map((h, i) => (
                <div key={h.label} className={`${styles.highlightCard} glass-card reveal delay-${i + 1}`}>
                  <span className={styles.highlightIcon}>{h.icon}</span>
                  <div>
                    <div className={styles.highlightLabel}>{h.label}</div>
                    <div className={styles.highlightValue}>{h.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <a
                href="https://www.linkedin.com/in/eshwar-katika"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="about-linkedin-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                LinkedIn
              </a>
              <a href="mailto:eshwarkatika20@gmail.com" className="btn btn-secondary" id="about-email-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,12 2,6" /></svg>
                Email Me
              </a>
            </div>
          </div>

          {/* Right — Visual Card */}
          <div className="reveal-right" ref={rightRef}>
            <div className={styles.visualCard}>
              {/* Avatar — real photo */}
              <div className={styles.avatar}>
                <div className={styles.avatarRing} />
                <div className={styles.avatarInner}>
                  <Image
                    src="/eshwar-katika.jpg"
                    alt="Eshwar Katika"
                    fill
                    sizes="140px"
                    className={styles.avatarPhoto}
                    priority
                  />
                </div>
              </div>

              {/* Floating badges — Lucide icons */}
              <div className={`${styles.floatBadge} ${styles.badge1}`}>
                <Shield size={13} strokeWidth={2} />
                SOC Analyst
              </div>
              <div className={`${styles.floatBadge} ${styles.badge2}`}>
                <Zap size={13} strokeWidth={2} />
                MERN Stack
              </div>
              <div className={`${styles.floatBadge} ${styles.badge3}`}>
                <Trophy size={13} strokeWidth={2} />
                Dept. Topper
              </div>

              {/* Terminal snippet */}
              <div className={styles.terminal}>
                <div className={styles.terminalHeader}>
                  <span className={styles.dot} style={{ background: '#FF5F56' }} />
                  <span className={styles.dot} style={{ background: '#FFBD2E' }} />
                  <span className={styles.dot} style={{ background: '#27C93F' }} />
                  <span className={styles.terminalTitle}>eshwar.sh</span>
                </div>
                <div className={styles.terminalBody}>
                  <span style={{ color: '#06D6A0' }}>$</span>{' '}
                  <span style={{ color: '#E5E5E5' }}>whoami</span>
                  <br />
                  <span style={{ color: '#00D4FF' }}>eshwar@katika</span>{' '}
                  <span style={{ color: '#64748B' }}>~CS &amp; Security~</span>
                  <br />
                  <span style={{ color: '#06D6A0' }}>$</span>{' '}
                  <span style={{ color: '#E5E5E5' }}>echo $MISSION</span>
                  <br />
                  <span style={{ color: '#A78BFA' }}>&quot;Secure the web, one commit at a time&quot;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
