import type { Route } from "./+types/projects";

import { Bath, ChefHat } from "lucide-react";

import ProjectsView, { CategoryData, CategoryMeta } from "@elite/ui/components/ProjectsView";

import { siteConfig } from "@/config/site";
import { createMeta } from "@/utils";

export function meta() {
  return createMeta({
    title: "Project Gallery | Elite Interior Renewals",
    description:
      "Browse our project gallery showcasing custom kitchen and bathroom remodeling work throughout Southeastern Pennsylvania and New Jersey.",
    path: "projects"
  });
}

export async function clientLoader() {
  const response = await fetch("/api/images");
  const data: { categories: CategoryData[] } = await response.json();

  return data;
}

const categoryMeta: Record<string, CategoryMeta> = {
  kitchens: {
    name: "Kitchens",
    description: "Custom cabinetry, countertops, islands, flooring, and complete kitchen remodels.",
    icon: ChefHat,
    color: "bg-amber-500/20 text-amber-400"
  },
  bathrooms: {
    name: "Bathrooms",
    description: "Walk-in showers, soaking tubs, vanities, tile, and complete bathroom remodels.",
    icon: Bath,
    color: "bg-blue-500/20 text-blue-400"
  }
};

const categoryOrder = ["kitchens", "bathrooms"];

export default function Projects({ loaderData }: Route.ComponentProps) {
  return (
    <ProjectsView
      categories={loaderData.categories}
      categoryMeta={categoryMeta}
      categoryOrder={categoryOrder}
      config={siteConfig}
      ctaLine="Let us bring your dream kitchen or bathroom to life"
      intro="Browse through our completed kitchen and bathroom remodels. Each project showcases our commitment to quality craftsmanship and customer satisfaction."
    />
  );
}
