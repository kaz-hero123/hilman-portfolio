import { Hero } from '@/components/sections/Hero'
import { Work } from '@/components/sections/Work'
import { Craft } from '@/components/sections/Craft'
import { History } from '@/components/sections/History'
import { Testimonials } from '@/components/sections/Testimonials'

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Work />
      <Craft />
      <History />
      <Testimonials />
      {/* Additional sections will be added after approval */}
    </main>
  )
}
