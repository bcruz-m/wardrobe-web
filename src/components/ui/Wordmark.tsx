import { brand } from "@/content/site";

type WordmarkProps = {
  className?: string;
};

export function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <span
      className={`font-serif font-medium uppercase tracking-[0.32em] ${className}`}
    >
      {brand.name}
    </span>
  );
}
