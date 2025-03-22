import useScroll from "@/hooks/ui/useScroll";
import useHash from "@/hooks/utils/useHash";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { isScrolled } = useScroll();
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
    { name: "Home", href: "#home" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 py-4 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-lg font-medium tracking-tight transition-opacity duration-300 hover:opacity-80"
          aria-label="Home"
        >
          Towhid<span className="text-black/60">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "nav-link",
                hash === link?.href?.replace("#", "") && "active",
              )}
            >
              {link?.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex flex-col space-y-1.5 focus:outline-none md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "h-0.5 w-6 bg-black transition-all duration-300 ease-in-out",
              isMobileMenuOpen && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 bg-black transition-all duration-300 ease-in-out",
              isMobileMenuOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 bg-black transition-all duration-300 ease-in-out",
              isMobileMenuOpen && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center bg-white transition-transform duration-500 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-display text-2xl font-medium"
              onClick={closeMobileMenu}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
