import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { flavours, media } from "@/data/barral";
import { useReducedMotion } from "@/lib/use-motion-prefs";

export function SceneFlavours({ onSelect }: { onSelect: (id: string) => void }) {
  const [open, setOpen] = useState<string | null>(null);
  const reduced = useReducedMotion();

  return (
    <section id="flavours" aria-labelledby="flavours-heading" className="relative bg-ink">
      <h2 id="flavours-heading" className="sr-only">
        Barral flavours
      </h2>

      {flavours.map((f) => {
        const isOpen = open === f.id;
        return (
          <article
            key={f.id}
            className="relative grain flex min-h-[100svh] items-center overflow-hidden"
            style={{ backgroundColor: "var(--ink)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.28]"
              style={{
                background: `radial-gradient(ellipse 80% 70% at 70% 40%, ${f.accent}, transparent 70%)`,
              }}
            />
            <img
              src={f.id === "panipuri" ? media.mrBarralPanipuri : media.cupSignature}
              alt=""
              aria-hidden
              loading="lazy"
              decoding="async"
              className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-contain object-right opacity-25 md:w-[52%] md:opacity-45"
            />

            <div className="relative mx-auto w-full max-w-[1600px] px-5 py-24 md:px-10">
              <p className="section-numeral select-none">{f.index}</p>

              <motion.div
                initial={reduced ? false : { opacity: 0, y: 40 }}
                whileInView={reduced ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="-mt-6 max-w-[20ch]"
              >
                <p className="eyebrow" style={{ color: f.accent }}>
                  {f.name}
                </p>
                <h3 className="mt-5 display-lg text-bone">{f.copy}</h3>
                <p className="mt-6 max-w-[42ch] text-sm leading-relaxed text-bone/65">{f.moment}</p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : f.id)}
                    aria-expanded={isOpen}
                    className="eyebrow border border-bone/30 px-6 py-3.5 text-bone transition-colors hover:border-bone hover:bg-bone hover:text-ink"
                  >
                    {isOpen ? "Close" : "Discover This Flavour"}
                  </button>
                  <a
                    href="#pre-order"
                    onClick={() => onSelect(f.id)}
                    className="eyebrow text-bone/55 underline-offset-8 transition-colors hover:text-bone hover:underline"
                  >
                    Pre-order with {f.name.toLowerCase()}
                  </a>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduced ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <dl className="mt-8 max-w-lg hairline-t">
                        <div className="hairline-b py-4">
                          <dt className="eyebrow text-bone/40">Visual world</dt>
                          <dd className="mt-2 text-sm text-bone/75">{f.world}</dd>
                        </div>
                        <div className="hairline-b py-4">
                          <dt className="eyebrow text-bone/40">Made for</dt>
                          <dd className="mt-2 text-sm text-bone/75">{f.note}</dd>
                        </div>
                        <div className="hairline-b py-4">
                          <dt className="eyebrow text-bone/40">Preparation</dt>
                          <dd className="mt-2 text-sm text-bone/75">
                            Tear the mixer, add cold water, close the dome lid and stir for roughly
                            10–15 seconds.
                          </dd>
                        </div>
                      </dl>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
