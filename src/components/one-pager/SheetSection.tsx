type SheetLabelProps = {
  children: React.ReactNode;
  as?: "h2" | "h3" | "p";
  className?: string;
};

/** Compact section label sized for the printed A4 one-pager. */
export function SheetLabel({ children, as: Tag = "h2", className = "" }: SheetLabelProps) {
  return (
    <Tag
      className={`flex items-center gap-2 text-[0.68em] font-semibold uppercase tracking-[0.28em] text-burgundy ${className}`}
    >
      <span aria-hidden="true" className="h-px w-5 bg-burgundy/50" />
      {children}
    </Tag>
  );
}

export function SheetRule({ className = "" }: { className?: string }) {
  return <hr className={`border-0 border-t border-line ${className}`} />;
}
