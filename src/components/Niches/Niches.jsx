import clsx from 'clsx';
import styles from './Niches.module.css';

const VERTICALS = [
  { emoji: '💘', name: 'Dating', desc: 'Mainstream & adult dating campaigns. SOI, DOI and trial offers across tier-1 GEOs with proven funnels.', pill: 'High Volume' },
  { emoji: '💊', name: 'Nutra', desc: 'Weight loss, supplements, skincare. Native & push traffic specialization with compliant creatives.', pill: 'Premium GEOs' },
  { emoji: '🎰', name: 'Gambling', desc: 'Online casino, sports betting, poker. FTD-focused funnels with high player LTV and retention.', pill: 'Top ROI' },
  { emoji: '🔞', name: 'Adult', desc: 'Adult content & services. Compliant campaigns via premium adult traffic networks at scale.', pill: 'Specialized' },
  { emoji: '🎁', name: 'Sweepstakes', desc: 'CC-submit & SOI sweeps. Push, pop and display traffic with high conversion rates globally.', pill: 'Mass Scale' },
  { emoji: '₿', name: 'Crypto Offers', desc: 'Crypto trading platforms, wallets and exchange offers. FTD & CPA models in regulated GEOs.', pill: 'Emerging' },
  { emoji: '📱', name: 'Mainstream', desc: 'App installs, e-commerce, utilities. Google, Meta and TikTok performance campaigns at scale.', pill: 'Versatile' },
  { emoji: '🎮', name: 'iGaming', desc: 'Fantasy sports, esports betting and skill-based gaming platforms. Fast-growing vertical expertise.', pill: 'Fast Growth' },
];

export function Niches() {
  return (
    <section className={clsx('section', styles.verticals)} id="verticals">

      <div className="sec-center" data-a="up">
        <div className="eyebrow">Our Verticals</div>
        <h2 className="sec-title">Niches We <span className="text-gold">Dominate</span></h2>
        <p className="sec-sub">Deep expertise across the highest-performing verticals in performance marketing.</p>
      </div>

      <div className={styles.nicheList}>
        {VERTICALS.map(({ emoji, name, desc, pill }, idx) => (
          <div key={name} className={styles.card} data-a="up" data-d={String((idx % 4) + 1)}>
            <span className={styles.emoji}>{emoji}</span>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.desc}>{desc}</p>
            <span className={styles.pill}>{pill}</span>
          </div>
        ))}
      </div>

    </section>
  );
}
