import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const links = await prisma.link.findMany();

  return NextResponse.json(links);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log(data);

  return NextResponse.json(data, { status: 201 });
}
