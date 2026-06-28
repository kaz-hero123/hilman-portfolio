/**
 * app/page.tsx — Main page
 * PRD §3 — Single scroll page
 *
 * Section order (alternating bands — MANDATORY):
 * 1. Hero          → bg-band-dark
 * 2. How I Build   → bg-band-light
 * 3. Selected Work → bg-band-dark
 * 4. Capability Map→ bg-band-light
 * 5. Trajectory    → bg-band-dark
 * 6. Now           → bg-band-light
 * 7. Contact       → bg-band-dark
 */

import {
  Hero,
  HowIBuild,
  SelectedWork,
  CapabilityMap,
  Trajectory,
  Now,
  Contact,
} from '@/components/sections'

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <HowIBuild />
      <SelectedWork />
      <CapabilityMap />
      <Trajectory />
      <Now />
      <Contact />
    </main>
  )
}
