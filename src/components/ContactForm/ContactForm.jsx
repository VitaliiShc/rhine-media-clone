import { useState } from 'react';
import clsx from 'clsx';
import styles from './ContactForm.module.css';

const BUDGETS = [
  'Under $10,000',
  '$10,000 – $50,000',
  '$50,000 – $100,000',
  '$100,000+',
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', company: '', budget: '', vertical: '', message: '',
  });

  function handleFieldChange(evt) {
    const { name, value } = evt.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className={styles.success}>
        <div className={styles.successIco}>✓</div>
        <h3>Message Received!</h3>
        <p>Our team will reach out within 24 hours.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleFormSubmit} noValidate>
      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>Full Name *</span>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={form.name}
            onChange={handleFieldChange}
            placeholder="John Smith"
            required
          />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Email *</span>
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
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>Company</span>
          <input
            className={styles.input}
            type="text"
            name="company"
            value={form.company}
            onChange={handleFieldChange}
            placeholder="Your company"
          />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Monthly Budget</span>
          <select
            className={clsx(styles.input, styles.select)}
            name="budget"
            value={form.budget}
            onChange={handleFieldChange}
          >
            <option value="" disabled>Select range</option>
            {BUDGETS.map(budget => <option key={budget} value={budget}>{budget}</option>)}
          </select>
        </label>
      </div>

      <label className={styles.field}>
        <span className={styles.label}>Offer / Vertical</span>
        <input
          className={styles.input}
          type="text"
          name="vertical"
          value={form.vertical}
          onChange={handleFieldChange}
          placeholder="e.g. Dating, Nutra, iGaming"
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Message</span>
        <textarea
          className={clsx(styles.input, styles.textarea)}
          name="message"
          value={form.message}
          onChange={handleFieldChange}
          placeholder="Tell us about your campaign goals..."
          rows={5}
        />
      </label>

      <button type="submit" className="btn btn-primary">
        Send Message
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
          <path d="M1 6.5h11M6.5 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  );
}
