import { Eyebrow } from "@/components/ui/Eyebrow";

type SectionProps = {
  id?: string;
  tone?: "light" | "tinted" | "dark";
  className?: string;
  children: React.ReactNode;
};

const tones = {
  light: "bg-ivory text-ink",
  tinted: "bg-sand text-ink",
  dark: "bg-burgundy-dark text-ivory",
};

export function Section({ id, tone = "light", className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
      className={tones[tone]}
    >
      <div className={`mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28 ${className}`}>
        {children}
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className="font-serif text-4xl leading-[1.05] font-light text-balance sm:text-5xl md:text-6xl"
      >
        {title}
      </h2>
    </div>
  );
}
