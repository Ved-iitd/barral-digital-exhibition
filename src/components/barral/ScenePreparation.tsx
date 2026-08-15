import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prepSteps, flavours } from "@/data/barral";
import { useReducedMotion } from "@/lib/use-motion-prefs";

export function ScenePreparation({
  activeFlavourId,
  onFlavourChange,
}: {
  activeFlavourId: string;
  onFlavourChange: (id: string) => void;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const flavour = flavours.find((f) => f.id === activeFlavourId) ?? flavours[0]!;

  useEffect(() => {
    if (reduced || !root.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add({ desktop: "(min-width: 768px)", mobile: "(max-width: 767px)" }, (context) => {
        const isMobile = !!context.conditions?.["mobile"];
        const st = ScrollTrigger.create({
          trigger: root.current,
          start: "top top",
          end: isMobile ? "+=280%" : "+=380%",
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            const i = Math.min(prepSteps.length - 1, Math.floor(self.progress * prepSteps.length));
            setActive(i);
          },
        });
        return () => st.kill();
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={root}
      className="relative grain flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink py-20"
      aria-labelledby="prep-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 opacity-25 transition-colors duration-700"
          style={{
            background: `linear-gradient(to top, ${flavour.accent}, transparent)`,
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4 hairline-b pb-5">
          <div>
            <p className="eyebrow text-barral">03 — The Preparation</p>
            <h2 id="prep-heading" className="mt-4 display-md text-bone">
              Your drink. Your ritual. Your moment.
            </h2>
          </div>
          <p className="text-xs uppercase tracking-[0.28em] text-bone/45">
            Step {prepSteps[active]!.step} / 04
          </p>
        </div>

        <div className="mt-8 grid items-center gap-8 md:grid-cols-[1.1fr_1fr]">
          <div className="relative h-[38svh] overflow-hidden md:h-[56svh]">
            {prepSteps.map((s, i) => (
              <img
                key={s.step}
                src={s.image}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 h-full w-full object-contain transition-[opacity,transform] duration-700 ${
                  i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                }`}
              />
            ))}
          </div>

          <div>
            <ol className="hairline-t">
              {prepSteps.map((s, i) => (
                <li key={s.step} className="hairline-b">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={i === active}
                    className="flex w-full items-baseline gap-5 py-4 text-left"
                  >
                    <span
                      className={`font-display text-lg transition-colors ${i === active ? "text-barral" : "text-bone/30"}`}
                    >
                      {s.step}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block font-display text-2xl transition-colors md:text-4xl ${
                          i === active ? "text-bone" : "text-bone/30"
                        }`}
                      >
                        {s.label}
                      </span>
                      <span
                        className={`block text-xs text-bone/50 transition-opacity ${i === active ? "opacity-100" : "opacity-0 md:opacity-40"}`}
                      >
                        {s.detail}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>

            <div className="mt-7">
              <p className="eyebrow text-bone/45">Finish in</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {flavours.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => onFlavourChange(f.id)}
                    aria-pressed={f.id === activeFlavourId}
                    className={`eyebrow border px-4 py-2 text-[0.6rem] transition-colors ${
                      f.id === activeFlavourId
                        ? "border-bone bg-bone text-ink"
                        : "border-hairline text-bone/60 hover:text-bone"
                    }`}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
