import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Model from "@/models/Model";

export async function GET() {
  await connectToDatabase();
  const models = await Model.find().lean();
  return NextResponse.json(models);
}