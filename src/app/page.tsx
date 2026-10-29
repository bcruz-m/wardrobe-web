import { HeroVisual } from "@/components/landing/HeroVisual";
import { Section, SectionHeading } from "@/components/landing/Section";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Media } from "@/components/ui/Media";
import { StatusTag } from "@/components/ui/StatusTag";
import { Wordmark } from "@/components/ui/Wordmark";
import {
  comingSoon,
  hero,
  howItWorks,
  problem,
  solution,
  vision,
} from "@/content/landing";
import { prototypeStatus } from "@/content/site";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section aria-labelledby="hero-title" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pt-16 pb-20 sm:px-8 md:grid-cols-12 md:pt-24 md:pb-28">
            <div className="flex flex-col gap-8 md:col-span-7">
              <Eyebrow>{hero.eyebrow}</Eyebrow>
              <h1
                id="hero-title"
                className="font-serif text-6xl leading-[0.95] font-light tracking-tight text-ink sm:text-7xl lg:text-8xl"
              >
                {hero.headline}
              </h1>
              <p className="font-serif text-2xl italic text-burgundy sm:text-3xl">
                {hero.tagline}
              </p>
              <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                {hero.description}
              </p>
              <div>
                <ButtonLink href="#how-it-works">
                  {hero.cta}
                  <span aria-hidden="true">→</span>
                </ButtonLink>
              </div>
            </div>
            <div className="md:col-span-5">
              <HeroVisual />
            </div>
          </div>
        </section>

        {/* Problem */}
        <Section id="problem" className="border-t border-line">
          <div className="grid gap-12 md:grid-cols-12">
            <SectionHeading
              id="problem-title"
              eyebrow={problem.eyebrow}
              title={problem.headline}
              className="md:col-span-6"
            />
            <div className="flex flex-col gap-6 md:col-span-5 md:col-start-8 md:pt-12">
              {problem.paragraphs.map((text) => (
                <p key={text} className="text-lg leading-relaxed text-muted">
                  {text}
                </p>
              ))}
            </div>
          </div>
          <p
            aria-hidden="true"
            className="mt-20 border-t border-line pt-10 text-center font-serif text-4xl italic text-taupe sm:text-6xl"
          >
            “{problem.question}”
          </p>
        </Section>

        {/* Solution */}
        <Section id="solution" tone="tinted">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <Eyebrow>{solution.eyebrow}</Eyebrow>
            <h2
              id="solution-title"
              className="font-serif text-4xl leading-[1.05] font-light text-balance sm:text-5xl md:text-6xl"
            >
              {solution.headline}
            </h2>
            {solution.paragraphs.map((text) => (
              <p key={text} className="text-lg leading-relaxed text-muted">
                {text}
              </p>
            ))}
          </div>
        </Section>

        {/* How it works */}
        <Section id="how-it-works">
          <SectionHeading id="how-it-works-title" title={howItWorks.headline} />
          {/* On desktop each step spans four shared subgrid rows (screenshot,
              number, heading, text) so all three columns line up. */}
          <ol className="mt-14 grid border-t border-line md:grid-cols-3 md:grid-rows-[auto_auto_auto_1fr]">
            {howItWorks.steps.map((step) => (
              <li
                key={step.number}
                className="group flex flex-col gap-5 border-b border-line py-10 md:row-span-4 md:grid md:grid-rows-subgrid md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
              >
                <div className="flex h-[26rem] items-center justify-center bg-sand lg:h-[28rem]">
                  <Media
                    asset={step.screenshot}
                    className="aspect-[1206/2622] h-[86%] overflow-hidden rounded-[1rem] shadow-[0_18px_40px_-22px_rgb(41_37_36/0.45)]"
                    sizes="(min-width: 768px) 200px, 190px"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-serif text-5xl leading-none font-light text-burgundy transition-transform duration-500 group-hover:-translate-y-1">
                    {step.number}
                  </span>
                  {step.status && <StatusTag>{step.status}</StatusTag>}
                </div>
                <h3 className="font-serif text-2xl text-ink sm:text-3xl">{step.title}</h3>
                <p className="leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-16 flex flex-col gap-8">
            <h3 className="font-serif text-2xl text-ink sm:text-3xl">
              {howItWorks.statusTitle}
            </h3>
            <dl className="grid gap-8 sm:grid-cols-3">
              {prototypeStatus.map((group) => (
                <div key={group.status} className="flex flex-col gap-4 border-t border-line pt-5">
                  <dt>
                    <StatusTag>{group.status}</StatusTag>
                  </dt>
                  <dd>
                    <ul className="flex flex-col gap-2 text-muted">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* Vision */}
        <Section id="vision" tone="dark">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="flex flex-col gap-6 md:col-span-5">
              <SectionHeading
                id="vision-title"
                eyebrow={vision.eyebrow}
                title={vision.headline}
                tone="dark"
              />
              <p className="leading-relaxed text-champagne">{vision.intro}</p>
            </div>
            <ul className="md:col-span-6 md:col-start-7">
              {vision.features.map((feature) => (
                <li
                  key={feature.title}
                  className="flex flex-col gap-3 border-b border-ivory/15 py-6 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="font-serif text-2xl text-ivory sm:text-3xl">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-champagne">{feature.text}</p>
                  </div>
                  <StatusTag tone="dark" className="shrink-0 self-start sm:self-auto">
                    {feature.status}
                  </StatusTag>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Coming soon */}
        <Section id="coming-soon" tone="tinted">
          <div className="relative bg-ivory px-6 py-20 text-center sm:px-12 md:py-28">
            <span aria-hidden="true" className="pointer-events-none absolute inset-3 border border-champagne sm:inset-4" />
            <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8">
              <Eyebrow>{comingSoon.eyebrow}</Eyebrow>
              <h2
                id="coming-soon-title"
                className="font-serif text-4xl leading-[1.05] font-light text-balance sm:text-5xl md:text-6xl"
              >
                {comingSoon.headline}
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-muted">{comingSoon.text}</p>
              <div className="flex items-center gap-5 pt-2">
                <span aria-hidden="true" className="h-px w-12 bg-burgundy/40 sm:w-20" />
                <p className="font-serif text-3xl italic text-burgundy sm:text-4xl">
                  {comingSoon.closing}
                </p>
                <span aria-hidden="true" className="h-px w-12 bg-burgundy/40 sm:w-20" />
              </div>
              <Wordmark className="pt-4 text-sm text-muted" />
            </div>
          </div>
        </Section>
      </main>

      <SiteFooter />
    </>
  );
}
