import clsx from 'clsx';
import styles from './Benefits.module.css';

const CHECKS = [
  {
    title: 'Full Funnel Optimization',
    body: 'From creative A/B testing to post-click landing page optimization. Every touchpoint tracked and improved continuously.',
  },
  {
    title: 'Direct Publisher Relationships',
    body: 'We maintain direct deals with top publishers and ad networks — cutting costs and boosting campaign performance.',
  },
  {
    title: 'Real-Time Reporting Dashboards',
    body: 'Live dashboards with full transparency on spend, impressions, conversions and revenue attribution — 24/7.',
  },
  {
    title: 'Dedicated Account Manager',
    body: 'Every partner gets a dedicated team member. No ticket queues, no delays — direct Telegram/Skype communication.',
  },
];

const CARDS = [
  { ico: '📈', title: 'Data-Driven Buying', body: 'Bidding strategies informed by real conversion data. No guesswork — pure performance logic at scale.' },
  { ico: '🛡️', title: 'Brand-Safe Traffic', body: 'Custom placement lists and negative keyword exclusions to protect your brand at all times.' },
  { ico: '🌍', title: 'Global GEO Coverage', body: 'Tier-1, LATAM, APAC and MENA — we have the infrastructure to scale to any region instantly.' },
  { ico: '⚡', title: '48h Campaign Launch', body: 'From brief to live in under 48 hours. Streamlined onboarding means you never miss a traffic window.' },
];

export function Benefits() {
  return (
    <section className={clsx('section', styles.features)} id="why-us">
      <div className={styles.layout}>

        <div className={styles.content}>
          <div className="eyebrow" data-a="left">Why Choose Rhine Media</div>
          <h2 className="sec-title" data-a="left" data-d="1">
            Precision. Scale.<br /><span className="text-gold">Performance.</span>
          </h2>
          <p className="sec-sub" data-a="left" data-d="2">
            We&rsquo;re not a media network — we&rsquo;re your in-house buying team. Deep expertise,
            real accountability and transparent reporting on every dollar spent.
          </p>

          <div className={styles.checkList}>
            {CHECKS.map(({ title, body }, idx) => (
              <div key={title} className={styles.checkItem} data-a="left" data-d={String(idx + 2)}>
                <div className={styles.chk}>✓</div>
                <div className={styles.chkBody}>
                  <h4 className={styles.chkTitle}>{title}</h4>
                  <p className={styles.chkDesc}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cards} data-a="right" data-d="2">
          {CARDS.map(({ ico, title, body }) => (
            <div key={title} className={styles.fc}>
              <div className={styles.fcIco}>{ico}</div>
              <h4 className={styles.fcTitle}>{title}</h4>
              <p className={styles.fcBody}>{body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
