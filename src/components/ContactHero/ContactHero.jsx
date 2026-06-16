import styles from './ContactHero.module.css';

export function ContactHero() {
  return (
    <section className={styles.contactHero}>
      <div className="container">
        <div className="eyebrow" data-a="up">Get in Touch</div>
        <h1 className={styles.heroH1} data-a="up" data-d="1">
          Contact <span className="text-gold">Rhine Media</span>
        </h1>
        <p className={styles.heroSub} data-a="up" data-d="2">
          Ready to start? Have a question? Our team responds within 24 hours.
        </p>
      </div>
    </section>
  );
}
