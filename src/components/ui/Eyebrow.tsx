type EyebrowProps = {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

/** Small uppercase label that introduces a section, preceded by a thin rule. */
export function Eyebrow({ children, tone = "light", className = "" }: EyebrowProps) {
  const color = tone === "dark" ? "text-champagne" : "text-burgundy";
  const rule = tone === "dark" ? "bg-champagne/60" : "bg-burgundy/50";

  return (
    <p
      className={`flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.3em] ${color} ${className}`}
    >
      <span aria-hidden="true" className={`h-px w-8 ${rule}`} />
      {children}
    </p>
  );
}
