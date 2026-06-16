import { useState } from 'react';
import clsx from 'clsx';
import styles from './FAQ.module.css';

const FAQS = [
  {
    question: 'What verticals does Rhine Media specialise in?',
    answer: 'We specialise in Dating, Nutra, Gambling, iGaming, Sweepstakes, Adult, Crypto Offers and Mainstream verticals. Our team has deep domain expertise in each of these niches and maintains direct relationships with top publishers and affiliate networks across all major GEOs.',
  },
  {
    question: 'What is the minimum monthly budget to work with you?',
    answer: "We typically work with partners investing a minimum of $5,000/month in media spend. For certain verticals or exclusive deal structures, higher minimums may apply. Contact us to discuss your specific situation — we're flexible for the right partnerships.",
  },
  {
    question: 'How quickly can you launch a campaign?',
    answer: "Once we have all required materials (creatives, landing pages, offer details, tracking setup), we can typically launch campaigns within 24–48 hours. Our streamlined onboarding process ensures you're never waiting long to get traffic flowing.",
  },
  {
    question: 'Do you work on a CPA, CPL or revenue share basis?',
    answer: "We work across multiple pricing models including managed spend (flat fee + performance bonus), CPA, CPL, RevShare and hybrid structures. The right model depends on your vertical, volume and offer type. We'll recommend the most suitable approach during our initial consultation.",
  },
  {
    question: 'Which GEOs do you cover?',
    answer: "We have active campaigns running in 60+ GEOs worldwide, including all Tier-1 markets (US, UK, DE, AU, CA, FR), LATAM (BR, MX, CO), APAC (IN, PH, TH, JP), and MENA (AE, SA, EG). If you need a specific GEO, let us know and we'll confirm our capabilities.",
  },
  {
    question: 'What reporting and tracking do you provide?',
    answer: 'All clients receive access to real-time performance dashboards with full transparency on impressions, clicks, conversions, spend and revenue. We integrate with all major tracking platforms including Voluum, Binom, RedTrack, and custom S2S postback setups. Weekly summary reports are provided as standard.',
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  function handleToggle(idx) {
    setOpenIdx(prev => (prev === idx ? null : idx));
  }

  return (
    <section className={styles.faqSec}>
      <div className="sec-center" data-a="up">
        <div className="eyebrow">FAQ</div>
        <h2 className="sec-title">Common <span className="text-gold">Questions</span></h2>
        <p className="sec-sub">
          Everything you need to know before starting a cooperation with Rhine Media.
        </p>
      </div>

      <div className={styles.faqList}>
        {FAQS.map(({ question, answer }, idx) => (
          <div
            key={question}
            className={clsx(styles.faqItem, openIdx === idx && styles.faqItemOpen)}
            data-a="up"
            data-d={String(idx + 1)}
          >
            <button
              className={styles.faqQ}
              onClick={() => handleToggle(idx)}
              aria-expanded={openIdx === idx}
            >
              {question}
              <span className={styles.faqArrow}>▾</span>
            </button>
            <div className={styles.faqA}>{answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
