import {
  Bath,
  ChefHat,
  ChevronDown,
  HelpCircle,
  Layers,
  ListChevronsDownUp,
  PencilRuler,
  Search,
  Sparkles,
  Wrench,
  X
} from "lucide-react";
import { useState } from "react";

import { createMeta } from "@/utils";

export function meta() {
  return createMeta({
    title: "Knowledge Base & Resources | Elite Interior Renewals",
    description:
      "Learn about kitchen and bathroom remodeling: design, materials, fixtures, and planning. Expert knowledge and FAQs from Elite Interior Renewals.",
    path: "resources"
  });
}

type Category = "all" | "kitchen" | "bathroom" | "materials" | "design" | "fixtures";

interface KnowledgeItem {
  id: string;
  term: string;
  definition: string;
  category: Category;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "kitchen" | "bathroom";
}

const knowledgeBase: KnowledgeItem[] = [
  {
    id: "work-triangle",
    term: "The Kitchen Work Triangle",
    definition:
      "A layout principle that positions the sink, stove, and refrigerator in an efficient triangle to minimize steps while cooking. Modern designs adapt it around islands and dedicated prep, cooking, and cleanup zones.",
    category: "kitchen"
  },
  {
    id: "kitchen-layouts",
    term: "Kitchen Layouts",
    definition:
      "Galley, L-shaped, U-shaped, and island layouts each suit different rooms and workflows. The right layout balances counter space, storage, traffic flow, and how you actually use the kitchen.",
    category: "kitchen"
  },
  {
    id: "cabinet-construction",
    term: "Cabinet Construction",
    definition:
      "Framed vs. frameless (full-access) cabinetry changes the look and storage efficiency. Plywood boxes, solid-wood doors, and soft-close hardware are markers of quality that hold up over decades of daily use.",
    category: "kitchen"
  },
  {
    id: "wet-area-waterproofing",
    term: "Bathroom Waterproofing",
    definition:
      "Proper membranes, sloping, and sealing behind tile keep moisture out of the structure. Skipping it is the most common cause of failed bathroom remodels, leading to rot and mold behind beautiful surfaces.",
    category: "bathroom"
  },
  {
    id: "shower-systems",
    term: "Shower Systems",
    definition:
      "Curbless walk-ins, glass enclosures, and custom tile pans each carry different waterproofing and drainage requirements. Linear drains and proper slope are essential for a leak-free, low-maintenance shower.",
    category: "bathroom"
  },
  {
    id: "ventilation",
    term: "Bathroom Ventilation",
    definition:
      "Correctly sized exhaust fans vented outside (never into an attic) remove the humidity that causes mold and damages finishes. Ventilation is as important to a lasting bathroom as the tile you can see.",
    category: "bathroom"
  },
  {
    id: "countertop-materials",
    term: "Countertop Materials",
    definition:
      "Quartz, granite, butcher block, and solid surface each balance durability, maintenance, and cost differently. Quartz is low-maintenance and consistent; natural stone offers unique character but needs sealing.",
    category: "materials"
  },
  {
    id: "flooring-options",
    term: "Flooring Options",
    definition:
      "Porcelain tile, luxury vinyl plank, and engineered hardwood each handle moisture and wear differently. Kitchens and bathrooms favor water-resistant, durable flooring that still looks warm and high-end.",
    category: "materials"
  },
  {
    id: "tile-types",
    term: "Tile Types",
    definition:
      "Ceramic, porcelain, and natural stone tile differ in hardness, porosity, and upkeep. Porcelain is dense and water-resistant, making it a workhorse for floors, showers, and backsplashes.",
    category: "materials"
  },
  {
    id: "design-consultation",
    term: "Design Consultation",
    definition:
      "Every remodel starts with understanding how you live in the space. A good consultation translates your needs, style, and budget into a concrete plan before any demolition begins.",
    category: "design"
  },
  {
    id: "lighting-design",
    term: "Lighting Design",
    definition:
      "Layered lighting (ambient, task, and accent) makes a kitchen or bathroom both functional and inviting. Under-cabinet lighting, recessed cans, and vanity lighting each serve a distinct purpose.",
    category: "design"
  },
  {
    id: "storage-planning",
    term: "Storage Planning",
    definition:
      "Pull-outs, deep drawers, vertical dividers, and smart corner solutions turn cabinetry into usable storage. Planning storage around your real habits is what makes a remodel feel effortless day to day.",
    category: "design"
  },
  {
    id: "fixture-selection",
    term: "Fixtures & Faucets",
    definition:
      "Faucets, sinks, and hardware combine durability with style. Look for solid-brass valve bodies, quality finishes, and WaterSense ratings for fixtures that perform and last.",
    category: "fixtures"
  },
  {
    id: "vanity-height",
    term: "Comfort-Height Vanities",
    definition:
      "Taller vanity heights (around 36 inches) reduce bending and are now standard in many remodels, balancing comfort with the needs of the whole household.",
    category: "fixtures"
  },
  {
    id: "appliance-integration",
    term: "Appliance Integration",
    definition:
      "Panel-ready and built-in appliances create a seamless, custom look. Planning electrical, gas, and ventilation around appliances early prevents costly changes later.",
    category: "fixtures"
  }
];

// TODO(content): expand with researched, accurate FAQs (Phase 3).
const faqs: FaqItem[] = [
  {
    id: "faq-kitchen-timeline",
    question: "How long does a kitchen remodel take?",
    answer:
      "Most full kitchen remodels run several weeks, driven by scope, custom cabinetry lead times, and any structural or layout changes. We provide a detailed timeline before work begins so you know what to expect.",
    category: "kitchen"
  },
  {
    id: "faq-kitchen-budget",
    question: "What drives kitchen remodel cost?",
    answer:
      "Cabinetry, countertops, appliances, and whether you change the layout or relocate plumbing and electrical are the biggest factors. We give transparent, itemized estimates so there are no surprises.",
    category: "kitchen"
  },
  {
    id: "faq-kitchen-stay",
    question: "Can I use my kitchen during the remodel?",
    answer:
      "Usually only partially. We work to minimize disruption and keep the site clean, and we'll set expectations up front about which phases will limit access to the space.",
    category: "kitchen"
  },
  {
    id: "faq-bathroom-cost",
    question: "What drives bathroom remodel cost?",
    answer:
      "Tile selection, fixtures, layout changes, and whether plumbing is relocated are the biggest factors. Waterproofing and ventilation done right are non-negotiable line items that protect the whole project.",
    category: "bathroom"
  },
  {
    id: "faq-bathroom-small",
    question: "Can a small bathroom still feel luxurious?",
    answer:
      "Absolutely. Smart layout, larger-format tile, good lighting, and the right fixtures make a compact bathroom feel open and high-end without enlarging the footprint.",
    category: "bathroom"
  },
  {
    id: "faq-bathroom-accessible",
    question: "Can you build for accessibility?",
    answer:
      "Yes. Curbless showers, grab-bar blocking, comfort-height fixtures, and slip-resistant flooring can be built in beautifully, whether for aging in place or universal design.",
    category: "bathroom"
  }
];

const categories = [
  { id: "all" as Category, label: "All Topics", Icon: Layers },
  { id: "kitchen" as Category, label: "Kitchen", Icon: ChefHat },
  { id: "bathroom" as Category, label: "Bathroom", Icon: Bath },
  { id: "materials" as Category, label: "Materials", Icon: Sparkles },
  { id: "design" as Category, label: "Design", Icon: PencilRuler },
  { id: "fixtures" as Category, label: "Fixtures", Icon: Wrench }
];

const KnowledgeCard = ({
  item,
  isOpen,
  onToggle
}: {
  item: KnowledgeItem;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const categoryColors: Record<Category, string> = {
    all: "bg-elite-teal/20 text-elite-teal",
    kitchen: "bg-amber-500/20 text-amber-400",
    bathroom: "bg-blue-500/20 text-blue-400",
    materials: "bg-emerald-500/20 text-emerald-400",
    design: "bg-purple-500/20 text-purple-400",
    fixtures: "bg-cyan-500/20 text-cyan-400"
  };

  return (
    <div className="bg-surface overflow-hidden rounded-xl border border-white/5">
      <button
        className="flex w-full cursor-pointer items-center justify-between p-4 text-left transition-colors hover:bg-white/5"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize ${categoryColors[item.category]}`}
          >
            {item.category}
          </span>
          <h3 className="text-primary font-medium">{item.term}</h3>
        </div>
        <ChevronDown
          className={`text-muted shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="text-muted border-t border-white/5 px-4 py-4 text-sm leading-relaxed">
          {item.definition}
        </div>
      </div>
    </div>
  );
};

const FaqCard = ({
  item,
  isOpen,
  onToggle
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="bg-surface overflow-hidden rounded-xl border border-white/5">
      <button
        className="flex w-full cursor-pointer items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-white/5"
        onClick={onToggle}
      >
        <div className="flex items-start gap-3">
          <HelpCircle className="text-elite-teal mt-0.5 shrink-0" size={20} />
          <h3 className="text-primary font-medium">{item.question}</h3>
        </div>
        <ChevronDown
          className={`text-muted shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="text-muted border-t border-white/5 px-4 py-4 pl-12 text-sm leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [activeFaqTab, setActiveFaqTab] = useState<"kitchen" | "bathroom">("kitchen");

  const toggleItem = (id: string) => {
    setOpenItems((prevItem) => {
      const nextItem = new Set(prevItem);

      if (nextItem.has(id)) {
        nextItem.delete(id);
      } else {
        nextItem.add(id);
      }

      return nextItem;
    });
  };

  const filteredKnowledge = knowledgeBase.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;

    const matchesSearch =
      searchQuery === "" ||
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const filteredFaqs = faqs.filter((item) => {
    const matchesTab = item.category === activeFaqTab;

    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <article className="mx-auto max-w-6xl pb-24 md:pb-0">
      <header className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2">
          <p className="text-elite-teal mb-2 text-xs font-medium tracking-[0.2em]">
            KNOWLEDGE BASE
          </p>
          <h1 className="text-primary font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
            Resources & FAQs
          </h1>
          <div className="bg-elite-teal/20 my-6 h-px w-24" />
          <p className="text-muted mt-4 text-base md:text-lg">
            Everything you need to plan a kitchen or bathroom remodel, from materials and layout to
            fixtures, design, and budgeting. Search our knowledge base or browse by category.
          </p>
        </div>
        <div className="bg-elite-teal flex flex-col items-center justify-center rounded-2xl p-6 text-center">
          <ListChevronsDownUp className="mb-2 h-8 w-8 text-white/80" />
          <span className="text-3xl font-semibold text-white">{knowledgeBase.length}+</span>
          <p className="mt-1 text-sm text-white/80">Topics covered</p>
        </div>
      </header>
      <div className="bg-surface mb-6 rounded-2xl p-4">
        <div className="relative">
          <Search className="text-muted absolute top-1/2 left-4 -translate-y-1/2" size={20} />
          <input
            className="text-primary placeholder:text-muted w-full rounded-xl bg-white/5 py-3 pr-10 pl-12 text-base transition-colors outline-none focus:bg-white/10"
            placeholder="Search topics, terms, or questions..."
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          {searchQuery && (
            <button
              className="text-muted hover:text-primary absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer transition-colors"
              onClick={() => setSearchQuery("")}
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>
      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="bg-surface flex items-center gap-3 rounded-xl p-4">
          <div className="rounded-lg bg-amber-500/20 p-2">
            <ChefHat className="text-amber-400" size={20} />
          </div>
          <div>
            <p className="text-primary text-lg font-semibold">
              {knowledgeBase.filter((base) => base.category === "kitchen").length}
            </p>
            <p className="text-muted text-xs">Kitchen</p>
          </div>
        </div>
        <div className="bg-surface flex items-center gap-3 rounded-xl p-4">
          <div className="rounded-lg bg-blue-500/20 p-2">
            <Bath className="text-blue-400" size={20} />
          </div>
          <div>
            <p className="text-primary text-lg font-semibold">
              {knowledgeBase.filter((base) => base.category === "bathroom").length}
            </p>
            <p className="text-muted text-xs">Bathroom</p>
          </div>
        </div>
        <div className="bg-surface flex items-center gap-3 rounded-xl p-4">
          <div className="rounded-lg bg-emerald-500/20 p-2">
            <Sparkles className="text-emerald-400" size={20} />
          </div>
          <div>
            <p className="text-primary text-lg font-semibold">
              {knowledgeBase.filter((base) => base.category === "materials").length}
            </p>
            <p className="text-muted text-xs">Materials</p>
          </div>
        </div>
        <div className="bg-surface flex items-center gap-3 rounded-xl p-4">
          <div className="rounded-lg bg-purple-500/20 p-2">
            <PencilRuler className="text-purple-400" size={20} />
          </div>
          <div>
            <p className="text-primary text-lg font-semibold">
              {knowledgeBase.filter((base) => base.category === "design").length}
            </p>
            <p className="text-muted text-xs">Design</p>
          </div>
        </div>
        <div className="bg-surface flex items-center gap-3 rounded-xl p-4">
          <div className="rounded-lg bg-cyan-500/20 p-2">
            <Wrench className="text-cyan-400" size={20} />
          </div>
          <div>
            <p className="text-primary text-lg font-semibold">
              {knowledgeBase.filter((base) => base.category === "fixtures").length}
            </p>
            <p className="text-muted text-xs">Fixtures</p>
          </div>
        </div>
      </div>
      <div className="bg-surface mb-6 flex flex-wrap gap-2 rounded-2xl p-4">
        {categories.map(({ Icon, id, label }) => (
          <button
            key={id}
            className={`flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === id
                ? "bg-elite-teal text-white"
                : "text-muted hover:text-primary bg-white/5 hover:bg-white/10"
            }`}
            onClick={() => setActiveCategory(id)}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>
      <section className="mb-8">
        <h2 className="text-primary mb-4 font-serif text-2xl">
          {activeCategory === "all"
            ? "All Topics"
            : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Topics`}
        </h2>
        <div className="space-y-2">
          {filteredKnowledge.length > 0 ? (
            filteredKnowledge.map((item) => (
              <KnowledgeCard
                key={item.id}
                isOpen={openItems.has(item.id)}
                item={item}
                onToggle={() => toggleItem(item.id)}
              />
            ))
          ) : (
            <div className="bg-surface rounded-xl p-8 text-center">
              <p className="text-muted">No topics found matching your search.</p>
            </div>
          )}
        </div>
      </section>
      <section className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-primary font-serif text-2xl">Frequently Asked Questions</h2>
          <div className="bg-surface flex gap-1 rounded-full p-1">
            <button
              className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeFaqTab === "kitchen"
                  ? "bg-elite-teal text-white"
                  : "text-muted hover:text-primary"
              }`}
              onClick={() => setActiveFaqTab("kitchen")}
            >
              Kitchen
            </button>
            <button
              className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeFaqTab === "bathroom"
                  ? "bg-elite-teal text-white"
                  : "text-muted hover:text-primary"
              }`}
              onClick={() => setActiveFaqTab("bathroom")}
            >
              Bathroom
            </button>
          </div>
        </div>
        <div className="space-y-2">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item) => (
              <FaqCard
                key={item.id}
                isOpen={openItems.has(item.id)}
                item={item}
                onToggle={() => toggleItem(item.id)}
              />
            ))
          ) : (
            <div className="bg-surface rounded-xl p-8 text-center">
              <p className="text-muted">No FAQs found matching your search.</p>
            </div>
          )}
        </div>
      </section>
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0d0d0d] p-6 md:flex-row md:p-8">
        <div>
          <p className="text-center text-lg font-medium text-white md:text-left md:text-xl">
            Still have questions?
          </p>
          <p className="text-center text-sm text-white/60 md:text-left">
            Our experts are ready to help with your specific project
          </p>
        </div>
        <a
          className="bg-elite-teal rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          href="/contact"
        >
          Get Expert Advice
        </a>
      </div>
    </article>
  );
}
