import { memo } from 'react'
import { ScrollReveal, ScrollRevealGroup } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CONSULTORIO_GALLERY } from '@/lib/constants'
import { CONSULTORIO_IMAGES } from '@/lib/consultorio-images'
import type { ConsultorioPhoto } from '@/types'

const GalleryItem = memo(function GalleryItem({ photo }: { photo: ConsultorioPhoto }) {
  const src = CONSULTORIO_IMAGES[photo.id]

  return (
    <figure className="paper-frame group overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={src}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>
      <figcaption className="border-t border-border/60 bg-card/90 px-4 py-3">
        <p className="font-display text-sm font-semibold text-foreground">{photo.caption}</p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{photo.alt}</p>
      </figcaption>
    </figure>
  )
})

export function ConsultorioGallery() {
  return (
    <section
      id="consultorio"
      className="band-mid relative border-y border-border px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Consultório"
            title="Um ambiente pensado"
            titleAccent="para acolher"
            description={
              <>
                Atendimento presencial na{' '}
                <strong className="font-semibold text-foreground">Savassi</strong>, com sala
                reservada, luz natural e acesso por elevador. Conheça o espaço antes da primeira
                conversa.
              </>
            }
          />
        </ScrollReveal>

        <ScrollRevealGroup className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {CONSULTORIO_GALLERY.map((photo) => (
            <GalleryItem key={photo.id} photo={photo} />
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  )
}
