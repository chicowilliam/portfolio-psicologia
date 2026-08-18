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
      className="relative overflow-hidden px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8 lg:px-8 lg:pb-20 lg:pt-10"
    >
      <MeshBackground variant="hero" />

      <div className="relative mx-auto grid max-w-6xl items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-12 xl:gap-14">
        <motion.div
          className="flex flex-col justify-center lg:min-h-0 lg:py-1"
          variants={prefersReducedMotion ? undefined : fadeInUp}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          animate={prefersReducedMotion ? undefined : 'visible'}
        >
          <p className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary backdrop-blur-sm sm:mb-4 sm:px-4 sm:text-sm">
            <span className="size-1.5 rounded-full bg-primary" />
            {SITE.psychologist.approach}
          </p>

          <h1 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.12] tracking-tight text-foreground">
            <span className="block text-[clamp(1.35rem,3.2vw,2rem)] font-medium text-primary">
              {SITE.psychologist.headline}
            </span>
            <span className="mt-2 block">{SITE.psychologist.name}</span>
          </h1>

          <p className="mt-1.5 text-base text-primary sm:mt-2 sm:text-lg">
            {SITE.psychologist.title}
          </p>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
            {SITE.psychologist.tagline}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center">
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

          <p className="mt-4 text-sm text-muted-foreground sm:mt-5">
            CRP{' '}
            <a
              href={SITE.crpVerifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              {SITE.psychologist.crp}
            </a>{' '}
            · Atendimento presencial e online · {SITE.contact.neighborhood}
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[min(100%,22rem)] sm:max-w-sm lg:mx-0 lg:max-w-none lg:justify-self-end"
          variants={prefersReducedMotion ? undefined : fadeInUp}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          animate={prefersReducedMotion ? undefined : 'visible'}
          transition={prefersReducedMotion ? undefined : { delay: 0.12 }}
        >
          <div className="glass-card relative aspect-[4/5] max-h-[min(68vh,34rem)] w-full overflow-hidden rounded-2xl shadow-card sm:rounded-3xl lg:max-h-[min(72vh,36rem)]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary-light/15 to-accent/10" />

            <LivingPortrait
              images={POSE_A_PORTRAIT_IMAGES}
              ariaLabel={`Foto de ${SITE.psychologist.name}, ${SITE.psychologist.title.toLowerCase()}`}
              variant="subtle"
              priority
              className="absolute inset-0"
            />

            <div className="glass-quote absolute bottom-4 left-4 right-4 rounded-xl p-3 shadow-soft sm:bottom-6 sm:left-6 sm:right-6 sm:rounded-2xl sm:p-4">
              <p className="text-xs font-medium text-foreground sm:text-sm">
                &ldquo;Cuidar de si também é um ato de coragem.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
