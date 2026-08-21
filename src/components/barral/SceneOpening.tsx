import { motion } from "motion/react";
import { media } from "@/data/barral";
import { useReducedMotion } from "@/lib/use-motion-prefs";

const ease = [0.16, 1, 0.3, 1] as const;

const marks = [
  { k: "Format", v: "Prepare-to-Drink" },
  { k: "Ritual", v: "10–15 seconds" },
  { k: "Origin", v: "Made in India" },
];

export function SceneOpening() {
  const reduced = useReducedMotion();

  const rise = (delay: number) =>
    reduced
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { y: "110%" },
          animate: { y: "0%" },
          transition: { duration: 1, delay, ease },
        };

  const fade = (delay: number) =>
    reduced
      ? { initial: false as const, animate: {} }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease },
        };

  return (
    <section
      id="top"
      className="relative grain min-h-[100svh] overflow-hidden bg-ink"
      aria-labelledby="opening-heading"
    >
      <div className="pointer-events-none absolute inset-0 spotlight" aria-hidden />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col px-5 pb-8 pt-24 md:px-10 md:pb-10 md:pt-28">
        <div className="grid flex-1 items-center gap-10 md:grid-cols-12 md:gap-8">
          {/* Copy */}
          <div className="order-2 md:order-1 md:col-span-6 lg:col-span-5">
            <div className="overflow-hidden">
              <motion.p {...rise(0.05)} className="eyebrow text-barral">
                Prepare-to-Drink
              </motion.p>
            </div>

            <h1
              id="opening-heading"
              className="mt-5 font-display font-medium leading-[0.95] tracking-[-0.02em] text-bone"
              style={{ fontSize: "clamp(2.4rem, 5.2vw, 4.75rem)" }}
            >
              {["A cold drink", "should be more", "than a commodity."].map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span {...rise(0.15 + i * 0.1)} className="block">
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              {...fade(0.5)}
              className="mt-6 max-w-[42ch] text-sm leading-relaxed text-bone/65 md:text-base"
            >
              Meet Barral — a sealed cup, an instant mixer and cold water. The drink
              doesn&apos;t arrive finished. It begins the moment you make it.
            </motion.p>

            <motion.div {...fade(0.62)} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#pre-order"
                className="eyebrow border border-barral bg-barral px-7 py-4 text-primary-foreground transition-colors hover:bg-transparent hover:text-barral"
              >
                Pre-Order Barral
              </a>
              <a
                href="#experience"
                className="eyebrow border border-bone/25 px-7 py-4 text-bone transition-colors hover:border-bone hover:bg-bone hover:text-ink"
              >
                Enter the Experience
              </a>
            </motion.div>

            <motion.dl {...fade(0.74)} className="mt-10 grid max-w-md grid-cols-3 gap-4 hairline-t pt-5">
              {marks.map((m) => (
                <div key={m.k}>
                  <dt className="text-[0.62rem] uppercase tracking-[0.28em] text-bone/40">{m.k}</dt>
                  <dd className="mt-2 text-xs text-bone/80 md:text-sm">{m.v}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Portrait */}
          <div className="order-1 md:order-2 md:col-span-6 lg:col-span-7">
            <motion.figure
              initial={reduced ? false : { opacity: 0, scale: 1.04 }}
              animate={reduced ? {} : { opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, ease }}
              className="relative mx-auto w-full max-w-[640px] overflow-hidden border border-hairline bg-ink"
            >
              <img
                src={media.mrBarralPanipuri}
                alt="Mr. Barral holding a glowing Barral Panipuri cup"
                fetchPriority="high"
                decoding="async"
                className="block h-[42svh] w-full object-cover object-center md:h-[68svh]"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(120% 90% at 50% 20%, transparent 40%, color-mix(in oklab, var(--ink) 70%, transparent) 100%)",
                }}
                aria-hidden
              />
              <figcaption className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 text-[0.62rem] uppercase tracking-[0.28em] text-bone/60">
                <span>Mr. Barral</span>
                <span>No. 01</span>
              </figcaption>
            </motion.figure>
          </div>
        </div>

        <motion.div
          {...fade(0.9)}
          className="mt-8 flex items-end justify-between hairline-t pt-5"
        >
          <p className="eyebrow text-bone/45">Scroll to prepare</p>
          <p className="hidden text-[0.7rem] uppercase tracking-[0.28em] text-bone/40 md:block">
            Cup · Mixer · Cold water · 10–15 seconds
          </p>
        </motion.div>
      </div>
    </section>
  );
}
