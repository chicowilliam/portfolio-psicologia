import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { CONSULTORIO_GALLERY, SITE } from '@/lib/constants'
import { CONSULTORIO_IMAGES } from '@/lib/consultorio-images'

export function ConsultorioEssay() {
  const [main, ...rest] = CONSULTORIO_GALLERY

  return (
    <section id="consultorio" className="px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-clay">
                Consultório
              </p>
              <h2 className="mt-3 max-w-[14ch] font-display text-[clamp(1.85rem,4vw,2.7rem)] leading-[1.12] text-foreground">
                Um ambiente pensado para acolher
              </h2>
            </div>
            <p className="max-w-[28ch] text-sm leading-relaxed text-muted-foreground">
              Presencial em {SITE.contact.neighborhood}. Online quando a rotina pede flexibilidade.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <figure className="mt-10">
            <div className="aspect-[4/5] overflow-hidden bg-background-alt sm:aspect-[16/10]">
              <img
                src={CONSULTORIO_IMAGES[main.id]}
                alt={main.alt}
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
            </div>
            <figcaption className="mt-2 text-xs tracking-[0.04em] text-subtle">
              {main.caption}
            </figcaption>
          </figure>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {rest.map((photo) => (
              <figure key={photo.id}>
                <div className="aspect-[3/2] overflow-hidden bg-background-alt">
                  <img
                    src={CONSULTORIO_IMAGES[photo.id]}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-xs tracking-[0.04em] text-subtle">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
