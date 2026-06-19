import {
  ArrowRight,
  Award,
  Check,
  CheckCheck,
  Clock,
  Library,
  Shield,
  Target,
  Users,
  Wrench
} from "lucide-react";
import { JSX } from "react";
import { Link } from "react-router";

import {
  NewJersey,
  // TODO(delaware): restore `NorthernDelaware` import when delaware service launches
  // NorthernDelaware,
  SoutheasternPennsylvania
} from "@elite/ui/components/ServiceAreaMaps";

import { createMeta } from "@/utils";

export function meta() {
  return createMeta({
    title: "About Us | Elite Kitchens & Bathrooms",
    description:
      "Learn about Elite Kitchens & Bathrooms - your trusted experts in custom kitchen and bathroom remodeling in Southeastern Pennsylvania and New Jersey.",
    path: "about"
  });
}

const serviceAreas: { area: string; map: JSX.Element; hash: string }[] = [
  {
    area: "Pennsylvania",
    map: <SoutheasternPennsylvania className="h-full w-full" />,
    hash: "pennsylvania"
  },
  {
    area: "New Jersey",
    map: <NewJersey className="h-full w-full" />,
    hash: "new-jersey"
  }
  // TODO(delaware): restore `Delaware` entry when `Delaware` service launches
  // {
  //   area: "Delaware",
  //   map: <NorthernDelaware className="h-full w-full" />,
  //   hash: "delaware"
  // }
];

const ourPromises = [
  { name: "Licensed" },
  { name: "Insured" },
  { name: "Bonded" },
  { name: "Certified" },
  { name: "Warranty" },
  { name: "Punctual" },
  { name: "Honest" },
  { name: "Trusted" }
];

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description: "Every project meets rigorous industry standards"
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is the lifeblood of our company"
  },
  { icon: Clock, title: "Reliable Service", description: "On time, every time, guaranteed" }
];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl pb-24 md:pb-0">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-surface order-1 rounded-2xl p-6 md:col-span-2 md:p-8 lg:row-span-2">
          <p className="text-elite-teal mb-4 text-xs font-medium tracking-[0.2em] md:text-sm">
            OUR STORY
          </p>
          <h1 className="text-primary font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
            Building trust, one room at a time, one home at a time.
          </h1>
          <div className="bg-elite-teal/20 my-6 h-px w-24" />
          <p className="text-muted text-base leading-relaxed md:text-lg">
            {`Founded in 1987, Elite Kitchens & Bathrooms has grown from a small family operation to
            Southeastern Pennsylvania and New Jersey's most trusted name in kitchen and bathroom remodeling. Our commitment to
            quality craftsmanship and honest service has earned us `}
            <em>thousands</em>
            {` of satisfied customers and a reputation that speaks for itself. Everyone `}
            <em>says</em>
            {` they're the best, but when it's game-time, the difference between falling flat and actually delivering
            is the only equalizer that matters.`}
          </p>
        </div>
        <div className="bg-elite-teal order-2 flex flex-col items-center justify-center rounded-2xl p-6 text-center">
          <span className="text-4xl font-semibold text-white md:text-5xl">2,500+</span>
          <p className="mt-2 text-sm text-white/80">Projects completed</p>
        </div>
        {/* TODO: add an Elite Kitchens & Bathrooms team / project photo here */}
        <div className="bg-map-bg order-3 flex min-h-50 items-center justify-center overflow-hidden rounded-2xl">
          <span className="text-muted text-sm">Photo coming soon</span>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {values.map((value) => (
          <div
            key={value.title}
            className="bg-surface group relative overflow-hidden rounded-2xl p-6"
          >
            <div className="bg-elite-teal/10 absolute -top-8 -right-8 h-24 w-24 rounded-full blur-2xl transition-all group-hover:scale-150" />
            <div className="relative">
              <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
                <value.icon className="text-elite-teal h-6 w-6" />
              </div>
              <h3 className="text-primary mb-2 text-lg font-semibold">{value.title}</h3>
              <p className="text-muted text-sm">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* TODO(delaware): restore grid-cols lg:grid-cols-3 + col-span-3 when Delaware service launches */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="bg-surface rounded-2xl p-6 md:col-span-2">
          <p className="text-elite-teal mb-2 text-xs font-medium tracking-[0.2em]">SERVICE AREA</p>
          <h2 className="text-primary font-serif text-2xl md:text-3xl">
            Experts who care about your home
          </h2>
        </div>
        {serviceAreas.map((item) => (
          <Link
            key={item.area}
            className="group flex flex-col overflow-hidden rounded-2xl transition-transform hover:-translate-y-1"
            to={`/service-areas#${item.hash}`}
          >
            <div className="bg-map-bg flex flex-1 items-center justify-center p-4">{item.map}</div>
            <div className="bg-surface dark:bg-elite-charcoal p-4 text-center">
              <h3 className="text-primary group-hover:text-elite-teal font-semibold transition-colors">
                {item.area}
              </h3>
              <p className="text-muted mt-1 text-xs">View towns & zip codes</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 lg:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <div className="bg-elite-olive/20 rounded-full p-3">
              <Award className="text-elite-olive h-6 w-6" />
            </div>
            <h3 className="text-primary text-lg font-semibold">Our Promises</h3>
            {/* <h3 className="text-primary text-lg font-semibold">Certifications & Licenses</h3> */}
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
            {/* TODO(mold): add back certifications and licenses when available */}
            {/* {certificationsLicenses.map((cert) => (
              <a
                key={cert.name}
                className="bg-canvas hover:bg-elite-teal/10 hover:border-elite-teal/20 flex items-center justify-center rounded-xl border border-transparent p-3"
                href={cert.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="text-primary text-center text-sm font-medium">{cert.name}</p>
              </a>
            ))} */}
            {ourPromises.map((promise) => (
              <a
                key={promise.name}
                className="bg-canvas hover:bg-elite-teal/10 hover:border-elite-teal/20 flex items-center justify-center rounded-xl border border-transparent p-3"
              >
                <p className="text-primary text-center text-sm font-medium">{promise.name}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="bg-elite-olive text-elite-white rounded-2xl p-6">
          <div className="mb-4 flex items-center gap-3">
            <Target className="h-8 w-8" />
            <h3 className="text-lg font-semibold">Our Core Values</h3>
          </div>
          <ul className="space-y-1 text-sm text-white/90">
            <li className="flex items-start">
              <CheckCheck className="mr-1 shrink-0" size={20} />
              <span>Utmost Standards and Sustainability</span>
            </li>
            <li className="flex items-start">
              <CheckCheck className="mr-1 shrink-0" size={20} />
              <span>Safety, Integrity, and Ethics</span>
            </li>
            <li className="flex items-start">
              <CheckCheck className="mr-1 shrink-0" size={20} />
              <span>Work Within Budgets and Timelines</span>
            </li>
            <li className="flex items-start">
              <CheckCheck className="mr-1 shrink-0" size={20} />
              <span>Experience, Passion, and Dedication</span>
            </li>
            <li className="flex items-start">
              <CheckCheck className="mr-1 shrink-0" size={20} />
              <span>Seamless Project Management</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* TODO: add a kitchen/bathroom craftsmanship photo here */}
        <div className="bg-map-bg flex min-h-60 items-center justify-center overflow-hidden rounded-2xl md:row-span-2">
          <span className="text-muted text-sm">Photo coming soon</span>
        </div>
        <div className="bg-surface rounded-2xl p-6">
          <p className="text-elite-teal mb-2 text-xs font-medium tracking-[0.2em]">WHY CHOOSE US</p>
          <h2 className="text-primary mb-4 font-serif text-2xl">The Elite Difference</h2>
          <ul className="text-muted space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Check className="text-elite-teal" size={22} />
              <span>Workmanship warranty on every remodel</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-elite-teal" size={22} />
              <span>Free, no-obligation design consultations and estimates</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-elite-teal" size={22} />
              <span>Clean, respectful, on-schedule job sites</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-elite-teal" size={22} />
              <span>Financing options for every budget</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-elite-teal" size={22} />
              <span>Military, police, teacher, and first responder discounts</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-elite-teal" size={22} />
              <span>Fully licensed and insured</span>
            </li>
          </ul>
        </div>
        <div className="bg-surface rounded-2xl p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="bg-elite-teal/20 rounded-full p-3">
              <Wrench className="text-elite-teal h-6 w-6" />
            </div>
            <h3 className="text-primary text-lg font-semibold">Professional Equipment</h3>
          </div>
          <p className="text-muted text-sm leading-relaxed">
            {`We invest in premium materials, precise tools, and proven techniques to ensure every
            job is done right the first time. From custom cabinetry to tile and fixtures, you'll
            never need to worry about knock-offs masquerading as brand names.`}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <Link
          className="bg-surface group hover:bg-surface/80 flex items-center justify-between gap-4 rounded-2xl p-6 transition-colors"
          to="/resources"
        >
          <div className="flex items-center gap-4">
            <div className="bg-elite-teal/20 rounded-full p-3">
              <Library className="text-elite-teal h-6 w-6" />
            </div>
            <div>
              <h3 className="text-primary font-semibold">Knowledge Base & Resources</h3>
              <p className="text-muted text-sm">
                Learn about kitchen and bathroom design, materials, and remodel planning
              </p>
            </div>
          </div>
          <span className="text-elite-teal flex items-center justify-center text-sm font-medium">
            Explore <ArrowRight className="mt-0.5" size={16} />
          </span>
        </Link>
      </div>
      <div className="mt-4">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0d0d0d] p-6 md:flex-row md:p-8">
          <div>
            <p className="text-center text-lg font-medium text-white md:text-xl">
              Ready for tranquility and peace of mind?
            </p>
            <p className="text-center text-sm text-white/60 md:text-left">
              Schedule your free consultation today
            </p>
          </div>
          <Link
            className="bg-elite-teal rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            to="/contact"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
