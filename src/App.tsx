import { lazy, Suspense } from 'react'
import { GrainOverlay } from '@/components/ui/GrainOverlay'
import { PatternBackground } from '@/components/ui/PatternBackground'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { EmergencyNotice } from '@/components/EmergencyNotice'
import { SeoStructuredData } from '@/components/SeoStructuredData'
import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { Credentials } from '@/components/sections/Credentials'

const About = lazy(() =>
  import('@/components/sections/About').then((module) => ({ default: module.About })),
)
const Specialties = lazy(() =>
  import('@/components/sections/Specialties').then((module) => ({
    default: module.Specialties,
  })),
)
const HowItWorks = lazy(() =>
  import('@/components/sections/HowItWorks').then((module) => ({
    default: module.HowItWorks,
  })),
)
const FAQ = lazy(() =>
  import('@/components/sections/FAQ').then((module) => ({ default: module.FAQ })),
)
const BookingForm = lazy(() =>
  import('@/components/sections/BookingForm').then((module) => ({
    default: module.BookingForm,
  })),
)
const Contact = lazy(() =>
  import('@/components/sections/Contact').then((module) => ({ default: module.Contact })),
)
const Footer = lazy(() =>
  import('@/components/sections/Footer').then((module) => ({ default: module.Footer })),
)

function SectionFallback() {
  return <div className="min-h-24" aria-hidden="true" />
}

export default function App() {
  return (
    <>
      <SeoStructuredData />
      <PatternBackground />
      <GrainOverlay />

      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Ir para o conteúdo principal
      </a>

      <Header />
      <div className="h-16" aria-hidden="true" />

      <main id="conteudo-principal">
        <Hero />
        <SectionDivider />
        <Credentials />
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <SectionDivider />
          <Specialties />
          <SectionDivider />
          <HowItWorks />
          <SectionDivider />
          <FAQ />
          <SectionDivider />
          <BookingForm />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <EmergencyNotice />
    </>
  )
}
