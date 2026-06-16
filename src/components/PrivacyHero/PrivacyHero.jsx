import styles from './PrivacyHero.module.css';

export function PrivacyHero() {
  return (
    <section className={styles.pageHero}>
      <div data-a="up">
        <div className="eyebrow">Legal</div>
        <h1 className={styles.heroH1}>Privacy Policy</h1>
        <p className={styles.heroDate}>Last updated: 1 March 2026 — effective immediately</p>
      </div>
    </section>
  );
}
