import { lazy, Suspense, useCallback, useState } from 'react'
import { BookOpenIcon } from '@phosphor-icons/react/BookOpen'
import { ClockIcon } from '@phosphor-icons/react/Clock'
import { ScrollReveal, ScrollRevealGroup } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { BLOG_POSTS } from '@/lib/constants'
import type { BlogPost } from '@/types'

const Modal = lazy(() =>
  import('@/components/ui/Modal').then((module) => ({ default: module.Modal })),
)

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso))
}

export function BlogPreview() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null)
  const closeModal = useCallback(() => setActivePost(null), [])

  return (
    <>
      <section
        id="conteudo"
        className="band-light-alt relative border-t border-border px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading
              align="center"
              eyebrow="Conteúdo"
              title="Leituras para"
              titleAccent="reflexão e cuidado"
              description={
                <>
                  Textos psicoeducativos, <strong className="font-semibold text-foreground">não substituem</strong>{' '}
                  avaliação clínica. Servem para acolher dúvidas comuns com clareza.
                </>
              }
            />
          </ScrollReveal>

          <ScrollRevealGroup className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <GlassCard
                key={post.id}
                as="article"
                variant="note"
                className="flex h-full flex-col px-6 py-6"
              >
                <div className="flex items-center gap-2 text-primary">
                  <BookOpenIcon className="size-4" weight="duotone" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-[0.08em]">
                    {post.category}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-border/60 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <ClockIcon className="size-3.5" aria-hidden="true" />
                    {post.readMinutes} min · {formatDate(post.publishedAt)}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActivePost(post)}
                    className="text-sm font-medium text-primary underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Ler
                  </button>
                </div>
              </GlassCard>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {activePost ? (
        <Suspense fallback={null}>
          <Modal isOpen={Boolean(activePost)} onClose={closeModal} title={activePost.title} size="lg">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">
              {activePost.category} · {activePost.readMinutes} min de leitura
            </p>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
              {activePost.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6 rounded-lg bg-muted/60 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
              Conteúdo psicoeducativo. Não substitui avaliação ou tratamento psicológico
              individualizado.
            </p>
          </Modal>
        </Suspense>
      ) : null}
    </>
  )
}
