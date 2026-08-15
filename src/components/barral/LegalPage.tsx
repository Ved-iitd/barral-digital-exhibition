import { Link } from "@tanstack/react-router";
import { Footer } from "@/components/barral/Footer";

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: Array<{ heading: string; body: string[] }>;
}) {
  return (
    <>
      <main className="bg-ink">
        <div className="mx-auto max-w-3xl px-5 py-24 md:px-10 md:py-32">
          <Link to="/" className="eyebrow text-bone/50 hover:text-bone">
            ← Back to Barral
          </Link>
          <h1 className="mt-8 display-lg text-bone">{title}</h1>
          <p className="mt-6 text-sm leading-relaxed text-bone/60">{intro}</p>

          <div className="mt-12 hairline-t">
            {sections.map((s) => (
              <section key={s.heading} className="hairline-b py-8">
                <h2 className="eyebrow text-barral">{s.heading}</h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-4 text-sm leading-relaxed text-bone/65">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
