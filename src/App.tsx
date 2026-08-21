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
const ForWho = lazy(() =>
  import('@/components/sections/ForWho').then((module) => ({ default: module.ForWho })),
)
const ApproachPillars = lazy(() =>
  import('@/components/sections/ApproachPillars').then((module) => ({
    default: module.ApproachPillars,
  })),
)
const ConsultorioGallery = lazy(() =>
  import('@/components/sections/ConsultorioGallery').then((module) => ({
    default: module.ConsultorioGallery,
  })),
)
const OnlineAttendance = lazy(() =>
  import('@/components/sections/OnlineAttendance').then((module) => ({
    default: module.OnlineAttendance,
  })),
)
const BlogPreview = lazy(() =>
  import('@/components/sections/BlogPreview').then((module) => ({
    default: module.BlogPreview,
  })),
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

      <main id="conteudo-principal" className="relative z-[1]">
        <Hero />
        <SectionDivider variant="ink-to-mist" />
        <Credentials />
        <SectionDivider variant="mist-to-blush" />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <SectionDivider variant="blush-to-mist" />
          <ForWho />
          <SectionDivider variant="mist-to-blush" />
          <ApproachPillars />
          <SectionDivider variant="blush-to-mist" />
          <Specialties />
          <SectionDivider variant="mist-to-blush" />
          <HowItWorks />
          <SectionDivider variant="blush-to-mist" />
          <ConsultorioGallery />
          <SectionDivider variant="mist-to-blush" />
          <OnlineAttendance />
          <SectionDivider variant="blush-to-mist" />
          <BlogPreview />
          <SectionDivider variant="mist-to-blush" />
          <FAQ />
          <SectionDivider variant="mist-to-cta" />
          <BookingForm />
          <SectionDivider variant="cta-to-mist" />
          <Contact />
          <SectionDivider variant="mist-to-ink" />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <div className="relative z-[1]">
          <Footer />
        </div>
      </Suspense>

      <EmergencyNotice />
    </>
  )
}
