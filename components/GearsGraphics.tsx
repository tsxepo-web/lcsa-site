export default function GearsGraphic() {
  // A more complex gear path with beveled edges
  const gearPath =
    "M45,10 L55,10 L58,22 L67,26 L78,18 L85,25 L77,36 L81,45 L93,48 L93,58 L81,61 L77,70 L85,81 L78,88 L67,80 L58,84 L55,96 L45,96 L42,84 L33,80 L22,88 L15,81 L23,70 L19,61 L7,58 L7,48 L19,45 L23,36 L15,25 L22,18 L33,26 L42,22 Z";
  const innerHolePath = "M50,20 A 30 30 0 1 1 50 80 A 30 30 0 1 1 50 20 Z";

  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 py-12 md:flex-row md:gap-0 p-8 rounded-xl">
      {/* 1. Yellow Gear */}
      <div className="relative z-10 flex flex-col items-center">
        <svg
          viewBox="0 0 100 100"
          className="h-32 w-32 animate-spin-slow drop-shadow-2xl md:h-40 md:w-40"
        >
          <defs>
            {/* Complex Metallic Gradient for Yellow */}
            <linearGradient
              id="metal-yellow"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#fff8cc" />
              <stop offset="25%" stopColor="#ffd633" />
              <stop offset="50%" stopColor="#e6b800" />
              <stop offset="75%" stopColor="#cc9900" />
              <stop offset="100%" stopColor="#664d00" />
            </linearGradient>
            {/* Inner Shadow Filter for the hole */}
            <filter
              id="inner-shadow-yellow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feDropShadow
                dx="2"
                dy="4"
                stdDeviation="3"
                floodColor="#332200"
                floodOpacity="0.8"
              />
            </filter>
          </defs>

          {/* Gear Body */}
          <path
            d={gearPath}
            fill="url(#metal-yellow)"
            stroke="#997300"
            strokeWidth="0.5"
          />

          {/* Center Hole with Inner Shadow */}
          <path
            d={innerHolePath}
            fill="url(#metal-yellow)"
            filter="url(#inner-shadow-yellow)"
            stroke="#997300"
            strokeWidth="1"
          />

          {/* Specular Highlight (Shiny spot) */}
          <ellipse
            cx="35"
            cy="35"
            rx="15"
            ry="10"
            fill="white"
            opacity="0.15"
            transform="rotate(-45 35 35)"
            filter="blur(2px)"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[10px] font-bold leading-tight text-[#332200] md:text-xs z-20">
          <span>Policy and</span>
          <span>good</span>
          <span>governance</span>
        </div>
      </div>

      {/* Arrow 1 */}
      <div className="hidden text-[#fdb913] md:block animate-pulse-arrow z-0 -mx-2">
        <svg
          width="60"
          height="24"
          viewBox="0 0 60 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 12H56M56 12L46 4M56 12L46 20"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* 2. Grey Gear (Steel) */}
      <div className="relative z-10 flex flex-col items-center">
        <svg
          viewBox="0 0 100 100"
          className="h-36 w-36 animate-spin-reverse-slow drop-shadow-2xl md:h-48 md:w-48"
        >
          <defs>
            {/* Steel Gradient */}
            <linearGradient id="metal-grey" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8f9fa" />
              <stop offset="25%" stopColor="#ced4da" />
              <stop offset="50%" stopColor="#adb5bd" />
              <stop offset="75%" stopColor="#6c757d" />
              <stop offset="100%" stopColor="#212529" />
            </linearGradient>
            <filter
              id="inner-shadow-grey"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feDropShadow
                dx="2"
                dy="4"
                stdDeviation="3"
                floodColor="#000000"
                floodOpacity="0.9"
              />
            </filter>
          </defs>

          <path
            d={gearPath}
            fill="url(#metal-grey)"
            stroke="#495057"
            strokeWidth="0.5"
          />
          <path
            d={innerHolePath}
            fill="url(#metal-grey)"
            filter="url(#inner-shadow-grey)"
            stroke="#495057"
            strokeWidth="1"
          />
          <ellipse
            cx="35"
            cy="35"
            rx="15"
            ry="10"
            fill="white"
            opacity="0.4"
            transform="rotate(-45 35 35)"
            filter="blur(2px)"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[10px] font-bold leading-tight text-slate-900 md:text-xs z-20">
          <span>Workplace</span>
          <span>Management</span>
          <span>Systema</span>
        </div>
      </div>

      {/* Arrow 2 */}
      <div className="hidden text-[#9ba3ab] md:block animate-pulse-arrow z-0 -mx-2">
        <svg
          width="60"
          height="24"
          viewBox="0 0 60 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 12H56M56 12L46 4M56 12L46 20"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* 3. Orange Gear (Anodized Aluminum) */}
      <div className="relative z-10 flex flex-col items-center">
        <svg
          viewBox="0 0 100 100"
          className="h-40 w-40 animate-spin-slow drop-shadow-2xl md:h-56 md:w-56"
        >
          <defs>
            <linearGradient
              id="metal-orange"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ffd1a8" />
              <stop offset="25%" stopColor="#ff9b42" />
              <stop offset="50%" stopColor="#f17c22" />
              <stop offset="75%" stopColor="#c95b0a" />
              <stop offset="100%" stopColor="#663300" />
            </linearGradient>
            <filter
              id="inner-shadow-orange"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feDropShadow
                dx="2"
                dy="4"
                stdDeviation="3"
                floodColor="#331a00"
                floodOpacity="0.8"
              />
            </filter>
          </defs>

          <path
            d={gearPath}
            fill="url(#metal-orange)"
            stroke="#993300"
            strokeWidth="0.5"
          />
          <path
            d={innerHolePath}
            fill="url(#metal-orange)"
            filter="url(#inner-shadow-orange)"
            stroke="#993300"
            strokeWidth="1"
          />
          <ellipse
            cx="35"
            cy="35"
            rx="15"
            ry="10"
            fill="white"
            opacity="0.25"
            transform="rotate(-45 35 35)"
            filter="blur(2px)"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[11px] font-bold leading-tight text-white drop-shadow-md md:text-sm z-20">
          <span>Emergency</span>
          <span>Preparedness</span>
          <span>Lifeguard</span>
        </div>
      </div>
    </div>
  );
}
