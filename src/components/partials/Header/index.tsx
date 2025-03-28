import useHash from "@/hooks/utils/useHash";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ className }: { className?: string }) => {
  const { hash } = useHash();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const navLinks = [
    { href: "/#home", name: "Home" },
    { href: "/#about", name: "About" },
    {
      href: "/#commercial-success",
      name: "Commercial Success",
    },
    {
      href: "/#leading-role",
      name: "Leading Role",
    },
    {
      href: "/#awards",
      name: "Awards",
    },
    {
      href: "/#global-engagement",
      name: "Global Engagement",
    },
    {
      href: "/#news",
      name: "News",
    },
    { href: "/#contact", name: "Contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky left-0 right-0 top-0 z-50 h-16 bg-background/90 text-foreground shadow-sm backdrop-blur-md transition-all duration-300 ease-in-out",
          className,
        )}
      >
        <div className="flex h-full items-center justify-between px-8">
          <Link
            to="/"
            className="font-display text-xl font-medium tracking-tight transition-opacity duration-300 hover:opacity-80"
            aria-label="Home"
          >
            Towhid<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="container hidden flex-1 items-center gap-4 px-0 lg:flex lg:px-16">
            {navLinks?.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "nav-link whitespace-nowrap",
                  hash === link?.href?.replace("/#", "") && "active",
                )}
              >
                {link?.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="/banner/eid-al-fitr"
              className="button button-outline h-8 whitespace-nowrap px-4"
            >
              Eid Mubarak
            </a>

            {/* Mobile Menu Button */}
            <button
              className="flex flex-col space-y-1.5 focus:outline-none lg:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  "h-0.5 w-6 bg-foreground transition-all duration-300 ease-in-out",
                  isMobileMenuOpen && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-6 bg-foreground transition-all duration-300 ease-in-out",
                  isMobileMenuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-6 bg-foreground transition-all duration-300 ease-in-out",
                  isMobileMenuOpen && "-translate-y-2 -rotate-45",
                )}
              />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center bg-card transition-all duration-500",
          isMobileMenuOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-50",
        )}
      >
        <nav className="flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "nav-link whitespace-nowrap",
                hash === link?.href?.replace("/#", "") && "active",
              )}
              onClick={closeMobileMenu}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
