import Link from "next/link";
import { Wordmark } from "@/components/ui/Wordmark";
import { nav } from "@/content/landing";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ivory/90 backdrop-blur-md print:hidden">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy"
          aria-label="Wardrobe — home"
        >
          <Wordmark className="text-lg" />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[0.7rem] uppercase tracking-[0.24em] text-muted transition-colors hover:text-burgundy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
