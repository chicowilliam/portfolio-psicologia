import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { LivingPortrait } from '@/components/ui/LivingPortrait'
import { SITE } from '@/lib/constants'
import { POSE_B_PORTRAIT_IMAGES } from '@/lib/portrait-images'

export function AboutHelena() {
  return (
    <section id="sobre" className="px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <ScrollReveal>
          <div className="portrait-editorial">
            <div className="relative aspect-[4/5] overflow-hidden bg-background-alt">
              <LivingPortrait
                images={POSE_B_PORTRAIT_IMAGES}
                ariaLabel={SITE.psychologist.photoAlt}
                variant="expressive"
                imageClassName="object-[center_20%]"
                className="absolute inset-0"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <div className="flex h-full flex-col justify-center">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-clay">
              Sobre Helena
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.75rem)] leading-[1.12] text-foreground">
              Escuta clínica, linguagem humana
            </h2>
            <p className="mt-5 max-w-[48ch] text-[1.02rem] leading-[1.7] text-muted-foreground">
              {SITE.psychologist.bio}
            </p>

            <blockquote className="mt-8 border-l border-primary pl-4">
              <p className="font-display text-xl leading-snug text-foreground sm:text-2xl">
                {SITE.psychologist.quote}
              </p>
            </blockquote>

            <dl className="mt-10 grid gap-5 border-t border-border pt-8 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-subtle">
                  Abordagem
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-foreground">
                  {SITE.psychologist.approach}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-subtle">
                  Formação
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-foreground">
                  Psicologia e especialização em TCC
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-subtle">
                  Modalidades
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-foreground">
                  Presencial na Savassi e online
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-subtle">
                  Público
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-foreground">
                  Adultos e adolescentes (a partir de 14 anos)
                </dd>
              </div>
            </dl>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
