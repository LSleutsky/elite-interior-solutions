import { Command, Search, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

import { CommandPalettePage } from "@elite/ui/types";

export default function CommandPalette({ pages }: { pages: CommandPalettePage[] }) {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredPages = pages.filter((page) => {
    const searchTerm = query.toLowerCase();

    return (
      page.name.toLowerCase().includes(searchTerm) ||
      page.keywords.some((keyword) => keyword.includes(searchTerm))
    );
  });

  const handleSelect = useCallback(
    (href: string) => {
      setOpen(false);
      setQuery("");
      navigate(href);
    },
    [navigate]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();

        setOpen((prev) => !prev);
      }

      if (event.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Desktop floating button */}
      <button
        aria-label="Open navigation (⌘K)"
        className="bg-surface/90 border-primary/10 text-muted hover:text-primary hover:bg-surface fixed right-8 bottom-8 z-50 hidden cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 shadow-lg backdrop-blur-sm transition-all hover:scale-105 md:flex"
        onClick={() => setOpen(true)}
      >
        <Command size={18} />
        <span className="text-sm font-medium">Jump to</span>
      </button>
      {/* Mobile floating button */}
      <button
        aria-label="Open navigation"
        className="bg-elite-teal fixed right-4 bottom-24 z-60 flex cursor-pointer! rounded-full p-3.5 shadow-xl shadow-black/30 transition-all active:scale-95 md:hidden"
        onClick={() => setOpen(true)}
      >
        <Search className="text-white" size={22} />
      </button>
      {open && (
        <div
          className="fixed inset-0 z-100 bg-black/50 backdrop-blur-sm"
          onClick={() => {
            setOpen(false);
            setQuery("");
          }}
        />
      )}
      <div
        className={`fixed top-1/2 left-1/2 z-101 hidden w-full max-w-md -translate-x-1/2 -translate-y-1/2 transition-all duration-200 md:block ${
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="bg-surface mx-4 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <Search className="text-muted shrink-0" size={20} />
            <input
              ref={inputRef}
              className="text-primary placeholder:text-muted hidden flex-1 bg-transparent text-base outline-none md:block"
              placeholder="Where would you like to go?"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && filteredPages.length > 0) {
                  handleSelect(filteredPages[0].href);
                }
              }}
            />
            <button
              className="text-muted hover:text-primary transition-colors"
              onClick={() => {
                setOpen(false);
                setQuery("");
              }}
            >
              <X size={20} />
            </button>
          </div>
          <div className="max-h-80 overflow-y-auto p-2">
            {filteredPages.length > 0 ? (
              filteredPages.map((page) => (
                <button
                  key={page.href}
                  className="hover:bg-primary/5 text-primary flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors"
                  onClick={() => handleSelect(page.href)}
                >
                  <div className="bg-elite-teal/20 rounded-lg p-2">
                    <page.icon className="text-elite-teal" size={18} />
                  </div>
                  <span className="font-medium">{page.name}</span>
                </button>
              ))
            ) : (
              <div className="text-muted px-3 py-6 text-center text-sm">No pages found</div>
            )}
          </div>
          <div className="text-muted flex items-center justify-between border-t border-white/10 px-4 py-2 text-xs">
            <span>Type to search</span>
            <div className="flex items-center gap-1">
              <kbd className="rounded bg-white/10 px-1.5 py-0.5">↵</kbd>
              <span>to select</span>
              <kbd className="ml-2 rounded bg-white/10 px-1.5 py-0.5">esc</kbd>
              <span>to close</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed right-0 bottom-0 left-0 z-101 transition-all duration-300 md:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
        }`}
      >
        <div className="bg-surface rounded-t-3xl border-t border-white/10 pb-8 shadow-2xl">
          <div className="flex justify-center py-3">
            <div className="h-1 w-10 rounded-full bg-white/20" />
          </div>
          <div className="flex items-center justify-between px-5 pb-2">
            <h3 className="text-primary font-medium">Jump to page</h3>
            <button
              className="text-muted hover:text-primary rounded-full p-1 transition-colors"
              onClick={() => {
                setOpen(false);
                setQuery("");
              }}
            >
              <X size={20} />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 px-4 py-2">
            {pages.map((page) => (
              <button
                key={page.href}
                className="bg-primary/5 hover:bg-primary/10 flex cursor-pointer flex-col items-center gap-2 rounded-2xl p-4 transition-colors active:scale-95"
                onClick={() => handleSelect(page.href)}
              >
                <div className="bg-elite-teal/20 rounded-xl p-3">
                  <page.icon className="text-elite-teal" size={22} />
                </div>
                <span className="text-primary text-xs font-medium">{page.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
