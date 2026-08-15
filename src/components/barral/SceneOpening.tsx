import { motion } from "motion/react";
import { media } from "@/data/barral";
import { useReducedMotion } from "@/lib/use-motion-prefs";

export function SceneOpening() {
  const reduced = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  const rise = (delay: number) =>
    reduced
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { y: "110%" },
          animate: { y: "0%" },
          transition: { duration: 1.1, delay, ease },
        };

  return (
    <section
      id="top"
      className="relative grain flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink pb-10 pt-28 md:pb-14"
      aria-labelledby="opening-heading"
    >
      <div className="pointer-events-none absolute inset-0 spotlight" aria-hidden />

      <motion.div
        initial={reduced ? false : { opacity: 0, scale: 1.08 }}
        animate={reduced ? {} : { opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, ease }}
        className="pointer-events-none absolute inset-y-0 right-0 flex w-full items-end justify-center md:w-[58%] md:justify-end"
        aria-hidden
      >
        <img
          src={media.mrBarralPanipuri}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="h-[72svh] w-auto max-w-none object-contain object-bottom opacity-90 md:h-[92svh]"
        />
      </motion.div>

      <div className="relative mx-auto w-full max-w-[1600px] px-5 md:px-10">
        <div className="max-w-[19ch] md:max-w-[15ch]">
          <div className="overflow-hidden">
            <motion.p {...rise(0.1)} className="eyebrow text-barral">
              Prepare-to-Drink
            </motion.p>
          </div>

          <h1 id="opening-heading" className="mt-6 display-xl text-bone">
            {["A COLD DRINK", "SHOULD BE MORE", "THAN A COMMODITY."].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span {...rise(0.2 + i * 0.12)} className="block">
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="overflow-hidden">
            <motion.p {...rise(0.62)} className="mt-7 max-w-[38ch] text-sm leading-relaxed text-bone/70 md:text-base">
              Meet Barral—the drink that begins when you make it.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={reduced ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#experience"
            className="eyebrow border border-bone/30 px-7 py-4 text-bone transition-colors hover:border-bone hover:bg-bone hover:text-ink"
          >
            Enter the Experience
          </a>
          <a
            href="#pre-order"
            className="eyebrow border border-barral bg-barral px-7 py-4 text-primary-foreground transition-colors hover:bg-transparent hover:text-barral"
          >
            Pre-Order Barral
          </a>
        </motion.div>

        <div className="mt-14 flex items-end justify-between hairline-t pt-5">
          <p className="eyebrow text-bone/45">Scroll to prepare</p>
          <p className="hidden text-[0.7rem] uppercase tracking-[0.28em] text-bone/40 md:block">
            Cup · Mixer · Cold water · 10–15 seconds
          </p>
        </div>
      </div>
    </section>
  );
}
