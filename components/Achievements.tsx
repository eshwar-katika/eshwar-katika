'use client';

import { useEffect, useRef } from 'react';
import {
  Trophy, TrendingUp, GraduationCap, Calendar, Award,
  BookOpen, FlaskConical, Laptop,
} from 'lucide-react';
import styles from './Achievements.module.css';

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-scale');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) (e.target as HTMLElement).classList.add('visible');
        }),
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className={`section ${styles.achieveSection}`} id="achievements" ref={sectionRef}>
      <div className="container">
        {/* Section header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Recognition</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Achievements &amp; <span className="text-gradient-cyan cursive">Milestones</span>
          </h2>
        </div>

        {/* Main achievement card */}
        <div className={`${styles.mainCard} reveal`}>
          <div className={styles.cardBg} />
          <div className={styles.cardGlow} />

          <div className={styles.trophyWrap}>
            <div className={styles.trophyRing} />
            <div className={styles.trophyInner}>
              <Trophy size={48} strokeWidth={1.4} color="#00D4FF" />
            </div>
            <div className={styles.trophyPulse} />
          </div>

          <div className={styles.textBlock}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Academic Excellence
            </div>
            <h3 className={styles.achieveTitle}>
              Highest CGPA in{' '}
              <span className="text-gradient-cyan cursive">CS &amp; Cyber Security</span>
            </h3>
            <p className={styles.achieveDesc}>
              Awarded for securing the <strong>highest CGPA in the Computer Science &amp; Cyber Security department</strong>{' '}
              at Bharat Institute of Engineering and Technology (BIET) — JNTUH Affiliated.
              A testament to consistent academic excellence and deep commitment to the field.
            </p>
            <div className={styles.metaRow}>
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}><TrendingUp size={20} strokeWidth={1.8} /></span>
                <div>
                  <div className={styles.metaValue}>8.3</div>
                  <div className={styles.metaLabel}>CGPA</div>
                </div>
              </div>
              <div className={styles.metaDivider} />
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}><GraduationCap size={20} strokeWidth={1.8} /></span>
                <div>
                  <div className={styles.metaValue}>BIET</div>
                  <div className={styles.metaLabel}>Institution</div>
                </div>
              </div>
              <div className={styles.metaDivider} />
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}><Calendar size={20} strokeWidth={1.8} /></span>
                <div>
                  <div className={styles.metaValue}>2022–2026</div>
                  <div className={styles.metaLabel}>Duration</div>
                </div>
              </div>
              <div className={styles.metaDivider} />
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}><Award size={20} strokeWidth={1.8} /></span>
                <div>
                  <div className={styles.metaValue}>#1</div>
                  <div className={styles.metaLabel}>Department Rank</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mini stats row */}
        <div className={styles.miniStats}>
          {[
            { icon: <BookOpen size={24} strokeWidth={1.6} />, label: 'High School (10th)', value: '9.5 GPA', org: "New Little Flower's High School" },
            { icon: <FlaskConical size={24} strokeWidth={1.6} />, label: 'Intermediate (12th)', value: '80%', org: 'Sri Chaitanya Junior College' },
            { icon: <Laptop size={24} strokeWidth={1.6} />, label: 'B.Tech Specialisation', value: 'CS & Cyber Security', org: 'BIET — JNTUH' },
          ].map((item, i) => (
            <div key={item.label} className={`${styles.miniCard} glass-card reveal delay-${i + 1}`}>
              <span className={styles.miniIcon}>{item.icon}</span>
              <div>
                <div className={styles.miniLabel}>{item.label}</div>
                <div className={styles.miniValue}>{item.value}</div>
                <div className={styles.miniOrg}>{item.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
