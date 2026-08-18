export function SectionDivider() {
  return (
    <div
      className="section-divider mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        className="h-8 w-full text-border/80 sm:h-10"
        fill="none"
      >
        <path
          d="M0 24C200 8 400 40 600 24s400-16 600 24"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="600" cy="24" r="3" className="fill-primary/45" />
      </svg>
    </div>
  )
}
