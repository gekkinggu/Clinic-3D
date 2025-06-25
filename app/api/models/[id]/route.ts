import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Model from "@/models/Model";

export async function GET(req: Request, context: { params: { id: string } } | Promise<{ params: { id: string } }>) {
  await connectToDatabase();
  const ctx = await context as { params: { id: string } };
  const { id } = ctx.params;

  try {
    const model = await Model.findById(id).lean();
    if (!model) {
      return NextResponse.json({ error: "Model not found" }, { status: 404 });
    }
    return NextResponse.json(model);
  } catch (err) {
    return NextResponse.json({ error: "Invalid ID or server error" }, { status: 400 });
  }
}
