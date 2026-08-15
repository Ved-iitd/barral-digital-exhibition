import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/barral/LegalPage";

const title = "Terms and Conditions — BARRAL";
const description =
  "The terms that govern pre-orders, purchases and use of the Barral website.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LegalPage
      title="TERMS AND CONDITIONS"
      intro="PLACEHOLDER — replace this policy with legal copy reviewed for your jurisdiction before launch."
      sections={[
        {
          heading: "Pre-orders",
          body: [
            "PLACEHOLDER — describe pre-order confirmation, dispatch windows, and what happens if a batch is delayed or oversubscribed.",
          ],
        },
        {
          heading: "Pricing and payment",
          body: [
            "PLACEHOLDER — state pricing in INR, applicable taxes and accepted payment methods.",
          ],
        },
        {
          heading: "Product use",
          body: [
            "PLACEHOLDER — state preparation guidance, allergen disclosure and storage instructions.",
          ],
        },
        {
          heading: "Liability and governing law",
          body: ["PLACEHOLDER — state limitation of liability and the governing jurisdiction."],
        },
      ]}
    />
  ),
});
