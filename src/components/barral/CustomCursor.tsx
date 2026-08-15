import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/use-motion-prefs";

/** Minimal desktop cursor. Disabled on touch devices and for reduced motion. */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches && !reduced);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;
    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let tx = rx;
    let ty = ry;
    let frame = 0;

    const move = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      const interactive = (e.target as HTMLElement)?.closest(
        "a, button, [role='button'], input, select, textarea",
      );
      ring.current?.setAttribute("data-active", interactive ? "true" : "false");
    };

    const loop = () => {
      rx += (tx - rx) * 0.16;
      ry += (ty - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", move, { passive: true });
    frame = requestAnimationFrame(loop);
    document.documentElement.style.cursor = "none";

    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
      document.documentElement.style.cursor = "";
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      <div
        ref={ring}
        data-active="false"
        className="absolute -left-4 -top-4 h-8 w-8 rounded-full border border-bone/40 transition-[width,height,border-color] duration-200 data-[active=true]:border-barral"
      />
      <div ref={dot} className="absolute -left-[2px] -top-[2px] h-1 w-1 rounded-full bg-barral" />
    </div>
  );
}
