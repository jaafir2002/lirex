import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { easeOut } from '../../lib/motion'

export type AccordionItem = { q: string; a: string }

export function Accordion({ items, className = '' }: { items: AccordionItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <div className={`divide-y divide-border border-y border-border ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`${baseId}-panel-${i}`}
              id={`${baseId}-trigger-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-accent sm:py-6"
            >
              <span className="font-display text-base font-medium text-foreground sm:text-lg">
                {item.q}
              </span>
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface transition-transform duration-300 ${
                  isOpen ? 'rotate-45 border-accent/40 text-accent' : 'text-muted'
                }`}
                aria-hidden="true"
              >
                <Plus className="size-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`${baseId}-panel-${i}`}
                  role="region"
                  aria-labelledby={`${baseId}-trigger-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: easeOut }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pr-10 pb-6 text-[15px] leading-relaxed text-muted">
                    {item.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
