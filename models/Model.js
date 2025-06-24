import mongoose from "mongoose";

const ModelSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  uploader: { type: String, required: true },
  description: { type: String, required: true },
  stl: { type: String, required: true },
  images: [{ type: String, required: true }],
  keywords: [{ type: String, required: true }],
}, { timestamps: true });

export default ModelSchema;
