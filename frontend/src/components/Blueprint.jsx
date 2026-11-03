export default function Blueprint() {
  return (
    <div className="blueprint">
      <div className="blueprint-heading">
        <span>Exploration / in progress</span>
        <span aria-hidden="true">BD—01</span>
      </div>
      <svg viewBox="0 0 520 380" fill="none" aria-hidden="true">
        <defs>
          <pattern
            id="blueprint-grid"
            width="26"
            height="26"
            patternUnits="userSpaceOnUse"
          >
            <path d="M26 0H0V26" stroke="currentColor" strokeOpacity=".1" />
          </pattern>
        </defs>
        <rect width="520" height="380" fill="url(#blueprint-grid)" />
        <g stroke="currentColor" strokeWidth="1">
          <circle cx="260" cy="190" r="134" opacity=".2" />
          <circle
            cx="260"
            cy="190"
            r="103"
            opacity=".3"
            strokeDasharray="3 8"
          />
          <ellipse
            cx="260"
            cy="190"
            rx="227"
            ry="83"
            transform="rotate(-28 260 190)"
            opacity=".45"
          />
          <path d="M260 28v32m0 260v32M72 190h30m316 0h30" opacity=".5" />
          <g transform="translate(260 190) rotate(-28)">
            <path
              d="M-36-44h61l22 22v67h-61l-22-22z"
              fill="var(--panel-nav-container)"
              strokeWidth="1.8"
            />
            <path d="M-36-44l22 22h61M-14-22v67M25-44v22" opacity=".65" />
            <path d="M-36-17h-32m115 0h28" strokeWidth="3" />
            <path
              d="M-161-51h93v70h-93zm236 0h93v70h-93z"
              fill="var(--hero-background)"
              strokeWidth="1.5"
            />
            {[-138, -114, -91, 98, 122, 146].map((x) => (
              <path key={x} d={`M${x}-51v70`} opacity=".5" />
            ))}
            <path d="M-161-28h93m-93 24h93M75-28h93M75-4h93" opacity=".5" />
            <path d="M3-44v-31m-12 0h24M5 45v29l16 8" strokeWidth="1.7" />
            <circle cx="9" cy="5" r="12" />
            <circle cx="9" cy="5" r="5" fill="currentColor" opacity=".6" />
          </g>
          <circle cx="425" cy="104" r="4" fill="currentColor" />
          <path d="M293 255l56 48h97M159 138l-47-55H54" opacity=".65" />
          <path
            d="M30 35V18h17m426 0h17v17M30 345v17h17m426 0h17v-17"
            opacity=".65"
          />
        </g>
        <g
          fill="currentColor"
          fontFamily="monospace"
          fontSize="10"
          letterSpacing="1.5"
        >
          <text x="54" y="73">
            CURIOSITY
          </text>
          <text x="349" y="322">
            EXPLORATION
          </text>
          <text x="35" y="345" opacity=".6">
            CONCEPT / ORBITAL SYSTEM
          </text>
        </g>
      </svg>
      <div className="blueprint-footer">
        <span>From an idea to something real.</span>
        <span aria-hidden="true">↗</span>
      </div>
    </div>
  );
}
