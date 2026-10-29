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
  // App screenshots: display copies with the Expo Go developer button painted
  // out. Untouched originals are kept locally in assets/originals (git-ignored).
  home: {
    src: "/images/display/home.png",
    alt: "Wardrobe home screen with a wardrobe summary, the AI Stylist “Style my day” card and recently added pieces",
    label: "Home",
    fit: "contain",
  },
  aiStylist: {
    src: "/images/display/ai-stylist.png",
    alt: "AI Stylist “Style my day” screen showing a complete look of a denim shirt, wide-leg jeans, loafers and a metallic shoulder bag",
    label: "AI Stylist",
    fit: "contain",
  },
  digitalWardrobe: {
    src: "/images/display/wardrobe.png",
    alt: "My Wardrobe screen: a grid of background-removed clothing items, filterable by category and labeled with type and color",
    label: "Digital Wardrobe",
    fit: "contain",
  },
  aiAnalysis: {
    src: "/images/display/item-details.png",
    alt: "Item details for a pair of loafers with AI-detected category, type and colors, and a “Build around this” button",
    label: "AI Clothing Analysis",
    fit: "contain",
  },
  buildOutfit: {
    src: "/images/display/build-outfit.png",
    alt: "“Built around this piece” screen: an AI-composed look around brown loafers with a burgundy blazer, t-shirt, jeans and a shoulder bag",
    label: "Build Around This",
    fit: "contain",
  },
  builderPhoto: {
    src: "/images/profile-photo.jpg",
    alt: "Portrait of Bruna Cruz",
    label: "Profile photo",
  },
} satisfies Record<string, MediaAsset>;

/** Landing hero screenshots (front, back). */
export const heroScreens: MediaAsset[] = [media.home, media.aiStylist];

export type FeatureStatus = "Working" | "In Development" | "Future";

/** Current state of the prototype — shared by the landing page and one-pager. */
export const prototypeStatus: { status: FeatureStatus; items: string[] }[] = [
  {
    status: "Working",
    items: [
      "Digital Wardrobe",
      "AI Clothing Recognition",
      "Background Removal",
      "AI Outfit Recommendations",
    ],
  },
  {
    status: "In Development",
    items: ["Outfit Saving", "Image Cropping", "UX Refinements"],
  },
  {
    status: "Future",
    items: ["Virtual Try-On", "Style Inspiration", "Smart Shopping"],
  },
];

export const links: ExternalLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dr-bruna-da-cruz/" },
  { label: "GitHub Repository", href: "https://github.com/bcruz-m/wardrobe-web" },
  { label: "Live Demo", href: null, note: "November 2" },
];
