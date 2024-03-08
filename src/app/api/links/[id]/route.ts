import { prisma } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

interface IParams {
  params: { id: string };
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
