"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ to, prefix = "", suffix = "", duration = 1800, decimals = 0 }: {
  to: number; prefix?: string; suffix?: string; duration?: number; decimals?: number;
}) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);
  useEffect(() => {
    const node = ref.current; if (!node) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || fired.current) return;
      fired.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setV(to * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.35 });
    obs.observe(node);
    return () => obs.disconnect();
  }, [to, duration]);
  const display = v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return <span ref={ref} className="num">{prefix}{display}{suffix}</span>;
}
