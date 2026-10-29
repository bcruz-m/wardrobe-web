import { Wordmark } from "@/components/ui/Wordmark";
import { brand } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Wordmark className="text-base text-ink" />
        <p className="font-serif text-lg italic text-muted">{brand.tagline}</p>
        <p className="text-xs tracking-wide text-muted">
          © 2026 Wardrobe · A concept in development
        </p>
      </div>
    </footer>
  );
}
