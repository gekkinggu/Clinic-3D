import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Model from "@/models/Model";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();

  try {
    const model = await Model.findById(params.id).lean();
    if (!model) {
      return NextResponse.json({ error: "Model not found" }, { status: 404 });
    }
    return NextResponse.json(model);
  } catch (error) {
    return NextResponse.json({ error: "Invalid ID or server error" }, { status: 400 });
  }
}
