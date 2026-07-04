import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Work } from '@/components/sections/Work'
import { Craft } from '@/components/sections/Craft'
import { History } from '@/components/sections/History'

import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Work />
      <Craft />
      <History />

      <CTA />
      <Footer />
    </main>
  )
}
