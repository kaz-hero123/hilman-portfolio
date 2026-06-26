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
        {/* Order: Hero → About → Stack → Projects → Experience → Achievements → Contact */}
        {/* Ref: design-system.md §6 */}
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
