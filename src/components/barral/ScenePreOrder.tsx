import { useState } from "react";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { packs, flavours, productInfo, faq, type Pack } from "@/data/barral";
import { useCart } from "@/components/barral/cart";

function PackCard({ pack }: { pack: Pack }) {
  const [qty, setQty] = useState(1);
  const [picked, setPicked] = useState<string[]>([flavours[0]!.id]);
  const { add } = useCart();

  const toggleFlavour = (id: string) =>
    setPicked((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((f) => f !== id) : prev) : [...prev, id],
    );

  const submit = (buyNow: boolean) => {
    add({ packId: pack.id, quantity: qty, flavours: picked });
    toast.success(buyNow ? "Added — checkout opens when pre-orders go live" : "Added to cart", {
      description: `${pack.name} × ${qty} · ${picked.length} flavour${picked.length > 1 ? "s" : ""}`,
    });
  };

  return (
    <article className="border border-hairline bg-card p-6 md:p-8">
      <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-ink">
        <img
          src={pack.image}
          alt={pack.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain"
        />
      </div>

      <h3 className="mt-6 display-md text-bone">{pack.name}</h3>

      <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="font-display text-2xl text-bone">{pack.offerPrice}</span>
        <span className="text-sm text-bone/40 line-through">{pack.price}</span>
      </div>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-bone/45">{pack.inventory}</p>
      <p className="mt-1 text-xs text-bone/45">{pack.delivery}</p>

      <ul className="mt-6 hairline-t">
        {pack.contents.map((c) => (
          <li key={c} className="hairline-b py-3 text-sm text-bone/70">
            {c}
          </li>
        ))}
      </ul>

      <fieldset className="mt-7">
        <legend className="eyebrow text-bone/45">Select flavours</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {flavours.map((f) => {
            const on = picked.includes(f.id);
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => toggleFlavour(f.id)}
                aria-pressed={on}
                className={`eyebrow border px-4 py-2 text-[0.6rem] transition-colors ${
                  on ? "border-bone bg-bone text-ink" : "border-hairline text-bone/60 hover:text-bone"
                }`}
              >
                {f.name}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-7 flex items-center gap-4">
        <span className="eyebrow text-bone/45">Quantity</span>
        <div className="flex items-center border border-hairline">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label={`Decrease ${pack.name} quantity`}
            className="px-4 py-2 text-bone/70 hover:text-bone"
          >
            −
          </button>
          <span className="min-w-10 text-center text-sm text-bone" aria-live="polite">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(20, q + 1))}
            aria-label={`Increase ${pack.name} quantity`}
            className="px-4 py-2 text-bone/70 hover:text-bone"
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => submit(false)}
          className="eyebrow border border-bone/30 px-6 py-4 text-bone transition-colors hover:border-bone hover:bg-bone hover:text-ink"
        >
          Add to Cart
        </button>
        <button
          type="button"
          onClick={() => submit(true)}
          className="eyebrow border border-barral bg-barral px-6 py-4 text-primary-foreground transition-colors hover:bg-transparent hover:text-barral"
        >
          Buy Now
        </button>
      </div>
    </article>
  );
}

export function ScenePreOrder() {
  return (
    <section id="pre-order" aria-labelledby="preorder-heading" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <p className="eyebrow text-barral">08 — Pre-Order</p>
        <h2 id="preorder-heading" className="mt-5 display-lg text-bone">
          CHOOSE YOUR BARRAL EXPERIENCE.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {packs.map((p) => (
            <PackCard key={p.id} pack={p} />
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="eyebrow text-bone/45">Product information</h3>
            <Accordion type="single" collapsible className="mt-4">
              <AccordionItem value="details">
                <AccordionTrigger className="text-left text-sm text-bone">
                  Product details
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm text-bone/65">
                    {productInfo.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ingredients">
                <AccordionTrigger className="text-left text-sm text-bone">
                  Ingredients
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm text-bone/65">
                    {productInfo.ingredients.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="preparation">
                <AccordionTrigger className="text-left text-sm text-bone">
                  Preparation instructions
                </AccordionTrigger>
                <AccordionContent>
                  <ol className="space-y-2 text-sm text-bone/65">
                    {productInfo.preparation.map((d, i) => (
                      <li key={d}>
                        {String(i + 1).padStart(2, "0")} — {d}
                      </li>
                    ))}
                  </ol>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-left text-sm text-bone">
                  Shipping information
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm text-bone/65">
                    {productInfo.shipping.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <h3 className="eyebrow text-bone/45">FAQ</h3>
            <Accordion type="single" collapsible className="mt-4">
              {faq.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left text-sm text-bone">{f.q}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-bone/65">{f.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
