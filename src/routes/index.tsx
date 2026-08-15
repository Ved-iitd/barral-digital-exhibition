import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/barral/Nav";
import { Footer } from "@/components/barral/Footer";
import { SmoothScroll } from "@/components/barral/SmoothScroll";
import { CustomCursor } from "@/components/barral/CustomCursor";
import { CartProvider } from "@/components/barral/cart";
import { SceneOpening } from "@/components/barral/SceneOpening";
import { SceneCategory } from "@/components/barral/SceneCategory";
import { ScenePreparation } from "@/components/barral/ScenePreparation";
import { SceneFlavours } from "@/components/barral/SceneFlavours";
import { SceneDesigns } from "@/components/barral/SceneDesigns";
import { SceneManifesto } from "@/components/barral/SceneManifesto";
import { SceneProposition } from "@/components/barral/SceneProposition";
import { ScenePreOrder } from "@/components/barral/ScenePreOrder";
import { SceneFinal } from "@/components/barral/SceneFinal";

const title = "BARRAL — A Prepare-to-Drink Beverage Experience";
const description =
  "Barral is a Prepare-to-Drink beverage: a sealed cup, an instant mixer and cold water. Tear, pour, stir — roughly 10–15 seconds. Pre-order the pack of 6 or 24.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Barral",
          description:
            "Indian Prepare-to-Drink beverage brand. Cup, instant mixer and cold water.",
          url: "PLACEHOLDER — production URL",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Barral Prepare-to-Drink pack",
          brand: { "@type": "Brand", name: "Barral" },
          description:
            "Double-wall paper cup, dome lid, straw and instant mixer sachet. Prepared with cold water in roughly 10–15 seconds.",
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "INR",
            availability: "https://schema.org/PreOrder",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [flavour, setFlavour] = useState("panipuri");

  return (
    <CartProvider>
      <SmoothScroll />
      <CustomCursor />
      <Nav />
      <main>
        <SceneOpening />
        <SceneCategory />
        <ScenePreparation activeFlavourId={flavour} onFlavourChange={setFlavour} />
        <SceneFlavours onSelect={setFlavour} />
        <SceneDesigns />
        <SceneManifesto />
        <SceneProposition />
        <ScenePreOrder />
        <SceneFinal />
      </main>
      <Footer />
    </CartProvider>
  );
}
