'use client';

import { useEffect, useRef } from 'react';
import { Shield, Eye, Briefcase, ExternalLink, Brain } from 'lucide-react';
import styles from './Projects.module.css';

// GitHub mark SVG (official shape)
function GitHubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const projects = [
  {
    id: 'aiprep',
    title: 'AiPrep - AI Mock Platform',
    icon: <Brain size={26} strokeWidth={1.6} />,
    tagline: 'AI-Powered Interview Prep',
    description:
      'A full-stack mock interview platform. Uses Spring Security JWT, compiles & executes programming tasks locally, parses PDF resumes, and outputs tailored week-by-week learning roadmaps.',
    highlights: [
      'Stateless Spring Security JWT filters',
      'Dual AI engine: OpenAI or local fallback',
      'Zero-token Web Speech API mock booth',
      'Integrated compiler sandbox & charts',
    ],
    tags: ['Java', 'Spring Boot', 'React', 'TypeScript', 'MySQL', 'OpenAI'],
    color: 'purple',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(0,212,255,0.05))',
    borderColor: 'rgba(124,58,237,0.25)',
    github: 'https://github.com/eshwar-katika/AiPrep',
    live: null,
  },
  {
    id: 'honeypot',
    title: 'Django Admin HoneyPot System',
    icon: <Shield size={26} strokeWidth={1.6} />,
    tagline: 'Cybersecurity Monitoring System',
    description:
      'A production-ready honeypot system that mimics Django admin to lure and track attackers. Features real-time threat analytics, auto-blacklisting, and CSV export.',
    highlights: [
      'Honeypot middleware & IP tracking',
      'Token-based REST API authentication',
      'Automated IP blacklisting engine',
      'Live threat dashboard with analytics',
      'CSV threat report export',
    ],
    tags: ['Django', 'PostgreSQL', 'Docker', 'REST API', 'Python'],
    color: 'cyan',
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(6,214,160,0.05))',
    borderColor: 'rgba(0,212,255,0.25)',
    github: 'https://github.com/eshwar-katika/Django-Admin-HoneyPot',
    live: null,
  },
  {
    id: 'deepfake',
    title: 'Deepfake Detection System',
    icon: <Eye size={26} strokeWidth={1.6} />,
    tagline: 'Deep Learning Security Tool',
    description:
      'End-to-end deep learning pipeline using CNN-based feature extraction and attention mechanisms to classify manipulated video/audio content with high confidence.',
    highlights: [
      'CNN + attention mechanism classifier',
      'Video/audio media analysis pipeline',
      'Confidence score visualization',
      'REST API integration layer',
      'Detection report export',
    ],
    tags: ['Python', 'Deep Learning', 'CNN', 'REST API', 'React'],
    color: 'cyan',
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(6,214,160,0.05))',
    borderColor: 'rgba(0,212,255,0.25)',
    github: 'https://github.com/eshwar-katika/Deepfake-Detection',
    live: null,
  },
  {
    id: 'careerhub',
    title: 'Career Hub BIET',
    icon: <Briefcase size={26} strokeWidth={1.6} />,
    tagline: 'Campus Recruitment Platform',
    description:
      'Full-featured campus recruitment platform for BIET college, built with the MERN stack. Supports role-based dashboards for students, recruiters, and admins.',
    highlights: [
      'JWT authentication & role-based access',
      'Job posting & student applications',
      'Application tracking system',
      'REST API frontend-backend integration',
      'Real-time status updates',
    ],
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Vite'],
    color: 'green',
    gradient: 'linear-gradient(135deg, rgba(6,214,160,0.12), rgba(124,58,237,0.05))',
    borderColor: 'rgba(6,214,160,0.25)',
    github: 'https://github.com/eshwar-katika/Career-Hub-BIET',
    live: null,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className={`section ${styles.projectsSection}`} id="projects" ref={sectionRef}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>What I&apos;ve Built</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Featured <span className="text-gradient-cyan cursive">Projects</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Real-world systems built with production-level security, clean architecture, and modern stacks.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((proj, i) => (
            <div
              key={proj.id}
              id={`project-${proj.id}`}
              className={`${styles.card} reveal delay-${i + 1}`}
              style={{
                background: proj.gradient,
                borderColor: proj.borderColor,
              }}
            >
              {/* Card Header */}
              <div className={styles.cardHeader}>
                <div className={`${styles.emoji} ${styles[`emoji${proj.color.charAt(0).toUpperCase() + proj.color.slice(1)}`]}`}>
                  {proj.icon}
                </div>
                <div className={styles.cardMeta}>
                  <span className={`${styles.tagline} ${styles[`text${proj.color.charAt(0).toUpperCase() + proj.color.slice(1)}`]}`}>
                    {proj.tagline}
                  </span>
                  <h3 className={styles.cardTitle}>{proj.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className={styles.cardDesc}>{proj.description}</p>

              {/* Highlights */}
              <ul className={styles.highlights}>
                {proj.highlights.map((h) => (
                  <li key={h} className={styles.highlight}>
                    <span className={`${styles.bullet} ${styles[`bullet${proj.color.charAt(0).toUpperCase() + proj.color.slice(1)}`]}`}>
                      ▸
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className={styles.tags}>
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`chip ${proj.color === 'purple' ? 'chip-purple' : proj.color === 'green' ? 'chip-green' : ''}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action links */}
              {(proj.github || proj.live) && (
                <div className={styles.cardActions}>
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.actionBtn}
                      onClick={(e) => e.stopPropagation()}
                      aria-label="View on GitHub"
                    >
                      <GitHubIcon size={15} />
                      GitHub
                    </a>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.actionBtn} ${styles.actionBtnPrimary}`}
                      onClick={(e) => e.stopPropagation()}
                      aria-label="View live demo"
                    >
                      <ExternalLink size={15} strokeWidth={1.8} />
                      Live Demo
                    </a>
                  )}
                </div>
              )}

              {/* Hover overlay */}
              <div className={styles.hoverOverlay} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
