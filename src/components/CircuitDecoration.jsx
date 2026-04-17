import { motion } from "framer-motion";

// PCB traces inspired by the logo: horizontal-then-vertical paths ending in solder nodes
const TRACES = [
  // Top-left quadrant — go left then up
  { d: "M 180 140 L 58 140 L 58 28",   node: [58,  28],  delay: 0.00 },
  { d: "M 170 150 L 38 150 L 38 55",   node: [38,  55],  delay: 0.12 },
  { d: "M 187 132 L 94 132 L 94 14",   node: [94,  14],  delay: 0.06 },
  { d: "M 160 160 L 16 160 L 16 90",   node: [16,  90],  delay: 0.18 },
  // Top-right quadrant — go right then up
  { d: "M 220 140 L 342 140 L 342 28", node: [342, 28],  delay: 0.03 },
  { d: "M 230 150 L 362 150 L 362 55", node: [362, 55],  delay: 0.14 },
  { d: "M 213 132 L 306 132 L 306 14", node: [306, 14],  delay: 0.08 },
  { d: "M 240 160 L 384 160 L 384 90", node: [384, 90],  delay: 0.20 },
  // Bottom-left quadrant — go left then down
  { d: "M 140 220 L 58 220 L 58 372",  node: [58,  372], delay: 0.24 },
  { d: "M 153 233 L 38 233 L 38 342",  node: [38,  342], delay: 0.34 },
  { d: "M 131 212 L 94 212 L 94 386",  node: [94,  386], delay: 0.28 },
  { d: "M 163 243 L 16 243 L 16 310",  node: [16,  310], delay: 0.38 },
  // Bottom-right quadrant — go right then down
  { d: "M 260 220 L 342 220 L 342 372",node: [342, 372], delay: 0.26 },
  { d: "M 247 233 L 362 233 L 362 342",node: [362, 342], delay: 0.36 },
  { d: "M 269 212 L 306 212 L 306 386",node: [306, 386], delay: 0.30 },
  { d: "M 237 243 L 384 243 L 384 310",node: [384, 310], delay: 0.40 },
];

export function CircuitDecoration({ className = "", instanceId = "a" }) {
  const gId = `cktG-${instanceId}`;

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
    >
      <defs>
        <linearGradient
          id={gId}
          x1="200" y1="0" x2="200" y2="400"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%"   stopColor="#93c5fd" stopOpacity="0.95" />
          <stop offset="38%"  stopColor="#7aa2ff" stopOpacity="0.88" />
          <stop offset="68%"  stopColor="#9a7cff" stopOpacity="0.88" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* Outer diamond (chip body) */}
      <motion.path
        d="M 200 120 L 280 200 L 200 280 L 120 200 Z"
        stroke={`url(#${gId})`}
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />

      {/* Inner diamond ring */}
      <motion.path
        d="M 200 152 L 248 200 L 200 248 L 152 200 Z"
        stroke={`url(#${gId})`}
        strokeWidth="1"
        strokeOpacity="0.45"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />

      {/* Centre node */}
      <motion.circle
        cx="200" cy="200" r="4"
        fill={`url(#${gId})`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.6 }}
      />
      {/* Centre pulse ring */}
      <motion.circle
        cx="200" cy="200" r="4"
        stroke={`url(#${gId})`}
        strokeWidth="1"
        fill="none"
        animate={{ r: [4, 18, 4], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 3.5, delay: 3, repeat: Infinity, ease: "easeOut" }}
      />

      {/* PCB traces + solder-pad nodes */}
      {TRACES.map((trace, i) => (
        <g key={i}>
          <motion.path
            d={trace.d}
            stroke={`url(#${gId})`}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.82 }}
            transition={{
              duration: 0.85,
              delay: 0.5 + trace.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
          <motion.circle
            cx={trace.node[0]}
            cy={trace.node[1]}
            r="3.5"
            fill={`url(#${gId})`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.2 + trace.delay }}
          />
          {/* Pulsing ring on every 3rd node */}
          {i % 3 === 0 && (
            <motion.circle
              cx={trace.node[0]}
              cy={trace.node[1]}
              r="3.5"
              stroke={`url(#${gId})`}
              strokeWidth="1"
              fill="none"
              animate={{ r: [3.5, 11, 3.5], opacity: [0.7, 0, 0.7] }}
              transition={{
                duration: 2.8,
                delay: 2.6 + trace.delay,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          )}
        </g>
      ))}
    </svg>
  );
}
