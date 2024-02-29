import { prisma } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

interface IParams {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: IParams) {
  const { id } = params;

  const link = await prisma.link.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!link) {
    return NextResponse.json({ message: "Link not found." }, { status: 404 });
  }

  return NextResponse.json(link);
}

export async function PUT(request: NextRequest, { params }: IParams) {
  const { id } = params;

  const { name, link } = await request.json();

  try {
    const updateLink = await prisma.link.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        link,
      },
    });

    return NextResponse.json(updateLink);
  } catch (error) {
    if (error) {
      return NextResponse.json({ message: "Link not found." }, { status: 404 });
    }
  }
}

export async function DELETE(request: NextRequest, { params }: IParams) {
  const { id } = params;

  try {
    await prisma.link.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({ message: "Link successfully deleted." });
  } catch (error) {
    if (error) {
      return NextResponse.json({ message: "Link not found." }, { status: 404 });
    }
  }
}
