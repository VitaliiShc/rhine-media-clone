import clsx from 'clsx';
import { Link } from 'react-router-dom';
import arrowIcon from '../../assets/icons/arrow.svg';
import styles from './Hero.module.css';

const KPIS = [
  { value: '$12M+', label: 'Monthly Ad Spend' },
  { value: '340%', label: 'Average Campaign ROI' },
  { value: '8+', label: 'Traffic Channels' },
  { value: '60+', label: 'GEOs Worldwide' },
];

const STATS = [
  { num: '4.2B+', lbl: 'Ad Impressions / Month', sub: 'Across all traffic sources' },
  { num: '340%', lbl: 'Average ROI', sub: 'Verified by partners' },
  { num: '7', lbl: 'Verticals Mastered', sub: 'Dating, Nutra, Gambling & more' },
  { num: '60+', lbl: 'Global GEOs', sub: 'Tier-1 & emerging markets' },
];

export function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={clsx(styles.orb, styles.orbA)} aria-hidden="true" />
        <div className={clsx(styles.orb, styles.orbB)} aria-hidden="true" />
        <div className={clsx(styles.orb, styles.orbC)} aria-hidden="true" />

        <div className={styles.heroDeco} aria-hidden="true">
          <svg viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <circle cx="400" cy="400" r="320" stroke="rgba(201,151,59,0.6)" strokeWidth="1" />
            <circle cx="400" cy="400" r="220" stroke="rgba(62,114,236,0.5)" strokeWidth="0.8" />
            <circle cx="400" cy="400" r="120" stroke="rgba(201,151,59,0.4)" strokeWidth="0.6" />
            <line x1="80" y1="400" x2="720" y2="400" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <line x1="400" y1="80" x2="400" y2="720" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <circle cx="400" cy="80" r="5" fill="rgba(201,151,59,0.8)" />
            <circle cx="720" cy="400" r="5" fill="rgba(62,114,236,0.8)" />
            <circle cx="400" cy="720" r="5" fill="rgba(201,151,59,0.8)" />
            <circle cx="80" cy="400" r="5" fill="rgba(62,114,236,0.8)" />
          </svg>
        </div>

        <div className={styles.heroInner}>
          <div className={styles.heroBody}>

            <div className={styles.heroBadge} data-a="up">
              <span className={styles.badgePulse} />
              Performance Media Buying Team
            </div>

            <h1 className={styles.heroH1} data-a="up" data-d="1">
              <span className={styles.heroLine}>Performance Media</span>
              <span className={styles.heroLine}>
                Buying Team&nbsp;|&nbsp;<span className={styles.heroHl}>Rhine Media</span>
              </span>
            </h1>

            <p className={styles.heroSub} data-a="up" data-d="2">
              We buy traffic for{' '}
              <strong>Dating, Nutra, Gambling, Sweepstakes, iGaming</strong>{' '}
              and more — across all major channels, in every major GEO, at premium scale.
            </p>

            <div className={styles.heroActions} data-a="up" data-d="3">
              <Link to="/contact" className="btn btn-primary">
                Start Cooperation
                <img src={arrowIcon} width={13} height={13} alt="" aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn btn-ghost">Get in Touch</Link>
            </div>

            <div className={styles.heroKpis} data-a="up" data-d="4">
              {KPIS.map(({ value, label }) => (
                <div key={label} className={styles.kpi}>
                  <span className={styles.kpiValue}>{value}</span>
                  <span className={styles.kpiLabel}>{label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <div className={styles.statsBand}>
        <div className={styles.statsRow}>
          {STATS.map(({ num, lbl, sub }, idx) => (
            <div key={lbl} className={styles.statCell} data-a="up" data-d={String(idx + 1)}>
              <div className={styles.statNum}>{num}</div>
              <div className={styles.statLbl}>{lbl}</div>
              <div className={styles.statSub}>{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
