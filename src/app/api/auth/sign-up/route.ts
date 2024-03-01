import { prisma } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const { username, emailAddress, password } = await request.json();

  const user = await prisma.user.findFirst({
    where: { emailAddress },
  });

  if (user) {
    return NextResponse.json(
      { message: "User already created." },
      { status: 409 },
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      username,
      emailAddress,
      password: hashedPassword,
    },
  });

  return NextResponse.json(
    { message: "User successfully created." },
    { status: 201 },
  );
}
