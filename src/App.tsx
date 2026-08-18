import { GrainOverlay } from '@/components/ui/GrainOverlay'
import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { Credentials } from '@/components/sections/Credentials'
import { About } from '@/components/sections/About'
import { Specialties } from '@/components/sections/Specialties'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { FAQ } from '@/components/sections/FAQ'
import { BookingForm } from '@/components/sections/BookingForm'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function App() {
  return (
    <>
      <GrainOverlay />

      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Ir para o conteúdo principal
      </a>

      <Header />

      <main id="conteudo-principal">
        <Hero />
        <Credentials />
        <About />
        <Specialties />
        <HowItWorks />
        <FAQ />
        <BookingForm />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
