import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/one-pager/PrintButton";
import { SheetLabel, SheetRule } from "@/components/one-pager/SheetSection";
import { Media } from "@/components/ui/Media";
import { Wordmark } from "@/components/ui/Wordmark";
import { onePager } from "@/content/one-pager";
import { brand, links, media, prototypeStatus, screenshotAspect, type FeatureStatus } from "@/content/site";

const statusDot: Record<FeatureStatus, string> = {
  "Working Prototype": "bg-burgundy",
  Next: "border border-burgundy",
  "Future Research": "bg-taupe",
};

export const metadata: Metadata = {
  title: "Project One-Pager",
  description: `${brand.presentationTitle} — ${brand.presentationSubtitle}. Vibe Coding Bootcamp final presentation.`,
};

export default function OnePagerPage() {
  const { header, summary, idea, prototype, status, talk, progress, builder } = onePager;

  return (
    <div className="flex-1 bg-sand print:bg-white">
      {/* Screen-only toolbar */}
      <div className="print:hidden">
        <div className="mx-auto flex max-w-[210mm] flex-wrap items-center justify-between gap-4 px-5 py-5 md:px-0">
          <Link
            href="/"
            className="text-[0.7rem] uppercase tracking-[0.24em] text-muted transition-colors hover:text-burgundy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy"
          >
            ← Wardrobe landing page
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden text-xs text-muted sm:inline">A4 · fits one printed page</span>
            <PrintButton />
          </div>
        </div>
      </div>

      <main className="pb-12 md:px-6 print:p-0">
        <article
          aria-labelledby="one-pager-title"
          className="a4-sheet mx-auto flex w-full sheet:justify-between max-w-[210mm] flex-col gap-[3.5mm] bg-ivory px-5 py-8 text-[14px] leading-[1.5] text-ink shadow-[0_20px_60px_-30px_rgb(41_37_36/0.35)] sheet:min-h-[297mm] sheet:px-[13mm] sheet:py-[11mm] sheet:text-[11.5px]"
        >
          {/* Header */}
          <header className="flex items-center justify-between gap-4">
            <p className="text-[0.7em] font-medium uppercase tracking-[0.3em] text-muted">
              {header}
            </p>
            <Wordmark className="text-[0.85em] text-burgundy" />
          </header>
          <SheetRule />

          {/* Title */}
          <section className="avoid-break grid gap-[5mm] sheet:grid-cols-12">
            <div className="flex flex-col gap-[1.5mm] sheet:col-span-7">
              <h1
                id="one-pager-title"
                className="font-serif text-[3.1em] leading-[0.95] font-light tracking-[0.04em]"
              >
                {brand.presentationTitle}
              </h1>
              <p className="font-serif text-[1.45em] leading-tight">{brand.presentationSubtitle}</p>
              <p className="font-serif text-[1.3em] italic text-burgundy">{brand.tagline}</p>
            </div>
            <div className="flex flex-col justify-end gap-[1.5mm] sheet:col-span-5 sheet:border-l sheet:border-line sheet:pl-[5mm]">
              <SheetLabel as="p">Project Summary</SheetLabel>
              <p className="text-muted">{summary}</p>
            </div>
          </section>
          <SheetRule />

          {/* Idea + prototype */}
          <section className="avoid-break grid gap-[5mm] sheet:grid-cols-12">
            <div className="flex flex-col gap-[3.5mm] sheet:col-span-7">
              <div className="flex flex-col gap-[1.5mm]">
                <SheetLabel>{idea.eyebrow}</SheetLabel>
                <p className="font-serif text-[1.6em] leading-tight">{idea.headline}</p>
                {idea.paragraphs.map((text) => (
                  <p key={text} className="text-muted">
                    {text}
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-[1.5mm]">
                <SheetLabel>{prototype.eyebrow}</SheetLabel>
                {prototype.paragraphs.map((text) => (
                  <p key={text} className="text-muted">
                    {text}
                  </p>
                ))}
                <ul aria-label="Technology" className="mt-[1mm] flex flex-wrap gap-[1.5mm]">
                  {prototype.stack.map((item) => (
                    <li
                      key={item}
                      className="border border-champagne px-[2mm] py-[0.6mm] text-[0.72em] uppercase tracking-[0.14em] text-burgundy-dark"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[3mm] sheet:col-span-5">
              {[media.appHome, media.appStyleMyDay].map((screen) => (
                <figure key={screen.label} className="flex flex-col items-center gap-[1.5mm]">
                  <Media
                    asset={screen}
                    size="sm"
                    className={`${screenshotAspect} h-[64mm] overflow-hidden rounded-[2.5mm] border border-line`}
                    sizes="35mm"
                  />
                  <figcaption className="text-[0.68em] font-medium uppercase tracking-[0.2em] text-muted">
                    {screen.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* Prototype status */}
          <section className="avoid-break flex flex-col gap-[2mm] border-y border-line py-[3mm]">
            <SheetLabel>{status.eyebrow}</SheetLabel>
            <dl className="grid gap-[3mm] sheet:grid-cols-[5fr_2fr_2fr] sheet:gap-[6mm]">
              {prototypeStatus.map((group) => (
                <div key={group.status} className="flex flex-col gap-[0.8mm]">
                  <dt className="flex items-center gap-[1.5mm] text-[0.7em] font-semibold uppercase tracking-[0.2em] text-ink">
                    <span aria-hidden="true" className={`size-[1.6mm] rounded-full ${statusDot[group.status]}`} />
                    {group.status}
                  </dt>
                  <dd className="text-muted">{group.items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
            <p className="text-[0.85em] italic text-muted">{status.note}</p>
          </section>

          {/* Talk */}
          <section className="avoid-break flex flex-col gap-[2.5mm]">
            <SheetLabel>{talk.eyebrow}</SheetLabel>
            <ol className="grid gap-[4mm] sheet:grid-cols-3 sheet:gap-[6mm]">
              {talk.items.map((item) => (
                <li key={item.number} className="flex flex-col gap-[1mm]">
                  <span className="font-serif text-[2em] leading-none font-light text-burgundy">
                    {item.number}
                  </span>
                  <h3 className="font-serif text-[1.3em] leading-tight">{item.title}</h3>
                  <p className="text-muted">{item.text}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Built. Learned. Next. */}
          <section className="avoid-break flex flex-col gap-[2.5mm] bg-sand px-[5mm] py-[4mm]">
            <SheetLabel>{progress.eyebrow}</SheetLabel>
            <dl className="grid gap-[4mm] sheet:grid-cols-3 sheet:gap-[6mm]">
              {progress.items.map((item) => (
                <div key={item.title} className="flex flex-col gap-[1mm]">
                  <dt className="font-serif text-[1.4em] italic text-burgundy">{item.title}.</dt>
                  <dd className="text-muted">{item.text}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Builder + links */}
          <section className="avoid-break grid gap-[5mm] border-t border-line pt-[4.5mm] sheet:grid-cols-12">
            <div className="flex items-start gap-[5mm] sheet:col-span-8">
              {/* Portrait 4:5, top aligned with the cap height of the label beside it. */}
              <Media
                asset={media.builderPhoto}
                size="sm"
                className="aspect-[4/5] w-[23mm] shrink-0 mt-[0.8mm]"
                sizes="23mm"
              />
              <div className="flex flex-col gap-[1mm]">
                <SheetLabel>{builder.eyebrow}</SheetLabel>
                <p className="font-serif text-[1.6em] leading-tight">{builder.name}</p>
                <p className="text-[0.9em] font-medium text-ink">
                  {builder.qualification}
                  <span aria-hidden="true" className="px-[1.5mm] text-taupe">·</span>
                  {builder.background}
                </p>
                <p className="text-muted">{builder.bio}</p>
              </div>
            </div>
            <div className="flex flex-col gap-[1.5mm] sheet:col-span-4 sheet:border-l sheet:border-line sheet:pl-[5mm]">
              <SheetLabel>Links</SheetLabel>
              <ul className="flex flex-col gap-[1.5mm]">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col"
                      >
                        <span className="text-[0.7em] font-medium uppercase tracking-[0.2em] text-burgundy">
                          {link.label} <span aria-hidden="true">↗</span>
                        </span>
                        <span className="break-all text-muted underline-offset-2 group-hover:underline">
                          {link.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                        </span>
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ) : (
                      <div className="flex flex-col">
                        <span className="text-[0.7em] font-medium uppercase tracking-[0.2em] text-ink">
                          {link.label}
                        </span>
                        <span className={link.note ? "text-ink" : "italic text-muted"}>
                          {link.note ?? "[Placeholder — link to be added]"}
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
