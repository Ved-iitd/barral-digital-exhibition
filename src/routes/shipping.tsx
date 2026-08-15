import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/barral/LegalPage";

const title = "Shipping Policy — BARRAL";
const description =
  "Dispatch timelines, delivery coverage and shipping charges for Barral pre-orders.";

export const Route = createFileRoute("/shipping")({
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
      title="SHIPPING POLICY"
      intro="PLACEHOLDER — replace this policy with your confirmed logistics terms before launch."
      sections={[
        {
          heading: "Dispatch timeline",
          body: ["PLACEHOLDER — state when pre-order batches are dispatched after payment."],
        },
        {
          heading: "Coverage",
          body: ["PLACEHOLDER — list serviceable pin codes or states for the first batch."],
        },
        {
          heading: "Charges",
          body: ["PLACEHOLDER — state shipping charges and free-shipping thresholds."],
        },
        {
          heading: "Tracking",
          body: ["PLACEHOLDER — describe how tracking details are shared after dispatch."],
        },
      ]}
    />
  ),
});
