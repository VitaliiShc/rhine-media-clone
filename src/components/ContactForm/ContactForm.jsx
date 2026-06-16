import { useState } from 'react';
import clsx from 'clsx';
import arrowIcon from '../../assets/icons/arrow.svg';
import styles from './ContactForm.module.css';

const VERTICALS = [
  { value: 'dating', label: 'Dating' },
  { value: 'nutra', label: 'Nutra / Health & Beauty' },
  { value: 'gambling', label: 'Gambling / Casino' },
  { value: 'igaming', label: 'iGaming / Betting' },
  { value: 'sweepstakes', label: 'Sweepstakes' },
  { value: 'adult', label: 'Adult' },
  { value: 'crypto', label: 'Crypto Offers' },
  { value: 'mainstream', label: 'Mainstream / Other' },
];

const BUDGETS = [
  { value: 'under5k', label: 'Under $5,000' },
  { value: '5k-20k', label: '$5,000 – $20,000' },
  { value: '20k-50k', label: '$20,000 – $50,000' },
  { value: '50k-100k', label: '$50,000 – $100,000' },
  { value: '100k+', label: '$100,000+' },
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    fname: '', lname: '', email: '', company: '',
    telegram: '', vertical: '', budget: '', message: '', consent: false,
  });

  function handleFieldChange(evt) {
    const { name, value, type, checked } = evt.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className={styles.success}>
        <div className={styles.successIco}>✓</div>
        <h3 className={styles.successTitle}>Message Received!</h3>
        <p className={styles.successDesc}>Our team will reach out within 2–4 business hours.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleFormSubmit} noValidate>

      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>First Name *</span>
          <input
            className={styles.input}
            type="text"
            name="fname"
            value={form.fname}
            onChange={handleFieldChange}
            placeholder="John"
            required
          />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Last Name *</span>
          <input
            className={styles.input}
            type="text"
            name="lname"
            value={form.lname}
            onChange={handleFieldChange}
            placeholder="Smith"
            required
          />
        </label>
      </div>

      <label className={styles.field}>
        <span className={styles.label}>Email Address *</span>
        <input
          className={styles.input}
          type="email"
          name="email"
          value={form.email}
          onChange={handleFieldChange}
          placeholder="john@company.com"
          required
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Company / Brand</span>
        <input
          className={styles.input}
          type="text"
          name="company"
          value={form.company}
          onChange={handleFieldChange}
          placeholder="Your company name"
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Telegram / Skype Handle</span>
        <input
          className={styles.input}
          type="text"
          name="telegram"
          value={form.telegram}
          onChange={handleFieldChange}
          placeholder="@yourusername"
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Vertical / Niche *</span>
        <select
          className={clsx(styles.input, styles.select)}
          name="vertical"
          value={form.vertical}
          onChange={handleFieldChange}
          required
        >
          <option value="" disabled>Select a vertical…</option>
          {VERTICALS.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Monthly Budget (USD)</span>
        <select
          className={clsx(styles.input, styles.select)}
          name="budget"
          value={form.budget}
          onChange={handleFieldChange}
        >
          <option value="" disabled>Select budget range…</option>
          {BUDGETS.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Message *</span>
        <textarea
          className={clsx(styles.input, styles.textarea)}
          name="message"
          value={form.message}
          onChange={handleFieldChange}
          placeholder="Tell us about your offer, goals, GEOs and any other details that will help us understand your needs…"
          rows={5}
          required
        />
      </label>

      <div className={styles.consent}>
        <input
          className={styles.consentChk}
          type="checkbox"
          id="consent"
          name="consent"
          checked={form.consent}
          onChange={handleFieldChange}
          required
        />
        <label className={styles.consentLabel} htmlFor="consent">
          I agree to the{' '}
          <a href="#" className={styles.consentLink}>Privacy Policy</a>
          {' '}and{' '}
          <a href="#" className={styles.consentLink}>Terms of Service</a>.
          {' '}I consent to Rhine Media processing my data to respond to this enquiry.
        </label>
      </div>

      <button type="submit" className={clsx('btn', 'btn-primary', styles.submitBtn)}>
        Send Message
        <img src={arrowIcon} width={13} height={13} alt="" aria-hidden="true" />
      </button>

    </form>
  );
}
