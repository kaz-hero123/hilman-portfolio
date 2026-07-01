import { Hero }         from '@/components/sections/Hero'
import { Stats }        from '@/components/sections/Stats'
import { About }        from '@/components/sections/About'
import { Stack }        from '@/components/sections/Stack'
import { Projects }     from '@/components/sections/Projects'
import { Experience }   from '@/components/sections/Experience'
import { Achievements } from '@/components/sections/Achievements'
import { Contact }      from '@/components/sections/Contact'

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Stats />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
    </main>
  )
}
