import {
  ArrowRight,
  Check,
  ChefHat,
  CookingPot,
  Gauge,
  Layers,
  Lightbulb,
  Proportions,
  Ruler,
  ShieldCheck,
  Sparkles,
  Toolbox,
  Wrench
} from "lucide-react";
import { Link } from "react-router";

import { createMeta } from "@/utils";

export function meta() {
  return createMeta({
    title: "Kitchen Remodeling | Elite Interior Renewals",
    description:
      "Custom kitchen remodeling in PA and NJ. Cabinetry, countertops, islands, flooring, and lighting designed around how you live.",
    path: "kitchens"
  });
}

const designConsiderations = [
  "How you cook and entertain",
  "Traffic flow and the work triangle",
  "Storage you actually need",
  "Natural and task lighting",
  "Finishes that match your home"
];

const surfaceOptions = [
  "Quartz and granite countertops",
  "Butcher block and solid surface",
  "Full-height tile backsplashes",
  "Undermount and farmhouse sinks",
  "Waterfall islands and breakfast bars",
  "Hardwood, tile, and luxury vinyl floors"
];

const craftDetails = [
  { name: "Custom Cabinetry", description: "Built to fit your space, not the other way around" },
  { name: "Soft-Close Hardware", description: "Quality drawer glides and hinges on every door" },
  { name: "Dovetail Joinery", description: "Solid construction that holds up to daily use" },
  { name: "Integrated Appliances", description: "Panel-ready and built-in for a seamless look" },
  { name: "Layered Lighting", description: "Under-cabinet, recessed, and accent fixtures" },
  { name: "Pro Installation", description: "Level, plumb, and finished down to the trim" }
];

export default function Kitchens() {
  return (
    <article className="mx-auto max-w-6xl pb-24 md:pb-0">
      <header className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2">
          <p className="text-elite-teal mb-2 text-xs font-medium tracking-[0.2em]">KITCHENS</p>
          <h1 className="text-primary font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
            The heart of your home, pristine.
          </h1>
          <div className="bg-elite-teal/20 my-6 h-px w-24" />
          <p className="text-muted mt-4 text-base md:text-lg">
            A kitchen is where your home really lives. We design and build custom kitchens around
            how you actually cook, gather, and entertain, beautiful spaces engineered to last for
            decades.
          </p>
        </div>
        <div className="bg-elite-teal flex flex-col items-center justify-center rounded-2xl p-6 text-center">
          <ChefHat className="mb-2 h-10 w-10 text-white/90" />
          <span className="text-2xl font-semibold text-white">Custom</span>
          <p className="text-sm text-white/80">Design & Build</p>
        </div>
      </header>
      {/* Designed Around How You Live */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface order-2 overflow-hidden rounded-2xl lg:order-0 lg:col-start-1 lg:row-start-1">
          <img
            alt="Custom kitchen designed around how you live"
            className="h-full w-full object-cover"
            src="/elite-kitchens.jpg"
          />
        </div>
        <div className="bg-surface order-1 rounded-2xl p-6 md:p-8 lg:order-0 lg:col-span-2">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <Ruler className="text-elite-teal h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            Designed Around How You Live
          </h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            Every great kitchen starts with how you use the space. Before a single cabinet is
            ordered, we map out your workflow, your storage, and your style. The result is a layout
            that feels effortless to live in, not just one that looks good in a brochure.
          </p>
          <ul className="mb-4 grid gap-2 sm:grid-cols-2">
            {designConsiderations.map((item) => (
              <li key={item} className="text-muted flex items-start gap-2 text-sm">
                <Check className="text-elite-teal mt-0.5 shrink-0" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Custom Cabinetry & Storage */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:col-start-1 lg:row-start-1">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-3">
            <Layers className="text-elite-olive h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            Custom Cabinetry & Storage
          </h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            Stock cabinets force your kitchen into dimensions chosen by someone else. Custom
            cabinetry does the opposite, it is built to fit your walls, your ceilings, and the way
            you reach for things every day.
          </p>
          <p className="text-muted text-base leading-relaxed">
            We design storage that earns its place: deep drawers for pots, pull-outs for pantry
            goods, dividers for utensils, and dedicated spots for the appliances you actually use.
            Every inch is accounted for.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl bg-[#0d0d0d] p-6 text-center">
          <Gauge className="mb-2 h-8 w-8 text-white/80" />
          <span className="text-3xl font-semibold text-white">Maximized</span>
          <p className="mt-1 text-sm text-white/60">Usable storage</p>
          <p className="mt-1 text-xs text-white/40">Every inch designed with intent</p>
        </div>
      </section>
      {/* Countertops & Surfaces */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="grid grid-cols-2 gap-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:grid-cols-1 lg:grid-rows-2">
          <div className="bg-elite-olive flex flex-col items-center justify-center rounded-2xl p-6 text-center">
            <Proportions className="mb-2 h-8 w-8 text-white/80" />
            <span className="text-3xl font-semibold text-white">Made to Fit</span>
            <p className="mt-1 text-sm text-white/60">Templated on site</p>
            <p className="mt-1 text-xs text-white/60">Precision-cut for a seamless finish</p>
          </div>
          <div className="bg-surface flex items-center justify-center rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="bg-elite-teal/20 rounded-full p-3">
                <ShieldCheck className="text-elite-teal h-6 w-6" />
              </div>
              <div>
                <h3 className="text-primary font-semibold">Quality Materials</h3>
                <p className="text-muted text-sm">Premium surfaces only</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:row-span-2">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <Toolbox className="text-elite-teal h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            Countertops & Surfaces
          </h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            Your countertops do the heavy lifting, they take the heat, the spills, and the daily
            wear. We help you choose surfaces that fit how your kitchen is really used, then
            template and install them for a flawless fit.
          </p>
          <p className="text-muted mb-6 text-base leading-relaxed">
            From durable quartz to natural stone and warm butcher block, we pair the right material
            with the right space, then carry that vision through the backsplash, sink, and island.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {surfaceOptions.map((item) => (
              <div key={item} className="text-muted flex items-center gap-2 text-sm">
                <Check className="text-elite-teal h-4 w-4 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Layout & Workflow */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:col-start-1 lg:row-start-1">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-3">
            <CookingPot className="text-elite-olive h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">Layout & Workflow</h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            A beautiful kitchen that fights you while you cook is a failed kitchen. We plan the
            relationship between your sink, range, and refrigerator so prep, cooking, and cleanup
            flow naturally, even with more than one cook in the room.
          </p>
          <ul className="mb-4 grid gap-2 sm:grid-cols-2">
            {[
              "Efficient work-triangle layout",
              "Islands and prep zones",
              "Dedicated landing space",
              "Smart appliance placement",
              "Walkways sized for real traffic",
              "Outlets and charging where you need them"
            ].map((item) => (
              <li key={item} className="text-muted flex items-start gap-2 text-sm">
                <Check className="text-elite-olive mt-0.5 shrink-0" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-elite-teal text-sm font-medium">
            Great kitchens are planned around movement, not just measurements.
          </p>
        </div>
        <div className="bg-surface flex items-center justify-center rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="bg-elite-olive/20 rounded-full p-3">
              <Sparkles className="text-elite-olive h-6 w-6" />
            </div>
            <div>
              <h3 className="text-primary font-semibold">Tailored Design</h3>
              <p className="text-muted text-sm">No two kitchens alike</p>
            </div>
          </div>
        </div>
      </section>
      {/* Lighting & Finishes */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface order-2 overflow-hidden rounded-2xl lg:order-0 lg:col-start-1 lg:row-start-1">
          <img
            alt="Layered kitchen lighting and finishes"
            className="h-full w-full object-cover"
            src="/elite-kitchens-1.jpg"
          />
        </div>
        <div className="bg-surface order-1 rounded-2xl p-6 md:p-8 lg:order-0 lg:col-span-2">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <Lightbulb className="text-elite-teal h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">Lighting & Finishes</h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            Lighting is what makes a kitchen feel finished. We layer ambient, task, and accent light
            so the room works at six in the morning and at dinner with guests, then tie it together
            with hardware, fixtures, and finishes chosen to match.
          </p>
          <p className="text-muted text-base leading-relaxed">
            Under-cabinet lighting for the counters, recessed fixtures overhead, and statement
            pendants over the island. Every detail is considered so the whole space feels
            intentional, not assembled.
          </p>
        </div>
      </section>
      {/* Materials & Craftsmanship */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-3">
            <Wrench className="text-elite-olive h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            Materials & Craftsmanship
          </h2>
          <p className="text-muted mb-6 text-base leading-relaxed">
            A kitchen is only as good as how it is built. We use professional-grade materials and
            finish the details most people never see, because those are the details that decide
            whether a kitchen still looks great in fifteen years.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {craftDetails.map((detail) => (
              <div key={detail.name} className="bg-canvas rounded-xl p-4">
                <h4 className="text-primary mb-1 font-semibold">{detail.name}</h4>
                <p className="text-muted text-sm">{detail.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:row-span-2 lg:grid-cols-1 lg:grid-rows-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              alt="Kitchen materials and craftsmanship detail"
              className="h-full w-full object-cover"
              src="/elite-kitchens-2.jpg"
            />
          </div>
          <div className="bg-surface flex items-center justify-center rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="bg-elite-olive/20 rounded-full p-3">
                <Layers className="text-elite-olive h-6 w-6" />
              </div>
              <div>
                <h3 className="text-primary font-semibold">Built to Last</h3>
                <p className="text-muted text-sm">Quality down to the trim</p>
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
            Fully licensed contractors with comprehensive insurance, so your home and your
            investment are protected start to finish.
          </p>
        </div>
        <div className="bg-surface rounded-2xl p-6">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-3">
            <Toolbox className="text-elite-olive h-6 w-6" />
          </div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Custom Design</h3>
          <p className="text-muted text-sm">
            Every kitchen is designed for your home and your habits. No cookie-cutter layouts that
            fight how you actually live.
          </p>
        </div>
        <div className="bg-surface rounded-2xl p-6">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <Wrench className="text-elite-teal h-6 w-6" />
          </div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Quality Materials</h3>
          <p className="text-muted text-sm">
            We use only professional-grade materials and fixtures, never knock-offs or shortcuts
            that fail over time.
          </p>
        </div>
      </section>
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0d0d0d] p-6 md:flex-row md:p-8">
        <div>
          <p className="text-center text-lg font-medium text-white md:text-left md:text-xl">
            Dreaming of a new kitchen?
          </p>
          <p className="text-center text-sm text-white/60 md:text-left">
            Get a free design consultation and estimate
          </p>
        </div>
        <Link
          className="bg-elite-teal inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          to="/contact"
        >
          Get Free Consultation <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
