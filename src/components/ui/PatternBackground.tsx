function AmbientBranches({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <g className="ambient-branch ambient-branch-left">
        <path
          className="ambient-stem"
          d="M-20 40 C 90 120, 40 260, 110 390 C 160 490, 70 610, 130 760"
        />
        <g className="ambient-leaf" transform="translate(28 92) rotate(-28)">
          <ellipse rx="16" ry="34" />
        </g>
        <g className="ambient-leaf" transform="translate(78 148) rotate(22)">
          <ellipse rx="14" ry="30" />
        </g>
        <g className="ambient-leaf" transform="translate(18 210) rotate(-38)">
          <ellipse rx="15" ry="32" />
        </g>
        <g className="ambient-leaf" transform="translate(92 268) rotate(18)">
          <ellipse rx="13" ry="28" />
        </g>
        <g className="ambient-leaf" transform="translate(48 332) rotate(-24)">
          <ellipse rx="17" ry="36" />
        </g>
        <g className="ambient-leaf" transform="translate(118 398) rotate(32)">
          <ellipse rx="14" ry="31" />
        </g>
        <g className="ambient-leaf" transform="translate(62 470) rotate(-16)">
          <ellipse rx="16" ry="33" />
        </g>
        <g className="ambient-leaf" transform="translate(28 548) rotate(-42)">
          <ellipse rx="13" ry="29" />
        </g>
        <g className="ambient-leaf" transform="translate(108 620) rotate(26)">
          <ellipse rx="15" ry="34" />
        </g>
        <g className="ambient-leaf" transform="translate(86 710) rotate(8)">
          <ellipse rx="12" ry="26" />
        </g>
      </g>

      <g className="ambient-branch ambient-branch-right">
        <path
          className="ambient-stem"
          d="M1220 80 C 1080 150, 1160 280, 1040 390 C 960 480, 1120 580, 1000 720 C 940 800, 1080 860, 1020 940"
        />
        <g className="ambient-leaf" transform="translate(1148 130) rotate(34)">
          <ellipse rx="15" ry="32" />
        </g>
        <g className="ambient-leaf" transform="translate(1092 188) rotate(-20)">
          <ellipse rx="14" ry="30" />
        </g>
        <g className="ambient-leaf" transform="translate(1170 250) rotate(42)">
          <ellipse rx="13" ry="28" />
        </g>
        <g className="ambient-leaf" transform="translate(1074 318) rotate(-28)">
          <ellipse rx="16" ry="35" />
        </g>
        <g className="ambient-leaf" transform="translate(1018 392) rotate(-12)">
          <ellipse rx="14" ry="31" />
        </g>
        <g className="ambient-leaf" transform="translate(1124 448) rotate(24)">
          <ellipse rx="15" ry="33" />
        </g>
        <g className="ambient-leaf" transform="translate(1048 530) rotate(-34)">
          <ellipse rx="13" ry="29" />
        </g>
        <g className="ambient-leaf" transform="translate(988 610) rotate(-8)">
          <ellipse rx="17" ry="36" />
        </g>
        <g className="ambient-leaf" transform="translate(1088 688) rotate(18)">
          <ellipse rx="14" ry="30" />
        </g>
        <g className="ambient-leaf" transform="translate(1028 778) rotate(-22)">
          <ellipse rx="12" ry="26" />
        </g>
      </g>

      <g className="ambient-sprig">
        <path className="ambient-stem" d="M 560 18 C 580 70, 548 110, 572 168" />
        <g className="ambient-leaf" transform="translate(548 58) rotate(-32)">
          <ellipse rx="9" ry="18" />
        </g>
        <g className="ambient-leaf" transform="translate(592 78) rotate(28)">
          <ellipse rx="8" ry="16" />
        </g>
        <g className="ambient-leaf" transform="translate(562 128) rotate(-14)">
          <ellipse rx="10" ry="20" />
        </g>
      </g>
    </svg>
  )
}

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
            width="72"
            height="72"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="1.1" className="pattern-dot" />
            <circle cx="46" cy="46" r="0.8" className="pattern-dot-soft" />
          </pattern>
          <radialGradient id="ambient-window-light" cx="50%" cy="0%" r="70%">
            <stop offset="0%" className="ambient-light-start" />
            <stop offset="100%" className="ambient-light-end" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#site-organic-grid)" opacity="0.45" />
        <ellipse
          className="ambient-window"
          cx="50%"
          cy="-8%"
          rx="46%"
          ry="38%"
          fill="url(#ambient-window-light)"
        />
      </svg>

      {/* Dark strokes → readable on mist/blush */}
      <AmbientBranches className="ambient-drawing ambient-drawing--on-light" />
      {/* Light strokes → readable on ink/cta */}
      <AmbientBranches className="ambient-drawing ambient-drawing--on-dark" />
    </div>
  )
}
