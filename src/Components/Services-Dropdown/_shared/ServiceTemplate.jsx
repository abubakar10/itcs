// This is a template file showing the structure for service pages
// Each service page should have: Hero, Features, and CTA components
export const servicePageStructure = {
  hero: {
    badge: "SERVICE CATEGORY",
    title: "Main Title",
    gradientText: "Highlighted Text",
    description: "Service description...",
    primaryCTA: "Primary Action",
    secondaryCTA: "Secondary Action",
    badges: ["Badge 1", "Badge 2", "Badge 3"]
  },
  features: {
    badge: "SECTION LABEL",
    title: "Features Title",
    description: "Features description...",
    items: [
      { icon: "🎯", title: "Feature 1", description: "Description..." },
      // Add more features
    ]
  },
  cta: {
    title: "CTA Title",
    gradientText: "Highlighted",
    description: "CTA description...",
    primaryCTA: "Primary Action",
    secondaryCTA: "Secondary Action",
    stats: [
      { number: "100+", label: "Stat Label" },
      // Add more stats
    ]
  }
};

