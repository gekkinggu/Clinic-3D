import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Model from "@/models/Model";
import { currentUser } from "@clerk/nextjs/server";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const formData = await req.formData();
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const stlFile = formData.get("stl") as File;
    const images = formData.getAll("images") as File[];
    const keywords = (formData.get("keywords") as string)
      .split(",")
      .map((kw) => kw.trim())
      .filter(Boolean);

    // Upload STL file to Cloudinary (as raw)
    const stlBuffer = Buffer.from(await stlFile.arrayBuffer());
    const stlUploadResult = await new Promise<any>((resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        {
          resource_type: "raw",
          folder: "models/stl",
          public_id: `${Date.now()}-${name.replace(/\s+/g, "-")}`,
          format: "stl", // <--- ensure Cloudinary saves as .stl
          use_filename: true,
          unique_filename: false,
          filename_override: stlFile.name, // <--- preserve original filename if you want
        },
        (err, result) => (err ? reject(err) : resolve(result))
      );
      uploadStream.end(stlBuffer);
    });
    const stlUrl = stlUploadResult.secure_url;

    // Upload images to Cloudinary
    const imageUrls: string[] = [];
    for (const img of images) {
      const imgBuffer = Buffer.from(await img.arrayBuffer());
      const uploadRes = await new Promise<any>((resolve, reject) => {
        const upload = cloudinary.v2.uploader.upload_stream(
          { folder: "models/images" },
          (err, result) => (err ? reject(err) : resolve(result))
        );
        upload.end(imgBuffer);
      });
      imageUrls.push(uploadRes.secure_url);
    }

    await connectToDatabase();

    const newModel = await Model.create({
      name,
      uploader: user.fullName || user.username || user.emailAddresses[0]?.emailAddress,
      description,
      stl: stlUrl,
      images: imageUrls,
      keywords,
    });

    return NextResponse.json({ success: true, model: newModel });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}