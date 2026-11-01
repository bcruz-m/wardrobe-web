import { media, type FeatureStatus } from "@/content/site";

export const nav = [
  { label: "The Idea", href: "#problem" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Demo", href: "#demo" },
  { label: "Vision", href: "#vision" },
];

export const hero = {
  eyebrow: "Wardrobe · Where Fashion Meets AI",
  headline: "Beyond the Closet",
  tagline: "Wear more of what you own.",
  description:
    "An AI-powered personal wardrobe — now a working mobile prototype — designed to help you rediscover your clothes, explore new outfit possibilities, and make getting dressed more intentional.",
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
      title: "Digitize",
      screenshot: media.appWardrobe,
      text: "Photograph a piece or choose one from your library. AI suggests its category, colours and details — every field stays editable. Background cleanup runs separately and keeps the original photo alongside the cleaned cut-out.",
    },
    {
      number: "02",
      title: "Style My Day",
      screenshot: media.appStyleMyDay,
      status: "AI Stylist — Development Build",
      text: "Choose an occasion, a mood and a styling direction — and, if you like, let today's weather shape the look. AI composes complete outfits from pieces you already own. Build Around This starts from a single item.",
    },
    {
      number: "03",
      title: "Rediscover",
      screenshot: media.appMyOutfits,
      text: "Save a look you love and find it again in My Outfits, alongside a catalogue of everything you own.",
    },
  ],
};

export const demo = {
  eyebrow: "The Demo",
  headline: "The working prototype, in motion.",
  text: "From adding a piece to saving a look: a short walkthrough of Wardrobe on iPhone.",
};

export const vision = {
  eyebrow: "The Vision",
  headline: "Beyond organization. Toward personal style.",
  intro:
    "Wardrobe is growing toward styling that feels intuitive and personal — an AI companion that understands your clothes, your day and your taste, and helps you wear more of what you own.",
  today: {
    status: "Working Prototype",
    text: "Already in the prototype: digitizing your closet, Style My Day, Build Around This and My Outfits.",
  },
  futureLabel: "Future research — not yet available",
  features: [
    {
      title: "Virtual Try-On",
      status: "Future Research",
      text: "Research into previewing a combination before you put it on.",
    },
    {
      title: "Style Inspiration",
      status: "Future Research",
      text: "Inspiration that starts from your own closet.",
    },
    {
      title: "Smart Shopping",
      status: "Future Research",
      text: "Knowing what you have before deciding what to add.",
    },
  ] satisfies { title: string; status: FeatureStatus; text: string }[],
};

export const comingSoon = {
  eyebrow: "The Next Chapter",
  headline: "Your wardrobe has more potential than you think.",
  text: "Wardrobe is evolving into a more personal way to organize, rediscover, and style the clothes you already own.",
  closing: "Coming soon.",
};
