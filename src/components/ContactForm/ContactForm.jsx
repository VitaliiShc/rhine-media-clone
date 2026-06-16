import { useState } from 'react';
import { Link } from 'react-router-dom';
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

const REQUIRED_TEXT_FIELDS = ['fname', 'lname', 'email', 'vertical', 'message'];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    fname: '', lname: '', email: '', company: '',
    telegram: '', vertical: '', budget: '', message: '', consent: false,
  });

  function handleFieldChange(evt) {
    const { name, value, type, checked } = evt.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: false }));
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    const newErrors = {};
    REQUIRED_TEXT_FIELDS.forEach(field => {
      if (!form[field].trim()) newErrors[field] = true;
    });
    if (!form.consent) newErrors.consent = true;
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
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

      <div className={styles.nameFields}>
        <label className={styles.field}>
          <span className={styles.label}>First Name *</span>
          <input
            className={clsx(styles.input, errors.fname && styles.inputError)}
            type="text"
            name="fname"
            value={form.fname}
            onChange={handleFieldChange}
            placeholder="John"
          />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Last Name *</span>
          <input
            className={clsx(styles.input, errors.lname && styles.inputError)}
            type="text"
            name="lname"
            value={form.lname}
            onChange={handleFieldChange}
            placeholder="Smith"
          />
        </label>
      </div>

      <label className={styles.field}>
        <span className={styles.label}>Email Address *</span>
        <input
          className={clsx(styles.input, errors.email && styles.inputError)}
          type="email"
          name="email"
          value={form.email}
          onChange={handleFieldChange}
          placeholder="john@company.com"
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
          className={clsx(styles.input, styles.select, errors.vertical && styles.inputError)}
          name="vertical"
          value={form.vertical}
          onChange={handleFieldChange}
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
          className={clsx(styles.input, styles.textarea, errors.message && styles.inputError)}
          name="message"
          value={form.message}
          onChange={handleFieldChange}
          placeholder="Tell us about your offer, goals, GEOs and any other details that will help us understand your needs…"
          rows={5}
        />
      </label>

      <div className={styles.consent}>
        <input
          className={clsx(styles.consentChk, errors.consent && styles.consentChkError)}
          type="checkbox"
          id="consent"
          name="consent"
          checked={form.consent}
          onChange={handleFieldChange}
        />
        <label className={clsx(styles.consentLabel, errors.consent && styles.consentLabelError)} htmlFor="consent">
          I agree to the{' '}
          <Link to="/privacy-policy" className={styles.consentLink}>Privacy Policy</Link>
          {' '}and{' '}
          <Link to="/terms" className={styles.consentLink}>Terms of Service</Link>.
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
