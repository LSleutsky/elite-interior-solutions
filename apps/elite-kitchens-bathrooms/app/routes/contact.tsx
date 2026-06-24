import ContactView from "@elite/ui/components/ContactView";

import { siteConfig } from "@/config/site";
import { createMeta } from "@/utils";

export function meta() {
  return createMeta({
    title: "Contact Us | Elite Interior Renewals",
    description:
      "Get a free estimate for custom kitchen and bathroom remodeling in PA and NJ. Contact Elite Interior Renewals today.",
    path: "contact"
  });
}

export default function Contact() {
  return <ContactView config={siteConfig} />;
}
