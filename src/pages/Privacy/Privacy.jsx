import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Header, Footer, PrivacyHero, PrivacyBody } from '../../components';

export function Privacy() {
  useScrollReveal();
  return (
    <>
      <Header />
      <PrivacyHero />
      <PrivacyBody />
      <Footer />
    </>
  );
}
