import ServiceAreasView from "@elite/ui/components/ServiceAreasView";

import { siteConfig } from "@/config/site";
import { createMeta } from "@/utils";

export function meta() {
  return createMeta({
    title: "Service Areas | Elite Interior Renewals",
    description:
      "Elite Interior Renewals serves Southeastern Pennsylvania and New Jersey. Find your town and zip code in our service area.",
    path: "service-areas"
  });
}

export default function ServiceAreas() {
  return <ServiceAreasView config={siteConfig} />;
}
