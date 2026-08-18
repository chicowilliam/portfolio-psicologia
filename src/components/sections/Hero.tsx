import { motion, useReducedMotion } from '@/lib/motion-react'
import { ArrowRight, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { MeshBackground } from '@/components/ui/MeshBackground'
import { MagneticWrapper } from '@/components/ui/MagneticWrapper'
import { LivingPortrait } from '@/components/ui/LivingPortrait'
import { SITE } from '@/lib/constants'
import { POSE_A_PORTRAIT_IMAGES } from '@/lib/portrait-images'
import { useScrollTo } from '@/hooks/useScrollTo'
import { fadeInUp } from '@/lib/motion'

export function Hero() {
  const scrollTo = useScrollTo()
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <MeshBackground variant="hero" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={prefersReducedMotion ? undefined : fadeInUp}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          animate={prefersReducedMotion ? undefined : 'visible'}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-primary" />
            {SITE.psychologist.approach}
          </p>

          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            {SITE.psychologist.name}
          </h1>

          <p className="mt-2 text-lg text-primary">{SITE.psychologist.title}</p>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {SITE.psychologist.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <MagneticWrapper>
              <Button
                size="lg"
                magnetic={false}
                onClick={() => scrollTo('#agendamento')}
                className="gap-2"
              >
                <Calendar className="size-5" aria-hidden="true" />
                Agendar consulta
              </Button>
            </MagneticWrapper>
            <MagneticWrapper>
              <Button
                variant="outline"
                size="lg"
                magnetic={false}
                onClick={() => scrollTo('#sobre')}
                className="gap-2"
              >
                Conhecer o trabalho
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </MagneticWrapper>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            CRP {SITE.psychologist.crp} · Atendimento presencial e online
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          variants={prefersReducedMotion ? undefined : fadeInUp}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          animate={prefersReducedMotion ? undefined : 'visible'}
          transition={prefersReducedMotion ? undefined : { delay: 0.12 }}
        >
          <div className="glass-card relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary-light/15 to-accent/10" />

            <LivingPortrait
              images={POSE_A_PORTRAIT_IMAGES}
              ariaLabel={`Foto de ${SITE.psychologist.name}, ${SITE.psychologist.title.toLowerCase()}`}
              variant="subtle"
              priority
              className="absolute inset-0"
            />

            <div className="glass-quote absolute bottom-6 left-6 right-6 rounded-2xl p-4 shadow-soft">
              <p className="text-sm font-medium text-foreground">
                &ldquo;Cuidar de si também é um ato de coragem.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
