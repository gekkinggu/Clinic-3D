"use client";

import { useState } from "react";

export default function UploadModelPage() {
  const [form, setForm] = useState({
    id: "",
    name: "",
    uploader: "",
    description: "",
    stl: null as File | null,
    images: [] as File[],
    keywords: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as any;
    if (name === "stl") {
      setForm((prev) => ({ ...prev, stl: files[0] }));
    } else if (name === "images") {
      setForm((prev) => ({ ...prev, images: Array.from(files) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-amber-600 mb-8 text-center">
        Upload 3D Model
      </h1>
      <form className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 border border-gray-100">
        <div>
          <label className="block font-semibold mb-1" htmlFor="id">
            Model ID <span className="text-red-500">*</span>
          </label>
          <input
            id="id"
            name="id"
            type="text"
            required
            value={form.id}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-amber-400 focus:border-amber-400"
            placeholder="Unique model ID"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="name">
            Model Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-amber-400 focus:border-amber-400"
            placeholder="e.g. Prosthetic Arm"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="uploader">
            Uploader Name <span className="text-red-500">*</span>
          </label>
          <input
            id="uploader"
            name="uploader"
            type="text"
            required
            value={form.uploader}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-amber-400 focus:border-amber-400"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="description">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            required
            value={form.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-amber-400 focus:border-amber-400"
            placeholder="Describe your model and its use"
            rows={4}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="stl">
            STL File <span className="text-red-500">*</span>
          </label>
          <input
            id="stl"
            name="stl"
            type="file"
            accept=".stl"
            required
            onChange={handleChange}
            className="w-full"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="images">
            Images <span className="text-red-500">*</span>
          </label>
          <input
            id="images"
            name="images"
            type="file"
            accept="image/*"
            multiple
            required
            onChange={handleChange}
            className="w-full"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="keywords">
            Keywords <span className="text-red-500">*</span>
          </label>
          <input
            id="keywords"
            name="keywords"
            type="text"
            required
            value={form.keywords}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-amber-400 focus:border-amber-400"
            placeholder="Comma separated, e.g. prosthetic, arm, assistive"
          />
        </div>
        <button
          type="submit"
          className="bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-amber-700 transition"
          disabled
        >
          Upload (Coming Soon)
        </button>
      </form>
    </main>
  );
}
