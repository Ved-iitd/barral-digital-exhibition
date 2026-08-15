import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { media } from "@/data/barral";
import { useReducedMotion } from "@/lib/use-motion-prefs";

const parts = [
  { key: "cup", label: "BARRAL CUP", note: "Double-wall paper, dome lid, straw" },
  { key: "mixer", label: "INSTANT MIXER", note: "One sealed sachet per cup" },
  { key: "water", label: "COLD WATER", note: "Added by you, when you want it" },
  { key: "time", label: "10–15 SECONDS", note: "Tear, pour, stir" },
];

export function SceneCategory() {
  const root = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !root.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        { desktop: "(min-width: 768px)", mobile: "(max-width: 767px)" },
        (context) => {
          const isMobile = !!context.conditions?.['mobile'];
          const spread = isMobile ? 120 : 240;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: isMobile ? "+=140%" : "+=220%",
              pin: true,
              scrub: 0.8,
            },
          });

          tl.to(".cat-cup", { scale: isMobile ? 0.72 : 0.8, duration: 1 }, 0);

          gsap.utils.toArray<HTMLElement>(".cat-part").forEach((el, i) => {
            const angle = (i / parts.length) * Math.PI * 2 - Math.PI / 2;
            tl.fromTo(
              el,
              { opacity: 0, x: 0, y: 0 },
              {
                opacity: 1,
                x: Math.cos(angle) * spread * (isMobile ? 1.1 : 1.35),
                y: Math.sin(angle) * spread * (isMobile ? 0.85 : 1),
                duration: 1,
                ease: "power2.out",
              },
              0.15 + i * 0.12,
            );
          });

          // reassemble
          tl.to(".cat-part", { opacity: 0, x: 0, y: 0, duration: 0.9, ease: "power2.inOut" }, 2.1);
          tl.to(".cat-cup", { scale: 1, duration: 0.9, ease: "power2.inOut" }, 2.1);
        },
      );
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="experience"
      ref={root}
      className="relative grain flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink py-20"
      aria-labelledby="category-heading"
    >
      <div className="mx-auto grid w-full max-w-[1600px] items-center gap-10 px-5 md:grid-cols-2 md:px-10">
        <div className="relative z-10 order-2 md:order-1">
          <p className="eyebrow text-barral">02 — The Category</p>
          <h2 id="category-heading" className="mt-5 display-lg text-bone">
            NOT READY TO DRINK.
            <br />
            READY WHEN YOU ARE.
          </h2>
          <p className="mt-6 max-w-[46ch] text-sm leading-relaxed text-bone/65 md:text-base">
            Barral transforms a sealed cup, an instant mixer and cold water into a fresh beverage
            experience—wherever the moment finds you.
          </p>
          <ul className="mt-8 hairline-t">
            {parts.map((p) => (
              <li key={p.key} className="flex items-baseline justify-between gap-6 hairline-b py-3">
                <span className="eyebrow text-bone">{p.label}</span>
                <span className="text-right text-xs text-bone/50">{p.note}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative order-1 flex h-[46svh] items-center justify-center md:order-2 md:h-[70svh]">
          <img
            src={media.cupSignature}
            alt="A sealed Barral double-wall paper cup with dome lid and straw"
            loading="lazy"
            decoding="async"
            className="cat-cup relative z-10 max-h-full w-auto object-contain"
          />
          {parts.map((p) => (
            <div
              key={p.key}
              className="cat-part pointer-events-none absolute z-20 flex w-32 flex-col items-center gap-1 text-center opacity-0 md:w-40"
              aria-hidden
            >
              <span className="h-8 w-px bg-hairline" />
              <span className="eyebrow text-[0.6rem] text-bone">{p.label}</span>
              <span className="text-[0.65rem] leading-snug text-bone/45">{p.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
