import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Header, Footer, ContactForm } from '../../components';
import styles from './Contact.module.css';

const INFO_ITEMS = [
  { ico: '✉', label: 'Email', val: 'contact@rhine-media.com', href: 'mailto:contact@rhine-media.com' },
  { ico: '✈', label: 'Telegram', val: '@rhine_media', href: 'https://t.me/rhine_media' },
  { ico: '⏱', label: 'Response Time', val: 'Within 24 hours', href: null },
];

export function Contact() {
  useScrollReveal();
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className="sec-center" data-a="up">
            <div className="eyebrow">Get in Touch</div>
            <h1 className={styles.heroH1}>Start <span className="text-gold">Scaling</span> Today</h1>
            <p className="sec-sub">Tell us about your goals and our team will reach out within 24 hours.</p>
          </div>
        </section>

        <section className={styles.main}>
          <div data-a="left">
            <h2 className={styles.infoTitle}>Let's Talk Performance</h2>
            <p className={styles.infoDesc}>
              Whether you're an advertiser, affiliate, or media buyer — we build partnerships built on scale and ROI.
            </p>
            <div className={styles.infoList}>
              {INFO_ITEMS.map(({ ico, label, val, href }) => (
                <div key={label} className={styles.infoItem}>
                  <div className={styles.infoIco}>{ico}</div>
                  <div>
                    <div className={styles.infoLabel}>{label}</div>
                    {href
                      ? <a href={href} className={styles.infoVal}>{val}</a>
                      : <span className={styles.infoVal}>{val}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-a="right">
            <div className={styles.formCard}>
              <div className="eyebrow">Contact Form</div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
