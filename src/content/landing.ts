import { media, type FeatureStatus } from "@/content/site";

export const nav = [
  { label: "The Idea", href: "#problem" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Vision", href: "#vision" },
];

export const hero = {
  eyebrow: "Wardrobe",
  headline: "Beyond the Closet",
  tagline: "Wear more of what you own.",
  description:
    "An AI-powered personal wardrobe designed to help you rediscover your clothes, explore new outfit possibilities, and make getting dressed more intentional.",
  cta: "Explore Wardrobe",
};

export const problem = {
  eyebrow: "The Problem",
  headline: "Plenty of clothes. Nothing to wear.",
  question: "What should I wear?",
  paragraphs: [
    "A wardrobe full of possibilities, yet the same question every morning: What should I wear?",
    "We forget about pieces we already own, struggle to create new combinations, and sometimes buy more when we could simply wear what we have differently.",
  ],
};

export const solution = {
  eyebrow: "The Solution",
  headline: "A smarter way to experience your wardrobe.",
  paragraphs: [
    "Wardrobe brings your clothing into one beautifully organized digital space, combining intuitive design with artificial intelligence.",
    "More than a digital closet, it's the foundation for a personalized styling experience.",
  ],
};

export const howItWorks = {
  headline: "How It Works",
  statusTitle: "Where the prototype stands today",
  steps: [
    {
      number: "01",
      title: "Digitize Your Closet",
      screenshot: media.aiAnalysis,
      text: "Add clothing and accessories using your camera or photo library. AI helps identify clothing attributes and removes the background, reducing manual input.",
    },
    {
      number: "02",
      title: "Rediscover What You Own",
      screenshot: media.digitalWardrobe,
      text: "Explore your wardrobe through a clean, intuitive interface. Find your pieces, review their details, and keep your collection organized.",
    },
    {
      number: "03",
      title: "Discover New Combinations",
      screenshot: media.buildOutfit,
      status: "AI Styling — Working Prototype",
      text: "AI composes complete looks from pieces you already own — for the day, or built around a single piece. Saving your favorite outfits is in development.",
    },
  ],
};

// Descriptions are forward-looking draft copy — review before publishing.
export const vision = {
  eyebrow: "The Vision",
  headline: "Beyond organization. Toward personal style.",
  intro:
    "Where Wardrobe is heading. None of the features below are available yet.",
  features: [
    {
      title: "Virtual Try-On",
      status: "Future",
      text: "A way to preview a combination before you put it on.",
    },
    {
      title: "Style Inspiration",
      status: "Future",
      text: "Inspiration that starts from your own closet.",
    },
    {
      title: "Smart Shopping",
      status: "Future",
      text: "Knowing what you have before deciding what to add.",
    },
    {
      title: "Travel & Capsule Wardrobes",
      status: "Future",
      text: "Versatile, edited collections for a trip or a season.",
    },
  ] satisfies { title: string; status: FeatureStatus; text: string }[],
};

export const comingSoon = {
  eyebrow: "The Next Chapter",
  headline: "Your wardrobe has more potential than you think.",
  text: "Wardrobe is evolving into a more personal way to organize, rediscover, and style the clothes you already own.",
  closing: "Coming soon.",
};
