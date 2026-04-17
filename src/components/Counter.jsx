import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}) {
  const ref = useRef(null);
  const count = useMotionValue(0);
  const formatted = useTransform(count, (latest) =>
    `${prefix}${latest.toFixed(decimals)}${suffix}`,
  );
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!isInView) {
      return undefined;
    }

    const controls = animate(count, value, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => controls.stop();
  }, [count, isInView, value]);

  return (
    <motion.span ref={ref} className={className}>
      {formatted}
    </motion.span>
  );
}
