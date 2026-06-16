import clsx from 'clsx';
import { Link } from 'react-router-dom';
import arrowIcon from '../../assets/icons/arrow.svg';
import styles from './CTA.module.css';

export function CTA() {
  return (
    <section className={styles.ctaSec}>
      <div className={styles.ctaBox} data-a="scale">

        <div className={clsx('eyebrow', styles.eyebrowCenter)}>Let&rsquo;s Scale Together</div>

        <h2 className={styles.ctaTitle}>Ready to <span className="text-gold">Maximize</span> Your ROI?</h2>
        <p className={styles.ctaDesc}>
          Join the brands and affiliate partners who trust Rhine Media to deliver
          performance at scale, in every major GEO.
        </p>

        <div className={styles.btns}>
          <Link to="/contact" className="btn btn-primary">
            Start Cooperation
            <img src={arrowIcon} width={13} height={13} alt="" aria-hidden="true" />
          </Link>
          <Link to="/contact" className="btn btn-gold-outline">Get in Touch</Link>
        </div>

      </div>
    </section>
  );
}
