import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/barral/LegalPage";

const title = "Refund Policy — BARRAL";
const description =
  "Cancellation, replacement and refund terms for Barral pre-orders and deliveries.";

export const Route = createFileRoute("/refund")({
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
      title="REFUND POLICY"
      intro="PLACEHOLDER — replace this policy with your confirmed refund terms before launch."
      sections={[
        {
          heading: "Cancellations",
          body: ["PLACEHOLDER — state the window in which a pre-order can be cancelled."],
        },
        {
          heading: "Damaged or incorrect items",
          body: [
            "PLACEHOLDER — describe the reporting window, required photographs and replacement process.",
          ],
        },
        {
          heading: "Refund processing",
          body: ["PLACEHOLDER — state refund method and processing time."],
        },
        {
          heading: "Non-returnable items",
          body: ["PLACEHOLDER — state that opened food products cannot be returned."],
        },
      ]}
    />
  ),
});
