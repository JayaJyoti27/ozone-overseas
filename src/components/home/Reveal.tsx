import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, className = "", as: Tag = "div", delay = 0 }: {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("in-view"), delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  // @ts-expect-error dynamic tag
  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>;
}

export function useCountUp(target: number, duration = 1500) {
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            const val = Math.round(target * eased);
            if (el) el.textContent = val.toLocaleString();
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return ref;
}
