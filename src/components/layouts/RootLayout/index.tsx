import Header from "@/components/partials/Header";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const RootLayout = () => {
  const location = useLocation();
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Set page as loaded after a short delay
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);
  }, []);

  useEffect(() => {
    // Handle page transitions
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen snap-y snap-mandatory flex-col">
      <Header />
      <main
        className={`flex-grow ${
          isPageLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      >
        <div
          className={`page-transition-wrapper ${
            isTransitioning ? "page-exit-active" : "page-enter-active"
          }`}
        >
          <Outlet />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
