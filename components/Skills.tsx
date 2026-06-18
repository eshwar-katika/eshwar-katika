'use client';

import { useEffect, useRef } from 'react';
import {
  Coffee, Server, Code2, Palette, Terminal, Atom,
  BarChart2, Layers, Database, Monitor,
  Shield, GitBranch, Box, Globe, Lock, Plug,
  Leaf, Cpu,
} from 'lucide-react';
import styles from './Skills.module.css';

const skillGroups = [
  {
    title: 'Languages & Frameworks',
    color: 'cyan',
    skills: [
      { name: 'Java',             level: 85, icon: <Coffee     size={14} strokeWidth={1.8} /> },
      { name: 'Spring Boot',      level: 75, icon: <Leaf       size={14} strokeWidth={1.8} /> },
      { name: 'JavaScript',       level: 80, icon: <Code2      size={14} strokeWidth={1.8} /> },
      { name: 'HTML / CSS',       level: 90, icon: <Palette    size={14} strokeWidth={1.8} /> },
      { name: 'Python (Django)',   level: 75, icon: <Terminal   size={14} strokeWidth={1.8} /> },
      { name: 'React + Vite',     level: 78, icon: <Atom       size={14} strokeWidth={1.8} /> },
    ],
  },
  {
    title: 'CS Core',
    color: 'purple',
    skills: [
      { name: 'Data Structures & Algorithms', level: 82, icon: <BarChart2 size={14} strokeWidth={1.8} /> },
      { name: 'OOP Principles',               level: 88, icon: <Layers   size={14} strokeWidth={1.8} /> },
      { name: 'DBMS / SQL',                   level: 78, icon: <Database size={14} strokeWidth={1.8} /> },
      { name: 'Operating Systems',            level: 74, icon: <Monitor  size={14} strokeWidth={1.8} /> },
    ],
  },
  {
    title: 'Cybersecurity & DevOps',
    color: 'green',
    skills: [
      { name: 'Security Operations (SOC)', level: 80, icon: <Shield    size={14} strokeWidth={1.8} /> },
      { name: 'Linux / Shell',             level: 72, icon: <Terminal  size={14} strokeWidth={1.8} /> },
      { name: 'Git & Version Control',     level: 85, icon: <GitBranch size={14} strokeWidth={1.8} /> },
      { name: 'Docker',                    level: 68, icon: <Box       size={14} strokeWidth={1.8} /> },
      { name: 'PostgreSQL',                level: 74, icon: <Database  size={14} strokeWidth={1.8} /> },
      { name: 'REST APIs',                 level: 82, icon: <Globe     size={14} strokeWidth={1.8} /> },
    ],
  },
];

const techIcons = [
  { name: 'Java',        icon: <Coffee    size={22} strokeWidth={1.6} />, color: '#f89820' },
  { name: 'Spring Boot', icon: <Leaf      size={22} strokeWidth={1.6} />, color: '#6DB33F' },
  { name: 'React',       icon: <Atom      size={22} strokeWidth={1.6} />, color: '#61DAFB' },
  { name: 'Node.js',     icon: <Server    size={22} strokeWidth={1.6} />, color: '#8CC84B' },
  { name: 'MongoDB',     icon: <Database  size={22} strokeWidth={1.6} />, color: '#47A248' },
  { name: 'Django',      icon: <Cpu       size={22} strokeWidth={1.6} />, color: '#092E20' },
  { name: 'Docker',      icon: <Box       size={22} strokeWidth={1.6} />, color: '#2496ED' },
  { name: 'PostgreSQL',  icon: <Database  size={22} strokeWidth={1.6} />, color: '#336791' },
  { name: 'Git',         icon: <GitBranch size={22} strokeWidth={1.6} />, color: '#F05032' },
  { name: 'Linux',       icon: <Terminal  size={22} strokeWidth={1.6} />, color: '#FCC624' },
  { name: 'JWT Auth',    icon: <Lock      size={22} strokeWidth={1.6} />, color: '#7C3AED' },
  { name: 'REST API',    icon: <Plug      size={22} strokeWidth={1.6} />, color: '#00D4FF' },
];

function SkillBar({
  name,
  level,
  icon,
  delay,
}: {
  name: string;
  level: number;
  icon: React.ReactNode;
  delay: number;
}) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            const fill = el.querySelector<HTMLDivElement>(`.${styles.barFill}`);
            if (fill) fill.style.width = `${level}%`;
          }, delay);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [level, delay]);

  return (
    <div className={styles.skillItem} ref={barRef}>
      <div className={styles.skillInfo}>
        <span className={styles.skillIcon}>{icon}</span>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.barTrack}>
        <div className={styles.barFill} style={{ width: 0 }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-scale');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) (e.target as HTMLElement).classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className={`section ${styles.skillsSection}`} id="skills" ref={sectionRef}>
      <div className="grid-bg" style={{ opacity: 0.5 }} />
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Technical Arsenal</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Skills &amp; <span className="text-gradient-purple cursive">Technologies</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A diverse set of skills across full-stack development, cybersecurity, and CS fundamentals.
          </p>
        </div>

        {/* Skill bars grid */}
        <div className={styles.groupsGrid}>
          {skillGroups.map((group, gi) => (
            <div key={group.title} className={`glass-card ${styles.groupCard} reveal delay-${gi + 1}`}>
              <h3 className={`${styles.groupTitle} ${styles[`color${group.color.charAt(0).toUpperCase() + group.color.slice(1)}`]}`}>
                {group.title}
              </h3>
              <div className={styles.skillsList}>
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    delay={gi * 150 + si * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech icon grid */}
        <div className={`${styles.techGrid} reveal`} style={{ transitionDelay: '0.3s' }}>
          <p className={styles.techLabel}>Technologies I work with</p>
          <div className={styles.techIcons}>
            {techIcons.map((t, i) => (
              <div key={t.name} className={`${styles.techChip} reveal-scale delay-${(i % 6) + 1}`}>
                <span className={styles.techChipIcon} style={{ color: t.color }}>{t.icon}</span>
                <span className={styles.techChipName}>{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft skills */}
        <div className={`${styles.softSkills} reveal`}>
          <span className={styles.softTitle}>Soft Skills</span>
          {['Leadership', 'Public Speaking', 'Problem Solving', 'Team Collaboration', 'Critical Thinking'].map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
