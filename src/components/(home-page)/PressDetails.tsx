import pressReleases from "@/assets/data/pressReleases";
import { useParams } from "react-router-dom";

const PressDetails = () => {
  const { id = 0 } = useParams();
  const press = pressReleases.find((release) => release.id === +id);
  return (
    <div>
      <div className="mb-12 flex min-h-[60vh] items-center bg-gradient-to-r from-primary to-primary/75 py-24">
        <div className="container mx-auto px-6 text-white">
          <h3 className="mb-6 text-2xl font-bold">
            {new Date(press?.date || "")?.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h3>
          <h1 className="mb-6 text-4xl font-bold">{press?.title}</h1>
          <p className="max-w-2xl text-xl opacity-90">{press?.excerpt}</p>
        </div>
      </div>
      <div className="container mx-auto space-y-6 px-6 py-20">
        <div>
          <h1 className="mb-6 text-4xl font-bold">Description</h1>
          <p className="opacity-90 md:text-xl">{press?.description}</p>
        </div>
        <div className="space-y-6">
          {press?.images?.map((image, index) => (
            <div key={index}>
              <img className="max-w-full" src={image} alt={press?.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PressDetails;
