import { motion } from "motion/react";
import { media } from "@/data/barral";
import { useReducedMotion } from "@/lib/use-motion-prefs";

const lines = ["WE DIDN'T ADD", "ANOTHER BOTTLE", "TO THE SHELF."];

const chapters = [
  {
    no: "I",
    title: "THE OBSERVATION",
    body:
      "Every cold drink in India arrives already finished — poured months ago, sealed, waiting. The moment of making it had been taken away from the person drinking it.",
  },
  {
    no: "II",
    title: "THE IDEA",
    body:
      "So we split the drink in two. A cup that travels with you, and a sealed mixer that stays dormant until you decide. Cold water does the rest in seconds.",
  },
  {
    no: "III",
    title: "MR. BARRAL",
    body:
      "Our masked host stands for the small theatre of it — tear, pour, stir. He never tells you what to feel. He just hands you the cup and steps back.",
  },
];

const marks = [
  { k: "Format", v: "Prepare-to-Drink" },
  { k: "Ritual", v: "10–15 seconds" },
  { k: "Origin", v: "Made in India" },
];

export function SceneManifesto() {
  const reduced = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      id="story"
      aria-labelledby="manifesto-heading"
      className="relative grain overflow-hidden bg-ink py-24 md:py-32"
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 spotlight ${reduced ? "" : "animate-[pulse_11s_ease-in-out_infinite]"}`}
      />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 md:px-10">
        <p className="eyebrow text-barral">06 — The Story</p>

        <div className="mt-8 grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <div className="min-w-0">
            <h2
              id="manifesto-heading"
              className="font-display font-medium leading-[0.95] tracking-[-0.02em] text-bone"
              style={{ fontSize: "clamp(2.2rem, 4.6vw, 4rem)" }}
            >
              {lines.map((line, i) => (
                <motion.span
                  key={line}
                  initial={reduced ? false : { opacity: 0, y: 26 }}
                  whileInView={reduced ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease }}
                  className={`block ${i === 2 ? "text-barral" : ""}`}
                >
                  {line}
                </motion.span>
              ))}
            </h2>

            <p className="mt-8 max-w-[52ch] hairline-t pt-6 text-sm leading-relaxed text-bone/65 md:text-base">
              Barral began with a simple refusal: the drink should not be finished before it
              reaches you. What follows is how a cup, a sachet and a few seconds became a
              category of their own.
            </p>

            <ol className="mt-10 hairline-t">
              {chapters.map((c, i) => (
                <motion.li
                  key={c.no}
                  initial={reduced ? false : { opacity: 0, y: 24 }}
                  whileInView={reduced ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease }}
                  className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-5 hairline-b py-7 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-8"
                >
                  <span className="font-display text-3xl leading-none text-bone/25 md:text-5xl">
                    {c.no}
                  </span>
                  <div className="min-w-0">
                    <h3 className="eyebrow text-bone">{c.title}</h3>
                    <p className="mt-3 max-w-[54ch] text-sm leading-relaxed text-bone/60">
                      {c.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>


          <motion.figure
            initial={reduced ? false : { opacity: 0, scale: 1.04 }}
            whileInView={reduced ? {} : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease }}
            className="relative self-start"
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-hairline">
              <img
                src={media.mrBarralShrug}
                alt="Mr. Barral, the masked figurehead of Barral, arms open"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center grayscale"
              />
              <div className="pointer-events-none absolute inset-0 spotlight" aria-hidden />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <span className="eyebrow text-bone/50">Mr. Barral</span>
              <span className="text-[0.7rem] uppercase tracking-[0.28em] text-bone/35">
                Host of the ritual
              </span>
            </figcaption>

            <dl className="mt-8 hairline-t">
              {marks.map((m) => (
                <div key={m.k} className="flex items-baseline justify-between gap-6 hairline-b py-3">
                  <dt className="eyebrow text-bone/50">{m.k}</dt>
                  <dd className="text-xs text-bone/70">{m.v}</dd>
                </div>
              ))}
            </dl>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
