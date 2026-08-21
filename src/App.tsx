import { lazy, Suspense } from 'react'
import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { SeoStructuredData } from '@/components/SeoStructuredData'

const ArriveBecause = lazy(() =>
  import('@/components/sections/ArriveBecause').then((m) => ({ default: m.ArriveBecause })),
)
const HowIWork = lazy(() =>
  import('@/components/sections/HowIWork').then((m) => ({ default: m.HowIWork })),
)
const AboutHelena = lazy(() =>
  import('@/components/sections/AboutHelena').then((m) => ({ default: m.AboutHelena })),
)
const AreasAccordion = lazy(() =>
  import('@/components/sections/AreasAccordion').then((m) => ({ default: m.AreasAccordion })),
)
const ConsultorioEssay = lazy(() =>
  import('@/components/sections/ConsultorioEssay').then((m) => ({
    default: m.ConsultorioEssay,
  })),
)
const FaqContact = lazy(() =>
  import('@/components/sections/FaqContact').then((m) => ({ default: m.FaqContact })),
)
const Footer = lazy(() =>
  import('@/components/sections/Footer').then((m) => ({ default: m.Footer })),
)

function SectionFallback() {
  return <div className="min-h-16" aria-hidden="true" />
}

export default function App() {
  return (
    <>
      <SeoStructuredData />

      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Ir para o conteúdo principal
      </a>

      <Header />
      <div className="h-14 sm:h-16" aria-hidden="true" />

      <main id="conteudo-principal">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <ArriveBecause />
          <HowIWork />
          <AboutHelena />
          <AreasAccordion />
          <ConsultorioEssay />
          <FaqContact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}
