"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SectionComponentProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import { Loader2, Play } from "lucide-react";
import { useState } from "react";

const Hero = ({ className, isActive }: SectionComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const youtubeVideoId = "UKpICjcmWZg";

  return (
    <section
      className={cn(
        "dark relative flex min-h-screen flex-col justify-end overflow-hidden bg-background text-foreground lg:justify-center",
        className,
      )}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          style={{ backgroundImage: "url('/images/hero-banner.png')" }}
          className={cn("absolute inset-0 bg-cover bg-[25%] bg-no-repeat", {
            "animate-scale-out": isActive,
          })}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-muted via-muted/50 to-transparent lg:bg-gradient-to-l" />
        </div>
      </div>

      <div className="container relative z-10 py-24 text-right">
        <div className="ml-auto max-w-2xl animate-fade-in space-y-12">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <button
                className={cn(
                  "inline-flex size-20 items-center justify-center rounded-full border-2 border-current",
                  {
                    "animate-scale-in": isActive,
                  },
                )}
              >
                <Play
                  className="size-10 transition-transform group-hover:scale-110"
                  strokeWidth={1}
                />
              </button>
            </DialogTrigger>

            <DialogContent className="max-w-[90vw] border-none bg-transparent p-0 sm:max-w-[80vw] lg:max-w-[70vw]">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
                {/* Loading spinner */}
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="h-12 w-12 animate-spin text-white" />
                  </div>
                )}

                {/* YouTube iframe */}
                <iframe
                  className={`h-full w-full ${isLoading ? "invisible" : "visible"}`}
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&controls=1&showinfo=0&autohide=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => setIsLoading(false)}
                />
              </div>
            </DialogContent>
          </Dialog>

          <div
            className={cn("space-y-4", {
              "animate-slide-up": isActive,
            })}
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold uppercase md:text-6xl">
                Towhid Hossain
              </h1>
              <p className="">
                Visionary Leader in BPO & IT/ITES Innovation, Sustainability,{" "}
                and Workforce Empowerment
              </p>
            </div>
            <div
              className="flex justify-end space-x-4"
              style={{ animationDelay: "0.3s" }}
            >
              <a href="/#about" className="button">
                <span>Learn More</span>
              </a>
              <a href="#contact" className="button button-outline">
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce md:block">
        <a
          href="#about"
          className="flex flex-col items-center text-sm text-foreground transition-colors"
        >
          <span className="mb-2">Scroll</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
