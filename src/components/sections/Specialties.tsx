import {
  Heart,
  HeartHandshake,
  Sparkles,
  Sun,
  Users,
  Wind,
} from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SPECIALTIES } from '@/lib/constants'

const iconMap = {
  wind: Wind,
  'heart-handshake': HeartHandshake,
  users: Users,
  heart: Heart,
  sparkles: Sparkles,
  sun: Sun,
} as const

export function Specialties() {
  return (
    <section
      id="especialidades"
      className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Áreas de atuação"
            title="Especialidades e demandas atendidas"
            description="Acompanhamento terapêutico para diferentes momentos e necessidades da vida."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SPECIALTIES.map((specialty, index) => {
            const Icon = iconMap[specialty.icon as keyof typeof iconMap]

            return (
              <ScrollReveal key={specialty.id} delay={index * 0.06}>
                <article className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {specialty.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {specialty.description}
                  </p>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
