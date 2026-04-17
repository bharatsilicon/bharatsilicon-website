import { motion } from "framer-motion";

const signalPath =
  "M4 110 L70 110 L70 42 L142 42 L142 110 L220 110 L220 18 L298 18 L298 110 L380 110 L380 64 L454 64 L454 110 L534 110 L534 32 L618 32 L618 110 L700 110";

export function SignalWaveform() {
  return (
    <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/8 bg-slate-950/50 px-4 py-8 shadow-[0_0_80px_rgba(15,23,42,0.9)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.10),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_35%)]" />
      <svg
        viewBox="0 0 704 128"
        className="relative z-10 h-28 w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="signalGradient" x1="0" y1="0" x2="704" y2="0">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="55%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <path
          d={signalPath}
          stroke="rgba(59,130,246,0.18)"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d={signalPath}
          stroke="url(#signalGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0.3 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
        <motion.circle
          cx="700"
          cy="110"
          r="6"
          fill="#10b981"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.55, 1] }}
          transition={{ duration: 2.4, delay: 1.4 }}
        />
      </svg>
    </div>
  );
}
