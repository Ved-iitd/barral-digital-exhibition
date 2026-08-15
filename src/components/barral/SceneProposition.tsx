import { motion } from "motion/react";
import { propositions } from "@/data/barral";
import { useReducedMotion } from "@/lib/use-motion-prefs";

export function SceneProposition() {
  const reduced = useReducedMotion();

  const col = (title: string, points: string[], accent: boolean) => (
    <div className={accent ? "md:pl-10" : "md:pr-10"}>
      <h3 className={`display-md ${accent ? "text-bone" : "text-bone/35"}`}>{title}</h3>
      <ul className="mt-8 hairline-t">
        {points.map((p, i) => (
          <motion.li
            key={p}
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={reduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-baseline gap-4 hairline-b py-4"
          >
            <span
              className={`font-display text-sm ${accent ? "text-barral" : "text-bone/25"}`}
              aria-hidden
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className={`text-sm ${accent ? "text-bone/85" : "text-bone/40"}`}>{p}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );

  return (
    <section
      aria-labelledby="proposition-heading"
      className="relative grain bg-ink py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <p className="eyebrow text-barral">07 — The Proposition</p>
        <h2 id="proposition-heading" className="sr-only">
          The old routine compared with the Barral ritual
        </h2>

        <div className="mt-12 grid gap-14 md:grid-cols-2 md:gap-0 md:divide-x md:divide-[color:var(--hairline)]">
          {col(propositions.old.title, propositions.old.points, false)}
          {col(propositions.barral.title, propositions.barral.points, true)}
        </div>

        <p className="mx-auto mt-20 max-w-[22ch] text-center display-lg text-bone md:max-w-[26ch]">
          WE AREN'T CHANGING WHAT PEOPLE DRINK.
          <span className="block text-barral">WE'RE CHANGING HOW A DRINK BEGINS.</span>
        </p>
      </div>
    </section>
  );
}
