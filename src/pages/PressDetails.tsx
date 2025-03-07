import { useParams } from "react-router-dom";
import pressReleases from "../assets/data/pressReleases";

export default function PressDetails() {
  const { id = 0 } = useParams();
  const press = pressReleases.find((release) => release.id === +id);
  return (
    <div>
      <div className="bg-gradient-to-r min-h-[60vh] flex items-center from-blue-600 to-blue-800 py-24 mb-12">
        <div className="container mx-auto px-6 text-white">
          <h3 className="text-2xl font-bold mb-6">
            {new Date(press?.date || "")?.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h3>
          <h1 className="text-4xl font-bold mb-6">{press?.title}</h1>
          <p className="text-xl opacity-90 max-w-2xl">{press?.excerpt}</p>
        </div>
      </div>
      <div className="container mx-auto px-6 py-20 space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-6">Description</h1>
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
}
