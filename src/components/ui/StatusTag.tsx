type StatusTagProps = {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

/** Marks features that are in development, visionary, or pending integration. */
export function StatusTag({ children, tone = "light", className = "" }: StatusTagProps) {
  const styles =
    tone === "dark"
      ? "border-champagne/50 text-champagne"
      : "border-burgundy/40 text-burgundy";
  const dot = tone === "dark" ? "bg-champagne" : "bg-burgundy";

  return (
    <span
      className={`inline-flex items-center gap-2 border px-2.5 py-1 text-[0.62rem] font-medium uppercase leading-none tracking-[0.18em] ${styles} ${className}`}
    >
      <span aria-hidden="true" className={`size-1 rounded-full ${dot}`} />
      {children}
    </span>
  );
}
