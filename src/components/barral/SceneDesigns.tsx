import { useState } from "react";
import { cupDesigns, type CupDesign } from "@/data/barral";

function CupExhibit({ design, onOpen }: { design: CupDesign; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative w-[68vw] shrink-0 snap-center border border-hairline bg-card p-5 text-left transition-colors hover:border-bone/40 sm:w-[42vw] md:w-[24vw] lg:w-[18vw]"
      aria-label={`Design ${design.number}: ${design.name}`}
    >
      <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden bg-ink">
        {design.image ? (
          <img
            src={design.image}
            alt={`Barral collectible cup design ${design.number}, ${design.name}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain transition-transform duration-700 group-hover:rotate-[3deg] group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 transition-transform duration-700 group-hover:rotate-[3deg]">
            <span
              aria-hidden
              className="block h-28 w-20 border border-hairline"
              style={{ clipPath: "polygon(12% 0, 88% 0, 76% 100%, 24% 100%)" }}
            />
            <span className="eyebrow text-[0.55rem] text-bone/30">Artwork placeholder</span>
          </div>
        )}
      </div>
      <p className="mt-4 font-display text-3xl text-bone/25">
        {String(design.number).padStart(2, "0")}
      </p>
      <p className="mt-1 eyebrow text-bone">{design.name}</p>
      <p className="mt-2 text-xs leading-snug text-bone/50">{design.personality}</p>
    </button>
  );
}

export function SceneDesigns() {
  const [selected, setSelected] = useState<CupDesign | null>(null);

  return (
    <section
      aria-labelledby="designs-heading"
      className="relative grain overflow-hidden bg-ink py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <p className="eyebrow text-barral">05 — The Collection</p>
        <h2 id="designs-heading" className="mt-5 display-lg text-bone">
          24 DESIGNS.
          <br />
          ONE FOR EVERY VERSION OF YOU.
        </h2>
        <p className="mt-6 max-w-[52ch] text-sm leading-relaxed text-bone/65">
          Your pack does not just carry drinks. It carries personalities, moods and stories.
        </p>
      </div>

      <div
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:px-10"
        role="group"
        aria-label="Collectible cup designs — scroll horizontally"
        tabIndex={0}
      >
        {cupDesigns.map((d) => (
          <CupExhibit key={d.number} design={d} onOpen={() => setSelected(d)} />
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-[1600px] px-5 md:px-10">
        <p className="hairline-t pt-5 eyebrow text-bone/45">
          Every pack contains a surprise selection of designs.
        </p>
      </div>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Design ${selected.number}: ${selected.name}`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-5"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-3xl border border-hairline bg-card p-6 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 eyebrow text-bone/60 hover:text-bone"
            >
              Close
            </button>
            <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
              <div className="flex aspect-[3/4] items-center justify-center bg-ink">
                {selected.image ? (
                  <img
                    src={selected.image}
                    alt={`Barral cup design ${selected.number}, ${selected.name}, full view`}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <p className="eyebrow max-w-[16ch] text-center text-[0.6rem] leading-loose text-bone/30">
                    360° artwork placeholder
                  </p>
                )}
              </div>
              <div>
                <p className="font-display text-6xl text-bone/20">
                  {String(selected.number).padStart(2, "0")}
                </p>
                <h3 className="mt-3 display-md text-bone">{selected.name}</h3>
                <p className="mt-4 text-sm text-bone/65">{selected.personality}</p>
                <p className="mt-8 hairline-t pt-4 text-xs text-bone/40">
                  Design {selected.number} of 24. Packs ship with a surprise selection.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
