import AboutView from "@elite/ui/components/AboutView";

import { createMeta } from "@/utils";

export function meta() {
  return createMeta({
    title: "About Us | Elite Kitchens & Bathrooms",
    description:
      "Learn about Elite Kitchens & Bathrooms - your trusted experts in custom kitchen and bathroom remodeling in Southeastern Pennsylvania and New Jersey.",
    path: "about"
  });
}

const whyChooseUs = [
  "Workmanship warranty on every remodel",
  "Free, no-obligation design consultations and estimates",
  "Clean, respectful, on-schedule job sites",
  "Financing options for every budget",
  "Military, police, teacher, and first responder discounts",
  "Fully licensed and insured"
];

export default function About() {
  return (
    <AboutView
      equipmentText={`We invest in premium materials, precise tools, and proven techniques to ensure every job is done right the first time. From custom cabinetry to tile and fixtures, you'll never need to worry about knock-offs masquerading as brand names.`}
      headline="Building trust, one room at a time, one home at a time."
      qualityPhoto={{
        src: "/elite-kitchen-quality.jpeg",
        alt: "Quality kitchens"
      }}
      resourcesSubtitle="Learn about kitchen and bathroom design, materials, and remodel planning"
      story={
        <>
          {`Founded in 1987, Elite Kitchens & Bathrooms has grown from a small family operation to
          Southeastern Pennsylvania and New Jersey's most trusted name in kitchen and bathroom remodeling. Our commitment to
          quality craftsmanship and honest service has earned us `}
          <em>thousands</em>
          {` of satisfied customers and a reputation that speaks for itself. Everyone `}
          <em>says</em>
          {` they're the best, but when it's game-time, the difference between falling flat and actually delivering
          is the only equalizer that matters.`}
        </>
      }
      teamPhoto={{
        src: "/elite-kitchen-worker.jpg",
        alt: "Elite Basement Solutions team at work"
      }}
      whyChooseUs={whyChooseUs}
    />
  );
}
