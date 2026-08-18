import { getDefaultClassNames, type Matcher } from '@daypicker/react'
import { startOfDay } from 'date-fns'
import { cn } from '@/lib/utils'

export function getCalendarClassNames() {
  const defaults = getDefaultClassNames()

  return {
    root: cn(defaults.root, 'p-0'),
    months: cn(defaults.months, 'relative flex flex-col gap-4'),
    month: cn(defaults.month, 'flex w-full flex-col gap-3'),
    month_caption: cn(
      defaults.month_caption,
      'flex items-center justify-center px-10 py-1',
    ),
    caption_label: cn(
      defaults.caption_label,
      'font-display text-sm font-semibold capitalize text-foreground',
    ),
    nav: cn(defaults.nav, 'absolute inset-x-0 top-0 flex items-center justify-between'),
    button_previous: cn(
      defaults.button_previous,
      'inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    ),
    button_next: cn(
      defaults.button_next,
      'inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    ),
    chevron: cn(defaults.chevron, 'size-4 fill-primary'),
    month_grid: cn(defaults.month_grid, 'w-full border-collapse'),
    weekdays: cn(defaults.weekdays, 'flex'),
    weekday: cn(
      defaults.weekday,
      'w-10 text-center text-xs font-medium uppercase tracking-wide text-muted-foreground',
    ),
    week: cn(defaults.week, 'mt-1 flex w-full'),
    day: cn(
      defaults.day,
      'relative flex size-10 flex-1 items-center justify-center p-0 text-sm',
    ),
    day_button: cn(
      defaults.day_button,
      'inline-flex size-9 items-center justify-center rounded-lg font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    ),
    selected: cn(
      defaults.selected,
      '[&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary/90',
    ),
    today: cn(defaults.today, '[&>button]:border [&>button]:border-primary/40'),
    outside: cn(defaults.outside, 'text-muted-foreground/40'),
    disabled: cn(
      defaults.disabled,
      'text-muted-foreground/30 [&>button]:cursor-not-allowed [&>button]:opacity-40 [&>button]:hover:bg-transparent',
    ),
  }
}

export const CALENDAR_DISABLED_MATCHERS: Matcher[] = [
  { before: startOfDay(new Date()) },
  { dayOfWeek: [0] },
]
