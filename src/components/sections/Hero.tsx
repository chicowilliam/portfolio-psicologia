import { motion, useReducedMotion } from '@/lib/motion-react'
import { Button } from '@/components/ui/Button'
import { LivingPortrait } from '@/components/ui/LivingPortrait'
import { BOOKING_CTA, SITE } from '@/lib/constants'
import { POSE_A_PORTRAIT_IMAGES } from '@/lib/portrait-images'
import { useBookingDialog } from '@/components/providers/BookingDialogProvider'
import { fadeInUp } from '@/lib/motion'

export function Hero() {
  const { openBooking } = useBookingDialog()
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="inicio" className="relative overflow-hidden px-5 pb-14 pt-6 sm:px-6 sm:pb-16 sm:pt-8 lg:px-8 lg:pb-20 lg:pt-10">
      <svg
        className="editorial-path absolute inset-0 hidden opacity-70 lg:block"
        viewBox="0 0 1200 700"
        aria-hidden="true"
      >
        <path d="M40 520 C 180 420, 260 580, 420 480 C 560 400, 620 560, 780 470 C 920 390, 1000 520, 1160 430" />
      </svg>

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-14">
        <motion.div
          className="order-1 flex flex-col"
          variants={prefersReducedMotion ? undefined : fadeInUp}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          animate={prefersReducedMotion ? undefined : 'visible'}
        >
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-clay">
            {SITE.brand.identification}
          </p>

          <h1 className="mt-4 max-w-[18ch] font-display text-[clamp(2.15rem,7.2vw,3.75rem)] leading-[1.08] text-foreground">
            {SITE.brand.heroTitle}
          </h1>

          <p className="mt-5 max-w-[38ch] text-[1.05rem] leading-[1.7] text-muted-foreground sm:text-[1.1rem]">
            {SITE.brand.heroBody}
          </p>

          <div className="mt-7">
            <Button size="lg" onClick={() => openBooking()}>
              {BOOKING_CTA.primary}
            </Button>
          </div>

          <p className="mt-5 text-sm text-subtle">{SITE.brand.heroPractical}</p>
        </motion.div>

        <motion.div
          className="portrait-editorial order-2 mx-auto w-full max-w-[22rem] lg:mx-0 lg:max-w-none lg:justify-self-end"
          variants={prefersReducedMotion ? undefined : fadeInUp}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          animate={prefersReducedMotion ? undefined : 'visible'}
          transition={prefersReducedMotion ? undefined : { delay: 0.08 }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-background-alt">
            <LivingPortrait
              images={POSE_A_PORTRAIT_IMAGES}
              ariaLabel={SITE.psychologist.photoAlt}
              variant="subtle"
              priority
              imageClassName="object-[center_16%]"
              className="absolute inset-0"
            />
          </div>
          <p className="mt-3 text-xs tracking-[0.04em] text-subtle">
            {SITE.psychologist.name} · {SITE.psychologist.title}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
