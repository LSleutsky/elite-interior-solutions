import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router";

import { SiteConfig } from "@elite/ui/types";

import CommandPalette from "@elite/ui/components/CommandPalette";
import Logo from "@elite/ui/components/Logo";
import ThemeToggle from "@elite/ui/components/ThemeToggle";

export default function Layout({ config }: { config: SiteConfig }) {
  const headerRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="bg-canvas relative flex min-h-screen flex-col overflow-hidden">
      <CommandPalette pages={config.commandPalettePages} />
      <header
        ref={headerRef}
        className="sticky top-0 z-50 flex flex-col items-center px-4 pt-4 md:pt-6"
      >
        <nav
          className={`border-primary/10 bg-surface/80 flex w-full max-w-3xl items-center justify-between border px-4 py-2 backdrop-blur-xl md:rounded-full md:px-6 md:py-3 ${mobileMenuOpen ? "rounded-t-2xl" : "rounded-full"}`}
        >
          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            className="text-muted hover:text-primary p-1 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
          <Logo className="h-9 w-9 md:h-10 md:w-10" label={config.brandName} />
          <div className="text-muted hidden items-center gap-6 md:flex">
            {config.navLinks.map((link) => (
              <Link key={link.name} className="hover:text-primary transition-colors" to={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              className="bg-elite-teal rounded-full px-4 py-1.5 text-sm text-white transition-opacity hover:opacity-90"
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </nav>
        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="border-primary/10 bg-surface/95 w-full max-w-3xl rounded-b-2xl border-x border-b p-4 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1">
              {config.navLinks.map((link) => (
                <Link
                  key={link.name}
                  className="text-primary hover:bg-primary/5 rounded-xl px-4 py-3 text-sm font-medium transition-colors"
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="bg-primary/10 my-2 h-px" />
              <Link
                className="bg-elite-teal rounded-xl px-4 py-3 text-center text-sm font-medium text-white"
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>
      <main className="relative z-10 flex-1 px-4 py-6 md:px-8 md:py-10 md:pb-24">
        <Outlet />
      </main>
      <footer className="relative z-40 mb-20 px-4 pb-4 md:mb-0 md:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl bg-[#0d0d0d] p-4 dark:bg-[#0a0a0a]">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-2 text-center md:justify-between md:text-left">
            <span className="text-elite-teal text-xs font-medium md:text-sm">{config.phone}</span>
            {config.trustItems.map((item, index) => (
              <span key={index} className="text-xs text-[#888] md:text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </footer>
      {/* Mobile CTA */}
      <div className="bg-canvas/95 fixed right-0 bottom-0 left-0 z-50 border-t border-white/10 p-4 backdrop-blur-lg md:hidden">
        <Link
          className="bg-elite-olive flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-medium text-white"
          to={`tel:${config.phoneHref}`}
        >
          <span>📞</span>
          <span>Call Now</span>
        </Link>
      </div>
    </div>
  );
}
