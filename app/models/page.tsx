import Image from "next/image";
import Link from "next/link";
import { models } from "./modelsData";

export default function ModelsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-amber-600 mb-8 text-center">
        3D Models Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {models.map((model) => (
          <Link
            key={model.id}
            href={`/models/${model.id}`}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col items-center border border-gray-100 group"
          >
            <div className="w-full h-48 relative">
              <Image
                src={model.images[0]}
                alt={model.name}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-200 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4 w-full text-center">
              <h2 className="text-lg font-semibold text-gray-800">{model.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}