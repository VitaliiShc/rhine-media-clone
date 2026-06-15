import { Header, Hero, Niches, Channels, Partners, Benefits, CTA, Footer } from '../../components';

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Niches />
        <Channels />
        <Partners />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
