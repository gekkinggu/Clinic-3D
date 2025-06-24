"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { models } from "./modelsData";
import { useSearchParams } from "next/navigation";

export default function ModelsPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [search, setSearch] = useState(initialQuery);

  // Keep search bar in sync with query param if user navigates back/forward
  useEffect(() => {
    setSearch(initialQuery);
  }, [initialQuery]);

  // Filter models by name or keywords
  const filteredModels = models.filter((model) => {
    const searchLower = search.toLowerCase();
    return (
      model.name.toLowerCase().includes(searchLower) ||
      model.keywords.some((kw) => kw.toLowerCase().includes(searchLower))
    );
  });

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-amber-600 mb-8 text-center">
        3D Models Gallery
      </h1>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search by name or keyword..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredModels.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">
            No models found.
          </div>
        ) : (
          filteredModels.map((model) => (
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
                <div className="flex flex-wrap justify-center gap-1 mt-2">
                  {model.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-xs font-medium"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}