"use client"

export function PulseAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Neural wave lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6EC9FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#6EC9FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#B488FF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Animated pulse lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <path
              d={`M0,${300 + i * 50} Q300,${250 + i * 30} 400,${300 + i * 50} T600,${280 + i * 40} T800,${320 + i * 30} T1000,${290 + i * 45} T1200,${300 + i * 50}`}
              fill="none"
              stroke="url(#pulseGradient)"
              strokeWidth="2"
              className="animate-pulse"
              style={{
                animationDelay: `${i * 0.3}s`,
                animationDuration: "3s",
              }}
            />
          </g>
        ))}

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <circle
            key={`particle-${i}`}
            cx={Math.random() * 1200}
            cy={Math.random() * 800}
            r={Math.random() * 3 + 1}
            fill={i % 2 === 0 ? "#6EC9FF" : "#B488FF"}
            opacity={0.3}
            className="animate-pulse"
            style={{
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </svg>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--background)_70%)]" />
    </div>
  )
}
