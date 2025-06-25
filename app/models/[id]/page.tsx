"use client";

import { useParams } from "next/navigation";
import { useMemo, Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { models as hardcodedModels } from "../modelsData";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
// @ts-ignore
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

// Dynamically import react-stl-viewer (client-side only)
const StlViewer = dynamic(() =>
  import("react-stl-viewer").then((mod) => ({ default: mod.StlViewer })),
  { ssr: false }
);

// Add Model type for better type safety
interface Model {
  id?: string;
  _id?: string;
  name: string;
  uploader: string;
  description: string;
  stl: string;
  images: string[];
  keywords: string[];
}

// STL Model component for three.js
function STLModel({ url }: { url: string }) {
  const geometry = useLoader(STLLoader, url);
  return (
    <mesh geometry={geometry} scale={0.5}>
      <meshStandardMaterial color="#F59E42" />
    </mesh>
  );
}

export default function ModelDetailPage() {
  const params = useParams();
  const { id } = params as { id: string };
  const [dbModel, setDbModel] = useState<Model | null>(null);
  const [loading, setLoading] = useState(false);

  // Try to find in hardcoded models
  const hardcoded = useMemo(() => hardcodedModels.find((m) => m.id === id), [id]);

  useEffect(() => {
    if (!hardcoded) {
      setLoading(true);
      fetch(`/api/models/${id}`)
        .then((res) => res.ok ? res.json() : null)
        .then((data) => {
          if (data) {
            setDbModel({
              id: data._id,
              name: data.name,
              uploader: data.uploader,
              description: data.description,
              stl: data.stl,
              images: data.images,
              keywords: data.keywords,
            });
          } else {
            setDbModel(null);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [id, hardcoded]);

  const model = hardcoded || dbModel;

  if (loading) {
    return <div className="max-w-3xl mx-auto py-20 text-center">Loading...</div>;
  }

  if (!model) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Model Not Found</h1>
        <Link href="/models" className="text-amber-600 hover:underline">
          Back to Models
        </Link>
      </div>
    );
  }

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
        {/* Left: 3D Preview and Info */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full h-[400px] bg-gray-100 rounded-xl shadow-md flex items-center justify-center mb-6">
            <Suspense fallback={<div>Loading 3D Model...</div>}>
              <Canvas camera={{ position: [0, 0, 100] }} style={{ borderRadius: "0.75rem", background: "#f3f4f6" }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
                <STLModel url={model.stl} />
                <OrbitControls />
              </Canvas>
            </Suspense>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">{model.name}</h1>
          <div className="text-sm text-gray-500 mb-4">Uploaded by <span className="font-medium">{model.uploader}</span></div>
          <div className="mb-6 text-gray-700 text-base text-center">{model.description}</div>
          <div className="flex flex-wrap gap-2 mb-6">
            {model.keywords.map((kw: string) => (
              <span
                key={kw}
                className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                #{kw}
              </span>
            ))}
          </div>
          <a
            href={model.stl}
            download
            className="inline-block bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-amber-700 transition"
          >
            Download STL
          </a>
        </div>

        {/* Right: Images */}
        <aside className="w-full md:w-80 flex-shrink-0">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {model.images.map((img: string, idx: number) => (
              <div
                key={img}
                className="relative w-full aspect-square rounded-lg overflow-hidden border border-gray-200 shadow"
              >
                <Image
                  src={img}
                  alt={`${model.name} image ${idx + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
            ))}
          </div>
        </aside>
      </main>
      <div className="w-full flex justify-center mt-8">
        <Link href="/models" className="text-amber-600 hover:underline font-medium text-lg">← Back to Models</Link>
      </div>
    </>
  );
}