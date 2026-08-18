export function PatternBackground() {
  return (
    <div className="pattern-background pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <svg
        className="pattern-background-svg h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="site-organic-grid"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="8" cy="8" r="1.25" className="pattern-dot" />
            <circle cx="28" cy="28" r="0.9" className="pattern-dot-soft" />
            <path
              d="M0 28h56M28 0v56"
              className="pattern-line"
              fill="none"
            />
          </pattern>
          <pattern
            id="site-wave-lines"
            width="120"
            height="60"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-12)"
          >
            <path
              d="M0 30c20-8 40 8 60 0s40-8 60 0"
              className="pattern-wave"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#site-organic-grid)" />
        <rect width="100%" height="100%" fill="url(#site-wave-lines)" opacity="0.55" />
      </svg>
    </div>
  )
}
