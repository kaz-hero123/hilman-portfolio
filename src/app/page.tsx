import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'

const Work = dynamic(() => import('@/components/sections/Work').then(mod => ({ default: mod.Work })))
const Craft = dynamic(() => import('@/components/sections/Craft').then(mod => ({ default: mod.Craft })))
const History = dynamic(() => import('@/components/sections/History').then(mod => ({ default: mod.History })))
const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then(mod => ({ default: mod.Testimonials })))
const LogoCloud = dynamic(() => import('@/components/sections/LogoCloud').then(mod => ({ default: mod.LogoCloud })))
const CTA = dynamic(() => import('@/components/sections/CTA').then(mod => ({ default: mod.CTA })))
const Footer = dynamic(() => import('@/components/sections/Footer').then(mod => ({ default: mod.Footer })))

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Work />
      <Craft />
      <History />
      <Testimonials />
      <LogoCloud />
      <CTA />
      <Footer />
    </main>
  )
}
