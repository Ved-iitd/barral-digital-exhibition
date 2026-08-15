import { motion } from "motion/react";
import { brand, media } from "@/data/barral";
import { useReducedMotion } from "@/lib/use-motion-prefs";

export function SceneFinal() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="final-heading"
      className="relative grain flex min-h-[100svh] items-center overflow-hidden bg-ink py-24"
    >
      <img
        src={media.mrBarralFull}
        alt="Mr. Barral holding a Barral mixer sachet and a prepared Barral cup"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-contain object-bottom opacity-30 invert md:w-1/2 md:opacity-60"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 spotlight" />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 md:px-10">
        <motion.h2
          id="final-heading"
          initial={reduced ? false : { opacity: 0, y: 30 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[16ch] display-xl text-bone"
        >
          DON'T JUST OPEN A DRINK.
          <span className="block text-barral">START SOMETHING.</span>
        </motion.h2>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#pre-order"
            className="eyebrow border border-barral bg-barral px-7 py-4 text-primary-foreground transition-colors hover:bg-transparent hover:text-barral"
          >
            Pre-Order Barral
          </a>
          <a
            href="#story"
            className="eyebrow border border-bone/30 px-7 py-4 text-bone transition-colors hover:border-bone hover:bg-bone hover:text-ink"
          >
            Meet Mr. Barral
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 hairline-t pt-6">
          <p className="max-w-[36ch] text-sm text-bone/60">
            Follow the beginning of a new drinking behaviour.
          </p>
          <a
            href={brand.instagramUrl}
            className="eyebrow text-bone/70 underline-offset-8 hover:text-bone hover:underline"
          >
            Instagram — {brand.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}
