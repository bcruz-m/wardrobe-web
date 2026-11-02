/**
 * Shared brand copy, media slots and external links.
 *
 * To replace a placeholder image: add the file to /public/images and set `src`
 * (e.g. "/images/digital-wardrobe.png"). While `src` is null, a labeled
 * placeholder is rendered instead.
 *
 * To replace a placeholder link: set `href` to the real URL. While `href` is
 * null, the link is rendered as "Link to be added".
 */

export type MediaAsset = {
  src: string | null;
  alt: string;
  label: string;
  hint?: string;
  /** "contain" shows the whole image (use for phone screenshots). */
  fit?: "cover" | "contain";
};

export type ExternalLink = {
  label: string;
  href: string | null;
  /** Shown (not clickable) instead of the placeholder when there is no href. */
  note?: string;
};

export const brand = {
  name: "Wardrobe",
  headline: "Beyond the Closet",
  presentationTitle: "BEYOND THE CLOSET",
  presentationSubtitle: "Building Wardrobe — Where Fashion Meets AI",
  tagline: "Wear more of what you own.",
  description:
    "An AI-powered personal wardrobe designed to help you rediscover your clothes, explore new outfit possibilities, and make getting dressed more intentional.",
};

export const media = {
  /** Landing hero: shown until at least one of `heroScreens` has a src. */
  hero: {
    src: null,
    alt: "Wardrobe app screenshots",
    label: "Hero visual",
    hint: "Two app screenshots",
  },
  // Genuine iPhone screenshots of the working prototype, with only the Expo Go
  // developer button painted out and the iOS status bar cropped
  // (assets/remove-dev-button.swift). Originals: assets/originals/app (git-ignored).
  appHome: {
    src: "/images/app/Home.png",
    alt: "Wardrobe home screen with a weather card and styling tip, the AI Stylist “Style my day” card and recently added pieces",
    label: "Home",
    fit: "contain",
  },
  appWardrobe: {
    src: "/images/app/my-wardrobe.png",
    alt: "My Wardrobe catalogue: background-cleaned clothing items with category filters, each labeled with type and colour",
    label: "My Wardrobe",
    fit: "contain",
  },
  appStyleMyDay: {
    src: "/images/app/style-my-day.png",
    alt: "Style My Day preferences: occasion, optional mood, styling direction and a switch to consider today's weather",
    label: "Style My Day",
    fit: "contain",
  },
  appOutfitDetail: {
    src: "/images/app/look-salvo.png",
    alt: "An AI-composed look, “Chic Autumnal Brunch”, with its styling rationale and the “Saved to My Outfits” confirmation",
    label: "Saved Look",
    fit: "contain",
  },
  appMyOutfits: {
    src: "/images/app/my-outfits.png",
    alt: "My Outfits: a gallery of saved looks in the Wardrobe tab",
    label: "My Outfits",
    fit: "contain",
  },
  builderPhoto: {
    src: "/images/profile-photo.jpg",
    alt: "Portrait of Bruna Cruz",
    label: "Profile photo",
  },
} satisfies Record<string, MediaAsset>;

/** Aspect ratio of the app screenshots (1206 × 2436 px after cropping the status bar). */
export const screenshotAspect = "aspect-[1206/2436]";

/** Landing hero screenshots (front, back). */
export const heroScreens: MediaAsset[] = [media.appHome, media.appOutfitDetail];

export type FeatureStatus = "Working Prototype" | "Next" | "Future Research";

/**
 * Current state of the prototype — shared by the landing page and one-pager.
 * Checked against the wardrobe-app source on its integration/2026-q4 branch.
 */
export const prototypeStatus: { status: FeatureStatus; items: string[] }[] = [
  {
    status: "Working Prototype",
    items: [
      "AI Clothing Recognition",
      "Editable Attributes",
      "Background Cleanup",
      "Style My Day",
      "Optional Weather",
      "Build Around This",
      "Save Look & My Outfits",
      "English, German & Portuguese Interface",
    ],
  },
  {
    status: "Next",
    items: ["Replace, Retake & Crop Photos", "Cleanup Retry"],
  },
  {
    status: "Future Research",
    items: ["Virtual Try-On", "Style Inspiration", "Smart Shopping"],
  },
];

export const prototypeNote =
  "A working mobile prototype, not a publicly released app. AI Stylist features currently run in a development build; AI-generated text has not yet been validated in every language.";

/** Public production URL (Vercel). Used for absolute links, e.g. in the printed one-pager. */
export const siteUrl = "https://wardrobe-by-b.vercel.app";

/**
 * Demo video, served from this site (public/video) so its URL stays stable.
 * Byte-identical copy of "Wardrobe-demo-FINAL-with-weather.mp4" (1:36); the
 * poster is an unedited frame of the same opening title card.
 */
export const demoVideo = {
  label: "Watch the Demo",
  src: "/video/wardrobe-demo.mp4",
  poster: "/video/wardrobe-demo-poster.jpg",
  sectionId: "demo",
  caption: "1:36 · Edited iPhone screen recording of the working prototype · wait times shortened · no sound",
};

export const links: ExternalLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dr-bruna-da-cruz/" },
  { label: "GitHub Repository", href: "https://github.com/bcruz-m/wardrobe-web" },
  { label: demoVideo.label, href: `${siteUrl}/#${demoVideo.sectionId}` },
];
