import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SITE } from '@/lib/constants'
import { useScrollTo } from '@/hooks/useScrollTo'

export function Hero() {
  const scrollTo = useScrollTo()
  const prefersReducedMotion = useReducedMotion()
  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
      }
  const imageMotionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] as const },
      }

  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-primary-light/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div {...motionProps}>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
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
            <Button
              size="lg"
              onClick={() => scrollTo('#agendamento')}
              className="gap-2"
            >
              <Calendar className="size-5" aria-hidden="true" />
              Agendar consulta
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo('#sobre')}
              className="gap-2"
            >
              Conhecer o trabalho
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            CRP {SITE.psychologist.crp} · Atendimento presencial e online
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          {...imageMotionProps}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary-light/30 to-accent/20 shadow-card">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 flex size-24 items-center justify-center rounded-full bg-card/80 shadow-soft">
                  <svg
                    viewBox="0 0 64 64"
                    className="size-12 text-primary"
                    aria-hidden="true"
                  >
                    <circle cx="32" cy="24" r="12" fill="currentColor" opacity="0.3" />
                    <path
                      d="M12 56c4-14 10-20 20-20s16 6 20 20"
                      fill="currentColor"
                      opacity="0.2"
                    />
                  </svg>
                </div>
                <p className="px-8 text-sm text-muted-foreground">
                  Ilustração representativa — substitua pela foto profissional
                </p>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-card/90 p-4 shadow-soft backdrop-blur-sm">
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
