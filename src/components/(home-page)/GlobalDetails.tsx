import globalPresence from "@/assets/data/globalPresence";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import HeroSection from "../partials/Sections/HeroSection";

const sortByDate = (data = []) => {
  return data?.sort((a, b) => {
    const dateA = new Date(a?.date || "").getTime();
    const dateB = new Date(b?.date || "").getTime();

    return (dateB as number) - (dateA as number);
  });
};

const GlobalDetails = () => {
  const { id = "" } = useParams();
  const region = globalPresence.find((release) => release.id === id);
  const [orientations, setOrientations] = useState({});

  const handleImageLoad = (index, event) => {
    const { naturalWidth, naturalHeight } = event.target;
    setOrientations((prev) => ({
      ...prev,
      [index]: naturalWidth > naturalHeight ? "horizontal" : "vertical",
    }));
  };
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        isActive={true}
        image={
          region?.image ||
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
        }
        title={region?.region}
        description={region?.excerpt}
      />

      <div>
        {sortByDate(region?.events)?.map((event, index) => (
          <div key={index} className="container mx-auto space-y-6 px-6 py-20">
            <div>
              <h1 className="mb-6 text-4xl font-bold">{event?.title}</h1>
              <p className="opacity-90 md:text-xl">{event?.description}</p>
            </div>
            <div className="inline-flex flex-wrap justify-start gap-4">
              {event?.images?.map((image, i) => (
                <img
                  // className="w-full h-full object-contain object-center"
                  className="h-96 w-full object-cover lg:w-auto lg:max-w-[30rem]"
                  src={image}
                  alt={event?.title}
                  title={orientations?.["" + index + i]}
                  onLoad={(e) => handleImageLoad("" + index + i, e)}
                />
              ))}
            </div>
            {event?.link && (
              <div>
                <a
                  href={event?.link}
                  target="_blank"
                  className="flex items-center text-xl text-primary"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalDetails;
