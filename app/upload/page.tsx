"use client";

import { useState } from "react";
import { useAppContext } from "@/context/AppContext";

export default function UploadModelPage() {
  const { user } = useAppContext();
  const [form, setForm] = useState({
    name: "",
    description: "",
    stl: null as File | null,
    images: [] as File[],
    keywords: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("description", form.description);
      if (form.stl) formData.append("stl", form.stl);
      form.images.forEach((img) => formData.append("images", img));
      formData.append("keywords", form.keywords);

      const res = await fetch("/api/models/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error((await res.json()).error || "Upload failed");
      setSuccess(true);
      setForm({
        name: "",
        description: "",
        stl: null,
        images: [],
        keywords: "",
      });
    } catch (err: any) {
      setError(err.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-amber-600 mb-8 text-center">
        Upload 3D Model
      </h1>
      <form
        className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 border border-gray-100"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
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
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
        {success && <div className="text-green-600 font-semibold">Upload successful!</div>}
        {error && <div className="text-red-600 font-semibold">{error}</div>}
      </form>
    </main>
  );
}
