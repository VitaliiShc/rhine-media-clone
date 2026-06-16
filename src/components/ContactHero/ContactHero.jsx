import styles from './ContactHero.module.css';

export function ContactHero() {
  return (
    <section className={styles.pageHero}>
      <div className="sec-center" data-a="up">
        <div className="eyebrow">Get in Touch</div>
        <h1 className={styles.heroH1}>
          Contact <span className="text-gold">Rhine Media</span>
        </h1>
        <p className="sec-sub">
          Ready to start? Have a question? Our team responds within 24 hours.
        </p>
      </div>
    </section>
  );
}
