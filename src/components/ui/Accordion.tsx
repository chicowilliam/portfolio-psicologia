import { useState } from 'react'
import { motion, useReducedMotion } from '@/lib/motion-react'
import { ChevronDown } from 'lucide-react'
import type { FAQItem } from '@/types'

interface AccordionProps {
  items: FAQItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)
  const prefersReducedMotion = useReducedMotion()

  function toggle(id: string) {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id

        return (
          <div
            key={item.id}
            className="glass-card overflow-hidden rounded-2xl shadow-soft"
          >
            <button
              type="button"
              id={`faq-trigger-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
            >
              <span className="font-medium text-foreground">{item.question}</span>
              <motion.span
                animate={{ rotate: prefersReducedMotion ? 0 : isOpen ? 180 : 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.22 }}
              >
                <ChevronDown className="size-5 shrink-0 text-muted-foreground" />
              </motion.span>
            </button>

            <div
              id={`faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`faq-trigger-${item.id}`}
              className="accordion-panel"
              data-open={isOpen ? 'true' : 'false'}
              hidden={Boolean(prefersReducedMotion && !isOpen)}
            >
              <div className="overflow-hidden">
                <div className="border-t border-border px-6 py-5">
                  <p className="leading-relaxed text-muted-foreground">{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
