import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const links = await prisma.link.findMany();

  return NextResponse.json(links);
}

export async function POST(request: NextRequest) {
  const { name, link } = await request.json();

  try {
    const newLink = await prisma.link.create({
      data: {
        name,
        link,
      },
    });

    return NextResponse.json(newLink, { status: 201 });
  } catch (error) {
    if (error) {
      return NextResponse.json(
        { message: "Link already created." },
        { status: 409 },
      );
    }
  }
}
