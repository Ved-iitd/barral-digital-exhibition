import { Link } from "@tanstack/react-router";
import { brand } from "@/data/barral";

const columns: Array<{ title: string; items: Array<{ label: string; href: string; internal?: boolean }> }> = [
  {
    title: "Explore",
    items: [
      { label: "Product", href: "#experience" },
      { label: "Our Story", href: "#story" },
      { label: "Flavours", href: "#flavours" },
      { label: "Pre-Order", href: "#pre-order" },
    ],
  },
  {
    title: "Policies",
    items: [
      { label: "Privacy Policy", href: "/privacy", internal: true },
      { label: "Terms and Conditions", href: "/terms", internal: true },
      { label: "Shipping Policy", href: "/shipping", internal: true },
      { label: "Refund Policy", href: "/refund", internal: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink hairline-t">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-10">
        <div>
          <p className="font-display text-4xl tracking-[0.14em] text-bone">BARRAL</p>
          <p className="mt-4 max-w-[30ch] text-sm text-bone/50">
            A Prepare-to-Drink beverage experience. Cup, mixer, cold water — 10–15 seconds.
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <p className="eyebrow text-bone/40">{col.title}</p>
            <ul className="mt-4 space-y-3">
              {col.items.map((item) => (
                <li key={item.label}>
                  {item.internal ? (
                    <Link to={item.href} className="text-sm text-bone/70 hover:text-bone">
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} className="text-sm text-bone/70 hover:text-bone">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <p className="eyebrow text-bone/40">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-bone/70">
            <li>{brand.email}</li>
            <li>
              <a href={brand.instagramUrl} className="hover:text-bone">
                Instagram — {brand.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-5 py-6 hairline-t md:px-10">
        <p className="text-xs text-bone/40">FSSAI: {brand.fssai}</p>
        <p className="text-xs text-bone/40">© {new Date().getFullYear()} Barral. All rights reserved.</p>
      </div>
    </footer>
  );
}
