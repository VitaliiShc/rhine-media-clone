import { Link } from 'react-router-dom';
import styles from './PrivacyBody.module.css';

export function PrivacyBody() {
  return (
    <main className={styles.legalPage}>
      <div className={styles.legalWrap} data-a="up">

        <p className={styles.legalMeta}>
          This Privacy Policy describes how <strong>Rhine Media</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;), operating at{' '}
          <strong>rhine-media.com</strong>, collects, uses, stores and discloses information about you when you
          visit our website or engage with our services. We are committed to protecting your privacy in accordance
          with applicable data protection legislation.
        </p>

        <div className={styles.legalDoc}>

          <h2>1. Information We Collect</h2>
          <p>We may collect and process the following categories of personal data:</p>
          <ul>
            <li><strong>Contact information:</strong> Name, email address, phone number, company name and role —
              collected when you submit our contact form or initiate a cooperation inquiry;</li>
            <li><strong>Communication data:</strong> Messages, emails and chat records exchanged with our team
              for the purposes of service delivery;</li>
            <li><strong>Technical data:</strong> IP address, browser type and version, operating system, referral
              source, pages viewed and time spent — collected automatically via cookies and analytics tools;</li>
            <li><strong>Business data:</strong> Information about your offers, verticals, campaign objectives and
              budgets — provided by you in the context of a commercial relationship;</li>
            <li><strong>Financial data:</strong> Billing details and payment information necessary to process
              invoices and manage the commercial relationship (we do not store full card data).</li>
          </ul>
          <p>
            We do not knowingly collect personal data from individuals under the age of 18.
            If you believe we have inadvertently collected such data, please contact us immediately.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the data we collect for the following purposes:</p>
          <ul>
            <li>To respond to enquiries and communicate with potential and existing clients;</li>
            <li>To set up, manage, optimise and report on advertising campaigns;</li>
            <li>To fulfil contractual obligations and deliver agreed services;</li>
            <li>To process invoices and manage billing;</li>
            <li>To improve our website, services and user experience;</li>
            <li>To detect, prevent and address fraud, security issues and technical problems;</li>
            <li>To comply with applicable legal obligations;</li>
            <li>To send service-related communications where required.</li>
          </ul>
          <p>
            We do not sell or rent your personal data to third parties. We do not use your data for
            unsolicited marketing without your explicit consent.
          </p>

          <h2>3. Legal Basis for Processing</h2>
          <p>
            Where applicable data protection law requires a legal basis for processing personal data,
            we rely on the following:
          </p>
          <ul>
            <li><strong>Contract:</strong> Processing necessary to perform a contract with you, or to take
              steps at your request before entering a contract;</li>
            <li><strong>Legitimate interests:</strong> Processing necessary for our legitimate business interests,
              including responding to enquiries, improving our services and maintaining business relationships,
              where such interests are not overridden by your rights;</li>
            <li><strong>Legal obligation:</strong> Processing required to comply with applicable laws;</li>
            <li><strong>Consent:</strong> Where you have given specific, informed consent for a particular use of
              your data, which you may withdraw at any time.</li>
          </ul>

          <h2>4. Cookies and Tracking Technologies</h2>
          <p>
            Our website may use cookies and similar technologies to enhance your browsing experience
            and collect analytics data. Cookies we may use include:
          </p>
          <ul>
            <li><strong>Essential cookies:</strong> Required for the website to function properly. These cannot be disabled;</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website
              (e.g. Google Analytics). These are only set with your consent;</li>
            <li><strong>Preference cookies:</strong> Remember your settings and preferences for future visits.</li>
          </ul>
          <p>
            You can control and disable cookies through your browser settings. Please note that disabling
            certain cookies may affect the functionality of our website.
          </p>

          <h2>5. Data Sharing and Third Parties</h2>
          <p>
            We may share your information with carefully selected third parties in the following circumstances:
          </p>
          <ul>
            <li><strong>Service providers:</strong> Trusted vendors who assist us in operating our business
              (e.g. hosting providers, analytics platforms, communication tools), bound by confidentiality obligations;</li>
            <li><strong>Advertising platforms:</strong> Ad networks and platforms (e.g. Google, Meta, TikTok)
              through which we operate campaigns on your behalf — governed by their own privacy policies;</li>
            <li><strong>Professional advisors:</strong> Lawyers, accountants and auditors under obligations of confidentiality;</li>
            <li><strong>Legal authorities:</strong> Where required by law, regulation, court order or government request;</li>
            <li><strong>Business transfers:</strong> In connection with a merger, acquisition or sale of assets,
              where we will notify you before your data is transferred and becomes subject to a different policy.</li>
          </ul>
          <p>
            All third parties we work with are required to maintain appropriate security standards and to
            process your data only in accordance with our instructions and applicable law.
          </p>

          <h2>6. International Data Transfers</h2>
          <p>
            As a global agency, we may transfer your personal data to countries outside your home jurisdiction.
            Where such transfers occur, we take appropriate steps to ensure an adequate level of protection,
            including the use of Standard Contractual Clauses approved by relevant data protection authorities,
            or relying on adequacy decisions where available.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfil the purposes for which it was collected,
            including for the purposes of satisfying any legal, accounting or reporting requirements.
          </p>
          <p>In general, we retain:</p>
          <ul>
            <li>Client contact and business data for the duration of the relationship plus 5 years;</li>
            <li>Financial and billing records as required by applicable law (typically 7 years);</li>
            <li>Website analytics data for up to 26 months;</li>
            <li>Correspondence and communications for up to 3 years from last contact.</li>
          </ul>

          <h2>8. Data Security</h2>
          <p>
            We implement appropriate technical and organisational security measures to protect your personal data
            against unauthorised access, accidental loss, destruction or disclosure. These measures include
            encryption, access controls, secure servers and regular security reviews.
          </p>
          <p>
            While we strive to protect your personal data, no method of transmission over the internet or
            electronic storage is 100% secure. We cannot guarantee absolute security, and we encourage you
            to take appropriate steps to protect your own information.
          </p>

          <h2>9. Your Rights</h2>
          <p>
            Depending on your location and applicable law, you may have the following rights regarding
            your personal data:
          </p>
          <ul>
            <li><strong>Right of access:</strong> To request a copy of the personal data we hold about you;</li>
            <li><strong>Right to rectification:</strong> To request correction of inaccurate or incomplete data;</li>
            <li><strong>Right to erasure:</strong> To request deletion of your personal data in certain circumstances;</li>
            <li><strong>Right to restriction:</strong> To request that we limit the processing of your data;</li>
            <li><strong>Right to portability:</strong> To receive your data in a structured, machine-readable format;</li>
            <li><strong>Right to object:</strong> To object to processing based on legitimate interests;</li>
            <li><strong>Right to withdraw consent:</strong> Where processing is based on consent, to withdraw it at any time.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the details on our{' '}
            <Link to="/contact">Contact page</Link>.
            We will respond to all verified requests within 30 days. We may ask for proof of identity before processing
            sensitive requests.
          </p>

          <h2>10. Third-Party Websites</h2>
          <p>
            Our website may contain links to third-party websites. This Privacy Policy does not apply to those sites,
            and we are not responsible for their privacy practices. We encourage you to review the privacy policies
            of any third-party sites you visit.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology
            or applicable laws. When we make material changes, we will update the &ldquo;Last updated&rdquo; date at the
            top of this page. We encourage you to review this policy periodically.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have any questions, concerns or requests relating to this Privacy Policy or our data
            processing practices, please contact our team via our{' '}
            <Link to="/contact">Contact page</Link>.
            For data protection-related enquiries, you may also contact us directly via email. We are
            committed to addressing all privacy concerns promptly and transparently.
          </p>
          <p>
            If you are located in the European Economic Area and believe your data protection rights have been
            violated, you have the right to lodge a complaint with the supervisory authority in your country of residence.
          </p>

        </div>
      </div>
    </main>
  );
}
