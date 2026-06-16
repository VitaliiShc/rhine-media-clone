import styles from './Partners.module.css';

const CHIPS = [
  { ico: '🌐', name: 'Ads.com' },
  { ico: '⚡', name: 'Tonic' },
  { ico: '🔭', name: 'Visymo' },
  { ico: '💼', name: 'ClickDealer' },
  { ico: '🏅', name: 'VortexHub' },
  { ico: '🎯', name: 'AdVance Pro' },
  { ico: '💎', name: 'PeakNet CPA' },
  { ico: '🔗', name: 'LynkAffiliates' },
  { ico: '🚀', name: 'FluxMedia' },
  { ico: '🌟', name: 'NorthStar Network' },
  { ico: '📊', name: 'Affiliate Networks' },
  { ico: '🤝', name: 'CPA Networks' },
];

export function Partners() {
  return (
    <section className={styles.partners} id="partners">

      <div className={styles.header}>
        <div className="sec-center" data-a="up">
          <div className="eyebrow">Trusted Partners &amp; Networks</div>
          <h2 className="sec-title">Working with the <span className="text-gold">Best in Class</span></h2>
          <p className="sec-sub">We maintain direct relationships with premium ad networks, affiliate networks and CPA platforms worldwide.</p>
        </div>
      </div>

      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {[...CHIPS, ...CHIPS].map(({ ico, name }, idx) => (
            <div key={idx} className={styles.chip}>
              <div className={styles.chipIco}>{ico}</div>
              <span className={styles.chipName}>{name}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
