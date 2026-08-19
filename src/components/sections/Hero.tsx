import { motion, useReducedMotion } from '@/lib/motion-react'
import { ArrowRightIcon } from '@phosphor-icons/react/ArrowRight'
import { CalendarIcon } from '@phosphor-icons/react/Calendar'
import { Button } from '@/components/ui/Button'
import { MeshBackground } from '@/components/ui/MeshBackground'
import { LivingPortrait } from '@/components/ui/LivingPortrait'
import { SITE } from '@/lib/constants'
import { POSE_A_PORTRAIT_IMAGES } from '@/lib/portrait-images'
import { useScrollTo } from '@/hooks/useScrollTo'
import { useBookingDialog } from '@/components/providers/BookingDialogProvider'
import { fadeInUp } from '@/lib/motion'

export function Hero() {
  const scrollTo = useScrollTo()
  const { openBooking } = useBookingDialog()
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-4 pb-12 pt-5 sm:px-6 sm:pb-16 sm:pt-8 lg:px-8 lg:pb-20 lg:pt-10"
    >
      <MeshBackground variant="hero" />

      <div className="relative mx-auto grid max-w-6xl items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-12 xl:gap-14">
        <motion.div
          className="flex flex-col justify-center lg:min-h-0 lg:py-1"
          variants={prefersReducedMotion ? undefined : fadeInUp}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          animate={prefersReducedMotion ? undefined : 'visible'}
        >
          <p className="welcome-line mb-2.5 text-sm font-medium text-accent sm:mb-3 sm:text-base">
            {SITE.psychologist.welcomeLine}
          </p>
          <p className="mb-4 text-[0.95rem] font-medium text-primary/90 sm:mb-5 sm:text-base">
            {SITE.psychologist.approach}
          </p>

          <h1 className="font-display text-[clamp(2.1rem,5.1vw,3.45rem)] font-semibold leading-[1.07] tracking-[-0.02em] text-foreground">
            <span className="block text-[clamp(1.32rem,3vw,1.95rem)] font-medium text-primary">
              {SITE.psychologist.headline}
            </span>
            <span className="mt-2.5 block">{SITE.psychologist.name}</span>
          </h1>

          <p className="mt-2 text-base font-medium text-primary sm:mt-2.5 sm:text-lg">
            {SITE.psychologist.title}
          </p>

          <p className="mt-4 max-w-[64ch] text-[1.02rem] leading-[1.72] text-muted-foreground sm:mt-5 sm:text-[1.1rem]">
            {SITE.psychologist.tagline}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center">
            <Button
              size="lg"
              onClick={() => openBooking()}
              className="gap-2"
            >
              <CalendarIcon className="size-5" weight="duotone" aria-hidden="true" />
              Agendar consulta
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo('#sobre')}
              className="gap-2"
            >
              Conhecer o trabalho
              <ArrowRightIcon className="size-4" aria-hidden="true" />
            </Button>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-5">
            CRP{' '}
            <a
              href={SITE.crpVerifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              {SITE.psychologist.crp}
            </a>{' '}
            · <strong className="font-semibold text-foreground">Atendimento presencial e online</strong> ·{' '}
            {SITE.contact.neighborhood}
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[min(100%,22rem)] overflow-hidden sm:max-w-sm sm:overflow-visible lg:mx-0 lg:max-w-none lg:justify-self-end"
          variants={prefersReducedMotion ? undefined : fadeInUp}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          animate={prefersReducedMotion ? undefined : 'visible'}
          transition={prefersReducedMotion ? undefined : { delay: 0.12 }}
        >
          <svg
            className="hero-mobile-sketch pointer-events-none absolute inset-0 z-0 h-full w-full sm:hidden"
            viewBox="0 0 420 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              className="hero-mobile-sketch-stem"
              d="M18 70 C 64 130, 44 234, 74 302 C 100 364, 64 430, 86 508"
            />
            <path className="hero-mobile-sketch-leaf" d="M58 146 C 86 136, 102 168, 78 182 C 58 192, 42 170, 58 146 Z" />
            <path className="hero-mobile-sketch-leaf-soft" d="M34 228 C 66 214, 88 250, 58 268 C 36 278, 14 252, 34 228 Z" />
            <path className="hero-mobile-sketch-leaf" d="M76 322 C 104 308, 126 342, 94 362 C 72 374, 50 344, 76 322 Z" />

            <path
              className="hero-mobile-sketch-stem"
              d="M404 86 C 352 154, 384 250, 332 318 C 298 366, 342 440, 312 512"
            />
            <path className="hero-mobile-sketch-leaf-soft" d="M334 174 C 360 158, 384 188, 358 206 C 336 220, 314 194, 334 174 Z" />
            <path className="hero-mobile-sketch-leaf" d="M352 272 C 382 258, 406 290, 374 310 C 352 324, 326 298, 352 272 Z" />
            <path className="hero-mobile-sketch-leaf-soft" d="M318 370 C 346 356, 370 388, 338 410 C 314 424, 290 396, 318 370 Z" />
          </svg>

          <div className="paper-frame relative aspect-[4/5] max-h-[min(68vh,34rem)] w-full lg:max-h-[min(72vh,36rem)]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary-light/15 to-accent/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_12%,rgba(255,255,255,0.42),transparent_38%)]" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/35" aria-hidden="true" />

            <LivingPortrait
              images={POSE_A_PORTRAIT_IMAGES}
              ariaLabel={`Foto de ${SITE.psychologist.name}, ${SITE.psychologist.title.toLowerCase()}`}
              variant="subtle"
              priority
              imageClassName="object-[center_16%] sm:object-[center_18%]"
              className="absolute inset-0"
            />

            <div className="glass-quote absolute bottom-4 left-4 right-4 rounded-xl p-3 shadow-soft sm:bottom-6 sm:left-6 sm:right-6 sm:rounded-2xl sm:p-4">
              <p className="font-display text-xs font-medium italic leading-snug text-foreground sm:text-sm">
                &ldquo;{SITE.voice.heroQuote}&rdquo;
              </p>
              <p className="mt-1.5 text-[11px] text-muted-foreground sm:text-xs">
                {SITE.psychologist.name}
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 sm:hidden">
            <span className="paper-chip text-xs">CRP {SITE.psychologist.crp}</span>
            <span className="paper-chip text-xs">+10 anos de atuação</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
