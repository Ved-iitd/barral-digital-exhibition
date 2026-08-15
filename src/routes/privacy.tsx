import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/barral/LegalPage";

const title = "Privacy Policy — BARRAL";
const description =
  "How Barral collects, uses and protects personal information from pre-orders and website visits.";

export const Route = createFileRoute("/privacy")({
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
      title="PRIVACY POLICY"
      intro="PLACEHOLDER — replace this policy with legal copy reviewed for your jurisdiction before launch."
      sections={[
        {
          heading: "Information we collect",
          body: [
            "PLACEHOLDER — describe the personal data collected during pre-order: name, delivery address, contact number, email address and payment reference.",
          ],
        },
        {
          heading: "How we use information",
          body: [
            "PLACEHOLDER — describe order fulfilment, delivery updates, customer support and, where consented, marketing communication.",
          ],
        },
        {
          heading: "Sharing and third parties",
          body: [
            "PLACEHOLDER — list logistics partners, payment processors and analytics providers.",
          ],
        },
        {
          heading: "Your rights and contact",
          body: [
            "PLACEHOLDER — describe access, correction and deletion requests, and the contact address for privacy queries.",
          ],
        },
      ]}
    />
  ),
});
