import { Hero } from '@/components/sections/Hero'
import { Work } from '@/components/sections/Work'
import { Craft } from '@/components/sections/Craft'
import { History } from '@/components/sections/History'

import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Work />
      <Craft />
      <History />

      <CTA />
      <Footer />
    </main>
  )
}
