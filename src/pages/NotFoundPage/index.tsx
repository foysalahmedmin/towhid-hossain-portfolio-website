import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFoundPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-20">
      <div className="mx-auto max-w-xl text-center">
        <span className="mb-6 inline-block text-sm font-medium uppercase tracking-wider">
          404 Error
        </span>
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
          Page Not Found
        </h1>
        <p className="mb-8 text-base text-muted-foreground md:text-lg">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="button">
          <span>Return to Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
