import { Bath, ChefHat } from "lucide-react";

import HomeView, { HomeServiceCard } from "@elite/ui/components/HomeView";

import FullLogo from "@/components/FullLogo";

import { createMeta } from "@/utils";

export function meta() {
  return createMeta({
    title: "Elite Interior Renewals | Custom Kitchen & Bathroom Remodeling",
    description:
      "Professional kitchen and bathroom remodeling services in PA and NJ. Licensed, insured, and backed by decades of craftsmanship."
  });
}

const serviceCards: HomeServiceCard[] = [
  {
    icon: ChefHat,
    title: "Kitchens",
    description:
      "Reimagine the heart of your home with custom layouts, cabinetry, and finishes built around how you cook and gather.",
    features: [
      "Custom Cabinetry & Storage",
      "Premium Countertops",
      "Islands & Breakfast Bars",
      "Tile & Hardwood Flooring"
    ],
    href: "/kitchens",
    featured: true,
    blurAccent: "teal"
  },
  {
    icon: Bath,
    title: "Bathrooms",
    description:
      "Turn your bathroom into a spa-like retreat with walk-in showers, soaking tubs, and moisture-smart construction built to last.",
    href: "/bathrooms",
    blurAccent: "olive",
    className: "md:col-span-1 lg:col-span-2"
  }
];

export default function Home() {
  return (
    <HomeView
      bannerText={`Designed for you. Built to last.`}
      customSolutionTitle="Need a custom remodel?"
      eyebrow="KITCHEN & BATHROOM REMODELING"
      headlines={[
        { subject: "kitchens", accent: "stunning." },
        { subject: "bathrooms", accent: "serene." },
        { subject: "spaces", accent: "elite." }
      ]}
      logo={<FullLogo className="h-auto w-full max-w-110 md:max-w-120 lg:max-w-100" />}
      resourcesSubtitle="Guides and expert tips for your remodel"
      serviceCards={serviceCards}
    />
  );
}
