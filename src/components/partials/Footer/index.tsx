import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 snap-start border-t border-gray-100 py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <Link
              to="/"
              className="font-display text-lg font-medium tracking-tight transition-opacity duration-300 hover:opacity-80"
              aria-label="Home"
            >
              Towhid<span className="text-black/60">.</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:gap-12 md:text-left">
            <div>
              <h4 className="mb-4 text-sm font-medium uppercase tracking-wider">
                Social
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-black"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-black"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-black"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-medium uppercase tracking-wider">
                Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#work"
                    className="text-sm text-muted-foreground transition-colors hover:text-black"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-sm text-muted-foreground transition-colors hover:text-black"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm text-muted-foreground transition-colors hover:text-black"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-medium uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:hello@picklu.design"
                    className="text-sm text-muted-foreground transition-colors hover:text-black"
                  >
                    hello@picklu.design
                  </a>
                </li>
                <li className="text-sm text-muted-foreground">New York, NY</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-8 text-center text-sm text-muted-foreground md:text-left">
          <p>© {currentYear} Picklu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
