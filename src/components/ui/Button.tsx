import Link from "next/link";

type Variant = "primary" | "outline" | "light";

const base =
  "inline-flex items-center justify-center gap-3 px-7 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.24em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-burgundy text-ivory hover:bg-burgundy-dark focus-visible:outline-burgundy",
  outline:
    "border border-ink/30 text-ink hover:border-burgundy hover:text-burgundy focus-visible:outline-burgundy",
  light:
    "bg-ivory text-burgundy-dark hover:bg-champagne focus-visible:outline-champagne",
};

export function buttonClasses(variant: Variant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`;
}

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={buttonClasses(variant, className)}>
      {children}
    </Link>
  );
}
