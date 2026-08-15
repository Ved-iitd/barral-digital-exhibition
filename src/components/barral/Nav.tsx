import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "The Experience", href: "#experience" },
  { label: "Flavours", href: "#flavours" },
  { label: "Our Story", href: "#story" },
  { label: "Pre-Order", href: "#pre-order" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-ink/92 backdrop-blur-[2px] hairline-b" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-10">
        <a
          href="#top"
          className="min-w-0 font-display text-2xl tracking-[0.16em] text-bone md:text-3xl"
          aria-label="Barral — home"
        >
          BARRAL
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="eyebrow text-bone/70 transition-colors hover:text-bone"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pre-order"
            className="eyebrow border border-barral bg-barral px-5 py-3 text-primary-foreground transition-colors hover:bg-transparent hover:text-barral"
          >
            Pre-Order
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href="#pre-order"
            className="eyebrow border border-barral bg-barral px-3 py-2 text-[0.6rem] text-primary-foreground"
          >
            Pre-Order
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-[5px] border border-hairline"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className={`h-px w-4 bg-bone transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-bone transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={`overflow-hidden bg-ink/97 md:hidden ${open ? "max-h-80 hairline-t" : "max-h-0"} transition-[max-height] duration-400`}
      >
        <ul className="px-5 py-2">
          {links.map((l) => (
            <li key={l.href} className="hairline-b last:border-0">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-display text-2xl text-bone"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Link to="/" className="sr-only">
        Barral home
      </Link>
    </header>
  );
}
