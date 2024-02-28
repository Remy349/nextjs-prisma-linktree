import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Getting link by ID" });
}

export async function PUT() {
  return NextResponse.json({ message: "Updating link by ID" });
}

export async function DELETE() {
  return NextResponse.json({ message: "Deleting link by ID" });
}
