import { Hero } from '@/components/sections/Hero'
import { SelectedWork } from '@/components/sections/SelectedWork'
import { Approach } from '@/components/sections/Approach'
import { Timeline } from '@/components/sections/Timeline'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <SelectedWork />
      <Approach />
      <Timeline />
      <Contact />
    </main>
  )
}
