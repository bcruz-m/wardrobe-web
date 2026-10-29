import { Media } from "@/components/ui/Media";
import { heroScreens, media } from "@/content/site";

// Staggered phone positions inside the 4:5 frame (no overlap, so no content is hidden).
const positions = [
  "left-[5%] top-[14%]",
  "right-[5%] top-[4%]",
];

/**
 * Up to two app screenshots arranged as overlapping phones. Falls back to the
 * labeled placeholder until a screenshot `src` is set in content/site.ts.
 */
export function HeroVisual() {
  const screens = heroScreens.filter((screen) => screen.src).slice(0, 2);

  if (screens.length === 0) {
    return (
      <Media
        asset={media.hero}
        className="aspect-[4/5] w-full"
        sizes="(min-width: 768px) 40vw, 100vw"
        priority
      />
    );
  }

  return (
    <div className="relative aspect-[4/5] w-full bg-sand">
      {screens.map((screen, index) => (
        <div
          key={screen.src}
          className={`absolute w-[44%] overflow-hidden rounded-[1.25rem] shadow-[0_24px_50px_-24px_rgb(41_37_36/0.45)] ${
            screens.length === 1 ? "top-[8%] left-[28%]" : positions[index]
          }`}
        >
          <Media
            asset={screen}
            className="aspect-[1206/2622] w-full"
            sizes="(min-width: 768px) 18vw, 44vw"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
