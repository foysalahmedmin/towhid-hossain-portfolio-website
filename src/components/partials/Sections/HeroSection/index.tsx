import { SectionComponentProps } from "@/interfaces";
import { cn } from "@/lib/utils";

const HeroSection = ({
  className,
  isActive,
  image,
  title,
  description,
  ...props
}: SectionComponentProps & {
  image?: string;
  title?: string;
  description?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[60vh] items-center overflow-hidden",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          style={{ backgroundImage: `url(${image})` }}
          // ref={setRef(0)}
          className={cn(
            "absolute inset-0 bg-cover bg-left bg-no-repeat delay-300",
            {
              "animate-scale-out": isActive,
            },
          )}
        >
          <div className="absolute inset-0 bg-black/10">
            <div className="size-full bg-gradient-to-r from-primary to-primary/50" />
          </div>
        </div>
      </div>
      <div className="container relative mx-auto flex h-full items-center px-6">
        <div className="max-w-4xl text-white">
          <h1 className="mb-6 text-4xl font-bold">{title}</h1>
          <p className="max-w-2xl text-xl opacity-90">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
