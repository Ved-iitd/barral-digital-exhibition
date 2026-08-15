import { motion } from "motion/react";
import { media } from "@/data/barral";
import { useReducedMotion } from "@/lib/use-motion-prefs";

const lines = [
  "THE WORLD DIDN'T NEED",
  "ANOTHER BEVERAGE.",
  "IT NEEDED",
  "A DIFFERENT WAY",
  "TO EXPERIENCE ONE.",
];

export function SceneManifesto() {
  const reduced = useReducedMotion();

  return (
    <section
      id="story"
      aria-labelledby="manifesto-heading"
      className="relative grain flex min-h-[100svh] items-center overflow-hidden bg-ink py-24"
    >
      <img
        src={media.mrBarralShrug}
        alt="Mr. Barral, the masked figurehead of Barral, arms open"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-25 grayscale mask-fade-b md:opacity-40"
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 spotlight ${reduced ? "" : "animate-[pulse_9s_ease-in-out_infinite]"}`}
      />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 md:px-10">
        <p className="eyebrow text-barral">06 — The Manifesto</p>
        <h2 id="manifesto-heading" className="mt-6 display-xl text-bone">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                initial={reduced ? false : { y: "110%" }}
                whileInView={reduced ? {} : { y: "0%" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`block ${i > 1 ? "text-bone/70" : ""}`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h2>
        <p className="mt-10 max-w-[54ch] hairline-t pt-6 text-sm leading-relaxed text-bone/60">
          Barral is our first step towards building an Indian beverage identity capable of
          travelling across formats, flavours and markets.
        </p>
      </div>
    </section>
  );
}
