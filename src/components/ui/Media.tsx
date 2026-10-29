import Image from "next/image";
import type { MediaAsset } from "@/content/site";

type MediaProps = {
  asset: MediaAsset;
  /** Sizing/aspect classes for the frame, e.g. "aspect-[4/5] w-full". */
  className?: string;
  sizes?: string;
  size?: "sm" | "md";
  priority?: boolean;
};

/**
 * Renders the asset's image, or a clearly labeled placeholder while
 * `asset.src` is null. The frame keeps the same size either way.
 */
export function Media({
  asset,
  className = "",
  sizes = "100vw",
  size = "md",
  priority,
}: MediaProps) {
  if (asset.src) {
    return (
      <div className={`relative overflow-hidden bg-champagne/30 ${className}`}>
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={asset.fit === "contain" ? "object-contain" : "object-cover"}
        />
      </div>
    );
  }

  return <ImagePlaceholder label={asset.label} hint={asset.hint} size={size} className={className} />;
}

type ImagePlaceholderProps = {
  label: string;
  hint?: string;
  size?: "sm" | "md";
  className?: string;
};

export function ImagePlaceholder({
  label,
  hint,
  size = "md",
  className = "",
}: ImagePlaceholderProps) {
  const small = size === "sm";

  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}`}
      className={`relative flex flex-col items-center justify-center gap-1.5 border border-dashed border-taupe bg-champagne/20 px-3 text-center ${className}`}
    >
      <span
        aria-hidden="true"
        className={`absolute border border-line ${small ? "inset-1.5" : "inset-2"}`}
      />
      <span
        className={`font-medium uppercase tracking-[0.25em] text-muted ${small ? "text-[6pt]" : "text-[0.62rem]"}`}
      >
        Placeholder
      </span>
      <span
        className={`font-serif leading-tight text-ink ${small ? "text-[10pt]" : "text-xl"}`}
      >
        {label}
      </span>
      {hint && (
        <span className={`text-muted ${small ? "text-[6pt]" : "text-xs"}`}>
          {hint}
        </span>
      )}
    </div>
  );
}
