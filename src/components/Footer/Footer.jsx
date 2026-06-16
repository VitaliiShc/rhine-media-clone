import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const VERTICALS_LINKS = [
  { label: 'Dating Traffic', href: '#verticals' },
  { label: 'Nutra Campaigns', href: '#verticals' },
  { label: 'Gambling / iGaming', href: '#verticals' },
  { label: 'Sweepstakes', href: '#verticals' },
  { label: 'Crypto Offers', href: '#verticals' },
  { label: 'Adult', href: '#verticals' },
];

const TRAFFIC_LINKS = [
  { label: 'Google Ads', href: '#traffic' },
  { label: 'Meta Ads', href: '#traffic' },
  { label: 'TikTok Ads', href: '#traffic' },
  { label: 'PropellerAds', href: '#traffic' },
  { label: 'Native Ads', href: '#traffic' },
  { label: 'Push & Pop', href: '#traffic' },
];

const COMPANY_LINKS = [
  { label: 'About Rhine Media', href: '#why-us' },
  { label: 'Contact Us', href: '/contact', internal: true },
  { label: 'Partners', href: '#partners' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

const SOCIALS = [
  { label: 'Telegram', icon: '✈', href: '#' },
  { label: 'LinkedIn', icon: 'in', href: '#' },
  { label: 'Twitter / X', icon: '𝕏', href: '#' },
  { label: 'Skype', icon: '☁', href: '#' },
];

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className={styles.colHead}>{title}</h4>
      <ul className={styles.colLinks}>
        {links.map(({ label, href, internal }) => (
          <li key={label}>
            {internal
              ? <Link to={href} className={styles.colLink}>{label}</Link>
              : <a href={href} className={styles.colLink}>{label}</a>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.cols}>
        <div>
          <Link to="/" className={styles.logo}>
            <div className={styles.logoMark}>RM</div>
            Rhine <span>Media</span>
          </Link>
          <p className={styles.desc}>
            Premium performance media buying for the world&rsquo;s most ambitious advertisers
            and affiliate partners. Built for scale. Optimised for ROI.
          </p>
          <div className={styles.social}>
            {SOCIALS.map(({ label, icon, href }) => (
              <a key={label} href={href} className={styles.socBtn} aria-label={label}>{icon}</a>
            ))}
          </div>
        </div>

        <FooterCol title="Verticals" links={VERTICALS_LINKS} />
        <FooterCol title="Traffic Sources" links={TRAFFIC_LINKS} />
        <FooterCol title="Company" links={COMPANY_LINKS} />
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          &copy; 2026 Rhine Media. All rights reserved.{' '}
          <span className={styles.domain}>rhine-media.com</span>
        </p>
        <nav className={styles.legal} aria-label="Legal">
          <a href="#" className={styles.legalLink}>Terms</a>
          <a href="#" className={styles.legalLink}>Privacy</a>
          <Link to="/contact" className={styles.legalLink}>Contact</Link>
        </nav>
      </div>

    </footer>
  );
}
