import {
  Award,
  Calendar,
  GraduationCap,
  Heart,
} from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CREDENTIALS } from '@/lib/constants'

const iconMap = {
  badge: Award,
  graduation: GraduationCap,
  calendar: Calendar,
  heart: Heart,
} as const

export function Credentials() {
  return (
    <section className="border-y border-border bg-muted/40 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Profissionalismo e confiança"
            title="Compromisso com a ética e a qualidade do cuidado"
            description="Informações verificáveis que demonstram minha formação, registro profissional e experiência clínica."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((credential, index) => {
            const Icon = iconMap[credential.icon as keyof typeof iconMap]

            return (
              <ScrollReveal key={credential.label} delay={index * 0.08}>
                <article className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {credential.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-foreground">
                    {credential.value}
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
