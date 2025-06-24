import mongoose from "mongoose";

const ModelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  uploader: { type: String, required: true },
  description: { type: String, required: true },
  stl: { type: String, required: true },
  images: [{ type: String, required: true }],
  keywords: [{ type: String, required: true }],
}, { timestamps: true });

// Export the model, not the schema!
export default mongoose.models.Model || mongoose.model("Model", ModelSchema);
