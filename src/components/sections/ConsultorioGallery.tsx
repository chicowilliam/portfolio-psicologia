import { memo } from 'react'
import { ArmchairIcon } from '@phosphor-icons/react/Armchair'
import { PlantIcon } from '@phosphor-icons/react/Plant'
import { DoorIcon } from '@phosphor-icons/react/Door'
import { ScrollReveal, ScrollRevealGroup } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CONSULTORIO_GALLERY } from '@/lib/constants'
import type { ConsultorioPhoto } from '@/types'
import { cn } from '@/lib/utils'

const placeholderStyles: Record<
  ConsultorioPhoto['placeholder'],
  string
> = {
  sala: 'from-primary/18 via-primary-light/12 to-accent/10',
  detalhe: 'from-accent/16 via-muted/40 to-primary-light/14',
  recepcao: 'from-muted/50 via-card to-primary/8',
}

const placeholderIcons = {
  sala: ArmchairIcon,
  detalhe: PlantIcon,
  recepcao: DoorIcon,
} as const

const GalleryItem = memo(function GalleryItem({ photo }: { photo: ConsultorioPhoto }) {
  const Icon = placeholderIcons[photo.placeholder]

  return (
    <figure className="paper-frame group overflow-hidden">
      <div
        className={cn(
          'relative aspect-[4/3] bg-gradient-to-br',
          placeholderStyles[photo.placeholder],
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_45%)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
          <Icon className="size-8 text-primary/70" weight="duotone" aria-hidden="true" />
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground/80">
            Foto em breve
          </p>
        </div>
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
      className="relative border-y border-border bg-muted/25 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
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
                Atendimento presencial na <strong className="font-semibold text-foreground">Savassi</strong>,
                com sala reservada, luz natural e acesso por elevador. Conheça o espaço antes da
                primeira conversa.
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
