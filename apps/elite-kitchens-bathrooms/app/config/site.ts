import {
  Bath,
  BookOpenText,
  ChefHat,
  Home,
  Images,
  Library,
  Mail,
  Map,
  Sparkles
} from "lucide-react";

import { SiteConfig } from "@elite/ui/types";

export const siteConfig: SiteConfig = {
  brandName: "Elite Kitchens & Bathrooms",
  baseUrl: "https://elitekitchensbathrooms.com",
  defaultOgImage: "/elite-kitchens-bathrooms-logo.png",
  phone: "(800) 902-5311",
  phoneHref: "18009025311",
  imageKitFolder: "elite-kitchens-bathrooms",
  navLinks: [
    { name: "Services", href: "services" },
    { name: "Projects", href: "projects" },
    { name: "About", href: "about" }
  ],
  trustItems: ["Licensed & Insured", "Free Estimates", "Satisfaction Guaranteed"],
  commandPalettePages: [
    { name: "Home", href: "/", icon: Home, keywords: ["start", "main", "landing"] },
    { name: "About", href: "/about", icon: BookOpenText, keywords: ["about", "who we are"] },
    {
      name: "Kitchens",
      href: "/kitchens",
      icon: ChefHat,
      keywords: ["kitchen", "cabinets", "countertops", "island", "remodel", "renovation"]
    },
    {
      name: "Bathrooms",
      href: "/bathrooms",
      icon: Bath,
      keywords: ["bathroom", "shower", "tub", "vanity", "tile", "remodel", "renovation"]
    },
    {
      name: "Services",
      href: "/services",
      icon: Sparkles,
      keywords: ["services", "remodeling", "design", "what we do"]
    },
    {
      name: "Projects",
      href: "/projects",
      icon: Images,
      keywords: ["gallery", "photos", "pictures", "portfolio", "work", "examples"]
    },
    {
      name: "Service Areas",
      href: "/service-areas",
      icon: Map,
      keywords: ["maps", "locations", "regions", "coverage", "where we go", "where we work"]
    },
    {
      name: "Resources",
      href: "/resources",
      icon: Library,
      keywords: ["knowledge", "faq", "learn", "guide", "tips", "help"]
    },
    {
      name: "Contact",
      href: "/contact",
      icon: Mail,
      keywords: ["quote", "estimate", "call", "email"]
    }
  ]
};
