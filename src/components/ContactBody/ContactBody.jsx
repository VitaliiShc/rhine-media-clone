import clsx from 'clsx';
import { ContactForm } from '..';
import styles from './ContactBody.module.css';

const INFO_ITEMS = [
  {
    ico: '✈',
    label: 'Telegram',
    val: '@rhinemedia',
    href: 'https://t.me/rhinemedia',
    external: true,
  },
  {
    ico: '✉️',
    label: 'Email',
    val: 'hello@rhine-media.com',
    href: 'mailto:hello@rhine-media.com',
    external: false,
  },
  {
    ico: '💼',
    label: 'Business Hours',
    val: 'Mon – Fri · 09:00 – 20:00 CET',
    href: null,
  },
  {
    ico: '⚡',
    label: 'Response Time',
    val: 'Typically within 2–4 business hours',
    href: null,
  },
];

const CHANNELS = ['Skype', 'WhatsApp', 'LinkedIn'];

export function ContactBody() {
  return (
    <section className={styles.contactBody} id="contact-form">
      <div className="container">
        <div className={styles.contactColumns}>

          <div data-a="left">
            <h3 className={styles.introTitle}>
              Let&rsquo;s Build Something
              <br />
              <span className="text-gold">Profitable Together</span>
            </h3>
            <p className={styles.introDesc}>
              Whether you&rsquo;re an advertiser looking to scale your offers, an
              affiliate network seeking a reliable buying team, or a brand ready to
              expand globally — we want to hear from you.
            </p>

            <div className={styles.cinfoList}>
              {INFO_ITEMS.map(({ ico, label, val, href, external }) => (
                <div key={label} className={styles.cinfoItem}>
                  <div className={styles.cinfoIco}>{ico}</div>
                  <div className={styles.cinfoText}>
                    <h4 className={styles.cinfoLabel}>{label}</h4>
                    {href ? (
                      <a
                        href={href}
                        className={styles.cinfoVal}
                        {...(external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {val}
                      </a>
                    ) : (
                      <p className={styles.cinfoVal}>{val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className={styles.channelsLabel}>Also available on</p>
            <div className={styles.channelBtns}>
              {CHANNELS.map((ch) => (
                <a
                  key={ch}
                  href="#"
                  className={clsx('btn', 'btn-ghost', styles.channelBtn)}
                >
                  {ch}
                </a>
              ))}
            </div>

            <div className={styles.mapStub}>
              <div className={styles.mapGrid} />
              <div className={styles.mapLabel}>
                <div className={styles.mapPin} />
                <span>Rhine Media · Global Operations</span>
              </div>
            </div>
          </div>

          <div className={styles.formCard} data-a="right">
            <h3 className={styles.formTitle}>Send Us a Message</h3>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
