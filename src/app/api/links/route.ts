import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Getting links." });
}

export async function POST() {
  return NextResponse.json({ message: "Creating link." });
}
