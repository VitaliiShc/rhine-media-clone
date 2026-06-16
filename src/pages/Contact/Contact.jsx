import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Header, Footer, ContactHero, ContactBody, FAQ } from '../../components';

export function Contact() {
  useScrollReveal();
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactBody />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
