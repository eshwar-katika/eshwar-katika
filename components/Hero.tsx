'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

const roles = [
  'Cybersecurity Engineer',
  'Full Stack Developer',
  'SOC Analyst',
  'Java & Spring Boot Dev',
  'MERN Stack Builder',
];

function useTypingEffect(texts: string[], speed = 60, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && display === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && display === '') {
      setIsDeleting(false);
      setIdx((i) => (i + 1) % texts.length);
    } else {
      const next = isDeleting
        ? current.slice(0, display.length - 1)
        : current.slice(0, display.length + 1);
      timeout = setTimeout(() => setDisplay(next), isDeleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [display, idx, isDeleting, texts, speed, pause]);

  return display;
}

// Particle component
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      r: number; opacity: number; color: string;
    }> = [];

    const colors = ['#00D4FF', '#7C3AED', '#06D6A0', '#60E8FF'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.particles} aria-hidden />;
}

export default function Hero() {
  const typedText = useTypingEffect(roles);

  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="hero">
      {/* Background layers */}
      <div className="grid-bg" />
      <Particles />
      <div className={styles.bgBlob1} />
      <div className={styles.bgBlob2} />
      <div className={styles.bgBlob3} />

      <div className={`container ${styles.content}`}>
        {/* Badge */}
        <div className={`${styles.badge} reveal`} style={{ animationDelay: '0.1s' }}>
          <span className={styles.badgeDot} />
          <span>Available for Opportunities</span>
        </div>

        {/* Name */}
        <h1 className={`${styles.name} reveal`} style={{ animationDelay: '0.2s' }}>
          Hi, I&apos;m{' '}
          <span className="text-gradient-cyan cursive">Eshwar</span>
          <br />
          <span className={`${styles.lastName} cursive`}>Katika</span>
        </h1>

        {/* Typing role */}
        <div className={`${styles.roleWrapper} reveal`} style={{ animationDelay: '0.35s' }}>
          <span className={styles.rolePrefix}>I&apos;m a&nbsp;</span>
          <span className={styles.roleDynamic}>
            {typedText}
            <span className={styles.cursor} aria-hidden />
          </span>
        </div>

        {/* Description */}
        <p className={`${styles.description} reveal`} style={{ animationDelay: '0.5s' }}>
          B.Tech CS &amp; Cyber Security student at BIET (JNTUH) with a{' '}
          <strong>8.3 CGPA</strong>. Building secure full-stack systems and
          honeypot-grade defences. Highest CGPA in my department.
        </p>

        {/* CTA Buttons */}
        <div className={`${styles.ctaGroup} reveal`} style={{ animationDelay: '0.65s' }}>
          <a href="#projects" className="btn btn-primary" id="hero-view-work" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            View My Work
          </a>
          <a
            href="https://www.linkedin.com/in/eshwar-katika"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            id="hero-linkedin"
          >
            LinkedIn
          </a>
          <a
            href="mailto:eshwarkatika20@gmail.com"
            className="btn btn-ghost"
            id="hero-email"
          >
            Email Me
          </a>
        </div>

        {/* Stats */}
        <div className={`${styles.stats} reveal`} style={{ animationDelay: '0.8s' }}>
          {[
            { value: '8.3', label: 'CGPA' },
            { value: '3+', label: 'Projects' },
            { value: '5+', label: 'Certifications' },
            { value: '#1', label: 'Dept. Rank' },
          ].map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button className={styles.scrollDown} onClick={handleScrollDown} aria-label="Scroll down" id="scroll-down-btn">
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Scroll</span>
      </button>
    </section>
  );
}
