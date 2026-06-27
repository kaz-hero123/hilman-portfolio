import { Navbar, Footer } from '@/components/layout';
import {
  Hero,
  About,
  Stack,
  Projects,
  Experience,
  Achievements,
  Contact,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
