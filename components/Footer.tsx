import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.topBorder} />
      <div className="container">
        <div className={styles.inner}>
          {/* Logo + Tagline */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}><em>e</em>K</span>
              <span className={styles.logoText}>Eshwar<span>.</span></span>
            </div>
            <p className={styles.tagline}>
              CS &amp; Cybersecurity Engineer · Hyderabad, India
            </p>
          </div>

          {/* Quick Links */}
          <nav className={styles.links} aria-label="Footer navigation">
            {['about', 'skills', 'projects', 'certifications', 'contact'].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className={styles.link}
                id={`footer-${link}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com/in/eshwar-katika"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              id="footer-linkedin"
              title="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href="mailto:eshwarkatika20@gmail.com"
              className={styles.socialBtn}
              id="footer-email"
              title="Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,12 2,6"/>
              </svg>
            </a>
            <a
              href="tel:+919515754919"
              className={styles.socialBtn}
              id="footer-phone"
              title="Phone"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} Eshwar Katika. Built with Next.js &amp; ❤️
          </p>
          <p className={styles.copy}>
            Hyderabad, India ·{' '}
            <span style={{ color: 'var(--primary)' }}>Open to opportunities</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
