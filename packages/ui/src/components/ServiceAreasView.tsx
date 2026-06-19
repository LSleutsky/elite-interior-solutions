import { ChevronDown, MapPin, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";

import {
  // TODO(delaware): restore `delawareData` import when delaware service launches
  // delawareData,
  newJerseyData,
  pennsylvaniaData,
  ServiceAreaData,
  Town
} from "@elite/ui/data/serviceAreas";

import { SiteConfig } from "@elite/ui/types";

interface SearchResult {
  stateId: string;
  stateName: string;
  county: string;
  town: Town;
}
interface StateCardProps {
  data: ServiceAreaData;
  id: string;
  isExpanded: boolean;
  onToggle: () => void;
  highlightedTown: string | null;
}

const getTownId = (stateId: string, county: string, townName: string) =>
  `${stateId}-${county}-${townName}`.toLowerCase().replace(/\s+/g, "-");

const StateCard = ({ data, id, isExpanded, onToggle, highlightedTown }: StateCardProps) => {
  const stateCardRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={stateCardRef} className="bg-surface scroll-mt-24 overflow-hidden rounded-2xl" id={id}>
      <button
        className="flex w-full cursor-pointer items-center justify-between p-6 text-left"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          <div className="bg-elite-teal/20 rounded-full p-3">
            <MapPin className="text-elite-teal h-6 w-6" />
          </div>
          <div>
            <h2 className="text-primary text-xl font-semibold">{data.state}</h2>
            <p className="text-muted text-sm">
              {data.counties.length} {data.counties.length === 1 ? "county" : "counties"} ·{" "}
              {data.counties.reduce((acc, c) => acc + c.towns.length, 0)} towns
            </p>
          </div>
        </div>
        <ChevronDown
          className={`text-muted h-5 w-5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
        />
      </button>
      {isExpanded && (
        <div className="border-t border-white/10 px-6 pb-6">
          {data.counties.map((county) => (
            <div key={county.name} className="mt-6">
              <h3 className="text-elite-teal mb-3 text-sm font-medium tracking-wide">
                {county.name.toUpperCase()} COUNTY
              </h3>
              <div
                className={
                  county.towns.length === 1
                    ? "grid grid-cols-1"
                    : "grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
                }
              >
                {county.towns.map((town) => {
                  const townId = getTownId(id, county.name, town.name);
                  const isHighlighted = highlightedTown === townId;
                  return (
                    <div
                      key={town.name}
                      className={`scroll-mt-32 rounded-lg px-3 py-2 transition-all duration-500 ${
                        county.towns.length === 1
                          ? "flex flex-col gap-2"
                          : "flex items-center justify-between"
                      } ${isHighlighted ? "bg-elite-teal/30 ring-elite-teal ring-2" : "bg-canvas"}`}
                      id={townId}
                    >
                      <span className="text-primary text-sm">{town.name}</span>
                      <span
                        className={`text-muted text-xs ${county.towns.length === 1 ? "flex flex-wrap gap-x-2 gap-y-1" : ""}`}
                      >
                        {county.towns.length === 1
                          ? town.zips.map((zip) => (
                              <span key={zip} className="inline-block">
                                {zip}
                              </span>
                            ))
                          : town.zips.join(", ")}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const stateCards = [
  { id: "pennsylvania", data: pennsylvaniaData },
  { id: "new-jersey", data: newJerseyData }
  // TODO(delaware): restore `delaware` accordion + search entries when `Delaware` service launches
  // { id: "delaware", data: delawareData }
];

const allTowns: SearchResult[] = stateCards.flatMap(({ id, data }) =>
  data.counties.flatMap((county) =>
    county.towns.map((town) => ({
      stateId: id,
      stateName: data.state,
      county: county.name,
      town
    }))
  )
);

export default function ServiceAreasView({ config }: { config: SiteConfig }) {
  const location = useLocation();
  const initialHash = location.hash.replace("#", "");
  const searchRef = useRef<HTMLDivElement>(null);

  const [expandedStates, setExpandedStates] = useState<Set<string>>(
    initialHash ? new Set([initialHash]) : new Set()
  );

  const [highlightedTown, setHighlightedTown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.length < 2) {
      setSearchResults([]);
      setShowResults(false);

      return;
    }

    const lowerQuery = query.toLowerCase();

    const results = allTowns.filter(
      (item) =>
        item.town.name.toLowerCase().includes(lowerQuery) ||
        item.town.zips.some((zip) => zip.includes(query))
    );

    setSearchResults(results.slice(0, 10));
    setShowResults(true);
  };

  const handleResultClick = (result: SearchResult) => {
    const townId = getTownId(result.stateId, result.county, result.town.name);

    setExpandedStates(new Set([result.stateId]));
    setSearchQuery("");
    setShowResults(false);
    setHighlightedTown(townId);

    // wait for card to expand, then scroll to town name
    setTimeout(() => {
      const element = document.getElementById(townId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 150);

    setTimeout(() => {
      setHighlightedTown(null);
    }, 3000);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const hash = location.hash.replace("#", "");

    if (hash) {
      // delay scroll a bit to allow render
      setTimeout(() => {
        const element = document.getElementById(hash);

        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location.hash]);

  const toggleState = (stateId: string) => {
    setExpandedStates((prevStates) => {
      const nextState = new Set(prevStates);

      if (nextState.has(stateId)) {
        nextState.delete(stateId);
      } else {
        nextState.add(stateId);
      }

      return nextState;
    });
  };

  return (
    <article className="mx-auto max-w-6xl pb-24 md:pb-0">
      <header className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 lg:col-span-2">
          <p className="text-elite-teal mb-2 text-xs font-medium tracking-[0.2em]">SERVICE AREAS</p>
          <h1 className="text-primary font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
            Towns & Zip Codes We Serve
          </h1>
          <div className="bg-elite-teal/20 my-6 h-px w-24" />
          <p className="text-muted mt-4 text-base">
            {config.brandName} proudly serves Southeastern Pennsylvania and New Jersey. Find your
            town below to confirm we service your location.
          </p>
        </div>
        <div className="bg-elite-teal flex flex-col items-center justify-center rounded-2xl p-6 text-center">
          {/* TODO(delaware): bump back to 3 and add `delawareData.counties.length` when Delaware service launches */}
          <span className="text-4xl font-semibold text-white">2</span>
          <p className="mt-1 text-sm text-white/80">States Served</p>
          <span className="mt-2 text-2xl font-semibold text-white">
            {pennsylvaniaData.counties.length + newJerseyData.counties.length}
          </span>
          <p className="text-sm text-white/80">Counties</p>
        </div>
      </header>
      {/* Search Bar */}
      <div ref={searchRef} className="relative mb-4">
        <div className="bg-surface rounded-2xl p-4">
          <div className="relative">
            <Search className="text-muted absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
            <input
              className="bg-canvas text-primary placeholder:text-muted focus:ring-elite-teal/50 w-full rounded-xl py-3 pr-10 pl-12 text-sm outline-none focus:ring-2"
              placeholder="Search by town name or zip code..."
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {searchQuery && (
              <button
                className="text-muted hover:text-primary absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
                onClick={() => {
                  setSearchQuery("");
                  setShowResults(false);
                }}
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
        {/* Search Results Dropdown */}
        {showResults && searchResults.length > 0 && (
          <div className="bg-surface absolute top-full right-0 left-0 z-50 mt-2 max-h-80 overflow-y-auto rounded-2xl border border-white/10 shadow-xl">
            {searchResults.map((result, index) => (
              <button
                key={`${result.stateId}-${result.county}-${result.town.name}-${index}`}
                className="hover:bg-canvas flex w-full items-start gap-3 border-b border-white/5 p-4 text-left last:border-0"
                onClick={() => handleResultClick(result)}
              >
                <MapPin className="text-elite-teal mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <p className="text-primary text-sm font-medium">{result.town.name}</p>
                  <p className="text-muted text-xs">
                    {result.county} County, {result.stateName}
                  </p>
                  <p className="text-muted mt-1 text-xs">{result.town.zips.join(", ")}</p>
                </div>
              </button>
            ))}
          </div>
        )}
        {/* No Results */}
        {showResults && searchQuery.length >= 2 && searchResults.length === 0 && (
          <div className="bg-surface absolute top-full right-0 left-0 z-50 mt-2 rounded-2xl border border-white/10 p-6 text-center shadow-xl">
            <p className="text-muted text-sm">
              {`No towns or zip codes found matching "${searchQuery}"`}
            </p>
          </div>
        )}
      </div>
      <section className="space-y-4">
        {stateCards.map(({ id, data }) => (
          <StateCard
            key={id}
            data={data}
            highlightedTown={highlightedTown}
            id={id}
            isExpanded={expandedStates.has(id)}
            onToggle={() => toggleState(id)}
          />
        ))}
      </section>
      <div className="mt-4">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0d0d0d] p-6 md:flex-row md:p-8">
          <div>
            <p className="text-center text-lg font-medium text-white md:text-left md:text-xl">{`Don't see your town listed?`}</p>
            <p className="text-sm text-white/60">Contact us - we may still be able to help!</p>
          </div>
          <Link
            className="bg-elite-teal rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            to="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </article>
  );
}
