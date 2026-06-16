import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'Verticals', href: '#verticals' },
  { label: 'Traffic Sources', href: '#traffic' },
  { label: 'Partners', href: '#partners' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '/contact', highlight: true },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isContact = pathname === '/contact';

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header>
      <nav className={clsx(styles.navbar, scrolled && styles.navbarScrolled)} id="navbar">
        <div className={styles.container}>
          <div className={styles.navInner}>

            <Link to="/" className={styles.logo}>
              <div className={styles.logoMark}>RM</div>
              Rhine <span className={styles.logoMedia}>Media</span>
            </Link>

            <ul className={styles.navLinks}>
              {NAV_LINKS.map(({ label, href, highlight }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={clsx(styles.navLink, highlight && styles.navLinkHighlight)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className={styles.navRight}>
              <Link to={isContact ? '/' : '/contact'} className={styles.btnGhost}>
                {isContact ? 'Back to Home' : 'Get in Touch'}
              </Link>
              <Link to="/contact" className={styles.btnPrimary}>Start Cooperation</Link>
              <button
                className={styles.ham}
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
              >
                <span className={styles.hamBar} /><span className={styles.hamBar} /><span className={styles.hamBar} />
              </button>
            </div>

          </div>
        </div>
      </nav>

      <div className={clsx(styles.mobMenu, menuOpen && styles.mobMenuOpen)} id="mobMenu">
        <button className={styles.mobClose} onClick={closeMenu} aria-label="Close menu">✕</button>

        {NAV_LINKS.map(({ label, href }) => (
          <a key={href} href={href} className={styles.mobLink} onClick={closeMenu}>
            {label}
          </a>
        ))}

        <Link to="/contact" className={clsx('btn', 'btn-primary', styles.mobBtn)} onClick={closeMenu}>
          Start Cooperation
        </Link>
      </div>
    </header>
  );
}
