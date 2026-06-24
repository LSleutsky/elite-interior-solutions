import {
  ArrowRight,
  Bath,
  Check,
  ChefHat,
  ListOrdered,
  ShieldCheck,
  Sparkles,
  Timer,
  Wrench
} from "lucide-react";
import { Link } from "react-router";

import { createMeta } from "@/utils";

export function meta() {
  return createMeta({
    title: "Our Services | Elite Interior Renewals",
    description:
      "Custom kitchen and bathroom remodeling in Southeastern Pennsylvania and New Jersey, from design through installation.",
    path: "services"
  });
}

const kitchenFeatures = [
  "Custom cabinetry & storage",
  "Premium countertops",
  "Islands & breakfast bars",
  "Tile & hardwood flooring",
  "Modern appliance integration"
];

const bathroomFeatures = [
  "Walk-in showers & soaking tubs",
  "Double vanities & custom sinks",
  "Heated tile flooring",
  "Modern lighting & ventilation",
  "Accessible & universal design"
];

export default function Services() {
  return (
    <article className="mx-auto max-w-6xl pb-24 md:pb-0">
      <header className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2">
          <p className="text-elite-teal mb-2 text-xs font-medium tracking-[0.2em]">WHAT WE DO</p>
          <h1 className="text-primary font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
            Expert remodeling for kitchens and bathrooms
          </h1>
          <div className="bg-elite-teal/20 my-6 h-px w-24" />
          <p className="text-muted mt-4 text-base md:text-lg">
            From the first sketch to the final fixture, we deliver proven quality craftsmanship
            backed by decades of experience.
          </p>
        </div>
        <div className="bg-elite-teal flex flex-col items-center justify-center rounded-2xl p-6 text-center">
          <span className="mt-2 text-3xl font-semibold text-white">100%</span>
          <p className="text-white/80">Satisfaction Guaranteed</p>
        </div>
      </header>
      {/* Kitchens */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:col-start-2 lg:row-span-2">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-4">
            <ChefHat className="text-elite-teal h-8 w-8" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">Kitchen Remodeling</h2>
          <p className="text-muted mb-6 max-w-xl text-base leading-relaxed md:text-lg">
            The kitchen is the heart of the home. Our custom layouts, cabinetry, countertops, and
            finishes are built around how you actually cook and gather, beautiful and built to last.
          </p>
          <ul className="mb-6 grid gap-2 sm:grid-cols-2">
            {kitchenFeatures.map((feature) => (
              <li key={feature} className="text-muted flex items-start gap-2 text-sm">
                <Check className="text-elite-teal mt-0.5 shrink-0" size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Link
            className="bg-elite-teal inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            to="/kitchens"
          >
            Learn more <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:grid-cols-1 lg:grid-rows-2">
          <div className="bg-elite-olive flex flex-col items-center justify-center rounded-2xl p-6 text-center">
            <ChefHat className="mb-2 h-8 w-8 text-white/80" />
            <span className="text-3xl font-semibold text-white">500+</span>
            <p className="mt-1 text-sm text-white/80">Kitchens remodeled</p>
          </div>
          <div className="bg-surface flex items-center justify-center rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="bg-elite-teal/20 rounded-full p-3">
                <ShieldCheck className="text-elite-teal h-6 w-6" />
              </div>
              <div>
                <h3 className="text-primary font-semibold">Quality Guaranteed</h3>
                <p className="text-muted text-sm">Premium materials only</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bathrooms */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:row-span-2">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-4">
            <Bath className="text-elite-olive h-8 w-8" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">Bathroom Remodeling</h2>
          <p className="text-muted mb-6 max-w-xl text-base leading-relaxed md:text-lg">
            {`From sleek walk-in showers to spa-like soaking tubs, we create bathrooms that pair
              everyday luxury with moisture-smart construction built to last. Every detail matters.`}
          </p>
          <ul className="mb-6 grid gap-2 sm:grid-cols-2">
            {bathroomFeatures.map((feature) => (
              <li key={feature} className="text-muted flex items-start gap-2 text-sm">
                <Check className="text-elite-olive mt-0.5 shrink-0" size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Link
            className="bg-elite-teal inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            to="/bathrooms"
          >
            Learn more <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:row-span-2 lg:grid-cols-1 lg:grid-rows-2">
          <div className="flex flex-col items-center justify-center rounded-2xl bg-[#0d0d0d] p-6 text-center">
            <Sparkles className="mb-2 h-8 w-8 text-white/80" />
            <span className="text-3xl font-semibold text-white">Spa-Like</span>
            <p className="mt-1 text-sm text-white/60">Luxury retreats</p>
          </div>
          <div className="bg-surface flex items-center justify-center rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="bg-elite-olive/20 rounded-full p-3">
                <Timer className="text-elite-olive h-6 w-6" />
              </div>
              <div>
                <h3 className="text-primary font-semibold">On-Time Delivery</h3>
                <p className="text-muted text-sm">Projects completed as promised</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <ShieldCheck className="text-elite-teal h-6 w-6" />
          </div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Licensed & Insured</h3>
          <p className="text-muted text-sm">
            Fully licensed contractors with comprehensive insurance coverage for your peace of mind.
          </p>
        </div>
        <div className="bg-surface rounded-2xl p-6">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <Wrench className="text-elite-teal h-6 w-6" />
          </div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Quality Materials</h3>
          <p className="text-muted text-sm">
            We use only professional-grade materials and fixtures, never knock-offs or shortcuts.
          </p>
        </div>
        <div className="bg-surface rounded-2xl p-6">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <ListOrdered className="text-elite-teal h-6 w-6" />
          </div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Free Estimates</h3>
          <p className="text-muted text-sm">
            No-obligation consultations and detailed quotes so you know exactly what to expect.
          </p>
        </div>
      </section>
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0d0d0d] p-6 md:flex-row md:p-8">
        <div>
          <p className="text-center text-lg font-medium text-white md:text-left md:text-xl">
            Ready to get started?
          </p>
          <p className="text-sm text-white/60">Schedule your free consultation today</p>
        </div>
        <Link
          className="bg-elite-teal rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          to="/contact"
        >
          Get Free Quote
        </Link>
      </div>
    </article>
  );
}
