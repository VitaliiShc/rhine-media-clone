import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Header, Footer, TermsHero, TermsBody } from '../../components';

export function Terms() {
  useScrollReveal();
  return (
    <>
      <Header />
      <TermsHero />
      <TermsBody />
      <Footer />
    </>
  );
}
