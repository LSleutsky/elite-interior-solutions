import {
  AirVent,
  ArrowRight,
  Bath,
  Check,
  Droplets,
  Layers,
  ShieldCheck,
  ShowerHead,
  Sparkles,
  Timer,
  Waves,
  Wrench
} from "lucide-react";
import { Link } from "react-router";

import { createMeta } from "@/utils";

export function meta() {
  return createMeta({
    title: "Bathroom Remodeling | Elite Kitchens & Bathrooms",
    description:
      "Custom bathroom remodeling in PA and NJ. Walk-in showers, soaking tubs, vanities, tile, and heated floors built for everyday luxury.",
    path: "bathrooms"
  });
}

const comfortFeatures = [
  "Walk-in and curbless showers",
  "Freestanding and soaking tubs",
  "Comfort-height vanities",
  "Grab bars and built-in seating",
  "Slip-resistant flooring",
  "Heated floors and towel warmers"
];

const processSteps = [
  "In-home design consultation",
  "Layout and fixture selection",
  "Demolition and prep",
  "Waterproofing and rough-in",
  "Tile, fixtures, and finishes",
  "Final walkthrough and cleanup"
];

const finishOptions = [
  { name: "Tile & Stone", description: "Porcelain, ceramic, and natural stone, wall to floor" },
  { name: "Vanities & Tops", description: "Custom cabinetry with quartz or stone counters" },
  { name: "Showers & Glass", description: "Frameless glass, niches, and custom shower pans" },
  { name: "Fixtures & Faucets", description: "Quality valves and finishes built to last" }
];

export default function Bathrooms() {
  return (
    <article className="mx-auto max-w-6xl pb-24 md:pb-0">
      <header className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2">
          <p className="text-elite-olive mb-2 text-xs font-medium tracking-[0.2em]">BATHROOMS</p>
          <h1 className="text-primary font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
            Your everyday retreat, elevated.
          </h1>
          <div className="bg-elite-teal/20 my-6 h-px w-24" />
          <p className="text-muted mt-4 text-base md:text-lg">
            A bathroom is the first room you use each morning and the last each night. We design
            spaces that feel like a retreat, then build them with the moisture-smart construction
            that keeps them beautiful for years.
          </p>
        </div>
        <div className="bg-elite-teal flex flex-col items-center justify-center rounded-2xl p-6 text-center">
          <Bath className="mb-2 h-10 w-10 text-white/90" />
          <span className="text-2xl font-semibold text-white">Spa-Like</span>
          <p className="text-sm text-white/80">Everyday luxury</p>
        </div>
      </header>
      {/* Built for Everyday Luxury */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface order-2 overflow-hidden rounded-2xl lg:order-0 lg:col-start-1 lg:row-start-1">
          <img
            alt="Bathroom built for everyday luxury"
            className="h-full w-full object-cover"
            src="/elite-bathrooms.jpg"
          />
        </div>
        <div className="bg-surface order-1 rounded-2xl p-6 md:p-8 lg:order-0 lg:col-span-2">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-3">
            <ShowerHead className="text-elite-olive h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            Built for Everyday Luxury
          </h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            The best bathrooms work as hard as they look good. We design around your real routine,
            the morning rush, the long soak at the end of the day, the storage you wish you had,
            then bring it together with finishes that feel like a getaway.
          </p>
          <p className="text-muted mb-4 text-base leading-relaxed">
            Whether you want a sleek walk-in shower, a freestanding soaking tub, or a double vanity
            with room to breathe, we build it to fit your space and your life, not a template.
          </p>
        </div>
      </section>
      {/* Comfort & Accessibility */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:col-start-1 lg:row-start-1">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <Sparkles className="text-elite-teal h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            Comfort & Accessibility
          </h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            A bathroom should work for everyone who uses it, today and years from now. We design
            with comfort and safety built in from the start, so accessibility never feels like an
            afterthought bolted on later.
          </p>
          <ul className="mb-4 grid gap-2 sm:grid-cols-2">
            {comfortFeatures.map((feature) => (
              <li key={feature} className="text-muted flex items-start gap-2 text-sm">
                <Check className="text-elite-teal mt-0.5 shrink-0" size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl bg-[#0d0d0d] p-6 text-center">
          <Waves className="mb-2 h-8 w-8 text-white/80" />
          <span className="text-3xl font-semibold text-white">Universal</span>
          <p className="mt-1 text-sm text-white/60">Design for every age</p>
          <p className="mt-1 text-xs text-white/40">Comfort and safety built in</p>
        </div>
      </section>
      {/* Our Remodeling Process */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="grid grid-cols-2 gap-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:grid-cols-1 lg:grid-rows-2">
          <div className="bg-elite-olive flex flex-col items-center justify-center rounded-2xl p-6 text-center">
            <Timer className="mb-2 h-8 w-8 text-white/80" />
            <span className="text-3xl font-semibold text-white">On Schedule</span>
            <p className="mt-1 text-sm text-white/60">A clear timeline</p>
            <p className="mt-1 text-xs text-white/60">Clean, respectful job sites</p>
          </div>
          <div className="bg-surface flex items-center justify-center rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="bg-elite-teal/20 rounded-full p-3">
                <AirVent className="text-elite-teal h-6 w-6" />
              </div>
              <div>
                <h3 className="text-primary font-semibold">Proper Ventilation</h3>
                <p className="text-muted text-sm">Moisture managed right</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:row-span-2">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <Wrench className="text-elite-teal h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            Our Remodeling Process
          </h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            A bathroom remodel touches plumbing, waterproofing, tile, and electrical, all in a
            small, high-moisture space. Done in the wrong order, the result fails fast. We follow a
            proven sequence so every layer is right before the next one goes on.
          </p>
          <p className="text-muted mb-6 text-base leading-relaxed">
            From the first consultation to the final walkthrough, you always know what is happening
            and what comes next. We protect your home, keep the site clean, and finish what we
            start.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {processSteps.map((step) => (
              <div key={step} className="text-muted flex items-center gap-2 text-sm">
                <Check className="text-elite-teal h-4 w-4 shrink-0" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Moisture-Smart Construction */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:col-start-1 lg:row-start-1">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-3">
            <Droplets className="text-elite-olive h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            Moisture-Smart Construction
          </h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            The most expensive bathroom failures happen behind the tile, where water finds its way
            into walls and floors that were never properly sealed. Beautiful finishes mean nothing
            if the construction underneath them lets moisture in.
          </p>
          <p className="text-muted text-base leading-relaxed">
            We waterproof the right way: sloped shower pans, sealed seams, proper backer board, and
            ventilation that actually moves air. It is the part you never see, and it is exactly why
            your bathroom stays healthy for the long haul.
          </p>
        </div>
        <div className="bg-surface flex items-center justify-center rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="bg-elite-olive/20 rounded-full p-3">
              <Layers className="text-elite-olive h-6 w-6" />
            </div>
            <div>
              <h3 className="text-primary font-semibold">Waterproofing</h3>
              <p className="text-muted text-sm">Built behind the tile</p>
            </div>
          </div>
        </div>
      </section>
      {/* Showers, Tubs & Vanities */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface order-2 overflow-hidden rounded-2xl lg:order-0 lg:col-start-1 lg:row-start-1">
          <img
            alt="Custom shower, tub, and vanity"
            className="h-full w-full object-cover"
            src="/elite-bathrooms-1.jpg"
          />
        </div>
        <div className="bg-surface order-1 rounded-2xl p-6 md:p-8 lg:order-0 lg:col-span-2">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <ShowerHead className="text-elite-teal h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            Showers, Tubs & Vanities
          </h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            The centerpieces of the room deserve the most attention. A frameless walk-in shower with
            a custom niche, a freestanding tub with the right sightline, a vanity sized to the
            space, these are the choices that define how a bathroom feels.
          </p>
          <p className="text-muted text-base leading-relaxed">
            We help you weigh the trade-offs, shower versus tub, single versus double vanity,
            storage versus open space, then build the version that fits your room and your routine
            best.
          </p>
        </div>
      </section>
      {/* Finishes & Fixtures */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-3">
            <Sparkles className="text-elite-olive h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">Finishes & Fixtures</h2>
          <p className="text-muted mb-6 text-base leading-relaxed">
            The finishes are where your bathroom becomes yours. We bring tile, stone, fixtures, and
            lighting together into one cohesive look, and we use quality products that hold up to
            daily use and constant moisture.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {finishOptions.map((option) => (
              <div key={option.name} className="bg-canvas rounded-xl p-4">
                <h4 className="text-primary mb-1 font-semibold">{option.name}</h4>
                <p className="text-muted text-sm">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:row-span-2 lg:grid-cols-1 lg:grid-rows-2">
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-0">
            <img
              alt="Bathroom finishes and fixtures detail"
              className="absolute inset-0 h-full w-full object-cover"
              src="/elite-bathrooms-2.jpg"
            />
          </div>
          <div className="bg-surface flex items-center justify-center rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="bg-elite-olive/20 rounded-full p-3">
                <ShieldCheck className="text-elite-olive h-6 w-6" />
              </div>
              <div>
                <h3 className="text-primary font-semibold">Quality Fixtures</h3>
                <p className="text-muted text-sm">Chosen to last</p>
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
            <AirVent className="text-elite-olive h-6 w-6" />
          </div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Ventilation & Air</h3>
          <p className="text-muted text-sm">
            Proper exhaust and air movement keep moisture in check, protecting your finishes and
            your indoor air quality.
          </p>
        </div>
        <div className="bg-surface rounded-2xl p-6">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <Droplets className="text-elite-teal h-6 w-6" />
          </div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Waterproof & Seal</h3>
          <p className="text-muted text-sm">
            The work behind the tile is what makes a bathroom last. We seal it properly so moisture
            never becomes a problem.
          </p>
        </div>
      </section>
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0d0d0d] p-6 md:flex-row md:p-8">
        <div>
          <p className="text-center text-lg font-medium text-white md:text-left md:text-xl">
            Ready for your dream bathroom?
          </p>
          <p className="text-center text-sm text-white/60 md:text-left">
            Free consultation, honest advice, no pressure
          </p>
        </div>
        <Link
          className="bg-elite-olive inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          to="/contact"
        >
          Get Free Consultation <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
