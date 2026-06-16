import clsx from 'clsx';
import styles from './Channels.module.css';

const SOURCES = [
  { ico: '🚀', name: 'PropellerAds', sub: 'Push / Pop / OnClick' },
  { ico: '🔍', name: 'Google Ads', sub: 'Search / Display / YouTube' },
  { ico: '🍎', name: 'Apple Search Ads', sub: 'iOS App Install' },
  { ico: '📘', name: 'Meta Ads', sub: 'Facebook / Instagram' },
  { ico: '🎵', name: 'TikTok Ads', sub: 'In-Feed / TopView / Spark' },
  { ico: '📰', name: 'Native Ads', sub: 'Taboola / Outbrain' },
  { ico: '🔔', name: 'Push Notifications', sub: 'Web & In-App Push' },
  { ico: '💥', name: 'Pop Traffic', sub: 'Popunder / Interstitial' },
];

export function Channels() {
  return (
    <section className={clsx('section', styles.traffic)} id="traffic">
      <div className="sec-center" data-a="up">
        <div className="eyebrow">Traffic Sources We Master</div>
        <h2 className="sec-title">
          Every Major <span className="text-blue">Channel</span>
        </h2>
        <p className="sec-sub">
          Full-stack traffic expertise across paid, native, push and
          programmatic channels worldwide.
        </p>
      </div>

      <div className={styles.grid}>
        {SOURCES.map(({ ico, name, sub }, idx) => (
          <div
            key={name}
            className={styles.card}
            data-a="scale"
            data-d={String((idx % 4) + 1)}
          >
            <div className={styles.ico}>{ico}</div>
            <div className={styles.name}>{name}</div>
            <div className={styles.sub}>{sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
